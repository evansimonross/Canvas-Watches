//This code was generated via the Canvas-Watches tool by Evan Simon Ross
//More info at https://github.com/evansimonross/Canvas-Watches

var math = { rad: function (degrees) { return degrees / 180 * Math.PI; }, sin: function (degrees) { return Math.sin(degrees / 180 * Math.PI); }, cos: function (degrees) { return Math.cos(degrees / 180 * Math.PI); }, floor: function (input) { return Math.floor(input); } }
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
setInterval(drawClock, 10);
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
var drh24;
var drm;
var drss;
var drh;
var dh;
var dm;
var ds;
var wt;
var ddw;
var dnnn;
var dd;
var pblp;
var blp;

var img0 = new Image();
img0.src = "watches/orbit/images/.img200.jpg";

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
  drh24 = 360*(hour/24)+360*(minute/(120*60))+360*(second/(120*60*60));
  drm = 360*(minute/60)+360*(second/(60*60));
  drss = 360*(second/60)+360*(millisecond/(60*1000));
  drh = 360*((hour % 12)/12)+360*(minute/(60*60))+360*(second/(60*60*60));
  dh = hour === 0 ? 12 : hour % 12;
  dm = minute;
  ds = second;
  wt = 0;
  ddw = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day];;
  dnnn = 0;
  dd = date;
  pblp = 0;
  blp = 0;

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
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
}

function drawTintedImage(img,color,w,h) {
  var buffer = document.createElement("canvas");
  var bufferCtx = buffer.getContext("2d");
  buffer.width = w;
  buffer.height = h;
  bufferCtx.clearRect(0, 0, w, h);
  bufferCtx.globalAlpha = 1.0;
  bufferCtx.fillStyle = color;
  bufferCtx.fillRect(0, 0, w, h);
  bufferCtx.globalCompositeOperation = "multiply";
  bufferCtx.drawImage(img, 0, 0, w, h);
  bufferCtx.globalCompositeOperation = "destination-atop";
  bufferCtx.drawImage(img, 0, 0, w, h);
  ctx.drawImage(buffer, 0, 0, w, h);
}

function drawImage(img,x,y,w,h,ang,color,opacity) {
  x *= (canvas.width / 512);
  y *= (canvas.width / 512);
  w *= (canvas.width / 512);
  h *= (canvas.width / 512);
  ctx.save();
  ctx.translate(x, y);
  ang = math.rad(ang);
  ctx.rotate(ang);
  ctx.globalAlpha = opacity / 100;
  ctx.translate(-w / 2, -h / 2);
  if (color === "#ffffff") {
    ctx.drawImage(img, 0, 0, w, h);
  }
  else {
    drawTintedImage(img, color, w, h);
  }
  ctx.translate(w / 2, h / 2);
  ctx.rotate(-ang);
  ctx.translate(-x, -y);
  ctx.restore();
}

