import process from 'process';
import { createServer, Server } from 'http';
import app from './core/express';
import socket from './core/socket';
import logger from './core/logger';

const server: Server = createServer(app);
socket.attach(server);

const { PORT = 4000 } = process.env;
server.listen(PORT, () => {
    logger.info(`App is listening on port ${PORT}`);
});
