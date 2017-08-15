var navn = 'jonas';
var alder = 19;

console.log('mit navn er ' + navn + ' og jeg er ' + alder + ' år');

var moms = 1.25;
var pris_uden = 400;
var pris_med = pris_uden * moms;
var pris_uden2 = pris_med / moms;
console.log(pris_uden2);

var forste = 10;
var anden = 20;
var x = forste;
var y = anden;
anden = x;
forste = y;
console.log('1:' + forste + ' 2:' + anden);

var personer;
var a1 = ['lars', 'larsen'];
var a2 = ['lasse', 'lassen'];
var a3 = ['hans', 'hansen'];
personer = [a1, a2, a3];
console.log(personer[1]);

var cars = ["Saab", "Volvo", "BMW"];
cars[cars.length] = 'Mercedes';
console.log(cars);


var cars2 = ["Saab", "Volvo", "BMW"];
console.log(cars2);



var cars3 = ["Saab", "Volvo", "BMW"];
cars3[0] = 'Opel';
console.log(cars3);


var cars4 = ["Saab", "Volvo", "BMW"];
console.log(cars4[1]);


var cars5 = ['Saab', 'Volvo', 'BMW'];
console.log(cars5);

var firstName = 'John', lastName = 'Doe', age = 35;
console.log(firstName + " " + lastName + " is " + age);

var y = 5;
var x = 10;
var z = x+y;
console.log(z);