const express= require ('express');
const bcrypt=require ('bcrypt');
const User = require('../models/user');

 const router=express.Router();

 router.post('/register',async (req, res)=>{
    try {
        const {email,password}= req.body;
        const existingUser=await User.findOne({email});
        if (existingUser){
            return res.status(400).json({message:'User already exists.'});
        }
        const hashedPassword= await bcrypt.hash({password,10})
    }
    
 })
