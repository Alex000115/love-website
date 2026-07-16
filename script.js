const text = "I Have Something Special To Tell You ❤️";
const typing = document.getElementById("typing");
const btn = document.getElementById("startBtn");

let i = 0;

// Typewriter Effect
function typeWriter() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
    }
}

typeWriter();

// Open Proposal
btn.addEventListener("click", () => {

    document.querySelector(".card").innerHTML = `
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
            style="margin-left:15px;background:#555;">
                NO 😅
            </button>
        </div>
    `;

    yesFunction();
    noFunction();

});

// YES Button
function yesFunction() {

    const yes = document.getElementById("yesBtn");

    yes.addEventListener("click", () => {

        document.querySelector(".card").innerHTML = `

            <div class="letter">

                <div class="heart-big">❤️</div>

                <h1>For My Favorite Person</h1>

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

                <h2>I Love You ❤️</h2>

            </div>

        `;

        createHearts();

    });

}

// NO Button Run Away
function noFunction() {

    const no = document.getElementById("noBtn");

    no.addEventListener("mouseover", () => {

        const x = Math.random() * 300 - 150;
        const y = Math.random() * 200 - 100;

        no.style.transform = `translate(${x}px, ${y}px)`;

    });

}

// Heart Animation
function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 30) + "px";
        heart.style.animation = "float 5s linear";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);

    }, 250);

}

// Background Hearts
setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";
    heart.className = "bgHeart";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (5 + Math.random() * 6) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);

}, 700);
