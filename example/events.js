var events = require('events');  

let emitter = new events.EventEmitter();  

emitter.on('newEvent',(message)=>{
    console.log(`Message : ${message}`);  
    
}); 

emitter.emit('newEvent','Hii guys my name is ganesh papde');
 