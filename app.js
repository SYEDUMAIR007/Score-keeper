
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const reset = document.querySelector("#reset");
let p1Score = document.querySelector("#p1Score");
let p2Score = document.querySelector("#p2Score");
let p1Input = document.querySelector("#p1");
let p2Input = document.querySelector("#p2");
let winningScoreSelector = document.querySelector("#winningScoreSelector")
let gameSelector = document.querySelector('#gameSelector');
let gameImages = document.querySelector('#gameImages');
let svgs=document.createElement("img");
let svgh1=document.querySelector("#head");
let gameSvgs = document.querySelector('#gameSvgs');
let score1 = 0;
let score2 = 0;
let winningScore = 3;
let gameOver = false;

player1.addEventListener('click', () => {
    if (!gameOver) {
        score1 += 01;
        if (score1 === winningScore) {
            gameOver = true;
            p1Score.classList.add("winner")
            p2Score.classList.add("loser")
        }
            if (score1 < 9)
            p1Score.textContent = "0" + score1;
            else
            p1Score.textContent = score1;
         
    }
})
player2.addEventListener('click', () => {
    if (!gameOver) {
        score2 += 01;
        if (score2 === winningScore) {
            gameOver = true;
            p2Score.classList.add("winner")
            p1Score.classList.add("loser")
        }

        if (score2 < 9)
            p2Score.textContent = "0" + score2;
            else
            p2Score.textContent = score2;

    }
})
winningScoreSelector.addEventListener('change', () => {
    winningScore = parseInt(winningScoreSelector.value)
    reseter();
})

reset.addEventListener('click', reseter)


function reseter() {
    score1 = 0;
    score2 = 0;
    gameOver = false;
    p1Score.textContent = "0"+score1;
    p2Score.textContent = "0"+score2;
    p1Score.classList.remove("winner", "loser");
    p2Score.classList.remove("winner", "loser");
    player1.textContent = "+1 Player one";
    player2.textContent = "+1 Player two";
    p1Input.value = "";
    p2Input.value = "";
}
gameSelector.addEventListener('change', () => {
    gameChanger(gameSelector.value);
    reseter();
})

function gameChanger() {
    switch (gameSelector.value) {
        case "footBall":
            player1.removeAttribute("disabled");
            player2.removeAttribute("disabled");
            document.body.classList.add("fbbackground")
            document.body.classList.remove("tennisbackground")
            document.body.classList.remove("bbbackground");
            svgh1.before(svgs);
            svgs.setAttribute("src","./img/footballsvg.svg");
            break;
        case "tennis":
            player1.removeAttribute("disabled");
            player2.removeAttribute("disabled");
            document.body.classList.add("tennisbackground");
            document.body.classList.remove("fbbackground");
            document.body.classList.remove("bbbackground");
            svgh1.before(svgs);
            svgs.setAttribute("src","./img/tennissvg.svg");
    
            break;
        case "basketBall":
            player1.removeAttribute("disabled");
            player2.removeAttribute("disabled");
            document.body.classList.add("bbbackground");
            document.body.classList.remove("tennisbackground");
            document.body.classList.remove("fbbackground");
            svgh1.before(svgs);
            svgs.setAttribute("src","./img/basketballsvg.svg");
        
            break;
        case "selectGame":
            svgs.remove();
            document.body.classList.remove("tennisbackground");
            document.body.classList.remove("fbbackground");
            document.body.classList.remove("bbbackground");
            break;
    }
}
if (gameSelector.value === "selectGame") {
    player1.setAttribute("disabled", "");
    player2.setAttribute("disabled", ""); 
}
p1Input.addEventListener('input', () => {
    player1.textContent = "+1 " + p1Input.value;
})

p2Input.addEventListener('input', () => {
    player2.textContent = "+1 " + p2Input.value;
})

