let righPress = false;
let leftPress = false;

function initEvent() {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
}

function handleKeyDown(event) {
    const { key } = event;
    if (key === 'Right' || key === 'ArrowRight') {
        righPress = true;
    } else if (key === 'Left' || key === 'ArrowLeft') {
        leftPress = true;
    }
}

function handleKeyUp(event) {
    const { key } = event;
    if (key === 'Right' || key === 'ArrowRight') {
        righPress = false;
    } else if (key === 'Left' || key === 'ArrowLeft') {
        leftPress = false;
    }
}
