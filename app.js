const container = document.getElementById("grid-container");

for (let i = 1; i < 13; i++) {
    var box = document.createElement("div");
    box.innerHTML = i;
    box.className = "box";
    container.appendChild(box);
}