function preload() {
  txt = loadStrings("compliments-list.txt");
}

function setup() {
  document.getElementById("compliment").innerHTML =
    txt[floor(Math.random() * txt.length)];
}
