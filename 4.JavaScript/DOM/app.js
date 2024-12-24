//Navigation page
/*
let img = document.querySelector("img");
undefined
img.previousElementSibling.style.color="pink";
'pink'
img.nextElementSibling.style.color="pink";
'pink'
img.nextElementSibling.style.color="red";
'red'
*/

//Append Child
/*
tn = document.createElement("button");
<button>​</button>​
btn.innerHTML="Click Me";
'Click Me'
box = document.querySelector(".box");
<div class=​"box">​…​</div>​
box.appendChild(btn);
<button>​Click Me​</button>​
*/

/*
//Pratice QS

let para1 = document.createElement("p");
para1.innertext = "Hey I'M Red";
document.querySelector("body").append(para1);

para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innertext = "Hey I'M Red";
document.querySelector("body").append(h3);

h3.classList.add("blue");*/

/*/DOM Events
let button = document.querySelector("button")

button.onclick = function() {
    alert("Button was clicked");
}  */
/*/Onclick & Onmouseenter
let btns = document.querySelectorAll("button");
for(btn of btns){
    btn.onclick = sayhello;
    btn.onmouseenter =alert;
}

function sayhello (){
    alert("Hello!");
}
function alert(){
    console.log("YOUR ENTERD");
}  */

/*/ 
let btns = document.querySelectorAll("button");

for (btn of btns){
    //btn.addeventlistener("click",sayhello);
    //btn.addeventlistener("click",alert);
    btn.addEventListener("dblclick", function () {
        console.log("double clicked me");
    });
}

function sayhello (){
    alert("Hello!");
}
function alert(){
    console.log("YOUR ENTERD");
} */
/*
//Activity
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let randomcolor = getrandom();
    h3.innerText = randomcolor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomcolor;

    console.log("color is updated");

});

function getrandom(){
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let color = `rgb(${red},${blue},${green})`;
    return color;
}  */

/*/Event Listenener
let p = document.querySelector('p');

p.addEventListener("click",function(){
    console.log("click into p");
});

let box = document.querySelector('.box');
box.addEventListener("mouseenter",function(){
    console.log("mouse enter into box");
});
*/
/*/ This Event Listener

let btn = document.querySelector("button");
let btn1= document.querySelector(".button1");
let btn2 = document.querySelector(".button2");
let btn3 = document.querySelector(".button3");
let p = document.querySelector("p");
let h3 = document.querySelector("h3");
let h1= document.querySelector("h1");
let div= document.querySelector("div");


 function changecolor(){
    console.dir(this.innerText);
    this.style.color = "blue";
    this.style.backgroundColor = "yellow";

 }
btn.addEventListener("click",changecolor);
btn1.addEventListener("click",changecolor);
btn2.addEventListener("click",changecolor);
btn3.addEventListener("click",changecolor);
p.addEventListener("click",changecolor);
h3.addEventListener("click",changecolor);
div.addEventListener("click",changecolor);
*/

/*document.getElementById('myButton').addEventListener('click', function() {
console.log(innerText = 'Button was clicked!');
});
document.getElementById('hoverDiv').addEventListener('mouseover', function() {
    document.getElementById('hoverText').innerText = 'Mouse is over the div!';
});*/


/*document.getElementById('myInput').addEventListener('keydown', function(event) {
    // Get the key value
    let key = event.key;
    let key1 = event.keycode;
    // Update the output paragraph with the key pressed
    document.getElementById('output').innerText = 'Key pressed: ' + key + key1;
});*/
/*/Keyword events
let inp = document.querySelector("input");
inp.addEventListener('keydown',function(event){
    console.log("code = ", event.key+event.code)
    if(event.code == "Arrowup"){
    console.log("Charcter moves upward")
    }
    else if(event.code == "Arrowdown"){
        console.log("Charcter moves downward")
        }
        else if(event.code == "Arrowright"){
            console.log("Charcter moves rightward")
            }
            else if(event.code == "Arrowleft"){
                console.log("Charcter moves leftward")
                }
        
})

//Form events
let form = document.querySelector("form")

    form.addEventListener("submit",function(event){
     event.preventDefault();
   //  alert("form is submitted")
     let inp = document.querySelector("input");
     console.dir(inp);
     console.log(inp.value);
     
}); 

/*document.getElementById('focusInput').addEventListener('focus', function() {
    document.getElementById('focusOutput').innerText = 'Input field is focused';
});

document.getElementById('focusInput').addEventListener('blur', function() {
    document.getElementById('focusOutput').innerText = 'Input field lost focus';
});*/






