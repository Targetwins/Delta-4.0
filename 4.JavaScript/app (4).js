/*
//JavaScript(Part - 7)

//this Keyword
const student ={
    name:"Girsh B S",
    class:"12th",
    math:98,
    phy:91,
    chemi:90,
    getAvg() {
        console.log(this)
        let avg =(this.math+this.phy+this.chemi)/3;
        console.log(`${this.name} get avg score is ${avg}`);
    }
};
*/
/*
//Try & Catch
console.log("Hello1");
console.log("Hello2");
console.log("Hello3");
try{
    console.log(a);
}catch (err){
    console.log("it is not defined");
    console.log(err);

}
console.log('hi joke');

*/
/*
//Arrow Function

const sum = (a,b) =>{
    return a-b;
}
console.log(sum);
const hello = () =>{
    return "hello world !"
}
console.log(hello());
*/

/*
//implict return value
const add = (a,b) => a+b;
const div = (a,b) => a/b;
const mod = (a,b) => a%b;

*/
/*
// set Time function

console.log("Hi There !");

setTimeout(()=>{
    console.log("upscMaga.com")
},5000)

    console.log("Welcome To")
*/
/*
//set Interval

console.log("Hi There !");

id = setInterval(()=>{
    console.log("UpscMAGA.com")
},5000)

id1 = setInterval(()=>{
    console.log("Let's Strat Your Journey")
},5000)
*/
/*
//this keyword with arrow function

const student = {
    name:"Arjun",
    age:12,
    prop: this,
    getName:function(){
        return this.name;
    },
    getAge:() => {
        return this.age;
    }
}

*/
/*
//Pratice Questions

//write function to print "Hello World !"5 times in each 2 seconds;
 id = setInterval(() =>{
    console.log("hello World !");
},2000)
 setTimeout(()=>{clearInterval(id);
    console.log("check OUT !");
 },10000)
 */


/*/JavaScript(Part - 8)

//Arrays Methods

let array =[1,2,3,4,5,8];

let print = function(el){
    console.log(el);

};
array.forEach(print);

array.forEach(function(el){
    console.log(el);
});

let students =[
    {
        Name: "Ganesh",
        marks:90,
    },
    {
        Name: "Girish",
        marks:91,
    },
    {
        Name: "Kavya",
        marks:90,
    }

];
students.forEach((student)=>{
    console.log(student.marks);
})
 

/*
/Arrays Methods

let array =[1,2,3,4,5,8];

let print = function(el){
    console.log(el);

};
array.forEach(print);

array.forEach(function(el){
    console.log(el);
});

let students =[
    {
        Name: "Ganesh",
        marks:90,
    },
    {
        Name: "Girish",
        marks:91,
    },
    {
        Name: "Kavya",
        marks:90,
    }

];
let  cpa = students.map((el) => {
    return el.marks/10;

});

students.forEach((student)=>{
    console.log(student.marks);
})

//Map  &  Filter
let num =[1,2,3,4,5,6,7,8,9]
let double =num.map((number) => {
    return number*2;
});
//Filter
let nums=[1,2,3,4,5,6,7,8,9,12,23,45,56];
let ans = nums.filter((number) => {
    return number % 2 ==0;
});

//Every
[1,2,3,4,,5,6,7].every((el)=> el%1 == 0);
*/

/*/Maximum in Array usiing reduce method
let nums1 = [2,3,4,5,6,7,8,9,10];
let results= nums1.reduce((max,el)=>{
    if (el>max){
        return el;
    }else{
        return max;
    }
})
console.log(results);
*/
 
/*/Default method 

function sum(a=1,b){
    return a+b;
}
console.log(sum(1,5));
*/

/*
/Spread
arr=[1,2,3,4,5,5,6,7,,"dagafa"];

console.log(...arr);
*/
/*/Spreadd-array literals
//it is only copy one array into the another array using ...arr
arr=[1,2,3,4,5,5,6,7,,"dagafa"];
 newarr  = [...arr];
 console.log(newarr);

 //Spread - Object Litreals

 let data ={
    email:"ganeshbs2003bs@gmail.com",
    password:"6252766******"
 }
 let newdata ={...data,id:"123"}

// indexwise storage
 arr=[1,2,3,4,5,5,6,7,,"dagafa"];
 objec1={...arr}    */


 //Rest
 function sum(...args){

    for(let i=0;i<args.length;i++){
        console.log("your choice is",args[i]);
    }
 
}
function sum(...args){
    return args.reduce((sum,el)=>sum+el);
}

function min(...args){
    return args.reduce((min,el)=>{

    if(min<el){
        return min;

    }else{
        return el;
    }
    
    })
    
}

//Destrucring
let names = ["gani","giri","kavya","steve","jobs"];
let[winner,runnerup,third,...others] = names;


/*/Destructuring (object iterals)
let student ={
    email:"ganeshbs2003bs@gmail.com",
    password:"6252766******",
    city:"pune",
    college:"Malnad college of Engineering",
    roll_no:14
};
let {city:place,email}=student;*/

