function find() {
    for(let a = 1; a < 998; a++) {
        for(let b = a+1; b < 1000-a; b++) {
            const c = 1000 - a -b;

            if(a+b+c !== 1000) {
                continue;
            }

            if(a*a + b*b === c*c) {
                return a * b * c;
            }
        }
    }
    return -1;
}

console.log(find());