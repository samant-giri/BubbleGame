let content = "";

const box = document.querySelector("#bubble-space");
const timer = document.querySelector("#timer");

function bubbleGenrator() {
    for (let i = 0; i < 140; i++){
    content += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    // const bubble = document.createElement("div");
    // bubble.id = "bubble";
    // bubble.innerHTML = Math.floor(Math.random() * 10);
    // box.appendChild(bubble);
    }
    box.innerHTML = content;
}



let time = 20;
function runTimer() {
    let timefunc = setInterval(() => {
        if (time >= 0) {
            timer.innerText = time;
            time--;
        }
        else {
            box.innerHTML = `<h1>Game Over</h1>`
            clearInterval(timefunc);
        }
    }, 1000);
};

runTimer();

var hitVal = 0;
function updateHit() {
    hitVal = Math.floor(Math.random() * 10)
    document.querySelector("#hit").textContent = hitVal;
}

var score = 0;
function setScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

updateHit();

// var scoreInt = setInterval(() => {
//     if (time > 0) {
    
//     }
//     else {
//         clearInterval(scoreInt);
//     }
// }, 100)

// document.querySelectorAll(".bubble").forEach((elem) => {
//     elem.addEventListener("click", (dets) => {
//         if (elem.innerText == hitVal) {
//             setScore();
//         }
//     })
// });

box.addEventListener("click", (dets) => {
    if (Number(dets.target.innerText) === hitVal) {
        setScore();
        updateHit();
        content = "";
        bubbleGenrator();
    }
})

bubbleGenrator();