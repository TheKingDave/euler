const notPrime = [];
const primes = [];

function isPrime(num) {
    if(num < 2) {
        return false;
    }
    if(primes.includes(num)) {
        return true;
    }
    if(notPrime.includes(num)) {
        return false;
    }
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            notPrime.push(i);
            return false;
        }
    }
    primes.push(num);
    return true;
}

function find() {
    let count = 0;
    let lastPrime = 0;
    for(let i = 0; count !== 10001; i++) {
        if(isPrime(i)) {
            count++;
            lastPrime = i;
        }
    }
    return lastPrime;
}

console.log(find());