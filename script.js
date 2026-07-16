const typing = document.getElementById("typing");
const startBtn = document.getElementById("startBtn");

const text = "I Have Something Special To Tell You ❤️";

let i = 0;

// Typewriter
function typeWriter() {

    if (i < text.length) {

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 60);

    }

}

typeWriter();


// Open Proposal

startBtn.addEventListener("click", () => {

    document.querySelector(".glass-card").innerHTML = `

        <div class="proposal">

            <div class="emoji">❤️</div>

            <h2>Will You Be Mine?</h2>

            <p>

                Every smile of yours
                makes my world brighter.

                <br><br>

                Would you like to stay
                in my heart forever?

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

    yesFunction();

    noFunction();

});




// YES

function yesFunction(){

    document.getElementById("yesBtn").onclick=()=>{

        document.querySelector(".glass-card").innerHTML=`

        <div class="letter">

            <div class="emoji">

                ❤️

            </div>

            <h2>

                For My Favorite Person

            </h2>

            <p>

                From the very first moment,

                you became the reason behind my smile.

                <br><br>

                Every day with you feels like
                the most beautiful chapter
                of my life.

                <br><br>

                No matter where life takes us,

                I just want one thing...

                <br><br>

                Stay beside me forever ❤️

            </p>

            <h3>

                I Love You ❤️

            </h3>

        </div>

        `;

    }

}



// NO Button

function noFunction(){

    const no=document.getElementById("noBtn");

    no.onmouseover=()=>{

        const x=Math.random()*250-125;

        const y=Math.random()*180-90;

        no.style.transform=`translate(${x}px,${y}px)`;

    }

}





// ===============================
// Floating Hearts Background
// ===============================

setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-40px";

    heart.style.fontSize=(18+Math.random()*22)+"px";

    heart.style.opacity=".7";

    heart.style.pointerEvents="none";

    heart.style.zIndex="1";

    heart.style.animation=`float ${5+Math.random()*4}s linear forwards`;

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

},700);
