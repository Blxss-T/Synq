const express= require ('express');
const bcrypt=require ('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const user = require('../models/user');

 const router=express.Router();

 router.post('/register',async (req, res)=>{
    try {
        const {email,password}= req.body;
        const existingUser=await User.findOne({email});
        if (existingUser){
            return res.status(400).json({message:'User already exists.'});
        }
        const hashedPassword= await bcrypt.hash(password,10);
        const user= new User ({
            email,
            password:hashedPassword
        });
        await user.save();
        res.status(201).json({message:'User registered Successfully'});
    }
    catch(error){
        res.status(500).json({message:'Server error'});
    }

 });
 router.post('/login', async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user =await user.findOne({email})
        if(!user){
            return res.status(400).json({message:'Invalid Credentials '})
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:'Invalid request'})
        }

    }
 })

 module.exports= router;
