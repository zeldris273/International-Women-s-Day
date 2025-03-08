
function startFlowerEffect() {
    for (let i = 0; i < 30; i++) {
        setTimeout(createFlower, i * 200);
    }
}

function createFlower() {
    let flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerText = "🌸";
    document.body.appendChild(flower);

    let startX = Math.random() * window.innerWidth;
    let duration = Math.random() * 6 + 4;

    flower.style.left = startX + "px";
    flower.style.top = "-50px";
    flower.style.animation = `fall ${duration}s linear`;

    setTimeout(() => {
        flower.remove();
    }, duration * 5000);
}

function showMessage() {
    document.getElementById("message").classList.remove("hidden");
    startFlowerEffect();
}
