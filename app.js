// Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

window.addEventListener("load", defaultGrid);

function defaultGrid() {
    makeRows(16);
    makeColumns(16);
    let myCell = document.getElementsByClassName("cell");
    for (let index = 0; index < myCell.length; index++) {
        const element = myCell[index];
        element.addEventListener('mousemove', runEvent);    
    }
    
}

function runEvent(e){
    console.log("Hello MF");
    e.currentTarget.style.backgroundColor = "rgb(255, 7, 3)";
}

function makeRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    }
}

function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        }
    }
}