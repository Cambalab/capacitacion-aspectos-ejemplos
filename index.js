var calculadora = require('./calculadora');
var pointcuts = require('./pointcuts');

calculadora.sumar(1, 2);
calculadora.fibonacci(10);
calculadora.ack(3,7);
console.log('Estado final de la cache: '+ JSON.stringify(pointcuts.cache));