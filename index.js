//server side 

var express = require('express');
var socket = require('socket.io');

//app set
var app = express();
var server = app.listen(4000, function(){

console.log('listening to requests on PORT 4000');

});


//static files
app.use(express.static('public'));

//socket setup
var io = socket(server);

io.on('connection',function(socket){

   console.log('made socket connection');

   socket.on('chat',function(data){
     io.emit('chat',data);
    });

    //feedback
   socket.on('typing',function(data){
         socket.broadcast.emit('typing',data);
   });
   
});
