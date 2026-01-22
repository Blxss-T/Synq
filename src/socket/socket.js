const { Socket } = require('socket.io');
const chat = require('../models/chat');
const Message= require('../models/Message');
const contextProcessor= require('../services/contextProcessor');
const socketHandler =(io)=>{
    io.on('connection',(socket)=>{
        console.log('User connected:', socket.id);
        socket.on('joinChat',(chatId)=>{
            socket.join(chatId);
            console.log(`User joined ${chatId}`)
        });
        socket.on('sendMessage', async(data)=>{
            const{ chatId,senderId, content }=data;
            const message =await Message.create({
                chat:chatId,
                sender: senderId,
                content

            });
            const context =await contextProcessor(chatId);
            
            io.to(chatId).emit('receivedMessage', {
                message,
                context,
            });
                });
                socket.on('disconnect',()=>{
                    console.log('User disconnected:',socket.id); 
                });
    });
};
module.exports= socketHandler;