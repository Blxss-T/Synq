const Message= require('../models/Message');
const socketHandler =(io)=>{
    io.on('connection',(socket)=>{
        console.log('User connected:', socket.id);
        socket.on('joinChat',(chatId)=>{
            socket.join(chatId);
            console.log(`User joined ${chatId}`)
        });
        socket.on('sendMessage', async(data)=>{
            const{}
        })

    })

}