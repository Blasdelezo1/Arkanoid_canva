const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const $sprite = document.querySelector('#sprite');
const $bricks = document.querySelector('#bricks');

canvas.width = 470;
canvas.height = 500;

const ballRadius = 4;
const paddleImg = new Image();
paddleImg.src = '../images/SP_Paddle_01.png';

const PADDLE_SENSIBILITY = 7;
const borderWidth = 10;

const brickRowCount = 6;
const brickColumnCount = 13;
const brickWidth = 30;
const brickHeight = 14;
const brickPadd = 2;
const brickOfSetTop = 80;
const bricksOfSetLeft = 30;

const brickStatus = {
    active: 1,
    destroyed: 0
};

let bricks = [];

for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        const brickX = c * (brickWidth + brickPadd) + bricksOfSetLeft;
        const brickY = r * (brickHeight + brickPadd) + brickOfSetTop;
        const randomColor = Math.floor(Math.random() * 8);
        bricks[c][r] = {
            x: brickX,
            y: brickY,
            status: brickStatus,
            color: randomColor
        };
    }
}
