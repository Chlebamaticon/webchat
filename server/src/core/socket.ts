import socketIO from 'socket.io';

const io = socketIO();

io.on('connection', s => {
    s.on('message', ({ uuid, message }) => {
        const { sockets } = io.clients();

        for (const clientId of Object.keys(sockets)) {
            const socket = sockets[clientId];

            socket.emit('message', {
                senderId: s.id,
                uuid,
                message,
            });
        }
    });
});

export default io;