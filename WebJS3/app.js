const container = document.querySelector("#glass");

const WIDTH = 30;
const HEIGHT = 30;

for(let i = 0; i < WIDTH * HEIGHT; i = i +1) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.id = "square" + i;
    square.addEventListener("mouseover", function() {
        square.style.transitionDuration = "0s";
        setColor(square);
    })
    square.addEventListener("mouseleave", function() {
        square.style.transitionDuration = "2s";
        removeColor(square);
    })

    container.append(square);
}

function setColor(square) {
    square.style.backgroundColor = getRandomColor();
}

function removeColor(square) {
    square.style.backgroundColor = "#333";
}

function getRandomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    //rgb(128, 100, 10);
    const color = `rgb(${red}, ${green}, ${blue})`
    return color;
}

const colors = ["red", "green", "yellow", "blue", "violet"];

container.addEventListener("mousemove", function () {
    const element = event.target;
    if (element,classList.contains("square")) {
        const id = element.id;
        id = id.slice(6);
    }
});