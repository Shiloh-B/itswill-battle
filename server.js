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
      socket.join(data.uid);
      lobby.push(data);
      io.to(data.uid).emit('gameData', [data]);
    } else {
      
      // quick check to see if we're already in queue, if so don't do anything
      if(lobby.find((d) => { return d.uid === data.uid })) {
        return;
      }

      const foundMatch = lobby.findIndex((d) => { return d.numOfRounds === data.numOfRounds && d.uid !== data.uid });
      if(foundMatch === -1) {
        socket.join(data.uid);
        lobby.push(data);
        io.to(data.uid).emit('gameData', [data]);
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