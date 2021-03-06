
const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


// set static folder :
app.use(express.static(path.join(__dirname ,'public')));

// run when cilent connected:
 io.on('connection' , socket => {
    console.log('New WS connection...');
    socket.emit('message','Welcome to chatgroup');
});

const PORT =  4000 || process.env.PORT ;

server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));