// Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

window.addEventListener("load", defaultGrid);
// Creates a default grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

// defaultGrid();

// document.getElementsByClassName("lala").addEventListener('click', runEvent);

// function runEvent(e){
//     console.log("Hello MF");
//     document.getElementsByClassName("lala").style.backgroundColor = "rgb(255, 7, 3)";
// }

function changeColor(e){
    console.log("Hello")
    e.target.style.backgroundColor = "rgb(200, 4, 2)";
}