var math = { rad: function (degrees) { return degrees / 180 * Math.PI; }, sin: function (degrees) { return Math.sin(degrees / 180 * Math.PI); }, cos: function (degrees) { return Math.cos(degrees / 180 * Math.PI); } }
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
setInterval(drawClock, 10);
var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var millisecond = now.getMilliseconds();

function drawClock() {
  drawFace();
  cutOut();
}

function cutOut() { 
  ctx.save(); 
  ctx.translate(-radius, -radius); 
  ctx.globalCompositeOperation = "destination-in";
  ctx.beginPath(); 
  ctx.arc(radius, radius, radius, 0, 2 * Math.PI); 
  ctx.fill(); 
  ctx.restore(); 
}

function drawFace() {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
}

