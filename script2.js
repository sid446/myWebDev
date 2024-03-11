var a=document.querySelector("#bulb")
var btn=document.querySelector("button")
var flag=0
btn.addEventListener("click",function(){

    if(flag==0){
    a.style.backgroundColor="transparent"
    flag=1

    }else{
        a.style.backgroundColor="yellow"
        flag=0
    }




})
