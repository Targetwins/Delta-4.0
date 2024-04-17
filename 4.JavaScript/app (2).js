//JavaScript(Part - 4)

/*console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");*/

//For LOOPS

/*for(let i=1;i<=5;i++){
    console.log(i);
}*/

//for(let j=1;j<=15;j=j+2){
  //  console.log(j);
/*/}//
console.log("Mutiplication of Numbers");
for(let j=1;j<=10;j++){
    console.log(5*j);*///

// Multiplication Prompt
/*let m=prompt("Enter the Number");
m=parseInt(m);
for(let j=m;j<=m*10;j=j+m){
    console.log(j);
}*/
/*/For loop
for(let i=1;i<=4;i++){
 console.log("outer loop");
    for(let j=1;j<=3;j++){
    console.log(j);
    }
}*/

/*/ while loop
let i=0;
while(i<=20){
    console.log(i);
    i++;
}*/

/*/Favorite Movie
let favMovie="Avatar";
let Guess =prompt("My favorite movie is :")
while((Guess!=favMovie)&&(Guess!='quit')){
       Guess=prompt("You are wrong & try again!")
}
if (Guess==favMovie){
    console.log("Congrats");
}
else{
    console.log("Thank You!")
}*/

//Loops with Arrays
/*let fruits=["Mango","Bananna","apple","orange","kivi","cheery","jackfruit","water lemion"];

for(let i=1;i<fruits.length;i++){
    console.log(i,fruits[i]);
}*

let  movies=[['superman','spiderman','batman'],['super woman','flash','wnder man']];
  
for(let i=0;i<movies.length;i++){
    console.log(i,movies[i],movies[i].length);
    for(let  j=0;j<movies[i].length;j++){
        console.log(`${j} ${movies[i][j]}`);
    }
}*/

//Example 2
//let students=[["Gani",93],["Giri",91],["Kavya",100]];

/*for(let i=0;i<students.length;i++){
    console.log(` info student no #${i}`);
    for(let j=0;j<students[i].length;j++){
        console.log(students[i][j]);
    }
}/*
//For of Loops
for(student of students){
    console.log(student);
}
for(char of "apnacollege"){
    console.log(char);
}*/


/*let  movies=[['superman','spiderman','batman'],['super woman','flash','wnder man']];

for(list of movies){
    for(movies of list)
    {
        console.log(movies);

    }
}*/

//JavaScript(Part - 5)

/*Object Literals
let student = {
    name :"Girish",
    age:21,
    marks: 92
};
const india ={
    longitude:"92.4",
    latitude:"108.4"
};
const post ={
    username: "@ganigiri",
    content:"these is my #first article",
    like:150,
    repost:6,
    comments:60
};*/

// objects of objects
/*const Classinfo={
   ganesh:{
    grade:"A",
    city:"Mumbai"
   },
   girish:{
    grade:"B",
    city:"calcutta"
   },
   aman:{
    grade:"O",
    city:"Mysore"
   }
};
*/
/*/Array of Objects
const ClassInfo=[
    {
    name:"Ganesh B S",
     grade:"A",
     city:"Mumbai"
    },
    {
    name:"Girish B S",
     grade:"B",
     city:"calcutta"
    },
    {
    name:"kavya B S",
     grade:"O",
     city:"Mysore"
    }
 
];*/


/*// Guessing Game
const max =prompt("Enter the maximum number");
//console.log(max);
const random=Math.floor(Math.random()*max)+1;
//console.log(random);
let guess= prompt("Guess the Number:")
while(true){
    if(guess =="quit"){
        console.log("user quit the guess")
    }
    if(guess == random){
        console.log("you are right ,congrats!!!",random)
        break;
    }else if(guess<random){
        guess=prompt("Hint :Num is too small,plesae try again");
    }else{
        guess=prompt("Hint: Num is too large ,please try again");
    }
} */


