//This code was generated via the Canvas-Watches tool by Evan Simon Ross
//More info at https://github.com/evansimonross/Canvas-Watches

var math = { rad: function (degrees) { return degrees / 180 * Math.PI; }, sin: function (degrees) { return Math.sin(degrees / 180 * Math.PI); }, cos: function (degrees) { return Math.cos(degrees / 180 * Math.PI); }, floor: function (input) { return Math.floor(input); }, abs: function (input) { return input < 0 ? input*-1 : input; } }
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
var dh;
var dm;
var ds;
var drms;
var dh23;
var drm;
var ddw0;
var dd;
var dn;
var dnn;
var ddz;
var swrs;
var swh;
var swm;
var bl;
var pbl;
var drss;

function weekday(x) {
  var k = "";
  x = (x%7);
  if ((x===0)){
    k = "SUN";
  }
  else if ((x===1)){
    k = "MON";
  }
  else if ((x===2)){
    k = "TUE";
  }
  else if ((x===3)){
    k = "WED";
  }
  else if ((x===4)){
    k = "THU";
  }
  else if ((x===5)){
    k = "FRI";
  }
  else if ((x===6)){
    k = "SAT";
  }
  return k;
}

function month_func(x) {
  var k = "";
  x = (x%12);
  if ((x===0)){
    k = "DEC";
  }
  else if ((x===1)){
    k = "JAN";
  }
  else if ((x===2)){
    k = "FEB";
  }
  else if ((x===3)){
    k = "MAR";
  }
  else if ((x===4)){
    k = "APR";
  }
  else if ((x===5)){
    k = "MAY";
  }
  else if ((x===6)){
    k = "JUN";
  }
  else if ((x===7)){
    k = "JUL";
  }
  else if ((x===8)){
    k = "AUG";
  }
  else if ((x===9)){
    k = "SEP";
  }
  else if ((x===10)){
    k = "OCT";
  }
  else if ((x===11)){
    k = "NOV";
  }
  return k;
}

function hexa1(x) {
  var k = "";
  if ((x<10)){
    k = x;
  }
  if ((x===10)){
    k = "a";
  }
  if ((x===11)){
    k = "b";
  }
  if ((x===12)){
    k = "c";
  }
  if ((x===13)){
    k = "d";
  }
  if ((x===14)){
    k = "e";
  }
  if ((x===15)){
    k = "f";
  }
  return k;
}

function hexa2(x) {
  return (hexa1(math.floor((x/16)))+hexa1((x%16)));
}

var img0 = new Image();
img0.src = "watches/speed-demon/images/hand_minute_1.png";

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
  dh = hour % 12 === 0 ? 12 : hour % 12;
  dm = minute;
  ds = second;
  drms = 360*(millisecond/1000);
  dh23 = hour;
  drm = 360*(minute/60)+360*(second/(60*60));
  ddw0 = day;
  dd = date;
  dn = month + 1;
  dnn = month < 9 ? '0' + (month+1) : month + 1;
  ddz = date < 10 ? '0' + date : date;
  swrs = 0;
  swh = 0;
  swm = 0;
  bl = 0;
  pbl = 0;
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
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
}

function adjustColor(color) {
  return (/([A-Fa-f0-9]{6})/.test(color)) ? `#${color}` : color;
}

