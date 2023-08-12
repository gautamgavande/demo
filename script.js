var score = 0;
var timer = 60;
var hit;

function scoresetter(newscore) {
    score = newscore;
    document.querySelector("#score").textContent = score;
}

function makebubbles() {
    var clutter = " ";
    for (var i = 0; i < 84; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += ` <div class="bubble">${rn}</div>`;
    }
    document.querySelector("#bubbles").innerHTML = clutter;

}

function settimer() {
    setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;

        } else {
            document.querySelector("#bubbles").innerHTML = `<h1>game over <br> score was : ${score}</h1>`;
        }
    }, 1000);
}

function getnewhit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hit;
}

function mainengine() {
    document.querySelector("#bubbles")
        .addEventListener("click", function(dets) {
            if (Number(dets.target.textContent) === hit) {
                scoresetter(score += 10);
                makebubbles();
                getnewhit();
            }
        })
}
// mainengine();
// getnewhit();
// settimer();
// scoresetter(score);
// makebubbles();
var btn = document.querySelector("#bt")
btn.addEventListener("click", function() {
    main.style.top = "0%";
    mainengine();
    getnewhit();
    settimer();
    scoresetter(score);
    makebubbles();
})