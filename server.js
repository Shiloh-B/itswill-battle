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
    console.log(data);
    if(!lobby.length) {
      console.log(`${data.uid} joining room: ${data.uid}`);
      socket.join(data.uid);
      lobby.push(data);
      console.log('joined q, q empty');
    } else {
      const foundMatch = lobby.findIndex((d) => { return d.numOfRounds === data.numOfRounds });
      if(foundMatch === -1) {
        socket.join(data.uid);
        lobby.push(data);
        console.log('joined q, no match compatible');
      } else {
        const foundMatchData = lobby[foundMatch];
        socket.join(foundMatchData.uid);
        io.to(foundMatchData.uid).emit('gameData', [data, foundMatchData]);
        lobby.splice(foundMatch, 1);
      }
    }
  })
});

io.listen(3000);