"use strict";

const svgLink = "colorbook_happyBakers.svg";

// Empty varible to store the color
let color;

function loadSVG() {
  fetch(svgLink)
    .then(e => e.text())
    .then(svg => {
      document.querySelector("main").innerHTML = svg;
      selectColor();
      selectShape();
    });
}

function selectColor() {
  document.querySelector("#colors").addEventListener("click", e => {
    const styles = getComputedStyle(e.target);
    color = styles.fill; // Change the color var and store it

    let pencil = document.querySelector("svg g#pencil #pencil-2");
    pencil.style.fill = color;
  });
}

function selectShape() {
  document.querySelector("#scene").addEventListener("click", e => {
    colorShape(e.target);
  });
}

function colorShape(item) {
  item.style.fill = color; //Add the stored color to shape
}

loadSVG();