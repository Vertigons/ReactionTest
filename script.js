function randomzizeShape(target) {
    target.style.borderRadius = Math.random() * 50 + "%"
}

function randomzizeSize(target) {
    let randomSize = Math.random() * 200
    target.style.width = randomSize + "px"
    target.style.height = randomSize + "px"
}

function randomizeColor(target) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    target.style.backgroundColor = "#" + randomColor
}

function randomizePosition(target) {
    target.style.top = Math.random() * 800 + "px"
    target.style.left = Math.random() * 1500 + "px"
}

function makeTargetAppear(target) {
    start = Date.now()
    target.style.display = "block"
}

function appearAfterSetTime(target) {
    let timeout = Math.random() * (5000 - 2000) + 2000
    setTimeout(function() {
        randomzizeShape(target)
        randomizePosition(target)
        randomizeColor(target)
        randomzizeSize(target)
        makeTargetAppear(target)
    }, timeout)
}

function startGame() {
    let target = document.getElementById("myTarget")
    let timeout = 2000

    setTimeout(function() {
        target.classList.add("square")
        makeTargetAppear(target)
    }, timeout)

    let button = document.getElementById("startButton")
    button.style.display = "none"
}

document.getElementById("myTarget").onclick = function() {

    var end = Date.now()

    document.getElementById("timeDisplay").innerHTML = "Time: " + (end - start) / 1000 + "s"
    let target = document.getElementById("myTarget")
    target.style.display = "none"

    appearAfterSetTime(target)
}