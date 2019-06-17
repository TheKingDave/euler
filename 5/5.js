function checkDiv(num) {
    for(let i = 20; i > 1; i--) {
        if(num % i !== 0) {
            return false;
        }
    }
    return true;
}

function find() {
    const map = {};
    for(let i = 2; i <= 20; i++) {
        map[i] = 0;
    }

    let num = 0;
    while(true) {
        num += 20;

        if(checkDiv(num)) {
            return num;
        }
    }

}

console.log(find());