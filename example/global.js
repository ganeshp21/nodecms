var path = require('path');
var name = 'Ganesh Papde'; 

var test = name.toUpperCase(name); 
//console.log(test); 

console.log(`your name is ${test}`);

console.log(__dirname);
console.log(__filename);
console.log(path.basename(__filename));