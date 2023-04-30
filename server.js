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
 *    uid: 6 digit nano id
 *    numOfRounds: rounds player has completed
 *    teamData: players team data
 * }
 */

io.on('connection', (socket) => {
  socket.broadcast.emit('hello', socket.id);

  socket.on('battle', (args) => {
    socket.broadcast.emit('battle', args);
  });

  socket.on('lobby', (data) => {
    if(!lobby.length) {
      lobby.push(data);
      socket.join(data.uid);
    }

    const foundMatch = lobby.findIndex((d) => { return d.numOfRounds === data.numOfRounds });
    if(!foundMatch) {
      lobby.push(data);
      socket.join(data.uid);
    } else {
      socket.emit(foundMatch.uid, lobby[foundMatch]);
      lobby.slice(foundMatch);
    }
  })
});

io.listen(3000);