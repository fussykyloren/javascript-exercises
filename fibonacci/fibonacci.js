const fibonacci = function(number) {
    let fib = Number(number);
    if(fib <= 0) return "OOPS";
    else if (fib == 1 || fib == 2) return 1;
    else return fibonacci(fib - 1) + fibonacci(fib - 2);
}

module.exports = fibonacci