function drawCircle(x,y,w,h,ang,color,opacity) {
  x*=(canvas.width/512);
  y*=(canvas.width/512);
  w*=(canvas.width/512);
  h*=(canvas.width/512);
  ctx.save();
  ctx.translate(x,y);
  ang = math.rad(ang);
  ctx.rotate(ang);
  ctx.globalAlpha = opacity/100;
  ctx.beginPath();
  ctx.ellipse(0, 0, w/2, h/2, 0, 0, Math.PI*2)
  ctx.translate(-w/2, -h/2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.translate(w/2, h/2);
  ctx.rotate(-ang);
  ctx.translate(-x,-y);
  ctx.restore();
}

function drawGradientLinear(start,end,ang,scale,width,height) {
  width*=(canvas.width/512);
  height*=(canvas.width/512);
  ang+=90
  scale = scale > 100 ? 0 : scale < 0 ? 1 : (100-scale)/100;
  var x1, y1, x2, y2;
  if ((0 <= ang && ang < 45)) {
    x1 = 0;
    y1 = height / 2 * (45 - ang) / 45;
    x2 = width;
    y2 = height - y1;
  }
  else if ((45 <= ang && ang < 135)) {
    x1 = width * (ang - 45) / 90 ;
    y1 = 0;
    x2 = width - x1;
    y2 = height;
  }
  else if ((135 <= ang && ang < 225)) {
    x1 = width;
    y1 = height * (ang - 135) / 90;
    x2 = 0;
    y2 = height - y1;
  }
  else if ((225 <= ang && ang < 315)) {
    x1 = width * (1 - (ang - 225) / 90);
    y1 = height;
    x2 = width - x1;
    y2 = 0;
  }
  else if (315 <= ang) {
    x1 = 0;
    y1 = height - height / 2 * (ang - 315) / 45;
    x2 = width;
    y2 = height - y1;
  }
  var grd = ctx.createLinearGradient(x1, y1, x2, y2);
  grd.addColorStop(0, start);
  grd.addColorStop(scale/2, start);
  grd.addColorStop(1-(scale/2), end);
  grd.addColorStop(1, end);
  return grd;
}

function drawGradientRadial(start,end,scale,width,height) {
  width*=(canvas.width/512);
  height*=(canvas.width/512);
  var r = width>height ? height / 2 : width / 2;
  scale = scale > 100 ? 0 : scale < 0 ? 1 : (100-scale)/100;
  var grd = ctx.createRadialGradient(r, r, 0, r, r, r);
  grd.addColorStop(0, start);
  grd.addColorStop(1-(scale/2), end);
  grd.addColorStop(1, end);
  return grd;
}

function drawText(x,y,ang,text,size,font,color,opacity) {
  x*=(canvas.width/512);
  y*=(canvas.width/512);
  size*=(canvas.width/512)*2;
  ctx.save();
  ctx.globalAlpha = opacity/100;
  ctx.translate(x,y);
  ang = math.rad(ang);
  ctx.rotate(ang);
  ctx.font = size + "px " + font;
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  ctx.fillStyle=color;
  ctx.fillText(text, 0, 0);
  ctx.rotate(-ang);
  ctx.translate(-x,-y);
  ctx.restore();
}

function drawComponents() {
  drawImage(img0, 0, 0, 835, 523, drh24, "#ffffff", 50);
  drawCircle((-85*math.sin((drm*2))), (85*math.cos((drm*2))), 36, 36, (-(drss*4)%360), drawGradientLinear("#d2c200", "#544900", 40, 101, 36, 36), (var_screen===1) ? 100 : 0);
  drawCircle((-65*math.cos((drm*3))), (65*math.sin((drm*3))), 20, 20, ((drss*4)%360), drawGradientLinear("#978b00", "#540000", 40, 101, 20, 20), (var_screen===1) ? 100 : 0);
  drawCircle(((228*math.sin((drh+(12*math.cos((drss%180))))))-(3*math.sin((drss%180)))), ((-228*math.cos((drh+(12*math.cos((drss%180))))))-(3*math.sin((drss%180)))), 15, 15, (drss*3), drawGradientLinear("#aaaaaa", "#3a3a3a", 40, 101, 15, 15), (var_screen===1) ? 100 : (var_screen===4) ? 100 : 0);
  drawCircle((225*math.sin(drh)), (-225*math.cos(drh)), 40, 40, ((drss*2)%360), drawGradientLinear("#ffb5b5", "#9e1a00", 40, 101, 40, 40), (var_screen===1) ? 100 : (var_screen===4) ? 100 : 0);
  drawCircle(((228*math.sin((drh-(12*math.cos((drss%180))))))+(3*math.sin((drss%180)))), ((-228*math.cos((drh-(12*math.cos((drss%180))))))+(3*math.sin((drss%180)))), 15, 15, (drss*3), drawGradientLinear("#aaaaaa", "#3a3a3a", 40, 101, 15, 15), (var_screen===1) ? 100 : (var_screen===4) ? 100 : 0);
  drawCircle((150*math.sin(drm)), (-150*math.cos(drm)), 50, 50, ((drss*3)%360), drawGradientLinear("#00be70", "#00a1ff", 40, 100, 50, 50), 100);
  drawCircle(0, 0, 100, 100, 0, drawGradientRadial("#ff6b00", "#ffe400", 70, 100, 100), 100);
  drawCircle(((150*math.sin(drm))+(60*math.sin(drss))), ((-150*math.cos(drm))-(60*math.cos(drss))), 35, 35, drss, drawGradientLinear("#ffc4d7", "#4a4a4a", 180, 100, 35, 35), 100);
  drawText(0, 0, 0, dh, 40, "pirulen", "#000000", (var_screen===0) ? 100 : 0)
  drawText((150*math.sin(drm)), (-150*math.cos(drm)), 0, dm, 18, "pirulen", "#000000", (var_screen===0) ? 100 : 0)
  drawText(((150*math.sin(drm))+(60*math.sin(drss))), ((-150*math.cos(drm))-(60*math.cos(drss))), 0, ds, 13, "pirulen", "#000000", (var_screen===0) ? 100 : 0)
  drawText((150*math.sin(drm)), (-150*math.cos(drm)), 0, wt, 18, "pirulen", "#000000", (var_screen===2) ? 100 : 0)
  drawText(((150*math.sin(drm))+(60*math.sin(drss))), ((-150*math.cos(drm))-(60*math.cos(drss))), 0, °{wm}, 13, "pirulen", "#000000", (var_screen===2) ? 100 : 0)
  drawText(0, 0, 0, ddw, 25, "pirulen", "#000000", (var_screen===3) ? 100 : 0)
  drawText((150*math.sin(drm)), (-150*math.cos(drm)), 0, dnnn, 13, "pirulen", "#000000", (var_screen===3) ? 100 : 0)
  drawText(((150*math.sin(drm))+(60*math.sin(drss))), ((-150*math.cos(drm))-(60*math.cos(drss))), 0, dd, 13, "pirulen", "#000000", (var_screen===3) ? 100 : 0)
  drawText((225*math.sin(drh)), (-225*math.cos(drh)), 0, pblp, 10, "pirulen", "#000000", (var_screen===4) ? 100 : 0)
  drawText((150*math.sin(drm)), (-150*math.cos(drm)), 0, blp, 13, "pirulen", "#000000", (var_screen===4) ? 100 : 0)
}

