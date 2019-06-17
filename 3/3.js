const primes = [2, 3, 5, 7, 13, 29];

function getPrime(index) {
    if(primes.length > index) {
        return primes[index];
    }

    let found = false;
    for(let i = primes[primes.length-1]+1; !found; i++) {
        if(checkIsPrime(i)) {
            primes.push(i);
            return i;
        }
    }

    console.log('No prime index ' + index);
    throw 'no index';
}

function checkIsPrime(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

let number = 600851475143;
let biggestPrime = 0;
let running = true;


while(running) {
    let found = false;
    for(let i = 0; !found; i++) {
        if(number === 1) {
            break;
        }
        if(number % getPrime(i) === 0) {
            found = true;
            number = number / getPrime(i);
            biggestPrime = Math.max(biggestPrime, getPrime(i));
            if(primes.includes(number) || number === 1) {
                biggestPrime = Math.max(biggestPrime, number);
                running = false;
                break;
            }
        }
    }
}

console.log(biggestPrime);