var calculadora = require('./calculadora');
var advice = require('./advice');

calculadora.sumar(1, 2);
calculadora.fibonacci(10);
calculadora.ack(3,6);
console.log('Estado final de la cache: '+ JSON.stringify(advice.cache));