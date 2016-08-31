var meld = require('meld');
var calculadora = require('./calculadora');

function logearResultado(resultado){
    console.log('El resultado es: ' + resultado);
}

var cache = {};
function cachear(methodCall){
    var cacheKey, result;

    cacheKey = methodCall.method + '(' + methodCall.args.join()+ ')';

    if(cacheKey in cache) {
        result = cache[cacheKey];
    } else {
        result = methodCall.proceed();
        cache[cacheKey] = result;
    }

    return result;
}

function cronometrar(methodCall){
    var start = new Date().getTime();

    var finalResult = methodCall.proceed();

    var end = new Date().getTime();
    var time = end - start;
    console.log(methodCall.method + '(' + methodCall.args.join()+ ') tardó: ' + time + ' ms');
    return finalResult;
}

meld.after(calculadora, /^/, logearResultado);

meld.around(calculadora, /^/, cachear);

meld.around(calculadora, /^/, cronometrar);

module.exports.cache = cache;