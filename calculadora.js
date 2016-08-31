var calculadora = {
    sumar: function(a, b) {
        return a + b;
    },
    fibonacci: function(n) {
        if (n < 2) {
            return 1;
        }
        else {
            return calculadora.fibonacci(n-2) + calculadora.fibonacci(n-1);
        }
    },
    ack: function(m, n) {
        return m === 0 ? n + 1 : calculadora.ack(m - 1, n === 0  ? 1 : calculadora.ack(m, n - 1));
    }
};

module.exports = calculadora;