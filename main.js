const container = document.querySelector(".container");
const button = document.querySelector("button");

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.style.height = "60px";
    div.style.width = div.style.height;
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#000000";
    });
}

button.addEventListener("click", newGrid);

function newGrid(squaresPerSide) {
    squaresPerSide = prompt("Enter number of squares per side:", 16);
    if (squaresPerSide > 100) {
        alert("Maximum number is 100");
        return;
    }
    const div = document.querySelectorAll(".container div");
    div.forEach(square => {
        container.removeChild(square);
    })
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const div = document.createElement("div");
        container.appendChild(div);
        div.style.height = 960 / squaresPerSide + "px";
        div.style.width = div.style.height;
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "#000000";
        });
    }
}