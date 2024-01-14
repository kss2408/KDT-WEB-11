let number = [];
for (let i = 0; i < 100; i++) {
    number[i] = i + 1;
}
console.log(number);

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

for (let i = 0; i < number.length; i++) {
    sum1 = sum1 + number[i];
}

console.log(sum1);

for (let num of number) {
    sum2 += num;
}

console.log(sum2);

number.forEach((i) => {
    sum3 = i + sum3;
});

console.log(sum3);
