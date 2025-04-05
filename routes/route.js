import express from 'express';
import '../models/sync.js';
import {login_U} from '../controllers/login.js';
import { sign_up_U } from '../controllers/signup.js';

const route = express.Router();

route.get('/',(req,res)=>{
    res.render('./layouts/index');
});

route.get('/login',(req,res)=>{
    res.render('./form/login');
});

route.get('/sign_up',(req,res)=>{
    res.render('./form/sign_up');
});

route.get('/admin_seance',(req,res)=>{
    res.render('./admin/seance')
})
route.get('/super_admin',(req,res)=>{
    res.render('./admin/super_user')
})
route.get('/messages',(req,res)=>{
    res.render('./message')
})
route.get('/profil',(req,res)=>{
    res.render('./pages/profil')
})

route.post('/login/:matricule',login_U);
route.post('/sign_up',sign_up_U);

export default route;