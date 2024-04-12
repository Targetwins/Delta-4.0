//arr=[1,2,3,4,5,6,2,3]
//&num=2 Resultshouldbe
//arr=[1,3,4,5,6,3

let arr=[1,2,3,4,5,6,2,3];
let n=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==n){
        arr.splice(i,1);
        
    }
}  
console.log(arr);
