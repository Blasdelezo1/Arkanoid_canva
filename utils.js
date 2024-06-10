function intercept(x1, y1, x2, y2, x3, y3, x4, y4, side) {
    const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    if (denom === 0) return null;

    const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
    const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom;

    if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
        return { x: x1 + ua * (x2 - x1), y: y1 + ua * (y2 - y1), side: side };
    }

    return null;
}

function ballInterceptBrick(ball, b) {
    let pt;
    if (ball.dx < 0) {
        pt = intercept(ball.x, ball.y, ball.x + ball.dx, ball.y + ball.dy, b.x + brickWidth, b.y, b.x + brickWidth, b.y + brickHeight, "RIGHT");
    }
    if (!pt && ball.dx > 0) {
        pt = intercept(ball.x, ball.y, ball.x + ball.dx, ball.y + ball.dy, b.x, b.y, b.x, b.y + brickHeight, "LEFT");
    }
    if (!pt && ball.dy < 0) {
        pt = intercept(ball.x, ball.y, ball.x + ball.dx, ball.y + ball.dy, b.x, b.y + brickHeight, b.x + brickWidth, b.y + brickHeight, "BOTTOM");
    }
    if (!pt && ball.dy > 0) {
        pt = intercept(ball.x, ball.y, ball.x + ball.dx, ball.y + ball.dy, b.x, b.y, b.x + brickWidth, b.y, "TOP");
    }
    return pt;
}
