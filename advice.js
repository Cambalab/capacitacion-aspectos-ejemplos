var meld = require('meld');
calculadora = require('./calculadora');

function logearResultado(resultado){
    console.log('El resultado es: ' + result);
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

    for (i = 0; i < 50000; ++i) {
        result = methodCall.proceed();
    }

    var end = new Date().getTime();
    var time = end - start;
    console.log(methodCall.method + '(' + methodCall.args.join()+ ') tardó: ' + time + ' ms');
    return result;
}

meld.after(calculadora, /^/, logearResultado);

meld.around(calculadora, /^/, cachear);

meld.around(calculadora, /^/, cronometrar);

module.exports.cache = cache;