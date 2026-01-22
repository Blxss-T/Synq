const express= require ('express');
const Chat = require ('../models/chat');

const router =express.Router();

router.get('/:chatId/context',async (req,res)=>{
    try{
        const {chatId} = req.params;
        const chat= await Chat.findById(chatId).select('lastSummary tasks');
        if (!chat){
            return res.status(404).json({message:'Chat n'})
        }
         res.json({
      summary: chat.lastSummary,
      tasks: chat.tasks,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
    }
})



