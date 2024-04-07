const container = document.querySelector(".container");
const black = document.querySelector("#black");
const color = document.querySelector("#color");

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.style.height = "60px";
    div.style.width = div.style.height;
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#000000";
    });
}

black.addEventListener("click", newGrid);
color.addEventListener("click", newColorGrid);

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

function newColorGrid(squaresPerSide) {
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
            div.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        });
    }
}