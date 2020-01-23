var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;
var sum = a + b + parseInt(c) + parseInt(d) + e;
console.log(sum)

var f = '1';
var g = 15;
var h = 8;
var i = "1";
var product = parseInt(f) * g * h * parseInt(i);
console.log(product)

var quotient = sum / product;
document.write(quotient)

var array = [ 
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27], 
[7, 4, 28, 14], 
[3, 10, 25, 7], 
[21, 4, 6, 17], 
[3, 5, 26, 3] 
];
var output = [];
output.push(array[1][1]);
output.push(array[4][2]);
output.push(array[5][3]);
output.push(array[2][3]);
console.log(output)