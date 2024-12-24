//call stack
//visuallzing the call stack
/*function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans = two()+one();
    console.log(ans);
}
three();
//break points : It helps to find out error in debugging process...*
//Js in single threaded
setTimeout(() => {
    console.log("apna college");
},20000)
console.log("Hello World");
setTimeout(() => {
    console.log("helooo");
},20000)*/

//Call back in JS
h1 = document.querySelector("h1");

function ChangeColor(color,delay,nextcolorchange){
    setTimeout(() => {
        h1.style.color = color;
        if(nextcolorchange) nextcolorchange();
        
    },delay);
}
ChangeColor("red",1000,()=> {
    ChangeColor("orange",1000,()=> {
        ChangeColor("pink",1000,()=> {

        });

    });

});