function drawMarkers(x,y,w,h,radius,rotation,count,shape,color,opacity) {
  if(opacity===0) { return; }
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

function drawText(x,y,ang,text,size,font,color,opacity) {
  if(opacity===0) { return; }
  x*=(canvas.width/512);
  y*=(canvas.width/512);
  size*=(canvas.width/512)*1.25;
  ctx.save();
  ctx.globalAlpha = opacity/100;
  ctx.translate(x,y);
  ang = math.rad(ang);
  ctx.rotate(ang);
  ctx.font = size + "px " + font;
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  color = adjustColor(color);
  ctx.fillStyle=color;
  ctx.fillText(text, 0, 0);
  ctx.rotate(-ang);
  ctx.translate(-x,-y);
  ctx.restore();
}

function drawNumbers(x,y,radius,rotation,angStart,angEnd,firstNum,lastNum,showEvery,hideText,textRotation,size,font,color,opacity) {
  if(opacity===0) { return; }
  x*=(canvas.width/512);
  y*=(canvas.width/512);
  radius*=(canvas.width/512);
  size*=(canvas.width/512)*1.25;
  ctx.save();
  ctx.globalAlpha = opacity/100;
  ctx.translate(x,y);
  ctx.rotate(rotation);
  ctx.font = size + "px " + font;
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  color = adjustColor(color);
  ctx.fillStyle=color;
  for(var num = firstNum < lastNum ? firstNum-1 : firstNum;  firstNum < lastNum ? num <= lastNum : num > lastNum-1;  firstNum < lastNum ? num++ : num--){
    if(num===firstNum-1) { continue; }
    if(num%showEvery !=0) { continue; }
    if(hideText.includes(num)) { continue; }
    var ang = angStart + ((num-(firstNum-1))/(lastNum-(firstNum-1)))*(angEnd - angStart);
    ang*=Math.PI/180;
    ctx.rotate(ang);
    ctx.translate(0,-radius);
    if(textRotation==="n") { ctx.rotate(-ang); }
    ctx.fillText(num.toString(), 0, 0);
    if(textRotation==="n") { ctx.rotate(ang); }
    ctx.translate(0,radius);
    ctx.rotate(-ang);
  }
  ctx.rotate(-rotation);
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
  if(opacity===0) { return; }
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
  color = adjustColor(color);
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

function drawComponents() {
  drawMarkers(0, 0, 2, 10, 256, 0, 180, "Square", "ffffff", (var_screen===2) ? 0 : 100);
  drawMarkers(0, 0, 4, 14, 256, 0, 36, "Square", "ffffff", (var_screen===2) ? 0 : 100);
  drawMarkers(0, 0, 6, 18, 256, 0, 12, "Square", "ffffff", 100);
  drawText(((200+(5*math.abs((2-var_screen))))*math.sin(300)), (-(200+(5*math.abs((2-var_screen))))*math.cos(300)), 0, ((dh%2)===0) ? dh : (dh+1), (var_screen===2) ? 27 : 35, "Euro Caps", "ffffff", ((dh%2)===0) && (dm===59) && (ds===59) ? (100-((100*drms)/360)) : ((dh%2)===1) && (dm===0) && (ds===0) ? ((100*drms)/360) : 100)
  drawText(((200+(5*math.abs((2-var_screen))))*math.sin(60)), (-(200+(5*math.abs((2-var_screen))))*math.cos(60)), 0, ((dh%2)===1) ? dh : (dh===12) ? 1 : (dh+1), (var_screen===2) ? 27 : 35, "Euro Caps", "ffffff", ((dh%2)===1) && (dm===59) && (ds===59) ? (100-((100*drms)/360)) : ((dh%2)===0) && (dm===0) && (ds===0) ? ((100*drms)/360) : 100)
  drawText(((200+(5*math.abs((2-var_screen))))*math.sin(120)), (-(200+(5*math.abs((2-var_screen))))*math.cos(120)), 0, ((dm%2)===0) ? dm : (dm===59) ? 0 : (dm+1), (var_screen===2) ? 27 : 35, "Euro Caps", "ffffff", ((dm%2)===0) && (ds===59) ? (100-((100*drms)/360)) : ((dm%2)===1) && (ds===0) ? ((100*drms)/360) : 100)
  drawText(((200+(5*math.abs((2-var_screen))))*math.sin(240)), (-(200+(5*math.abs((2-var_screen))))*math.cos(240)), 0, ((dm%2)===1) ? dm : (dm+1), (var_screen===2) ? 27 : 35, "Euro Caps", "ffffff", ((dm%2)===1) && (ds===59) ? (100-((100*drms)/360)) : ((dm%2)===0) && (ds===0) ? ((100*drms)/360) : 100)
  drawNumbers(0, 0, 220, 0, 249, 291, 0, 100, 25, [""], "n", 18, "BebasNeue Regular", "ffffff", (var_screen===1) ? 100 : 0);
  drawNumbers(0, 0, 220, 0, 69, 111, 100, 0, 25, [""], "n", 18, "BebasNeue Regular", "ffffff", (var_screen===1) ? 100 : 0);
  drawNumbers(0, 0, 220, 0, -52, 50, 5, 55, 5, [""], "n", 18, "BebasNeue Regular", "ffffff", (var_screen!=0) || ((dh%2)===1) ? 0 : (dm===0) && (ds===0) ? ((100*drms)/360) : (dm===59) && (ds===59) ? (100-((100*drms)/360)) : 100);
  drawNumbers(0, 0, 220, 0, -50, 52, 55, 5, 5, [""], "n", 18, "BebasNeue Regular", "ffffff", (var_screen!=0) || ((dh%2)===0) ? 0 : (dm===0) && (ds===0) ? ((100*drms)/360) : (dm===59) && (ds===59) ? (100-((100*drms)/360)) : 100);
  drawNumbers(0, 0, 220, 0, 128, 230, 5, 55, 5, [""], "n", 18, "BebasNeue Regular", "ffffff", (var_screen!=0) || ((dm%2)===1) ? 0 : (ds===0) ? ((100*drms)/360) : (ds===59) ? (100-((100*drms)/360)) : 100);
  drawNumbers(0, 0, 220, 0, 130, 232, 55, 5, 5, [""], "n", 18, "BebasNeue Regular", "ffffff", (var_screen!=0) || ((dm%2)===0) ? 0 : (ds===0) ? ((100*drms)/360) : (ds===59) ? (100-((100*drms)/360)) : 100);
  drawNumbers(0, 0, 220, 0, 0, 360, 1, 60, 1, [10,20,40,50], "n", 14, "BebasNeue", "ffffff", (var_screen===2) ? 100 : 0);
  drawSquare(-125, 0, 80, 35, 0, "ffffff", (var_screen===3) ? 100 : 0);
  drawText(-125, (dh23===23) ? ((-30*drm)/360) : 0, 0, weekday((ddw0+0)), 30, "Euro Caps", 0, 100)
  drawText(-125, (dh23===23) ? (30-((30*drm)/360)) : 30, 0, weekday((ddw0+1)), 30, "Euro Caps", 0, 100)
  drawSquare(140, 0, 115, 35, 0, "ffffff", (var_screen===3) ? 100 : 0);
  drawText(125, (dd===dn) && (dh23>11) ? ((-30*drm)/360) : 0, 0, month_func((dnn+0)), 30, "Euro Caps", 0, 100)
  drawText(125, (dd===dn) && (dh23>11) ? (30-((30*drm)/360)) : 30, 0, month_func((dnn+1)), 30, "Euro Caps", 0, 100)
  drawText(180, (dh23===23) ? ((-30*drm)/360) : 0, 0, ddz, 25, "BebasNeue Regular", 0, 100)
  drawText(180, (dh23===23) ? (30-((30*drm)/360)) : 30, 0, (dd<9) && ("0"+(dd+1)) || (dd+1), 25, "BebasNeue Regular", 0, 100)
  drawTriangle((244*math.sin(swrs)), (-244*math.cos(swrs)), 30, adjustTriangleHeight(30), (180+swrs), "#4d9ffb", (var_screen===2) ? 100 : 0);
  drawText((238*math.sin(swrs)), (-238*math.cos(swrs)), 0, (swh>0) ? swh : "", 18, "BebasNeue", 0, (var_screen===2) ? 100 : 0)
  drawTriangle((198*math.sin(swrs)), (-198*math.cos(swrs)), 30, adjustTriangleHeight(30), swrs, "#4d9ffb", (var_screen===2) ? 100 : 0);
  drawText((192*math.sin(swrs)), (-192*math.cos(swrs)), 0, (swm>0) ? swm : "", 14, "BebasNeue", 0, (var_screen===2) ? 100 : 0)
  drawImage(img0, 0, 0, 420, 420, (250+((40*bl)/100)), (bl>50) && (hexa2(math.floor((((100-bl)*255)/50)))+"ff00") || ("ff"+(hexa2(math.floor(((bl*255)/50)))+"00")), (var_screen===1) ? 100 : 0);
  drawImage(img0, 0, 1, 420, 420, (110-((40*pbl)/100)), (pbl>50) && (hexa2(math.floor((((100-pbl)*255)/50)))+"ff00") || ("ff"+(hexa2(math.floor(((pbl*255)/50)))+"00")), (var_screen===1) ? 100 : 0);
  drawImage(img0, 0, 0, 430, 430, ((dh%2)===0) ? ((drm/3)-60) : -((drm/3)-60), "ffffff", 100);
  drawImage(img0, 0, 0, 430, 430, ((dm%2)===0) ? ((drss/3)+120) : -((drss/3)+120), "ffffff", 100);
  drawText(0, 0, 0, "speed             demon", 18, "Air Americana", "ffffff", ((var_screen%2)===0) ? 100 : 0)
}

