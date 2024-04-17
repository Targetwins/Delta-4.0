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


