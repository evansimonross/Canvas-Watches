// time variables
var time = {
    // hours
    dh: "var dh = hour === 0 ? 12 : hour % 12;",
    dh11: "var dh11 = hour % 12;",
    dh24: "var dh24 = hour === 0 ? 24 : hour;",
    dh23: "var dh23 = hour;",
    dhz: "var dhz = hour === 0 ? 12 : hour % 12;\ndhz = dhz < 10 ? '0' + dhz : dhz;",
    dh11z: "var dh11z = hour % 12;\ndh11z = dh11z < 10 ? '0' + dh11z : dh11z;",
    dh24z: "var dh24z = hour === 0 ? 24 : hour;\ndh24z = dh24z < 10 ? '0' + dh24z : dh24z;",
    dh23z: "var dh23z = hour;\ndh23z < 10 ? '0' + dh23z : dh23z",
    drh: "var drh = 360*((hour % 12)/12)+360*(minute/60*60)+360*(second/(60*60*60));",
    drh0: "var drh0=360*((hour % 12)/12);",
    // minutes
    dm: "var dm = minute;",
    dmz: "var dmz = minute < 10 ? '0' + minute : minute;",
    drm: "var drm = 360*(minute/60)+360*(second/(60*60));",
    // seconds
    ds: "var ds = second;",
    dsz: "var dsz = second < 10 ? '0' + second : second;",
    drs: "var drs = 360*(second/60);",
    drss: "var drss = 360*(second/60)+360*(millisecond/(60*1000));",
    // milliseconds
    dss: "var dss = millisecond;",
    dssz: "var dssz = millisecond;\ndssz = dssz < 10 ? '00' + dssz : (dssz < 100 ? '0' + dssz : dssz);",
    dsps: "var dsps = second * 1000 + millisecond;",
    drms: "var drms = 360*(millisecond/1000);",
    // other
    da: "var da = hour < 12 ? 'AM' : 'PM';"
}

// draw functions
var draw = {
    drawFace: {
        name: 'drawFace',
        params: [],
        lines: [
            'var grad;',
            'ctx.beginPath();',
            'ctx.arc(0, 0, radius, 0, 2 * Math.PI);',
            "ctx.fillStyle = 'black';",
            'ctx.fill();'
        ]
    },
    drawCircle: {
        name: 'drawCircle',
        params: ['x', 'y', 'w', 'h', 'ang', 'color', 'opacity'],
        lines: [
            'x*=(canvas.width/512);',
            'y*=(canvas.width/512);',
            'w*=(canvas.width/512);',
            'h*=(canvas.width/512);',
            'ctx.beginPath();',
            'ctx.ellipse(x, y, w, h, ang, 0, Math.PI*2)',
            'ctx.fillStyle = color;',
            'ctx.fill();'
        ]
    },
    drawTriangle: {
        name: 'drawTriangle',
        params: ['x', 'y', 'w', 'h', 'ang', 'color', 'opacity'],
        lines: [
            'x*=(canvas.width/512);',
            'y*=(canvas.width/512);',
            'w*=(canvas.width/512);',
            'h*=(canvas.width/512);',
            'ctx.save();',
            'ctx.globalAlpha = opacity/100;',
            'ang = math.rad(ang);',
            'ctx.translate(x,y);',
            'ctx.rotate(ang);',
            'ctx.beginPath();',
            'ctx.moveTo(0, -1*(h/2));',
            'ctx.lineTo(w/2, h/2);',
            'ctx.lineTo(-1*(w/2), h/2);',
            'ctx.fillStyle = color;',
            'ctx.fill();',
            'ctx.rotate(-ang);',
            'ctx.translate(-x,-y);',
            'ctx.restore();'
        ]
    },
    drawGradientLinear: {
        name: 'drawGradientLinear',
        params: ['start', 'end', 'rotation', 'scale', 'length'],
        lines: [
            'length*=(canvas.width/512);',
            'scale = (100-scale)/100;',
            'var grd = ctx.createLinearGradient(-length/2, -length/2, -length/2, length/2);',
            'grd.addColorStop(0, start);',
            'grd.addColorStop(scale/2, start);',
            'grd.addColorStop(1-(scale/2), end);',
            'grd.addColorStop(1, end);',
            'return grd;'
        ]
    }
}

// utility functions

var util = {
    adjustTriangleHeight: {
        name: 'adjustTriangleHeight',
        params: ['unadjusted'],
        lines: [
            'return unadjusted * Math.sqrt(3) / 2;'
        ]
    },
}

module.exports = { time, draw, util }