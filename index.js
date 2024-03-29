var c = document.getElementById ("gameScreen");
var ctx = c.getContext ("2d");
var waltherHeight = 175;
var waltherWidth = 250;
var waltherX = 10;
var waltherY = -10;
var waltherDx = 8;
var waltherDy = -8;
var waltherheadHeight = 175;
var waltherheadWidth = 176;
var waltherheadX = 120;
var waltherheadY = -10;
var waltherheadDx = 8;
var x = Math.floor (Math.random() * 750);
var y = 0;
var dx = 0;
var dy = 3;
var waltherImg = new Image;
var waltherHeadImg = new Image;
var steakImg = new Image;
var lives = 3;
var score = 0;
var bark = new Audio;
var paused = document.getElementById ("pause");
var Continue = document.getElementById ("continue");
var btm = document.getElementById ("backToMenu");
var bPressed;
var leftPressed;
var rightPressed;

menu = ctx.fillStyle = "#696969";
ctx.fillRect (0, 0, c.width, c.height);
paused.style.display = "none";
Continue.style.display = "none";
btm.style.display = "none";
backToMenu2.style.display = "none";
backToMenuPause.style.display = "none";


window.onload = function() {
    bark.src = "bark.m4a";
    steakImg.src = "steak.png";
    waltherHeadImg.src = "Waltherhead.png";
    waltherImg.src = "waltherman.png";
    waltherImg.onload = function() {
    }
}

function Score() {
    ctx.fillStyle = "#000";
    ctx.font = "27px Ariel";
    ctx.fillText ("Score: " + score, 18.89, 30);
}

function keyUpHandler(event) {
    if (event.keyCode == 39) {
        rightPressed = false;
    } else if (event.keyCode == 37) {
        leftPressed = false;
    }
}

function keyDownHandler(event) {
    if (event.keyCode == 39) {
        rightPressed = true;
    } else if (event.keyCode == 37) {
        leftPressed = true;
    }
    if (event.keyCode == 66) {
        bark.play();
    }
    if (event.keyCode == 27) {
        pause();    
    }
    if (event.keyCode == 32) {
        notPaused();
    }
}

document.addEventListener ('keyup', keyUpHandler, false);
document.addEventListener ('keydown', keyDownHandler, false);

function Lives() {
    ctx.font = "27px Ariel";
    ctx.fillText ("Lives: " + lives, 20, 60);
}

function pause() {
    waltherDx = 0;
    waltherheadDx = 0;
    dy = 0;
    paused.style.display = "initial";
    Continue.style.display = "initial";
    backToMenuPause.style.display = "initial";
    bark.remove();
}

function notPaused() {
    dy = 3;
    waltherDx = 8;
    waltherheadDx = 8;
    paused.style.display = "none";
    Continue.style.display = "none";
    backToMenuPause.style.display = "none";
}

function rain() {
    ctx.drawImage (steakImg, x, y, 75, 45);
}
function drawWalther() {
    ctx.clearRect (0, 0, c.width, c.height);
    ctx.drawImage (waltherImg, waltherX, 275, waltherWidth, waltherHeight);
    ctx.drawImage (waltherHeadImg, waltherheadX, 287, waltherheadWidth, waltherheadHeight);
}

function gameOver() {
    btm.style.display = "initial";
    ctx.fillStyle = "#000";
    ctx.fillRect (0, 0, c.width, c.height);
    ctx.fillStyle = "#f00";
    ctx.font = "75px Arial"
    ctx.fillText ("GAME OVER!", 185, 200);
    ctx.fillStyle = "#0f0";
    ctx.font = "30px Arial"
    ctx.fillText ("Your score was: " + score, 195, 255);
    
    waltherDx = 0;
    waltherheadDx = 0;
    dy = 0;
}

function closeWin() {
  window.close(); 
}

function refresh() {
    window.location.reload();
}

function tutorial() {
    startBtn.style.display = "none";
    tutorialBtn.style.display = "none";
    exitBtn.style.display = "none";
    headline.style.display = "none";
    waltherhead1.style.display = "none";
    waltherhead2.style.display = "none";
    drawWalther();
    Score();
    Lives();
    ctx.drawImage (steakImg, 620, 7, 75, 45);
    ctx.fillStyle = "#000";
    ctx.font = "22px Arial";
    ctx.fillText ("Your score and lives left will be displayed here", 80, 175);
    ctx.beginPath();
    ctx.moveTo (100, 75);
    ctx.lineTo (250, 150);
    ctx.stroke();
    ctx.fillStyle = "#000";
    ctx.font = "22px Arial";
    ctx.fillText ("Steaks spawn that walther needs to catch", 400, 130);
    ctx.beginPath();
    ctx.moveTo (630, 50);
    ctx.lineTo (600, 100);
    ctx.stroke();
    ctx.fillStyle = "#000";
    ctx.font = "22px Arial";
    ctx.fillText ("Press the b button to make Walther bark", 60, 285);
    ctx.beginPath();
    ctx.moveTo (220, 300);
    ctx.lineTo (200, 340);
    ctx.stroke();
    backToMenu2.style.display = "initial";
}


function draw() {
    drawWalther();
    rain();
    Score();
    Lives();

    startBtn.style.display = "none";
    tutorialBtn.style.display = "none";
    exitBtn.style.display = "none";
    headline.style.display = "none";
    waltherhead1.style.display = "none";
    waltherhead2.style.display = "none";
    
    if (rightPressed && (waltherX + waltherWidth) < 865) {
        waltherX += waltherDx;
    } else if (leftPressed && waltherX > -54){
        waltherX -= waltherDx;
    }
    
    if (y + dy > c.height - 100) {
        y = 10;
        x = Math.floor (Math.random() * 750);
        lives -= 1;
    }
    
    if (y + dy < 0 || y + dy > c.height - waltherHeight -
    0 && x + dx > waltherX && x + dx < waltherX +
    waltherWidth) {
        y = 10;
        x = Math.floor (Math.random() * 750);
        score += 1;
        dy += 0.10;
    }
    
    if (lives < 1) {
        gameOver();
    }
    
    if (rightPressed && (waltherheadX + waltherheadWidth) < 900) {
        waltherheadX += waltherheadDx;
    } else if (leftPressed && waltherheadX > 50){
        waltherheadX -= waltherheadDx;
    }
    x -= dx;
    y += dy;
    
    requestAnimationFrame(draw);
}
