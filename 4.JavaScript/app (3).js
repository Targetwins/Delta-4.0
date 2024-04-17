//JavaScript(Part - 6)


/*function PrintName(){
    console.log("Ganesh Gowda")
}
PrintName();
PrintName();*/

/*/ Dice roll
function Diceroll(){
    random=Math.floor(Math.random()*6)+1;
    console.log(random);
}
Diceroll();
Diceroll();
Diceroll();
Diceroll();*/


/*/Tables
function PrintTable(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i)
    }
}*/

/*/return key
 let str = ["gani","giri","kavya"];
 
 function getstr(str){
    let result="";

    for(let i=0;i<str.length; i++){
        result +=str[i];
    }
    
    return result;
 }
 console.log(getstr(str));*/

/*/ Blocks
let sum = 50;//Global Scope
 function calSum(a,b){
         //let sum = a+b;
        console.log(sum);//Function  Scope
 }
  calSum(2,5);
  console.log(sum);*/

/*/Lexical Scope

function outerloop(){
    let a=10;
    let b=20;
    function innerloop(){
        console.log(a);
        console.log(b);
    }
    innerloop();
}  */

/*/Functional Expression

let city = function CityName(){
    console.log("Hassan");
}

city = function CityName(){
    console.log("Mysore");
}

city();*/

/*/Functioon AS Arguments

function multipleeGreet(func,n){
    for(let i=1; i<=n; i++){
        func();
    }
}
    let Greet = function greet(){
        console.log("Hello");
    }
//multipleeGreet(Greet,300);
multipleeGreet(function(){console.log("Namasate")},300);//direct function called AS Arguments  */

/*/EvenrOddFactory
function EvenrOddFactory(request){
    if (request == "odd"){
        return function func(n){
        console.log(!(n%2 ==0))
        }
    } else if (request == "even"){
        return function func(n){
        console.log(n%2 ==0)
        }
    }else{
        console.log("wrong request")
    }
}
let request="even";*/

/*/Methods 

const calculator = {
    add : function (a,b){
        return a+b;
    },
    sub: function (a,b){
        return a-b;
    },
    mul: function (a,b){
        return a*b;
    }
};
*/
/*
//Methods Shorthand (No need to use of function keyword);
const calculator = {
    add (a,b){
        return a+b;
    },
    sub (a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
};*/