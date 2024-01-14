let n = 1;
let sum = 0;
while (n < 100) {
    if (n % 2 == 0 || n % 3 == 0) {
        sum += n;
    }
    n++;
}

console.log(sum);

// 0106 실습
