var prnt = '';
var println = function (a) {
  document.writeln(a);
};
var printAll = function() {};

var src = document.location.toString().split("?url=")[1];
if (!src || src === '') {
  println("No page to load.");
  printAll();
  return;
}

println("Loading \"" + src + "\"...");

var xhr = new XMLHttpRequest();
xhr.open(src);
xhr.addEventListener("load", function () {
  println("Loaded!");
});
xhr.addEventListener("error", function () {
  println("Error!");
});
printAll();
