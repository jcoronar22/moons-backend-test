const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');
const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
});
const { addUser, removeUser, getUser, getUsersInRoom } = require('./functions/users');

app.use(cors());

io.on('connect', (socket) => {
  console.log('a new user connected!');

  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} se ha unido!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  });

});

server.listen(process.env.PORT || 4001, () => {
  console.log('listening on *:4001');
});