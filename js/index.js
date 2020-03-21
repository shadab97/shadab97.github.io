var isdark=false;
document.querySelector('.moon').style.display="none";
document.querySelector('.dark-light').addEventListener('click',()=>{
    if(!isdark){
        
        document.querySelector('.sun').style.display="none";
        document.querySelector('.moon').style.display="";
        document.querySelector('body').classList.toggle("dark");
        document.querySelector('.contact-btn').classList.toggle("dark-btn");
        document.querySelector('.email').classList.toggle("dark-btn");
        isdark=true;;
        
    }else{
        console.log("light mode ",isdark)
        document.querySelector('.sun').style.display="";
        document.querySelector('.moon').style.display="none";
        document.querySelector('body').classList.toggle("dark");
        document.querySelector('.contact-btn').classList.toggle("dark-btn");
        document.querySelector('.email').classList.toggle("dark-btn");
        isdark=false; 
    }
   
});
var isdark1=false;
document.querySelector('.moon1').style.display="none";
document.querySelector('.dark-light1').addEventListener('click',()=>{
    if(!isdark){
        
        document.querySelector('.sun1').style.display="none";
        document.querySelector('.moon1').style.display="";
        document.querySelector('body').classList.toggle("dark");
        document.querySelector('.side-navigation').classList.toggle("dark");
        document.querySelector('.contact-btn').classList.toggle("dark-btn");
        document.querySelector('.email').classList.toggle("dark-btn");
        isdark=true;;
        
    }else{
        console.log("light mode ",isdark)
        document.querySelector('.sun1').style.display="";
        document.querySelector('.moon1').style.display="none";
        document.querySelector('body').classList.toggle("dark");
        document.querySelector('.side-navigation').classList.toggle("dark");
        document.querySelector('.contact-btn').classList.toggle("dark-btn");
        document.querySelector('.email').classList.toggle("dark-btn");
        isdark=false; 
    }
   
});
var icon_burger=document.querySelector(".icon-burger");
var side_nav=document.querySelector(".side-navigation");
var isopen=false;//used to check wether the sidebar is open or not initially false means not open;
icon_burger.addEventListener("click",(e)=>{
    if(!isopen){
        console.log("addopen");
        side_nav.style.left="0px";
        isopen=!isopen;
    }
    else{
        console.log("innotadd");
        side_nav.style.left="-200px";
        isopen=!isopen;
    } 
});
//login for swaping words
var list_word=document.querySelector(".list-word");
var lists=["Passionate","Commited","Growing"];
var i=0;
setInterval(()=>{
list_word.innerHTML=lists[i++];
if(i==lists.length){
    i=0;
}
},1500);
