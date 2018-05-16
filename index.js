//Modules
const app = require('express')();
const http = require('http');
const socketIO = require('socket.io');
const UserService = require('./UserService');
const userService = new US();
//Basic configuration
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req,res) {
   res.render('start'); 
});
io.on('connection', function (socket) {
    socket.on('join', function (name) {
        userService.addUser({
            id: socket.id,
            name
        });   
    });
    io.emit('update', {
        users: userService.getAllUsers()
    });
});
io.on('connection', function (socket) {
   socket.on('disconnect', ()=> {
        userService.removeUser(socket.id);
        socket.broadcast.emit('update', {
            users:userService.getAllUsers()
        });
   });
});
io.on('connection', function (socket) {
    socket.on('message', (message)=>{
        const {name} = user.getUserById(socket.id);
        socket.broadcast.emit('message', {
            text:message.text,
            from: name
        });
    });
});
server.listen(3000, function() {
    console.log('Listening on http://localhost:3000');
});
