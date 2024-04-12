let todo=[];

let req = prompt("Enter The the Request")
    console.log(req);

while(true){
    if(req=="quit"){
        console.log("Quitting app");
        break;
    }if(req =="list"){
        console.log("--------------------")
        for(let i=1;i<todo.length;i++){
            console.log(i , todo[i]);
        }
        console.log("----------------------")

    }else if(req == "add"){
        let task =  prompt("Enter the Task what you want you");
        todo.push(task);
        console.log("Task Added Suceesfully");
     }else if(req == "delete"){
        let idx =  prompt("Enter the Task which u want delete");
        todo.splice(idx,1);
        console.log("Deleted");
    }else{
    console.log("Wrong Request")
    }
    req = prompt("Enter The the Request");
}
