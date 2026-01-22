const express= require ('express');
const Chat = require ('../models/chat');

const router =express.Router();

router.get('/:chatId/context',async (req,res)=>{
    try{
        const {chatId} = req.params;
    }
})



