const container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.style.height = "60px";
    div.style.width = div.style.height;
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#000000";
    });
}