// time & date variables
var time = {
    // default time
    now: { name: 'now', declaration: 'new Date()' },
    year: { name: 'year', declaration: 'now.getFullYear()' },
    month: { name: 'month', declaration: 'now.getMonth()' },
    date: { name: 'date', declaration: 'now.getDate()' },
    day: { name: 'day', declaration: 'now.getDay()' },
    hour: { name: 'hour', declaration: 'now.getHours()' },
    minute: { name: 'minute', declaration: 'now.getMinutes()' },
    second: { name: 'second', declaration: 'now.getSeconds()' },
    millisecond: { name: 'millisecond', declaration: 'now.getMilliseconds()' },

    // hours
    dh: { name: 'dh', declaration: "hour === 0 ? 12 : hour % 12" },
    dh11: { name: 'dh11', declaration: "hour % 12" },
    dh24: { name: 'dh24', declaration: "hour === 0 ? 24 : hour" },
    dh23: { name: 'dh23', declaration: "hour" },
    dhz: { name: 'dhz', declaration: "hour === 0 ? 12 : hour % 12;\ndhz = dhz < 10 ? '0' + dhz : dhz" },
    dh11z: { name: 'dh11z', declaration: "hour % 12;\ndh11z = dh11z < 10 ? '0' + dh11z : dh11z" },
    dh24z: { name: 'dh24z', declaration: "hour === 0 ? 24 : hour;\ndh24z = dh24z < 10 ? '0' + dh24z : dh24z" },
    dh23z: { name: 'dh23z', declaration: "hour;\ndh23z < 10 ? '0' + dh23z : dh23z" },
    dhtt: { name: 'dhtt', declaration: "hour === 0 ? 1 : math.floor((hour % 12) / 10)" },
    dhto: { name: 'dhto', declaration: "hour === 0 ? 2 : hour % 12 % 10" },
    dh11tt: { name: 'dh11tt', declaration: "math.floor((hour % 12) / 10)" },
    dh11to: { name: 'dh11tt', declaration: "hour % 12 % 10" },
    dh24tt: { name: 'dh24tt', declaration: "hour === 0 ? 2 : math.floor(hour/10)" },
    dh24to: { name: 'dh24tt', declaration: "hour === 0 ? 4 : hour % 10" },
    dh23tt: { name: 'dh23tt', declaration: "math.floor(hour/10)" },
    dh23to: { name: 'dh23to', declaration: "hour % 10" },
    drh: { name: 'drh', declaration: "360*((hour % 12)/12)+360*(minute/60*60)+360*(second/(60*60*60);" },
    drh0: { name: 'drh0', declaration: "360*((hour % 12)/12)" },
    // minutes
    dm: { name: 'dm', declaration: "minute" },
    dmz: { name: 'dmz', declaration: "minute < 10 ? '0' + minute : minute" },
    dmt: { name: 'dmt', declaration: "math.floor(minute/10)" },
    dmo: { name: 'dmo', declaration: "minute % 10" },
    drm: { name: 'drm', declaration: "360*(minute/60)+360*(second/(60*60))" },
    // seconds
    ds: { name: 'ds', declaration: "second" },
    dsz: { name: 'dsz', declaration: "second < 10 ? '0' + second : second" },
    drs: { name: 'drs', declaration: "360*(second/60);" },
    drss: { name: 'drss', declaration: "360*(second/60)+360*(millisecond/(60*1000))" },
    // milliseconds
    dss: { name: 'dss', declaration: "millisecond" },
    dssz: { name: 'dssz', declaration: "millisecond;\ndssz = dssz < 10 ? '00' + dssz : (dssz < 100 ? '0' + dssz : dssz)" },
    dsps: { name: 'dsps', declaration: "second * 1000 + millisecond" },
    drms: { name: 'drms', declaration: "360*(millisecond/1000)" },
    // other
    da: { name: 'da', declaration: "hour < 12 ? 'AM' : 'PM'" },

    // day
    dd: { name: 'dd', declaration: "date" },
    ddz: { name: 'ddz', declaration: "date < 10 ? '0' + date : date" },
    ddy: { name: 'ddy', declaration: "Math.floor(((now - new Date(now.getFullYear(), 0, 0)) + ((new Date(now.getFullYear(), 0, 0).getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000)) / (1000 * 60 * 60 * 24))" },
    ddw0: { name: 'ddw0', declaration: "day" },
    ddim: { name: 'ddim', declaration: "date" },

    // week (start on Sunday)
    dwm: { name: 'dwm', declation: "parseInt(['0', '1', '2', '3', '4', '5'][0 || Math.floor((now.getDate()+now.getDay()) / 7)])+1" },
    dw: { name: 'dw', declaration: "Math.ceil((((now - (new Date(now.getFullYear(),0,1))) / 86400000) + (new Date(now.getFullYear(),0,1)).getDay()+1)/7)" },

    // month
    dn: { name: 'dn', declaration: "month + 1" },
    dnn: { name: 'dnn', declaration: "month < 9 ? '0' + (month+1) : month + 1" },

    // year
    dy: { name: 'dy', declaration: "year % 100" },
    dyy: { name: 'dyy', declaration: "year" },
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
            'ctx.save();',
            'ctx.globalAlpha = opacity/100;',
            'ctx.rotate(ang);',
            'ctx.beginPath();',
            'ctx.ellipse(x, y, w/2, h/2, ang, 0, Math.PI*2)',
            'ctx.fillStyle = color;',
            'ctx.fill();',
            'ctx.rotate(-ang);',
            'ctx.restore();'
        ]
    },
    drawSquare: {
        name: 'drawSquare',
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
            'ctx.moveTo(-1*(w/2), -1*(h/2));',
            'ctx.lineTo(w/2, -1*(h/2));',
            'ctx.lineTo(w/2, h/2);',
            'ctx.lineTo(-1*(w/2), h/2);',
            'ctx.fillStyle = color;',
            'ctx.fill();',
            'ctx.rotate(-ang);',
            'ctx.translate(-x,-y);',
            'ctx.restore();'
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
    },
    drawMarkersHM: {
        name: 'drawMarkersHM',
        params: ['x', 'y', 'radius', 'rotation', 'hourMarkers', 'minuteMarkers', 'hourColor', 'minuteColor', 'opacity'],
        lines: [
            'ctx.save();',
            'ctx.translate(x, y);',
            'ctx.rotate(rotation);',
            'var ang;',
            'var num;',
            'for(num= 1; num <= 60; num++){',
            '  ang = num * Math.PI / 30;',
            '  ctx.rotate(ang);',
            '  if (num%5===0) {',
            '    switch(hourMarkers){',
            '      case "None": break;',
            '      case "Tiny":',
            '        var w = 2.5;',
            '        var h = 7.5;',
            '        drawSquare(0, -radius + h/2, w, h, 0, hourColor, opacity);',
            '        break;',
            '      case "Small":',
            '        var w = 5;',
            '        var h = 15;',
            '        drawSquare(0, -radius + h/2, w, h, 0, hourColor, opacity);',
            '        break;',
            '      case "Medium":',
            '        var w = 7.5;',
            '        var h = 22.5;',
            '        drawSquare(0, -radius + h/2, w, h, 0, hourColor, opacity);',
            '        break;',
            '      case "Large":',
            '        var w = 10;',
            '        var h = 30;',
            '        drawSquare(0, -radius + h/2, w, h, 0, hourColor, opacity);',
            '        break;',
            '      case "XLarge":',
            '        var w = 12.5;',
            '        var h = 37.5;',
            '        drawSquare(0, -radius + h/2, w, h, 0, hourColor, opacity);',
            '        break;',
            '      case "Circle":',
            '        var w = 20;',
            '        var h = 20;',
            '        drawCircle(0, -radius + h/2, w, h, 0, hourColor, opacity);',
            '        break;',
            '      case "Triangle":',
            '        var w = 12.5;',
            '        var h = adjustTriangleHeight (30);',
            '        drawTriangle(0, -radius + h/2, w, h, 180, hourColor, opacity);',
            '        break;',
            '      default: ',
            '        console.log("This type of marker not found");',
            '        break;',
            '    }',
            '  }',
            '  else{',
            '    switch(minuteMarkers){',
            '      case "None": break;',
            '      case "Tiny":',
            '        var w = 1;',
            '        var h = 5;',
            '        drawSquare(0, -radius + h/2, w, h, 0, minuteColor, opacity);',
            '        break;',
            '      case "Small":',
            '        var w = 2.5;',
            '        var h = 8.75;',
            '        drawSquare(0, -radius + h/2, w, h, 0, minuteColor, opacity);',
            '        break;',
            '      case "Medium":',
            '        var w = 4;',
            '        var h = 12.5;',
            '        drawSquare(0, -radius + h/2, w, h, 0, minuteColor, opacity);',
            '        break;',
            '      case "Large":',
            '        var w = 5.5;',
            '        var h = 16.25;',
            '        drawSquare(0, -radius + h/2, w, h, 0, minuteColor, opacity);',
            '        break;',
            '      case "XLarge":',
            '        var w = 7;',
            '        var h = 20;',
            '        drawSquare(0, -radius + h/2, w, h, 0, minuteColor, opacity);',
            '        break;',
            '      case "Circle":',
            '        var w = 7.5;',
            '        var h = 7.5;',
            '        drawCircle(0, -radius + h/2, w, h, 0, minuteColor, opacity);',
            '        break;',
            '      case "Triangle":',
            '        var w = 7.5;',
            '        var h = adjustTriangleHeight (17.5);',
            '        drawTriangle(0, -radius + h/2, w, h, 180, minuteColor, opacity);',
            '        break;',
            '      default:',
            '        console.log("This type of marker not found");',
            '        break;',
            '    }',
            '  }',
            '  ctx.rotate(-ang);',
            '}',
            'ctx.rotate(-rotation);',
            'ctx.translate(-x,-y);',
            'ctx.restore();',
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