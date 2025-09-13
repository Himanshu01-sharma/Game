let btn1 =document.querySelector("#btn1");
btn1.onclick=(e)=>
{
    console.log(e);
    console.log(e.type);
    console.log("btn was clicked");
    let a= 25;
    a++;
    console.log("the valur is "+a);
};




