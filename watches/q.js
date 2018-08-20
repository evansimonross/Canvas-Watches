//This code was generated via the Canvas-Watches tool by Evan Simon Ross
//More info at https://github.com/evansimonross/Canvas-Watches

var math = { rad: function (degrees) { return degrees / 180 * Math.PI; }, sin: function (degrees) { return Math.sin(degrees / 180 * Math.PI); }, cos: function (degrees) { return Math.cos(degrees / 180 * Math.PI); }, floor: function (input) { return Math.floor(input); } }
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
setInterval(drawClock, 10);
var ucolor = "#7388c7";
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
var drh0;
var dm;
var dn;
var dd;
var ddw0;

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
  drh0 = 360*((hour % 12)/12);
  dm = minute;
  dn = month + 1;
  dd = date;
  ddw0 = day;

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

function drawMarkersHM(x,y,radius,rotation,hourMarkers,minuteMarkers,hourColor,minuteColor,opacity) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  var ang;
  var num;
  for(num= 1; num <= 60; num++){
    ang = num * Math.PI / 30;
    ctx.rotate(ang);
    if (num%5===0) {
      switch(hourMarkers){
        case "None": break;
        case "Tiny":
          var w = 2.5;
          var h = 7.5;
          drawSquare(0, -radius + h/2, w, h, 0, hourColor, opacity);
          break;
        case "Small":
          var w = 5;
          var h = 15;
          drawSquare(0, -radius + h/2, w, h, 0, hourColor, opacity);
          break;
        case "Medium":
          var w = 7.5;
          var h = 22.5;
          drawSquare(0, -radius + h/2, w, h, 0, hourColor, opacity);
          break;
        case "Large":
          var w = 10;
          var h = 30;
          drawSquare(0, -radius + h/2, w, h, 0, hourColor, opacity);
          break;
        case "XLarge":
          var w = 12.5;
          var h = 37.5;
          drawSquare(0, -radius + h/2, w, h, 0, hourColor, opacity);
          break;
        case "Circle":
          var w = 20;
          var h = 20;
          drawCircle(0, -radius + h/2, w, h, 0, hourColor, opacity);
          break;
        case "Triangle":
          var w = 12.5;
          var h = adjustTriangleHeight (30);
          drawTriangle(0, -radius + h/2, w, h, 180, hourColor, opacity);
          break;
        default: 
          console.log("This type of marker not found");
          break;
      }
    }
    else{
      switch(minuteMarkers){
        case "None": break;
        case "Tiny":
          var w = 1;
          var h = 5;
          drawSquare(0, -radius + h/2, w, h, 0, minuteColor, opacity);
          break;
        case "Small":
          var w = 2.5;
          var h = 8.75;
          drawSquare(0, -radius + h/2, w, h, 0, minuteColor, opacity);
          break;
        case "Medium":
          var w = 4;
          var h = 12.5;
          drawSquare(0, -radius + h/2, w, h, 0, minuteColor, opacity);
          break;
        case "Large":
          var w = 5.5;
          var h = 16.25;
          drawSquare(0, -radius + h/2, w, h, 0, minuteColor, opacity);
          break;
        case "XLarge":
          var w = 7;
          var h = 20;
          drawSquare(0, -radius + h/2, w, h, 0, minuteColor, opacity);
          break;
        case "Circle":
          var w = 7.5;
          var h = 7.5;
          drawCircle(0, -radius + h/2, w, h, 0, minuteColor, opacity);
          break;
        case "Triangle":
          var w = 7.5;
          var h = adjustTriangleHeight (17.5);
          drawTriangle(0, -radius + h/2, w, h, 180, minuteColor, opacity);
          break;
        default:
          console.log("This type of marker not found");
          break;
      }
    }
    ctx.rotate(-ang);
  }
  ctx.rotate(-rotation);
  ctx.translate(-x,-y);
  ctx.restore();
}

function drawSquare(x,y,w,h,ang,color,opacity) {
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
  ctx.moveTo(-1*(w/2), -1*(h/2));
  ctx.lineTo(w/2, -1*(h/2));
  ctx.lineTo(w/2, h/2);
  ctx.lineTo(-1*(w/2), h/2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.rotate(-ang);
  ctx.translate(-x,-y);
  ctx.restore();
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
  drawCircle(0, 0, 440, 440, 0, ucolor, 100);
  drawCircle(0, 0, 400, 400, 0, "#000000", 100);
  drawCircle(0, 0, 335, 335, 0, ucolor, (var_screen===1) ? 100 : 0);
  drawCircle(0, 0, 295, 295, 0, "#000000", 100);
  drawCircle(0, 0, 230, 230, 0, ucolor, 100);
  drawCircle(0, 0, 190, 190, 0, "#000000", 100);
  drawMarkersHM(0, 0, 256, 0, "Circle", "None", ucolor, "#ffffff", 100);
  drawSquare((172*math.sin(drh0)), (-172*math.cos(drh0)), 20, 148, drh0, ucolor, 100);
  drawSquare((210*math.sin(((dm-(dm%5))*6))), (-210*math.cos(((dm-(dm%5))*6))), 21, 21, ((dm-(dm%5))*6), "#010003", 100);
  drawSquare((210*math.sin((((dm-(dm%5))+5)*6))), (-210*math.cos((((dm-(dm%5))+5)*6))), 21, 21, (((dm-(dm%5))+5)*6), "#010003", ((dm%5)>=1) ? 100 : 0);
  drawSquare((210*math.sin((((dm-(dm%5))+10)*6))), (-210*math.cos((((dm-(dm%5))+10)*6))), 21, 21, (((dm-(dm%5))+10)*6), "#010003", ((dm%5)>=2) ? 100 : 0);
  drawSquare((210*math.sin((((dm-(dm%5))+15)*6))), (-210*math.cos((((dm-(dm%5))+15)*6))), 21, 21, (((dm-(dm%5))+15)*6), "#010003", ((dm%5)>=3) ? 100 : 0);
  drawSquare((210*math.sin((((dm-(dm%5))+20)*6))), (-210*math.cos((((dm-(dm%5))+20)*6))), 21, 21, (((dm-(dm%5))+20)*6), "#010003", ((dm%5)>=4) ? 100 : 0);
  drawMarkers(0, 0, 20, 20, 195, 0, 4, "Circle", ucolor, (var_screen===1) ? 100 : 0);
  drawMarkers(0, 0, 20, 20, 140, 0, 10, "Circle", ucolor, (var_screen===1) ? 100 : 0);
  drawMarkers(0, 0, 20, 20, 37, 0, 6, "Circle", ucolor, (var_screen===1) ? 100 : 0);
  drawCircle(0, 0, 20, 20, 0, ucolor, (var_screen===1) ? 100 : 0);
  drawCircle((246*math.sin((dn*30))), (-246*math.cos((dn*30))), 17, 17, 0, "#010000", (var_screen===1) ? 100 : 0);
  drawCircle((185*math.sin((math.floor((dd/10))*90))), (-185*math.cos((math.floor((dd/10))*90))), 17, 17, 0, "#010000", (var_screen===1) ? 100 : 0);
  drawCircle((130*math.sin(((dd%10)*36))), (-130*math.cos(((dd%10)*36))), 17, 17, 0, "#010000", (var_screen===1) ? 100 : 0);
  drawCircle((27*math.sin((ddw0*60))), (-27*math.cos((ddw0*60))), 17, 17, 0, "#010000", (var_screen===1) && (ddw0!=6) ? 100 : 0);
  drawCircle(0, 0, 17, 17, 0, "#010000", (var_screen===1) && (ddw0===6) ? 100 : 0);
}

