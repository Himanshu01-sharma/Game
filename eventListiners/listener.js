let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",(e)=>{
    console.log("button 1 is cliked");
    console.log(e.type);
    console.log(e.target);
});
btn1.addEventListener("click",(e)=>{
    console.log("button 2 is cliked");
    console.log(e.type);
    console.log(e.target);
});


// There is another way to  add event listener to The element and have the same effect 
 