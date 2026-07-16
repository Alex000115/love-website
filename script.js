const text = "I Have Something Special To Tell You ❤️";
const typing = document.getElementById("typing");
const btn = document.getElementById("startBtn");

let i = 0;

// Typewriter
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

        <p style="color:#fff;font-size:18px;margin-bottom:35px;line-height:1.7;">
            You make my world brighter every single day.
            <br><br>
            Would you like to stay in my heart forever?
        </p>

        <div>
            <button id="yesBtn">
                YES ❤️
            </button>

            <button id="noBtn" style="margin-left:15px;background:#666;">
                NO 😅
            </button>
        </div>
    `;

    yesFunction();
    noFunction();

});


// YES
function yesFunction() {

    const yes = document.getElementById("yesBtn");

    yes.onclick = () => {

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

    };

}


// NO Button
function noFunction() {

    const no = document.getElementById("noBtn");

    no.onmouseover = () => {

        const x = Math.random() * 250 - 125;
        const y = Math.random() * 180 - 90;

        no.style.transform = `translate(${x}px, ${y}px)`;

    };

}


// Floating Hearts (Only After YES)
function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-40px";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "999";
        heart.style.animation = "float 4s linear forwards";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 4000);

    }, 300);

}
