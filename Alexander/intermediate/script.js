var carBrands = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
carBrands.sort();
console.log(carBrands)
var start = ["apple", "banana", "kiwi"];
console.log(start)
start.push("orange");
console.log(start)
start.splice(3);
console.log(start)
start = ["monkey", "horse", "dog"];
console.log(start)
start.sort();
console.log(start)
start.unshift("cat");
console.log(start)
var fruits = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon"
var oneFruit = fruits.split("/");
console.log(oneFruit[0])
var newLineText;
for (i = 0; i < oneFruit.length; i++) {
	newLineText = oneFruit[i] + "<br>"
	document.write(newLineText);
}