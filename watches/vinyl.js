//This code was generated via the Canvas-Watches tool by Evan Simon Ross
//More info at https://github.com/evansimonross/Canvas-Watches

var math = { rad: function (degrees) { return degrees / 180 * Math.PI; }, sin: function (degrees) { return Math.sin(degrees / 180 * Math.PI); }, cos: function (degrees) { return Math.cos(degrees / 180 * Math.PI); }, floor: function (input) { return Math.floor(input); }, abs: function (input) { return input < 0 ? input*-1 : input; } }
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
setInterval(drawClock, 10);
var ucolor = "#ff41ba";
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
var dh23;
var dm;
var drm;
var drh;

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
  dh23 = hour;
  dm = minute;
  drm = 360*(minute/60)+360*(second/(60*60));
  drh = 360*((hour % 12)/12)+360*(minute/(60*60))+360*(second/(60*60*60));

  drawFace();
  drawComponents();
  cutOut();
}

function cutOut() { 
  ctx.save(); 
  ctx.translate(0, 0); 
  ctx.globalCompositeOperation = "destination-in";
  ctx.beginPath(); 
  ctx.arc(0, 0, radius, 0, 2 * Math.PI); 
  ctx.fill(); 
  ctx.restore(); 
}

function drawFace() {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
}

function adjustColor(color) {
  return (/^([A-Fa-f0-9]{6})/.test(color)) ? `#${color}` : color;
}

function drawCircle(x,y,w,h,ang,color,opacity,shader) {
  if(opacity===0) { return; }
  x*=(canvas.width/512);
  y*=(canvas.width/512);
  w*=(canvas.width/512);
  h*=(canvas.width/512);
  ctx.save();
  ctx.translate(x,y);
  ang = math.rad(ang);
  ctx.rotate(ang);
  ctx.globalAlpha = opacity/100;
  ctx.save();
  if(shader){
    drawShader(shader);
  }
  ctx.beginPath();
  ctx.ellipse(0, 0, w/2, h/2, 0, 0, Math.PI*2)
  ctx.translate(-w/2, -h/2);
  color = adjustColor(color);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.translate(w/2, h/2);
  ctx.rotate(-ang);
  ctx.translate(-x,-y);
  ctx.restore();
  ctx.restore();
}

function drawShader(shader) {
  ctx.globalAlpha = shader.opacity/100;
  if(shader.name==="Segment") {
    drawSegment(shader.ang1, shader.ang2);
  }
}

function drawSegment(ang1,ang2) {
  var angStart = 0;
  var angEnd = (ang2 - ang1)%360;
  while(angEnd < 0) {
    angEnd += 360;
  }
  var wallStart = angStart <= 45 ? 0 : angStart <= 135 ? 1 : angStart <= 225 ? 2 : angStart <= 315 ? 3 : 0;
  var wallEnd = angEnd <= 45 ? 0 : angEnd <= 135 ? 1 : angEnd <= 225 ? 2 : angEnd <= 315 ? 3 : 0;
  var xStart = wallStart === 0 ? radius*math.sin(angStart) : wallStart === 1 ? radius : wallStart === 2 ? radius*math.sin(angStart) : -radius;
  var xEnd = wallEnd === 0 ? radius*math.sin(angEnd) : wallEnd === 1 ? radius : wallEnd === 2 ? radius*math.sin(angEnd) : -radius;
  var yStart = wallStart === 0 ? -radius : wallStart === 1 ? -radius*math.cos(angStart) : wallStart === 2 ? radius : -radius*math.cos(angStart);
  var yEnd = wallEnd === 0 ? -radius: wallEnd === 1 ? -radius*math.cos(angEnd) : wallEnd === 2 ? radius : -radius*math.cos(angEnd);
  
  ctx.rotate(math.rad(ang1));
  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(0,0);
  ctx.lineTo(xEnd, yEnd);
  if(angEnd > 315) { ctx.lineTo(-radius,-radius); }
  if(angEnd > 225) { ctx.lineTo(-radius, radius); }
  if(angEnd > 135) { ctx.lineTo( radius, radius); }
  if(angEnd > 45 ) { ctx.lineTo( radius,-radius); } 
  ctx.clip();
  ctx.rotate(math.rad(-ang1));
}

