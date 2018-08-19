var math = { rad: function (degrees) { return degrees / 180 * Math.PI; }, sin: function (degrees) { return Math.sin(degrees / 180 * Math.PI); }, cos: function (degrees) { return Math.cos(degrees / 180 * Math.PI); }, floor: function (input) { return Math.floor(input); } }
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
setInterval(drawClock, 10);

var now;
var year;
var month;
var date;
var day;
var hour;
var minute;
var second;
var millisecond;
var dh;
var drss;
var dmt;
var dmo;

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
  dh = hour === 0 ? 12 : hour % 12;
  drss = 360*(second/60)+360*(millisecond/(60*1000));
  dmt = math.floor(minute/10);
  dmo = minute % 10;

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

function drawComponents() {
  drawCircle((dh<=1) ? (200*math.cos((drss*10))) : (200*math.cos(((drss*10)+24))), (dh<=1) ? (((100*math.cos((drss*10)))*math.sin((drss*10)))-100) : (((100*math.cos(((drss*10)+24)))*math.sin(((drss*10)+24)))-100), 35, 35, 0, "#ea4d95", 100);
  drawCircle((dh<=2) ? (200*math.cos((drss*10))) : (200*math.cos(((drss*10)+48))), (dh<=2) ? (((100*math.cos((drss*10)))*math.sin((drss*10)))-100) : (((100*math.cos(((drss*10)+48)))*math.sin(((drss*10)+48)))-100), 35, 35, 0, "#d94da6", 100);
  drawCircle((dh<=3) ? (200*math.cos((drss*10))) : (200*math.cos(((drss*10)+72))), (dh<=3) ? (((100*math.cos((drss*10)))*math.sin((drss*10)))-100) : (((100*math.cos(((drss*10)+72)))*math.sin(((drss*10)+72)))-100), 35, 35, 0, "#c84db7", 100);
  drawCircle((dh<=4) ? (200*math.cos((drss*10))) : (200*math.cos(((drss*10)+96))), (dh<=4) ? (((100*math.cos((drss*10)))*math.sin((drss*10)))-100) : (((100*math.cos(((drss*10)+96)))*math.sin(((drss*10)+96)))-100), 35, 35, 0, "#b74dc8", 100);
  drawCircle((dh<=5) ? (200*math.cos((drss*10))) : (200*math.cos(((drss*10)+120))), (dh<=5) ? (((100*math.cos((drss*10)))*math.sin((drss*10)))-100) : (((100*math.cos(((drss*10)+120)))*math.sin(((drss*10)+120)))-100), 35, 35, 0, "#a64dd9", 100);
  drawCircle((dh<=6) ? (200*math.cos((drss*10))) : (200*math.cos(((drss*10)+144))), (dh<=6) ? (((100*math.cos((drss*10)))*math.sin((drss*10)))-100) : (((100*math.cos(((drss*10)+144)))*math.sin(((drss*10)+144)))-100), 35, 35, 0, "#954dea", 100);
  drawCircle((dh<=7) ? (200*math.cos((drss*10))) : (200*math.cos(((drss*10)+168))), (dh<=7) ? (((100*math.cos((drss*10)))*math.sin((drss*10)))-100) : (((100*math.cos(((drss*10)+168)))*math.sin(((drss*10)+168)))-100), 35, 35, 0, "#844dfb", 100);
  drawCircle((dh<=8) ? (200*math.cos((drss*10))) : (200*math.cos(((drss*10)+192))), (dh<=8) ? (((100*math.cos((drss*10)))*math.sin((drss*10)))-100) : (((100*math.cos(((drss*10)+192)))*math.sin(((drss*10)+192)))-100), 35, 35, 0, "#733cfc", 100);
  drawCircle((dh<=9) ? (200*math.cos((drss*10))) : (200*math.cos(((drss*10)+216))), (dh<=9) ? (((100*math.cos((drss*10)))*math.sin((drss*10)))-100) : (((100*math.cos(((drss*10)+216)))*math.sin(((drss*10)+216)))-100), 35, 35, 0, "#622bfd", 100);
  drawCircle((dh<=10) ? (200*math.cos((drss*10))) : (200*math.cos(((drss*10)+240))), (dh<=10) ? (((100*math.cos((drss*10)))*math.sin((drss*10)))-100) : (((100*math.cos(((drss*10)+240)))*math.sin(((drss*10)+240)))-100), 35, 35, 0, "#511afe", 100);
  drawCircle((dh<=11) ? (200*math.cos((drss*10))) : (200*math.cos(((drss*10)+264))), (dh<=11) ? (((100*math.cos((drss*10)))*math.sin((drss*10)))-100) : (((100*math.cos(((drss*10)+264)))*math.sin(((drss*10)+264)))-100), 35, 35, 0, "#4009ff", 100);
  drawCircle((200*math.cos((drss*10))), (((100*math.cos((drss*10)))*math.sin((drss*10)))-100), 35, 35, 0, "#fb4d84", 100);
  drawCircle((((100*math.cos((drss*15)))*math.sin((drss*15)))-75), ((100*math.cos((drss*15)))+75), 35, 35, 0, "#4daafb", (dmt>0) ? 100 : 0);
  drawCircle((((100*math.cos(((drss*15)+36)))*math.sin(((drss*15)+36)))-75), ((100*math.cos(((drss*15)+36)))+75), 35, 35, 0, "#5e99fb", (dmt>1) ? 100 : 0);
  drawCircle((((100*math.cos(((drss*15)+72)))*math.sin(((drss*15)+72)))-75), ((100*math.cos(((drss*15)+72)))+75), 35, 35, 0, "#6f88fb", (dmt>2) ? 100 : 0);
  drawCircle((((100*math.cos(((drss*15)+108)))*math.sin(((drss*15)+108)))-75), ((100*math.cos(((drss*15)+108)))+75), 35, 35, 0, "#7f77fb", (dmt>3) ? 100 : 0);
  drawCircle((((100*math.cos(((drss*15)+144)))*math.sin(((drss*15)+144)))-75), ((100*math.cos(((drss*15)+144)))+75), 35, 35, 0, "#8f66fb", (dmt>4) ? 100 : 0);
  drawCircle((((-100*math.cos((drss*15)))*math.sin((drss*15)))+75), ((-100*math.cos((drss*15)))+75), 35, 35, 0, "#4dfb85", (dmo>0) ? 100 : 0);
  drawCircle((((-100*math.cos(((drss*15)+36)))*math.sin(((drss*15)+36)))+75), ((-100*math.cos(((drss*15)+36)))+75), 35, 35, 0, "#4dea96", (dmo>1) ? 100 : 0);
  drawCircle((((-100*math.cos(((drss*15)+72)))*math.sin(((drss*15)+72)))+75), ((-100*math.cos(((drss*15)+72)))+75), 35, 35, 0, "#4dd9a7", (dmo>2) ? 100 : 0);
  drawCircle((((-100*math.cos(((drss*15)+108)))*math.sin(((drss*15)+108)))+75), ((-100*math.cos(((drss*15)+108)))+75), 35, 35, 0, "#4dc8b8", (dmo>3) ? 100 : 0);
  drawCircle((((-100*math.cos(((drss*15)+144)))*math.sin(((drss*15)+144)))+75), ((-100*math.cos(((drss*15)+144)))+75), 35, 35, 0, "#4db7c9", (dmo>4) ? 100 : 0);
  drawCircle((((-100*math.cos(((drss*15)+180)))*math.sin(((drss*15)+180)))+75), ((-100*math.cos(((drss*15)+180)))+75), 35, 35, 0, "#4da6da", (dmo>5) ? 100 : 0);
  drawCircle((((-100*math.cos(((drss*15)+216)))*math.sin(((drss*15)+216)))+75), ((-100*math.cos(((drss*15)+216)))+75), 35, 35, 0, "#4d95eb", (dmo>6) ? 100 : 0);
  drawCircle((((-100*math.cos(((drss*15)+252)))*math.sin(((drss*15)+252)))+75), ((-100*math.cos(((drss*15)+252)))+75), 35, 35, 0, "#4d84fc", (dmo>7) ? 100 : 0);
  drawCircle((((-100*math.cos(((drss*15)+288)))*math.sin(((drss*15)+288)))+75), ((-100*math.cos(((drss*15)+288)))+75), 35, 35, 0, "#4d73fd", (dmo>8) ? 100 : 0);
}

