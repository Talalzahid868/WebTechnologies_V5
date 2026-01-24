
function getbuttons(n){
    document.getElementById("num").value+=n;

}
function clearbuttons(){
    document.getElementById("num").value="";

}
function getcalculation(){
    let result=document.getElementById("num").value;
    document.getElementById("num").value=eval(result);

}


// let exp=document.getElementById("num").value;

// function clearbuttons(){
//     exp="";

// }








