let modebtn=document.querySelector("#btn1");
let currmode="light";

modebtn.addEventListener("click",()=> {

if(currmode=="light"){
    currmode="dark"; 
document.querySelector("body").style.backgroundColor="black";
}
else{
    currmode="light";
    document.querySelector("body").style.backgroundColor="white";
}
console.log(currmode);
});
