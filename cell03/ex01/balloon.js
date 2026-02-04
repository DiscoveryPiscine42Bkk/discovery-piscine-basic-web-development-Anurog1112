let size = 200;
let colors = ['red', 'green', 'blue'];
let colorIndex = 0;

function expandBalloon() {

    size += 10;

    colorIndex++;
    if (colorIndex >= 3) {
        colorIndex = 0;
    }

    if (size > 420) {
        size = 200;
        colorIndex = 0;
    }

    updateBalloon();
}

function shrinkBalloon() {

    if (size > 200) {
        size -= 5;
    }

    colorIndex--;
    if (colors < 0) {
        colorIndex = 2;
    }
    
    updateBalloon();
}

function updateBalloon() {
    
    let balloon = document.getElementById("balloon");

    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
}