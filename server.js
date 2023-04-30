import { Server } from 'socket.io';

const io = new Server({
  cors: {
    origin: '*'
  }
});

let lobby = [];

io.on('connection', (socket) => {
  socket.broadcast.emit('hello', socket.id);

  socket.on('battle', (args) => {
    console.log(args);
    socket.broadcast.emit('battle', args);
  });

  socket.on('lobby', (uid) => {
    if(!lobby.length) {
      lobby.push(uid);
      socket.join(uid);
      console.log(lobby);
    } else {
      const oppUid = lobby.shift();
      socket.emit('lobby', {
        message: 'found a match',
        oppId: oppUid,
        oppTeamDate: oppTeamData
      });
      socket.join(oppUid);
      console.log(lobby);

      // now join a private lobby for that match
      socket.join()
    }
  })
});

io.listen(3000);