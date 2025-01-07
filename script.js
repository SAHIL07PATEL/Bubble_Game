
var hitSound = document.getElementById("hit-sound");
var gameOverSound = document.getElementById("game-over-sound");
var gameSound =  document.getElementById("start-sound")

document.querySelector("#play").addEventListener('click', () => {
    startGame();
})


const startGame = () => {
    gameSound.play();

    let timer = 60; 
    let score = 0;
    let hitrn = 0;

    const increseScore = () => {
        score++;
        document.getElementById("score").textContent = score;
    }


    const getNewHit = () => {
        hitrn = Math.floor(Math.random() * 10);
        document.querySelector("#hitval").innerHTML = hitrn
    }

    const makeBubble = () => {
        let clutter = ""

        for (let i = 1; i <= 180; i++) {
            let rn = Math.floor(Math.random() * 10)
            clutter += `<div class="buble">${rn}</div>`
        }

        document.querySelector("#pbtm").innerHTML = clutter;
    }

    const runTimer = () => {

        let timerint = setInterval(() => {
            if (timer > 0) {
                timer--;
                document.querySelector("#timerval").textContent = timer;
            } else {
                gameOverSound.play();
                clearInterval(timerint);
                document.querySelector("#pbtm").innerHTML = `<div class="game-over-container">
                    <h1 class="game-over-text">Game Over... Your Score is <span class="score">${score}</span></h1>
                </div>`;                    
            }
        }, 1000);

    }
    

    document.querySelector("#pbtm").addEventListener('click', (dets) => {
        var clickednum = Number(dets.target.textContent)
        if (clickednum === hitrn) {
            hitSound.play();
            increseScore();
            getNewHit();
            dets.target.remove();
        }
    })

    getNewHit();
    runTimer();
    makeBubble();
}


