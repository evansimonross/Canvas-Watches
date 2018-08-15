var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
drawWatch();

function drawWatch(){
    ctx.arc(0, 0, radius, 0 , 2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    watch.Watch.Layer.forEach(function(element){

    });
}
