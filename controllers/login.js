import Admin from "../models/admin.js";
import {validateMatriculeFormat} from '../middleware/matricule_validate.js';
import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import "dotenv/config";
export const login_A = async (req, res) => {
    const { email, password } = req.body;
    try {
        const findUser = await Admin.findOne({
            where: [
                { email: email }
            ]
        });

        if (!findUser) {
            return res.status(404).json({
                success: false,
                message: "❌ Ce compte n'existe pas.",
                url: 'Veuillez créer un compte ici http://localhost:10000/signup/admin.'
            });
        }

        const isPasswordValid = await bcrypt.compare(password, findUser.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "❌ Mot de passe incorrect."
            });
        }

        const token = jwt.sign(
            { id: findUser.id, email: findUser.email },
            process.env.JWT_SECRET || 'default_secret_key',
            { expiresIn: '1h' }
        );

        res.cookie('admin', findUser.nom, {
            httpOnly: false,
            // secure: process.env.NODE_ENV === 'production',
            maxAge: 360000000 // 1 hour
        });

        return res.status(200).json({
            success: true,
            message: `✅ Bienvenue ${findUser.nom}`,
            adminToken: token
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Erreur interne du serveur',
            error: process.env.NODE_ENV === 'production' ? undefined : err.message
        });
    }
};

export const login_U = async (req, res) => {
    const { matricule } = req.params;
    try {
        matricule.toUpperCase();
        let matricule_correcte;
        const valide = validateMatriculeFormat(matricule);
        if (valide.isValid === true) {
            matricule_correcte = matricule;
        } else {
            return res.status(404).json({
                success: false,
                message: "❌ mauvais format du matricule",
            });
        }

        const findUser = await User.findOne({
            where: [
                { matricule: matricule_correcte }
            ]
        });

        if (!findUser) {
            return res.status(404).json({
                success: false,
                message: "❌ Ce compte n'existe pas. ",
                url: 'Veuillez créer un compte ici http://localhost:3000/sign_up.'
            });
        }

        // Create a cookie with the matricule
        res.cookie('etudiant', matricule_correcte, {
            httpOnly: false,
            // secure: process.env.NODE_ENV === 'production',
            maxAge: 36000000000 // 1 hour
        });

        return res.status(200).json({
            success: true,
            message: `✅ successful!!!`,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Erreur interne du serveur',
            error: process.env.NODE_ENV === 'production' ? undefined : err.message
        });
    }
};