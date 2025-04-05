import User from "../models/user.js";
import Admin from "../models/admin.js";
import { information } from "../middleware/details.js";
import { validateMatriculeFormat } from "../middleware/matricule_validate.js";
import bcrypt  from 'bcrypt';
import jwt from 'jsonwebtoken';
export const sign_up_A = async (req, res) => {
    const { nom, prenom, email, password } = req.body;
    try {
        const hashPassword = await bcrypt.hash(password, 10);

        const findUser = await Admin.findOne({
            where: {
                email: email
            }
        });

        if (findUser) {
            return res.status(404).json({
                success: false,
                message: "❌Cette utilisateur existe déjà. Veuillez vous connecter à votre compte.",
                url: "http://localhost:10000/login/admin"
            });
        }

        const admin = await Admin.create({
            nom: nom,
            prenom: prenom,
            email: email,
            password: hashPassword,
        });

        const token = jwt.sign(
            { id: admin.id, email: admin.email },
            process.env.JWT_SECRET || 'default_secret',
            { expiresIn: '7h' }
        );

        return res.status(200).json({
            success: true,
            message: `✅ Register successful !!`,
            token: token
        });

    } catch (err) {
        console.error("au niveau de signup admin", err);
        res.status(500).json({
            success: false,
            message: 'Erreur interne du serveur',
            error: process.env.NODE_ENV === 'production' ? undefined : err.message
        });
    }
};

export const sign_up_U = async (req,res)=>{
    const {matricule ,nom, prenom, email ,numero,filiere} = req.body;

    try {
        matricule.toUpperCase();
       const teste = validateMatriculeFormat(matricule);
       if(teste.isValid === true){
        const findUser = await User.findOne({where:{matricule:matricule}});
        if(findUser){
            return res.status(400).json({
                success: false,
                message:`❌ ce matricule existe déja connecté vous.`,
                url: "Veuillez vous connecte ici http://localhost:10000/login"
            });
        }
        const user = information(matricule)

        const student = await User.create({
            matricule:matricule,
            nom,
            prenom,
            numero,
            email,
            filiere: filiere,
            niveau: user.niveau
        });

        return res.status(200).json({
            success:true,
            message:`✅ register successful!!`,
        });
        
       }else{
        console.log();
        return res.status(404).json({
            success:false,
            message:"❌ mauvais format du matricule",
        });
       }
    } catch (err) {
        console.error("au niveau de sign_up_U user",err);
        res.status(500).json({
            success: false,
            message: 'Erreur interne du serveur',
            error: process.env.NODE_ENV === 'production' ? undefined : err.message
          });
    }
}
