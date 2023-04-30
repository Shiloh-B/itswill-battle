import { Server } from 'socket.io';

const io = new Server({
  cors: {
    origin: '*'
  }
});

let lobby = [];

/**
 * data assumption
 * {
 *    
 * }
 */

io.on('connection', (socket) => {
  socket.broadcast.emit('hello', socket.id);

  socket.on('battle', (args) => {
    socket.broadcast.emit('battle', args);
  });

  socket.on('lobby', (uid) => {
    if(!lobby.length) {
      lobby.push(uid);
      socket.join(uid);
    } else {
      const oppUid = lobby.shift();
      socket.emit('lobby', {
        message: 'found a match',
        oppId: oppUid,
      });
      socket.join(oppUid);
      // now join a private lobby for that match
      socket.join()
    }
  })
});

io.listen(3000);