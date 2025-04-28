function createGrid(number) {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "wrap"; // allows wrapping to new lines
    container.style.width = `${number * 50}px`; // make container wide enough for 'number' squares

    for (let i = 0; i < number * number; i++) {
        const square = document.createElement("div");
        square.style.backgroundColor = "pink";
        square.style.width = "50px";
        square.style.height = "50px";
        container.appendChild(square);
    }

    document.body.appendChild(container);
}

//create button and append it before the grid and make it sit in the middle of a seperate div above.
const numberButton = document.createE

//to do use media query so it fits on every screen and the squares stay square!!



createGrid(prompt("Number of Squares per side?"));

const divs = document.querySelectorAll("div");

// we use the .forEach method to iterate through each button
divs.forEach((div) => {
  // and for each one we add a 'click' listener
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "red";
    
  });
});



// add one for mouse 
// we use the .forEach method to iterate through each button
divs.forEach((div) => {
    // and for each one we add a 'click' listener
    div.addEventListener("mouseleave", () => {
      div.style.backgroundColor = "pink";
    });
  });