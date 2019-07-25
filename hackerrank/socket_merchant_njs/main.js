'use strict';
console.log("Hello!");
main();

function sockMerchant(n, ar) {
    let socks = {};
    let result = 0;
    for (let sock of ar) {
        if (sock in socks) {
            socks[sock] += 1;
        } else {
            socks[sock] = 1;
        }
    }
    console.log(socks);
    for (let sock in socks) {
        result += parseInt(socks[sock] / 2, 10);
    }
    return result;
}

function main() {
    let ar = [0, 0, 1, 1, 2];
    let n = ar.length;
    console.log(sockMerchant(n, ar));
}