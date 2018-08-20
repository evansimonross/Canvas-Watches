//This code was generated via the Canvas-Watches tool by Evan Simon Ross
//More info at https://github.com/evansimonross/Canvas-Watches

var math = { rad: function (degrees) { return degrees / 180 * Math.PI; }, sin: function (degrees) { return Math.sin(degrees / 180 * Math.PI); }, cos: function (degrees) { return Math.cos(degrees / 180 * Math.PI); }, floor: function (input) { return Math.floor(input); } }
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
setInterval(drawClock, 10);
var tweens = {};
tweens.anim1 = 0;
var ucolor = "#ffffff";
tweens.rotate = 1;
var var_screen = 0;

var now;
var year;
var month;
var date;
var day;
var hour;
var minute;
var second;
var millisecond;
var drh;
var drm;
var drss;

function drawClock() {
  now = new Date();
  year = now.getFullYear();
  month = now.getMonth();
  date = now.getDate();
  day = now.getDay();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
  millisecond = now.getMilliseconds();
  drh = 360*((hour % 12)/12)+360*(minute/(60*60))+360*(second/(60*60*60));
  drm = 360*(minute/60)+360*(second/(60*60));
  drss = 360*(second/60)+360*(millisecond/(60*1000));

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

function drawCircle(x,y,w,h,ang,color,opacity) {
  x*=(canvas.width/512);
  y*=(canvas.width/512);
  w*=(canvas.width/512);
  h*=(canvas.width/512);
  ctx.save();
  ctx.globalAlpha = opacity/100;
  ctx.rotate(ang);
  ctx.beginPath();
  ctx.ellipse(x, y, w/2, h/2, ang, 0, Math.PI*2)
  ctx.fillStyle = color;
  ctx.fill();
  ctx.rotate(-ang);
  ctx.restore();
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

function drawMarkers(x,y,w,h,radius,rotation,count,shape,color,opacity) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  var ang;
  var num;
  for(num= 0; num < count; num++){
    ang = num * Math.PI / (count/2);
    ctx.rotate(ang);
    switch(shape){
      case "Square":
        drawSquare(0, -radius + h/2, w, h, 0, color, opacity);
        break;
      case "Circle":
        drawCircle(0, -radius + h/2, w, h, 0, color, opacity);
        break;
      case "Triangle":
        var th = adjustTriangleHeight (h);
        drawTriangle(0, -radius + th/2, w, th, 180, color, opacity);
        break;
      default:
        console.log("This type of marker not found");
        break;
    }
    ctx.rotate(-ang);
    }
  ctx.rotate(-rotation);
  ctx.translate(-x,-y);
  ctx.restore();
}

function drawComponents() {
  drawCircle(0, 0, 100, 100, 0, "#000000", 100);
  drawCircle(0, (-1*tweens.anim1), 29, 29, 0, ucolor, 100);
  drawTriangle((44*math.sin((drh*tweens.rotate))), ((-44*math.cos((drh*tweens.rotate)))-tweens.anim1), 30, adjustTriangleHeight(100), (drh*tweens.rotate), ucolor, 100);
  drawCircle((tweens.anim1*math.sin(240)), ((-1*tweens.anim1)*math.cos(240)), 29, 29, 0, ucolor, 100);
  drawTriangle((var_screen===0) ? ((44*math.sin((drh*tweens.rotate)))+(tweens.anim1*math.sin(240))) : ((44*math.sin((drm*tweens.rotate)))+(tweens.anim1*math.sin(240))), (var_screen===0) ? ((-44*math.cos((drh*tweens.rotate)))-(tweens.anim1*math.cos(240))) : ((-44*math.cos((drm*tweens.rotate)))-(tweens.anim1*math.cos(240))), 30, adjustTriangleHeight(100), (var_screen===0) ? (drh*tweens.rotate) : (drm*tweens.rotate), ucolor, 100);
  drawCircle((tweens.anim1*math.sin(120)), ((-1*tweens.anim1)*math.cos(120)), 29, 29, 0, ucolor, 100);
  drawTriangle((var_screen===0) ? ((44*math.sin((drh*tweens.rotate)))+(tweens.anim1*math.sin(120))) : ((44*math.sin((drss*tweens.rotate)))+(tweens.anim1*math.sin(120))), (var_screen===0) ? ((-44*math.cos((drh*tweens.rotate)))-(tweens.anim1*math.cos(120))) : ((-44*math.cos((drss*tweens.rotate)))-(tweens.anim1*math.cos(120))), 30, adjustTriangleHeight(100), (var_screen===0) ? (drh*tweens.rotate) : (drss*tweens.rotate), ucolor, 100);
  drawCircle(((216*math.sin(drm))+(tweens.anim1*math.sin(drm))), ((-216*math.cos(drm))-(tweens.anim1*math.cos(drm))), 29, 29, 0, ucolor, 100);
  drawTriangle(((172*math.sin(drm))+((tweens.anim1+2)*math.sin(drm))), ((-172*math.cos(drm))-((tweens.anim1+2)*math.cos(drm))), 30, adjustTriangleHeight(100), (drm-180), ucolor, 100);
  drawMarkers(0, (-1*tweens.anim1), 13, 24, 120, 0, 12, "Circle", ucolor, 100);
  drawMarkers((tweens.anim1*math.sin(120)), ((-1*tweens.anim1)*math.cos(120)), 13, 24, 120, 0, 12, "Circle", ucolor, 100);
  drawMarkers((tweens.anim1*math.sin(240)), ((-1*tweens.anim1)*math.cos(240)), 13, 24, 120, 0, 12, "Circle", ucolor, 100);
  drawCircle(0, -17, 13, 24, 0, "#ffffff", (var_screen===1) ? (tweens.rotate*100) : 0);
  drawCircle((17*math.sin(120)), (-17*math.cos(120)), 13, 24, 120, "#ffffff", (var_screen===1) ? (tweens.rotate*100) : 0);
  drawCircle((17*math.sin(240)), (-17*math.cos(240)), 13, 24, 240, "#ffffff", (var_screen===1) ? (tweens.rotate*100) : 0);
}

