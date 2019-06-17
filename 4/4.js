function isPalindrome(num) {
    num = String(num);
    for(let i = 0; i < Math.floor(num.length / 2); i++) {
        if(num.charAt(i) !== num.charAt(num.length-i-1)) {
            return false;
        }
    }
    return true;
}

function findLargest() {
    let largest = 0;

    for(let n1 = 999; n1 > 0; n1--) {
        for(let n2 = 999; n2 > 0; n2--) {
            if(isPalindrome(n1*n2)) {
                largest = Math.max(largest, n1*n2);
            }
        }
    }

    return largest;
}

console.log(findLargest());