let x, y, d, weight
    /**
     * true = right
     * false = left
     */
let direction

function setup() {
    x = 600 / 2
    y = 400 / 2
    d = 100
    weight = 4
    direction = true
}

function draw() {
    clear()
    createCanvas(600, 400);
    background("#000");
    stroke("#fff")
    strokeWeight(weight)
    fill("#000")
    if (x == 0 + d / 2 + weight) {
        direction = !direction
    }
    if (x == 600 - d / 2 + weight) {
        direction = !direction
    }

    switch (direction) {
        case true: //right
            circle(x += 2, y, d)
            break;

        case false: //left
            circle(x -= 2, y, d)
            break;
    }
}