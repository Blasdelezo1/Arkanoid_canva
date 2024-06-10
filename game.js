let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = -2;
let dy = -3;

let paddleHeight = 10;
let paddleWidth = 50;
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = canvas.height - paddleHeight - 10;

function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            const currentBrick = bricks[c][r];
            if (currentBrick.status === brickStatus.destroyed) continue;

            const pt = ballInterceptBrick({ x: x, y: y, dx: dx, dy: dy }, { x: currentBrick.x, y: currentBrick.y });

            if (pt) {
                if (pt.side === "RIGHT" || pt.side === "LEFT") {
                    dx = -dx;
                } else {
                    dy = -dy;
                }
                currentBrick.status = brickStatus.destroyed;
            }
        }
    }
}

function ballMovement() {
    if (x + dx > canvas.width - ballRadius - borderWidth || x + dx < ballRadius + borderWidth) {
        dx = -dx;
    }
    if (y + dy < ballRadius + borderWidth) {
        dy = -dy;
    }

    const isBallSameXasPaddle = x > paddleX && x < paddleX + paddleWidth;
    const isBallTouchingPaddle = y + dy > paddleY;

    if (isBallSameXasPaddle && isBallTouchingPaddle) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
        console.log('GameOver....!!');
        document.location.reload();
    }

    x += dx;
    y += dy;
}

function paddleMovement() {
    if (righPress && paddleX < canvas.width - paddleWidth - borderWidth) {
        paddleX += PADDLE_SENSIBILITY;
    } else if (leftPress && paddleX > borderWidth) {
        paddleX -= PADDLE_SENSIBILITY;
    }
}

function draw() {
    cleanCanvas();
    drawBall(x, y);
    drawPaddle(paddleX, paddleY, paddleWidth, paddleHeight);
    drawBricks();
    // drawScore();
    // drawLives();

    collisionDetection();
    ballMovement();
    paddleMovement();

    window.requestAnimationFrame(draw);
}

draw();
initEvent();
