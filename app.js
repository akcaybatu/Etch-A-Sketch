const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let clear = document.getElementById("clearer");

window.addEventListener("load", defaultGrid);

function defaultGrid() {  
    let rangeCell = document.getElementById("rangeCell");
    
    rangeCell.addEventListener("change", changeCell => {
        container.innerHTML = "";
        makeRows(changeCell.target.value);
        makeColumns(changeCell.target.value);
        let myCell = document.getElementsByClassName("cell");
        for (let index = 0; index < myCell.length; index++) {
            const element = myCell[index];
            element.addEventListener('mousemove', runEvent);    
        }
    }) 
    rangeCell.dispatchEvent(new window.Event('change'));
}

function runEvent(e){
    let rnd1 = Math.floor(Math.random() * 255);
    let rnd2 = Math.floor(Math.random() * 255);
    let rnd3 = Math.floor(Math.random() * 255);

    e.currentTarget.style.backgroundColor = `rgb(${rnd1}, ${rnd2}, ${rnd3})`;
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
            newCell.style.width = `${400 / cellNum}px`;
            newCell.style.height = `${400 / cellNum}px`;
        }
    }
}

clear.onclick = function clearTable(){
    var cells = document.getElementsByClassName("cell");
    for (var index = 0; index < cells.length; index++) {
        cells[index].style.backgroundColor = "white";
    }
};