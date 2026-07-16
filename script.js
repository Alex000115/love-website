const text = "I Have Something Special To Tell You ❤️";
const typing = document.getElementById("typing");
const btn = document.getElementById("startBtn");

let i = 0;

function typeWriter(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,70);

    }

}

typeWriter();

btn.addEventListener("click",()=>{

document.querySelector(".card").innerHTML=`

<h1 style="font-size:45px;">❤️</h1>

<h2 style="color:white;margin:15px 0;">
Will You Be Mine?
</h2>

<p style="color:#ddd;font-size:18px;margin-bottom:35px;line-height:1.7;">
You make my world brighter every single day.<br><br>

Would you like to stay in my heart forever?
</p>

<div>

<button id="yesBtn">
YES ❤️
</button>

<button id="noBtn"
style="
margin-left:15px;
background:#555;
">
NO 😅
</button>

</div>

`;

yesFunction();

noFunction();

});

function yesFunction(){

const yes=document.getElementById("yesBtn");

yes.onclick=()=>{

document.querySelector(".card").innerHTML=`

<h1 style="font-size:60px;">
💖
</h1>

<h2 style="color:white;">
I Love You ❤️
</h2>

<p style="color:#ddd;margin-top:20px;font-size:20px;line-height:1.8;">
Thank You For Accepting My Love 🥹❤️
</p>

`;

createHearts();

}

}

function noFunction(){

const no=document.getElementById("noBtn");

no.onmouseover=()=>{

const x=Math.random()*300-150;

const y=Math.random()*200-100;

no.style.transform=`translate(${x}px,${y}px)`;

}

}

function createHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animation="float 5s linear";

heart.style.pointerEvents="none";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

},250);

}
@keyframes float{

0%{

transform:translateY(0);

opacity:1;

}

100%{

transform:translateY(-110vh);

opacity:0;

}

}
