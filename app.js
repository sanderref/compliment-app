function preload() {}

function setup() {
  document.getElementById("test").innerHTML = loadStrings(
    "compliments-list.txt"
  );
}
