//Modules
const app = require('express')();
const http = require('http');
const socketIO = require('socket.io');

//Basic configuration
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', './views');

