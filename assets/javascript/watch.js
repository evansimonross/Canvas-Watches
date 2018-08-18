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
  drawComponents();
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

function drawTriangle(x,y,w,h,ang,color,opacity) {
  x*=(canvas.width/512);
  y*=(canvas.width/512);
  w*=(canvas.width/512);
  h*=(canvas.width/512);
  ctx.save();
  ctx.globalAlpha = opacity/100;
  ang = math.rad(ang);
  ctx.translate(x,y);
  ctx.rotate(ang);
  ctx.beginPath();
  ctx.moveTo(0, -1*(h/2));
  ctx.lineTo(w/2, h/2);
  ctx.lineTo(-1*(w/2), h/2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.rotate(-ang);
  ctx.translate(-x,-y);
  ctx.restore();
}

function adjustTriangleHeight(unadjusted) {
  return unadjusted * Math.sqrt(3) / 2;
}

function drawComponents() {
  drawTriangle(130*math.sin(-79), -130*math.cos(-79), 100, adjustTriangleHeight(300), 101, "#4629a1");
  drawTriangle(130*math.sin(-47.4), -130*math.cos(-47.4), 100, adjustTriangleHeight(300), 132.6, "#4629a1");
  drawTriangle(130*math.sin(-15.8), -130*math.cos(-15.8), 100, adjustTriangleHeight(300), 164.2, "#4629a1");
  drawTriangle(130*math.sin(15.8), -130*math.cos(15.8), 100, adjustTriangleHeight(300), 195.8, "#4629a1");
  drawTriangle(130*math.sin(47.4), -130*math.cos(47.4), 100, adjustTriangleHeight(300), 227.4, "#4629a1");
  drawTriangle(130*math.sin(79), -130*math.cos(79), 100, adjustTriangleHeight(300), 259, "#4629a1");
  drawTriangle(130*math.sin(243.2), -130*math.cos(243.2), 45, adjustTriangleHeight(300), 63.2, "#be1717");
  drawTriangle(130*math.sin(211.6), -130*math.cos(211.6), 45, adjustTriangleHeight(300), 31.6, "#be1717");
  drawTriangle(130*math.sin(180), -130*math.cos(180), 45, adjustTriangleHeight(300), 0, "#be1717");
  drawTriangle(130*math.sin(148.4), -130*math.cos(148.4), 45, adjustTriangleHeight(300), -31.6, "#be1717");
  drawTriangle(130*math.sin(116.8), -130*math.cos(116.8), 45, adjustTriangleHeight(300), -63.2, "#be1717");
  //drawTriangle(0, 0, 45, adjustTriangleHeight(300), 0, "#be1717");
}

