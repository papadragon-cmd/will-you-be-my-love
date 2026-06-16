
const body = document.getElementById("body");
const bt1 = document.getElementById("buttoo1");
const bt2 = document.getElementById("buttoo2");
const vid = document.getElementById("gif");
const fin = document.getElementById("finalVid");
fin.style.display = "none";
const vid2 = document.getElementById("finalvid2");
vid2.style.display = "none";
bt2.style.transition="0.7s";
bt1.style.transition="0.7s";
const letter = document.getElementById("letter");
const welcome = document.getElementById("welcome");
const finvid2 = document.getElementById("finalvid4");
finvid2.style.display ="none";
const finvid3= document.getElementById("finalvid5");
finvid3.style.display ="none";
const finvid4= document.getElementById("finalvid6");
finvid4.style.display ="none";
letter.style.display = "none";
welcome.style.opacity ="1";
const text = document.getElementById("text");
const myh1 = document.getElementById("myh1");
myh1.style.display = "none";
text.style.display = "none";
const meow = document.getElementById("nameee");
const meow2 = document.getElementById("passs");
const inv = document.getElementById("inv");
const rev = document.getElementById("rev");
const sum = document.getElementById("sum");
const pass =document.getElementById("passed");
const inc = document.getElementById("inc");
const but =document.getElementById("but");
but.style.display ="none";
welcome.style.transition="1s";
meow.style.opacity="0";
meow2.style.opacity="0";
inv.addEventListener("click" ,function(){
   
    meow.style.opacity ="1";
    meow2.style.opacity="1";
   
});
rev.addEventListener("click" ,function(){
   
    meow.style.opacity ="0";
    meow2.style.opacity="1";
   
});
const myname = document.getElementById("name1");
const valname = document.getElementById("val1");
const chan = document.getElementById("change1");
const chan1 = document.getElementById("change");
const last = document.getElementById("change3");
chan.textContent=localStorage.getItem("name") || "";
chan1.textContent=localStorage.getItem("name") || "";
last.textContent=localStorage.getItem("name2") || "";
let pass1 = "meow";
sum.addEventListener("click" , function(){
    if( pass1=== String(pass.value) )
    {   
       letter.style.transition="1s";
        welcome.style.display ="none"; 
        body.style.backgroundImage ='url("images/ce8cd78916afbbb162e7dae7b700a442.jpg")';
         letter.style.display = "block";
        chan.textContent=valname.value;
        chan1.textContent= valname.value;
        last.textContent= myname.value;
        localStorage.setItem("name" , chan.value);
        localStorage.setItem("name" , chan1.value);
        localStorage.setItem("name2" , last.value);
    }
    else{
        inc.textContent="INCORRECT PASSWORD";
    }
    
});
let i=0;
let size = ["translateX(5em)" , "translateY(-4em)" , "translateY(10em)" ,
            "translateX(-15em)" , "translateY(-10em)" , "translateY(-25em)" ,
            "translateY(-20em) "
 ] ;
 let pad = ["1em" , "1.2em","1.4em" , "1.6em" , "1.8em" , "2em" , "2.2em" , "2.4em"]
 let gif = ["images/bc4.mp4" , "images2/two.mp4" , "images2/three.mp4" , "images2/four.mp4" , "images2/five.mp4" , "images2/six.mp4" , "images2/sad.mp4" , "images2/eight.mp4"]

 
bt1.addEventListener("click" , function(){
   
    bt2.style.opacity="0";
    bt1.style.opacity="0";
    vid.src = "images2/eight.mp4";
    letter.style.display="none";
    letter.style.transition="1s";
    fin.style.transition="3s";
    body.style.marginTop ="0";
    text.style.display="block";
    myh1.style.display ="block";
    fin.style.display="block";
    vid2.style.display = "block";
    finvid2.style.display = "block";
    finvid3.style.display = "block";
    finvid4.style.display ="block";
    but.style.display ="block"
});
bt2.addEventListener("click" , function(){
    if(i<=8)
        {
         vid.src =gif[i];
         bt2.style.transform =size[i];
         bt1.style.padding=pad[i];
         i++;
         }
        if(i>=8)
         {
         bt2.style.opacity="0";
         bt1.style.marginLeft="5%";
         }
});
but.addEventListener("click" , function(){
    body.style.display="none";
})
