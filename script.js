const container = document.querySelector(".container");
const gridButton = document.querySelector("#gridButton");

function createGrid(size) {
    container.innerHTML = "";

    const squareSize = 640 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        let opacity = 0;
        let colorSet = false;

        square.addEventListener("mouseenter", () => {

            // Random color only on the first interaction
            if (!colorSet) {
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);

                square.style.backgroundColor =
                    `rgb(${red}, ${green}, ${blue})`;

                colorSet = true;
            }

            // Increase opacity by 10%
            if (opacity < 1) {
                opacity += 0.1;
            }

            square.style.opacity = opacity;
        });

        container.appendChild(square);
    }
}

createGrid(16);

gridButton.addEventListener("click", () => {
    const size = prompt(
        "Enter the number of squares per side (maximum 100):"
    );

    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a number from 1 to 100.");
    }
});