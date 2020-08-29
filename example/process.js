//console.log(process.argv);  


//flag = process.argv.indexOf('--user');
//console.log(flag);   


process.stdout.write('What is your name ?  ');  

process.stdin.on('data',function(answer){
    console.log(answer.toString().trim());  
    process.exit(); 
});

