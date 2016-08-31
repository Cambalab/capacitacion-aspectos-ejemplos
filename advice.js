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
    },
    chequearSilosArgumentosSonEnterosPositivos: function(){
        for(var arg = 0; arg < arguments.length; ++ arg){
            if (arguments[arg] < 0)
                throw new Error("Esta funcion solo acepta enteros positivos como parámetros");
        }
    }
};

module.exports = advice;