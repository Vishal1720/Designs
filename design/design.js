let a=["green","yellow","blue","magenta","cyan","white","orange"];
let c=["black","red","green","blue","violet","brown","purple"];
let randomColor=["green","yellow","blue","magenta","cyan","white","black","red","green","blue","violet","brown","purple"];
let btns=document.getElementsByClassName("mainBtns");
var i,val=true,stop1=false,stop2=false,timer=0;
function start()
{
    
    if (stop1==false)
    {
var b1=setInterval(()=>{
    random=Math.floor(Math.random()*6);
    random2=Math.floor(Math.random()*6);
    if(timer<10)
    {
       for(i=0;i<btns.length;i++)
       {
          if(val==true)
           {
    btns[i].style.backgroundColor=a[random];
    val=false;
            }
    else
        {
    btns[i].style.backgroundColor=c[random2];
    val=true;
         }}
         timer++;
    console.log(timer);
        
    }
    else
    {
    clearInterval(b1);
    timer=0;
    }
},1000);
    }
    else
    {
    clearInterval(b1);
    stop1=false;
    console.log("inside stop1");
    }
    
    
   
}

function random()
{
    
    const b1=setInterval(()=>{
        if(timer<20)
        {
    for(i=0;i<btns.length;i++)
    {
        random=Math.floor(Math.random()*13);
        btns[i].style.backgroundColor=randomColor[random];
    }timer++;
}
else
{
    clearInterval(b1);
    timer=0;
}
},1000  );
}
function shiftColor()
{
    
        i=0;
    const n=setInterval(()=>{
        btns[i].style.backgroundColor="black";
        i++;
        if(i==btns.length)
        clearInterval(n);
    },100);
}
function clearIt()
{
    stop1=true;
    start();
    for(i=0;i<btns.length;i++)
    btns[i].style.backgroundColor="grey";
}
