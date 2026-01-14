const express= require ('express');
const bcrypt=require ('bcrypt');
const User = require('../models/user');

 const router=express.Router();

 router.post('/register',async (req, res)=>{
    try {
        const {email,password}= req.body;
    }
 })
