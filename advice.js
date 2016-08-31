var advice = {
    cache : {},
    logearResultado: function(resultado) {
        console.log('El resultado es: ' + resultado);
    },
    cachear: function(methodCall) {
        var cacheKey, result;
        var cache = advice.cache;

        cacheKey = methodCall.method + '(' + methodCall.args.join()+ ')';

        if(cacheKey in cache) {
            result = cache[cacheKey];
        } else {
            result = methodCall.proceed();
            cache[cacheKey] = result;
        }

        return result;
    },
    cronometrar: function(methodCall) {
        var start = new Date().getTime();

        var finalResult = methodCall.proceed();

        var end = new Date().getTime();
        var time = end - start;
        console.log(methodCall.method + '(' + methodCall.args.join()+ ') tardó: ' + time + ' ms');
        return finalResult;
    }
};

module.exports = advice;