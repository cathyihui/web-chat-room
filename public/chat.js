//the clients
//make connection
//socket from the front-end
var socket = io.connect('http://localhost:4000');

//Query Dom
//extract the values from front-end
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');


//emit event
btn.addEventListener('click',function(){

    socket.emit('chat',{

        message: message.value,
        handle: handle.value
    });
    
    //Clear input
    message.value = '';
    message.focus();

});

message.addEventListener('keypress',function(){

      socket.emit('typing',handle.value);

});

//listen for events
socket.on('chat',function(data){
     feedback.innerHTML = "";
     output.innerHTML +='<p><strong>'+data.handle+':</strong> '+data.message+'</p>';
});

//feedback
socket.on('typing',function(data){
    feedback.innerHTML = '<p><em>'+data+' is typing a message...</em></p>';
});