function drawSquare(x,y,w,h,ang,color,opacity) {
  if(opacity===0) { return; }
  x*=(canvas.width/512);
  y*=(canvas.width/512);
  w*=(canvas.width/512);
  h*=(canvas.width/512);
  ctx.save();
  ctx.globalAlpha = opacity/100;
  ctx.translate(x,y);
  ang = math.rad(ang);
  ctx.rotate(ang);
  ctx.beginPath();
  ctx.moveTo(-1*(w/2), -1*(h/2));
  ctx.lineTo(w/2, -1*(h/2));
  ctx.lineTo(w/2, h/2);
  ctx.lineTo(-1*(w/2), h/2);
  ctx.translate(-w/2, -h/2);
  color = adjustColor(color);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.translate(w/2, h/2);
  ctx.rotate(-ang);
  ctx.translate(-x,-y);
  ctx.restore();
}

function drawTriangle(x,y,w,h,ang,color,opacity) {
  if(opacity===0) { return; }
  x*=(canvas.width/512);
  y*=(canvas.width/512);
  w*=(canvas.width/512);
  h*=(canvas.width/512);
  ctx.save();
  ctx.globalAlpha = opacity/100;
  ctx.translate(x,y);
  ang = math.rad(ang);
  ctx.rotate(ang);
  ctx.beginPath();
  ctx.moveTo(0, -1*(h/2));
  ctx.lineTo(w/2, h/2);
  ctx.lineTo(-1*(w/2), h/2);
  ctx.translate(-w/2, -h/2);
  color = adjustColor(color);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.translate(w/2, h/2);
  ctx.rotate(-ang);
  ctx.translate(-x,-y);
  ctx.restore();
}

function adjustTriangleHeight(unadjusted) {
  return unadjusted * Math.sqrt(3) / 2;
}

