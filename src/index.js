const express = require ('express');
const http = require ('http');
const cors = require ('cors');
const {Server}=require  ('socket.io');
const { disconnect } = require('cluster');
const connectDB = require('./config/db')
require ('dotenv').config();
const authRoutes=require('../src/routes/auth.routes')
const PORT=process.env.process || 5000;


const app = express();
app.use('/api/auth',authRoutes);
app.use(cors);
app.use (express.json());
connectDB();
const server = http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:'*',
        methods:['GET',]
    }

});
io.on ('connected',(socket)=>{
    console.log(`user connected: ${socket.id}`);

    socket.on('disconnect',()=>{
        console.log(`user disconnected: ${socket.id}`)
    })
});
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
