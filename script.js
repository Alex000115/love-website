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

    const no = document.getElementById("noBtn");

    no.onmouseover = () => {

        const x = Math.random() * 260 - 130;

        const y = Math.random() * 180 - 90;

        no.style.transform = `translate(${x}px,${y}px)`;

    }

}



// ===============================
// YES
// ===============================

function showLetter(){

document.querySelector(".glass-card").innerHTML = `

<div class="letter">

<div class="emoji">💖</div>

<h2>

প্রিয় কবিতা, ❤️

</h2>

<p>

তুমি আমার জীবনের সবচেয়ে সুন্দর অধ্যায়।

<br><br>

তোমার হাসিতে আমার শান্তি, তোমার ভালোবাসায় আমার পৃথিবী।

<br><br>

প্রতিদিন নতুন করে তোমার প্রেমে পড়ি।

<br><br>

জীবনে যত ঝড়ই আসুক,
আমি সবসময় তোমার হাত ধরে পাশে থাকতে চাই।

<br><br>

ভালোবাসি তোমায়—আজ, আগামীকাল, আর সারাজীবন। ❤️

</p>

<h3>

ইতি,<br>

তোমার ভালোবাসার মানুষ<br>

<span style="font-size:22px;font-weight:bold;">

Nazrul Islam ❤️

</span>

</h3>

</div>

`;

}



// ===============================
// Floating Hearts
// ===============================

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-40px";

    heart.style.fontSize = (18 + Math.random() * 20) + "px";

    heart.style.opacity = ".65";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "1";

    heart.style.animation = `float ${5 + Math.random() * 3}s linear forwards`;

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}, 700);
