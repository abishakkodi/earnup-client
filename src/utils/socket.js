import io from 'socket.io-client';
const url = process.env.SERVER_URL || 'http://localhost:3000'

const socket = io(url);

export default socket;