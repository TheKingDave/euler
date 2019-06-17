function find() {
    let sumSquares = 0;
    let sum = 0;

    for(let i = 1; i <= 100; i++) {
        sumSquares += Math.pow(i, 2);
        sum += i;
    }

    return Math.pow(sum, 2) - sumSquares;
}

console.log(find());