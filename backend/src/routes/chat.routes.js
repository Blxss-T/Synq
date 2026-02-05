const express= require ('express');
const Chat = require ('../models/chat');

const router =express.Router();

router.get('/:chatId/context',async (req,res)=>{
    try{
        const {chatId} = req.params;
        const chat= await Chat.findById(chatId).select('lastSummary tasks');
        if (!chat){
            return res.status(404).json({message:'Chat not found'})
        }
         res.json({
      summary: chat.lastSummary,
      tasks: chat.tasks,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch('/:chatId/tasks/:taskId', async (req, res) => {
  try {
    const { chatId, taskId } = req.params;

    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }

    const task = chat.tasks.id(taskId);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.status = 'completed';
    await chat.save();

    res.json({
      message: 'Task marked as completed',
      task
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 
