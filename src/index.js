const express = require ('express');
const http = require ('http');
const cors = require ('cors');
const {Server}=require  ('socket.io');
const { disconnect } = require('cluster');
const connectDB = require('./config/db')
require ('dotenv').config();
const authRoutes=require('../src/routes/auth.routes')
const PORT=process.env.PORT|| 5000;
const socketHandler= require('../src/socket/socket');
const chatRoutes=require ('../src/routes/chat.routes')



const app = express();
//midleware
app.use(cors());
app.use (express.json());
app.use('/api/auth',authRoutes);
app.use('/api/chats', chatRoutes);

//db connection
connectDB();
//server and socket.io
const server = http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:'*',
        methods:['GET','POST']
    }

});
socketHandler(io);
io.on ('connection',(socket)=>{
    console.log(`user connected: ${socket.id}`);

    socket.on('disconnect',()=>{
        console.log(`user disconnected: ${socket.id}`)
    })
});
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
