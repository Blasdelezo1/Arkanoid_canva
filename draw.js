function drawBall(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle(paddleX, paddleY, paddleWidth, paddleHeight) {
    ctx.drawImage(paddleImg, paddleX, paddleY, paddleWidth, paddleHeight);
}

function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            const currentBrick = bricks[c][r];
            if (currentBrick.status === brickStatus.destroyed) continue;

            const clipX = currentBrick.color * 32;
            ctx.drawImage($bricks, clipX, 0, 32, 14, currentBrick.x, currentBrick.y, brickWidth, brickHeight);
        }
    }
}

function cleanCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
