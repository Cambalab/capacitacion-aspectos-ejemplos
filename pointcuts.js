var meld = require('meld');
var calculadora = require('./calculadora');
var advice = require('./advice');

meld.after(calculadora, /^/, advice.logearResultado);

meld.around(calculadora, /^/, advice.cachear);

meld.around(calculadora, /^/, advice.cronometrar);

module.exports.cache = advice.cache;