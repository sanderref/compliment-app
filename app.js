const pCompliment = document.getElementById("pCompliment");
const cardCompliment = document.getElementById("cardCompliment");
const btnCompliment = document.getElementById("btnCompliment");

const cardColors = [
  "rgb(102, 255, 171)",
  "rgb(102, 255, 240)",
  "rgb(227, 102, 255)",
  "rgb(255, 102, 199)",
  "rgb(255, 219, 102)"
];

function preload() {
  txt = loadStrings("compliments-list.txt");
}

function setup() {
  pCompliment.innerHTML = txt[floor(Math.random() * (txt.length - 1))];
}

btnCompliment.onclick = function() {
  cardCompliment.style.transform = "translate(0%,100%)";

  cardCompliment.style.backgroundColor =
    cardColors[floor(Math.random() * (txt.length - 1))];
  pCompliment.innerHTML = txt[floor(Math.random() * (txt.length - 1))];
  cardCompliment.style.transform = "translate(0%, 5%)";
};