function drawComponents() {
  drawCircle(0, 0, 485, 485, 0, ucolor, 30);
  drawCircle(0, 0, 465, 465, 0, 0, 100);
  drawCircle(0, 0, 487.5, 487.5, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dh23%10))>=7) ? 100 : 0, { name: "Segment", ang1: 5, ang2: 75, opacity: 100 });
  drawCircle(0, 0, 487.5, 487.5, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dm%10))>=7) ? 100 : 0, { name: "Segment", ang1: 105, ang2: 175, opacity: 100 });
  drawCircle(0, 0, 462.5, 462.5, 0, 0, 100);
  drawCircle(0, 0, 425, 425, 0, ucolor, (var_screen<2) ? 100 : 0, { name: "Segment", ang1: (math.floor((dh23/10))===1) ? 0 : -75, ang2: ((dh23%10)===1) || ((dh23%10)===4) ? 0 : 75, opacity: 100 });
  drawCircle(0, 0, 425, 425, 0, ucolor, (var_screen<2) ? 100 : 0, { name: "Segment", ang1: ((dm%10)===1) || ((dm%10)===4) || ((dm%10)===7) ? 180 : 105, ang2: (math.floor((dm/10))===1) || (math.floor((dm/10))===4) ? 180 : 255, opacity: 100 });
  drawCircle(0, 0, 425, 425, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dh23%10))>=6) ? 100 : 0, { name: "Segment", ang1: 5, ang2: 75, opacity: 100 });
  drawCircle(0, 0, 425, 425, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dm%10))>=6) ? 100 : 0, { name: "Segment", ang1: 105, ang2: 175, opacity: 100 });
  drawCircle(0, 0, 425, 425, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dm/10))>=5) ? 100 : 0, { name: "Segment", ang1: 185, ang2: 255, opacity: 100 });
  drawCircle(0, 0, 400, 400, 0, 0, 100);
  drawCircle(0, 0, 360, 360, 0, ucolor, 30);
  drawCircle(0, 0, 340, 340, 0, 0, 100);
  drawCircle(0, 0, 362.5, 362.5, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dh23%10))>=5) ? 100 : 0, { name: "Segment", ang1: 5, ang2: 75, opacity: 100 });
  drawCircle(0, 0, 362.5, 362.5, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dm%10))>=5) ? 100 : 0, { name: "Segment", ang1: 105, ang2: 175, opacity: 100 });
  drawCircle(0, 0, 362.5, 362.5, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dm/10))>=4) ? 100 : 0, { name: "Segment", ang1: 185, ang2: 255, opacity: 100 });
  drawCircle(0, 0, 337.5, 337.5, 0, 0, 100);
  drawCircle(0, 0, 300, 300, 0, ucolor, (var_screen<2) ? 100 : 0, { name: "Segment", ang1: (math.floor((dh23/10))>1) ? -75 : 0, ang2: ((dh23%10)===1) || ((dh23%10)===7) || ((dh23%10)===0) ? 0 : 75, opacity: 100 });
  drawCircle(0, 0, 300, 300, 0, ucolor, (var_screen<2) ? 100 : 0, { name: "Segment", ang1: ((dm%10)===1) || ((dm%10)===7) || ((dm%10)===0) ? 180 : 105, ang2: (math.floor((dm/10))===1) || (math.floor((dm/10))===0) ? 180 : 255, opacity: 100 });
  drawCircle(0, 0, 300, 300, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dh23/10))>=2) ? 100 : 0, { name: "Segment", ang1: -75, ang2: -5, opacity: 100 });
  drawCircle(0, 0, 300, 300, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dm/10))>=3) ? 100 : 0, { name: "Segment", ang1: 185, ang2: 255, opacity: 100 });
  drawCircle(0, 0, 300, 300, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dh23%10))>=4) ? 100 : 0, { name: "Segment", ang1: 5, ang2: 75, opacity: 100 });
  drawCircle(0, 0, 300, 300, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dm%10))>=4) ? 100 : 0, { name: "Segment", ang1: 105, ang2: 175, opacity: 100 });
  drawCircle(0, 0, 275, 275, 0, 0, 100);
  drawCircle(0, 0, 235, 235, 0, ucolor, 30);
  drawCircle(0, 0, 215, 215, 0, 0, 100);
  drawCircle(0, 0, 237.5, 237.5, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dh23%10))>=3) ? 100 : 0, { name: "Segment", ang1: 5, ang2: 75, opacity: 100 });
  drawCircle(0, 0, 237.5, 237.5, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dm%10))>=3) ? 100 : 0, { name: "Segment", ang1: 105, ang2: 175, opacity: 100 });
  drawCircle(0, 0, 237.5, 237.5, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dm/10))>=2) ? 100 : 0, { name: "Segment", ang1: 185, ang2: 255, opacity: 100 });
  drawCircle(0, 0, 212.5, 212.5, 0, 0, 100);
  drawCircle(0, 0, 175, 175, 0, ucolor, (var_screen<2) ? 100 : 0, { name: "Segment", ang1: (math.floor((dh23/10))===1) ? 0 : -75, ang2: ((dh23%10)===1) || ((dh23%10)===4) || ((dh23%10)===7) ? 0 : 75, opacity: 100 });
  drawCircle(0, 0, 175, 175, 0, ucolor, (var_screen<2) ? 100 : 0, { name: "Segment", ang1: ((dm%10)===1) || ((dm%10)===4) ? 180 : 105, ang2: (math.floor((dm/10))===1) || (math.floor((dm/10))===4) ? 180 : 255, opacity: 100 });
  drawCircle(0, 0, 175, 175, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dh23/10))>=1) ? 100 : 0, { name: "Segment", ang1: -75, ang2: -5, opacity: 100 });
  drawCircle(0, 0, 175, 175, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dm/10))>=1) ? 100 : 0, { name: "Segment", ang1: 185, ang2: 255, opacity: 100 });
  drawCircle(0, 0, 175, 175, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dh23%10))>=2) ? 100 : 0, { name: "Segment", ang1: 5, ang2: 75, opacity: 100 });
  drawCircle(0, 0, 175, 175, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dm%10))>=2) ? 100 : 0, { name: "Segment", ang1: 105, ang2: 175, opacity: 100 });
  drawCircle(0, 0, 150, 150, 0, 0, 100);
  drawSquare(0, 0, 20, 430, 0, 40000, (var_screen<2) ? 100 : 0);
  drawSquare((175*math.sin(-75)), (-175*math.cos(-75)), 12.5, 74, 105, ucolor, (var_screen<2) && (math.floor((dh23/10))===0) ? 100 : 0);
  drawSquare((112.5*math.sin(-75)), (-112.5*math.cos(-75)), 12.5, 74, 105, ucolor, (var_screen<2) && (math.floor((dh23/10))!=1) ? 100 : 0);
  drawSquare((143.75*math.sin(-40.625)), (-143.75*math.cos(-40.625)), 12.5, 137.5, -40.625, ucolor, (var_screen<2) && (math.floor((dh23/10))===1) ? 100 : 0);
  drawSquare((175*math.sin(-6.25)), (-175*math.cos(-6.25)), 12.5, 74, -6.25, ucolor, (var_screen<2) && (math.floor((dh23/10))!=1) ? 100 : 0);
  drawSquare((112.5*math.sin(-6.25)), (-112.5*math.cos(-6.25)), 12.5, 74, -6.25, ucolor, (var_screen<2) && (math.floor((dh23/10))===0) ? 100 : 0);
  drawSquare((175*math.sin(6.25)), (-175*math.cos(6.25)), 12.5, 74, 6.25, ucolor, ((dh23%10)>0) && ((dh23%10)<4) ? 0 : ((dh23%10)===7) ? 0 : (var_screen<2) ? 100 : 0);
  drawSquare((112.5*math.sin(6.25)), (-112.5*math.cos(6.25)), 12.5, 74, 6.25, ucolor, ((dh23%2)===1) ? 0 : ((dh23%10)===4) ? 0 : (var_screen<2) ? 100 : 0);
  drawTriangle(0, -150, 38, adjustTriangleHeight(180), 180, 0, (var_screen<2) ? 100 : 0);
  drawSquare((143.75*math.sin(40.625)), (-143.75*math.cos(40.625)), 12.5, 137.5, 40.625, ucolor, (var_screen<2) && ((dh23%10)===1) ? 100 : 0);
  drawSquare((175*math.sin(75)), (-175*math.cos(75)), 12.5, 74, 75, ucolor, ((dh23%10)>4) && ((dh23%10)<7) ? 0 : ((dh23%10)===1) ? 0 : (var_screen<2) ? 100 : 0);
  drawSquare((112.5*math.sin(75)), (-112.5*math.cos(75)), 12.5, 74, 75, ucolor, ((dh23%10)>0) && ((dh23%10)<3) ? 0 : (var_screen<2) ? 100 : 0);
  drawSquare((112.5*math.sin(255)), (-112.5*math.cos(255)), 12.5, 74, 255, ucolor, (math.floor((dm/10))>0) && (math.floor((dm/10))<4) ? 0 : (var_screen<2) ? 100 : 0);
  drawSquare((175*math.sin(255)), (-175*math.cos(255)), 12.5, 74, 255, ucolor, ((math.floor((dm/10))%2)===1) ? 0 : (math.floor((dm/10))===4) ? 0 : (var_screen<2) ? 100 : 0);
  drawSquare((143.75*math.sin(217.5)), (-143.75*math.cos(217.5)), 12.5, 137.5, 37.5, ucolor, (var_screen<2) && (math.floor((dm/10))===1) ? 100 : 0);
  drawSquare((112.5*math.sin(186.25)), (-112.5*math.cos(186.25)), 12.5, 74, 186.25, ucolor, (math.floor((dm/10))===1) ? 0 : (math.floor((dm/10))>4) && (math.floor((dm/10))<7) ? 0 : (var_screen<2) ? 100 : 0);
  drawSquare((175*math.sin(186.25)), (-175*math.cos(186.25)), 12.5, 74, 186.25, ucolor, (math.floor((dm/10))>0) && (math.floor((dm/10))<3) ? 0 : (var_screen<2) ? 100 : 0);
  drawSquare((112.5*math.sin(-186.25)), (-112.5*math.cos(-186.25)), 12.5, 74, -186.25, ucolor, ((dm%10)>0) && ((dm%10)<4) ? 0 : ((dm%10)===7) ? 0 : (var_screen<2) ? 100 : 0);
  drawSquare((175*math.sin(-186.25)), (-175*math.cos(-186.25)), 12.5, 74, -186.25, ucolor, ((dm%2)===1) ? 0 : ((dm%10)===4) ? 0 : (var_screen<2) ? 100 : 0);
  drawTriangle(0, 150, 38, adjustTriangleHeight(180), 0, 0, (var_screen<2) ? 100 : 0);
  drawSquare((143.75*math.sin(142.5)), (-143.75*math.cos(142.5)), 12.5, 137.5, 142.5, ucolor, (var_screen<2) && ((dm%10)===1) ? 100 : 0);
  drawSquare((112.5*math.sin(105)), (-112.5*math.cos(105)), 12.5, 74, 105, ucolor, ((dm%10)>4) && ((dm%10)<7) ? 0 : ((dm%10)===1) ? 0 : (var_screen<2) ? 100 : 0);
  drawSquare((175*math.sin(105)), (-175*math.cos(105)), 12.5, 74, 105, ucolor, ((dm%10)>0) && ((dm%10)<3) ? 0 : (var_screen<2) ? 100 : 0);
  drawCircle(0, 0, 110, 110, 0, ucolor, ((var_screen%2)===0) ? 30 : 0);
  drawCircle(0, 0, 90, 90, 0, 0, 100);
  drawSquare((135*math.sin(6.25)), (-135*math.cos(6.25)), 12.5, 215, 6.25, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dh23%10))>=8) ? 100 : 0);
  drawSquare((135*math.sin(173.75)), (-135*math.cos(173.75)), 12.5, 215, 173.75, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dm%10))>=8) ? 100 : 0);
  drawSquare((135*math.sin(73.75)), (-135*math.cos(73.75)), 12.5, 215, 73.75, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dh23%10))>=9) ? 100 : 0);
  drawSquare((135*math.sin(106.25)), (-135*math.cos(106.25)), 12.5, 215, 106.25, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dm%10))>=9) ? 100 : 0);
  drawCircle(0, 0, 112.5, 112.5, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dh23%10))>=1) ? 100 : 0, { name: "Segment", ang1: 5, ang2: 75, opacity: 100 });
  drawCircle(0, 0, 112.5, 112.5, 0, ucolor, (var_screen>1) && (var_screen<4) && (math.floor((dm%10))>=1) ? 100 : 0, { name: "Segment", ang1: 105, ang2: 175, opacity: 100 });
  drawCircle(0, 0, 87.5, 87.5, 0, 0, 100);
  drawCircle(0, 0, 60, 60, 0, ucolor, ((var_screen%2)===0) ? 100 : 0);
  drawTriangle((128*math.sin(drm)), (-128*math.cos(drm)), 24, adjustTriangleHeight(250), drm, ucolor, ((var_screen%2)===0) ? 100 : 0);
  drawTriangle((124*math.sin(drm)), (-124*math.cos(drm)), 13, adjustTriangleHeight(230), drm, 0, ((var_screen%2)===0) ? 100 : 0);
  drawTriangle((110*math.sin(drh)), (-110*math.cos(drh)), 30, adjustTriangleHeight(210), drh, ucolor, ((var_screen%2)===0) ? 100 : 0);
  drawTriangle((106*math.sin(drh)), (-106*math.cos(drh)), 20, adjustTriangleHeight(190), drh, 0, ((var_screen%2)===0) ? 100 : 0);
  drawCircle(0, 0, 50, 50, 0, ucolor, ((var_screen%2)===0) ? 100 : 0);
  drawCircle(0, 0, 45, 45, 0, 0, 100);
}

