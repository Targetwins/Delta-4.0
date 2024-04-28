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
}