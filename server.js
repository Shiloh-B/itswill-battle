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
    socket.join(data.uid);
    console.log(data);
    if(!lobby.length) {
      lobby.push(data);
      console.log('joined q, q empty');
    } else {
      const foundMatch = lobby.findIndex((d) => { return d.numOfRounds === data.numOfRounds });
      if(foundMatch === -1) {
        lobby.push(data);
        socket.join(data.uid);
        console.log('joined q, no match compatible');
      } else {
        socket.emit(lobby[foundMatch].uid, data);
        socket.emit(data.uid, lobby[foundMatch]);
        lobby.slice(foundMatch);
        console.log('found match');
        console.log(lobby[foundMatch]);
      }
    }
  })
});

io.listen(3000);