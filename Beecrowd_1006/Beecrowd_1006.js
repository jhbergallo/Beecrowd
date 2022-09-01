var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(linhas[0]);
var b = parseFloat(linhas[1]);
var c = parseFloat(linhas[2]);
var x = ((a * 2 + b * 3 + c * 5)/10).toFixed(1);
console.log("MEDIA =", x);
