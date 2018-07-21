var rectangles = [];
var timer = 250;

setInterval(function () {
    let newRectangle = createRectangle();
    document.body.appendChild(newRectangle);

    // if(rectangles.length<2){
    rectangles.push(newRectangle);
    // }
    rectangles.forEach(function (rectangle) {
        rectangle.goDown();
    })

}, timer);

function createRectangle() {
    let rectangle = document.createElement("div");
    rectangle.classList.add('rectangle');
    let x = Math.floor(Math.random() * (window.screen.width - 10) + 10);

    rectangle.style.top = `20px`;
    rectangle.style.left = `${x}px`;


    rectangle.goDown = function () {

        let screenHeight = window.screen.height;
        var rectanglePlace = rectangle.getBoundingClientRect();

        let triangle = document.getElementById('triangle');
        var trianglePlace = triangle.getBoundingClientRect();
        // console.log(trianglePlace);

        if (verifyDeath(trianglePlace, rectanglePlace) == true) {
            alert('GAME OVEEEEER');
        }

        if (rectanglePlace['top'] > screenHeight - (rectanglePlace['bottom'] - rectanglePlace['top'])) {
            document.body.removeChild(rectangle);
            let index = rectangles.indexOf(rectangle);
            rectangles.splice(index, 1);
        }

        rectangle.style.top = `${getNumberFromStyle(rectangle.style.top) + 20}px`;
        // rectangle.style.top = 20px
    }

    return rectangle;
}

function getNumberFromStyle(styleString) {
    return Number.parseInt(styleString.split("px")[0]);
}

window.addEventListener("keydown", checkKey);
let triangle = document.getElementById("triangle");
triangle.style.left = window.screen.width / 2 - 60 + "px";

function checkKey(e) {
    if (e.keyCode == '37') {
        let left = getNumberFromStyle(triangle.style.left);
        if (left != 0) {
            left -= 10;
            triangle.style.left = left + "px";
        }
    }
    else if (e.keyCode == '39') {
        let left = getNumberFromStyle(triangle.style.left);
        console.log(window.screen.width);
        if (left < window.screen.width - 120) {
            left += 10;
            triangle.style.left = left + "px";
        }
    }
}

function verifyDeath(triangle, rectangle) {
    if ((triangle.left < rectangle.right && triangle.left > rectangle.left) || (triangle.right < rectangle.right && triangle.right > rectangle.left)) {
        if (triangle['height'] > (window.screen.height - rectangle['top'] - rectangle['height'])) {
            return true;
        }
    }
}