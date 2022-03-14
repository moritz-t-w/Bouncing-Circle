let x, y
    /**
     * true = right
     * false = left
     */
let direction

function setup() {
    x = 600 / 2
    y = 400 / 2
    direction = true
}

function draw() {
    clear()
    createCanvas(600, 400);
    background("#000");
    stroke("#fff")
    strokeWeight(4)
    fill("#000")
    if (x == 0) {
        direction = !direction
    }
    if (x == 600) {
        direction = !direction
    }

    switch (direction) {
        case true: //right
            circle(x++, y, 100)
            break;

        case false: //left
            circle(x--, y, 100)
            break;
    }
}