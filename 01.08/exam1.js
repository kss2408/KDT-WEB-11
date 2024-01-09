function calc() {
    let value1 = Number(document.getElementById('value1').value);
    let value2 = Number(document.getElementById('value2').value);
    let op = document.getElementById('op').value;
    let result = document.getElementById('result');
    let sum = 0;

    if (op === '+') {
        sum = value1 + value2;
    } else if (op === '-') {
        sum = value1 - value2;
    } else if (op === '*') {
        sum = value1 * value2;
    } else if (op === '/') {
        sum = value1 / value2;
    }
    result.value = sum;
}
