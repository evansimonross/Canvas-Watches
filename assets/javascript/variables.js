// time variables
var time = {
    // default time
    now: { name: 'now', declaration: 'new Date();' },
    hour: { name: 'hour', declaration: 'now.getHours();' },
    minute: { name: 'minute', declaration: 'now.getMinutes();' },
    second: { name: 'second', declaration: 'now.getSeconds();' },
    millisecond: { name: 'millisecond', declaration: 'now.getMilliseconds();' },
    // hours
    dh: { name: 'dh', declaration: "hour === 0 ? 12 : hour % 12;" },
    dh11: { name: 'dh11', declaration: "hour % 12;" },
    dh24: { name: 'dh24', declaration: "hour === 0 ? 24 : hour;" },
    dh23: { name: 'dh23', declaration: "hour;" },
    dhz: { name: 'dhz', declaration: "hour === 0 ? 12 : hour % 12;\ndhz = dhz < 10 ? '0' + dhz : dhz;" },
    dh11z: { name: 'dh11z', declaration: "hour % 12;\ndh11z = dh11z < 10 ? '0' + dh11z : dh11z;" },
    dh24z: { name: 'dh24z', declaration: "hour === 0 ? 24 : hour;\ndh24z = dh24z < 10 ? '0' + dh24z : dh24z;" },
    dh23z: { name: 'dh23z', declaration: "hour;\ndh23z < 10 ? '0' + dh23z : dh23z" },
    drh: { name: 'drh', declaration: "360*((hour % 12)/12)+360*(minute/60*60)+360*(second/(60*60*60));" },
    drh0: { name: 'drh0', declaration: "360*((hour % 12)/12);" },
    // minutes
    dm: { name: 'dm', declaration: "minute;" },
    dmz: { name: 'dmz', declaration: "minute < 10 ? '0' + minute : minute;" },
    drm: { name: 'drm', declaration: "360*(minute/60)+360*(second/(60*60));" },
    // seconds
    ds: { name: 'ds', declaration: "second;" },
    dsz: { name: 'dsz', declaration: "second < 10 ? '0' + second : second;" },
    drs: { name: 'drs', declaration: "360*(second/60);" },
    drss: { name: 'drss', declaration: "360*(second/60)+360*(millisecond/(60*1000));" },
    // milliseconds
    dss: { name: 'dss', declaration: "millisecond;" },
    dssz: { name: 'dssz', declaration: "millisecond;\ndssz = dssz < 10 ? '00' + dssz : (dssz < 100 ? '0' + dssz : dssz);" }, 
    dsps: { name: 'dsps', declaration: "second * 1000 + millisecond;" },
    drms: { name: 'drms', declaration: "360*(millisecond/1000);" },
    // other
    da: { name: 'da', declaration: "hour < 12 ? 'AM' : 'PM';" }
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