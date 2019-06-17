let sum = 0;

function fib(n2, n1) {
    const n = n1 + n2;
    if(n > 4000000) {
        return;
    }
    if(n % 2 === 0) {
        sum += n;
    }
    fib(n1, n);
}

fib(1, 1);

console.log(sum);