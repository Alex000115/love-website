const typing = document.getElementById("typing");
const startBtn = document.getElementById("startBtn");

const text = "I Have Something Special To Tell You ❤️";

let i = 0;

// ===============================
// Typewriter
// ===============================

function typeWriter() {

    if (i < text.length) {

        typing.textContent += text.charAt(i);

        i++;

        setTimeout(typeWriter, 60);

    }

}

typeWriter();


// ===============================
// Open Proposal
// ===============================

startBtn.addEventListener("click", () => {

    document.querySelector(".glass-card").innerHTML = `

        <div class="proposal">

            <div class="emoji">❤️</div>

            <h2>Will You Be Mine?</h2>

            <p>

                Every smile of yours makes my world brighter.

                <br><br>

                Would you like to stay in my heart forever?

            </p>

            <div class="buttons">

                <button id="yesBtn">

                    YES ❤️

                </button>

                <button id="noBtn">

                    NO 😅

                </button>

            </div>

        </div>

    `;

    document.getElementById("yesBtn").onclick = showLetter;

    moveNoButton();

});



// ===============================
// NO Button
// ===============================

function moveNoButton(){

    const no=document.getElementById("noBtn");

    no.onmouseover=()=>{

        const x=Math.random()*260-130;

        const y=Math.random()*180-90;

        no.style.transform=`translate(${x}px,${y}px)`;

    }

}



// ===============================
// YES
// ===============================

function showLetter(){

document.querySelector(".glass-card").innerHTML=`

<div class="letter">

<div class="emoji">

💖

</div>

<h2>

For My Favorite Person

</h2>

<p>

Replace this message with your own.

<br><br>

Write anything you want here.

<br><br>

Everything inside this paragraph

can be edited later.

</p>

<h3>

I Love You ❤️

</h3>

</div>

`;

}



// ===============================
// Floating Hearts
// ===============================

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-40px";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.opacity=".65";

heart.style.pointerEvents="none";

heart.style.zIndex="1";

heart.style.animation=`float ${5+Math.random()*3}s linear forwards`;

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},700);
