//const arr = [1,2,3,4,5];  

//const filter = arr.map(a=>{
    //return a%2 === 0; 
  //  return a*a;
//}); 

//or 
//const filter = arr.filter(a=>a%2 === 0);


//const reduce = arr.reduce((num1,num2)=>{
   // console.log(num1,num2);  
  // return num1+num2; 
//});

//console.log(reduce); 


orders = [
            {
                userId:1,
                amount:10
            },
            {
                userId:1,
                amount:15
            },
            {
                userId:2,
                amount:20
            },
            {
                userId:2,
                amount:40
            },
];


var a = orders.filter(order=>order.userId===1)
        .map(order=>order.amount)
        .reduce((a,b)=>a+b);

console.log(a);


