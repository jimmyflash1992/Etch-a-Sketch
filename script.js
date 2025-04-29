function createGrid(number) {
    if (number <= 100) {
    document.querySelectorAll(".grid").forEach(el => el.remove()); // remove the previous grid
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "wrap"; // allows wrapping to new lines
    container.style.width = `${number * 50}px`; // make container wide enough for 'number' squares

    for (let i = 0; i < number * number; i++) {
        const square = document.createElement("div");
        square.className = "grid";
        square.style.backgroundColor = "pink";
        square.style.width = "50px";
        square.style.height = "50px";
        container.appendChild(square);
    }

    btncontainer.appendChild(container);
}

else {
    document.querySelectorAll(".grid").forEach(el => el.remove()); // remove the previous grid
    alert("Value <= 100 please");

}

}

//create button and append it before the grid and make it sit in the middle of a seperate div above.
const numberButton = document.createElement("button");
const btncontainer = document.createElement("div"); // div for button to reside in
numberButton.textContent = "Number of Cells";
document.body.appendChild(btncontainer);
btncontainer.appendChild(numberButton);

// make button do something now

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    // make a popup appear and ask for 
    createGrid(prompt("Enter grid size"));
    listenGrid();


});



//to do use media query so it fits on every screen and the squares stay square!!

function listenGrid() {

    const divs = document.querySelectorAll(".grid");

    // we use the .forEach method to iterate through each button
    divs.forEach((div) => {
        // and for each one we add a 'click' listener
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "red";
            div.addEventListener("mouseleave", () => {
                div.style.backgroundColor = "pink";

            });
        });


         });



    }