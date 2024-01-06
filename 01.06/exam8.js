/*
for (let i = 1; i < 10; i++) {
    if (i === 1) {
        for (let s = 1; s < 10; s++) {
            console.log(i * s);
        }
    } else if (i === 2) {
        for (let s = 1; s < 10; s++) {
            console.log(i * s);
        }
    } else if (i === 3) {
        for (let s = 1; s < 10; s++) {
            console.log(i * s);
        }
    } else if (i === 4) {
        for (let s = 1; s < 10; s++) {
            console.log(i * s);
        }
    } else if (i === 5) {
        for (let s = 1; s < 10; s++) {
            console.log(i * s);
        }
    } else if (i === 6) {
        for (let s = 1; s < 10; s++) {
            console.log(i * s);
        }
    } else if (i === 7) {
        for (let s = 1; s < 10; s++) {
            console.log(i * s);
        }
    } else if (i === 8) {
        for (let s = 1; s < 10; s++) {
            console.log(i * s);
        }
    } else if (i === 9) {
        for (let s = 1; s < 10; s++) {
            console.log(i * s);
        }
    }
}   */

//이중for문

for (let dan = 2; dan < 10; dan++) {
    console.log(`====${dan}단====`);
    for (let i = 1; i < 10; i++) {
        console.log(`${dan}x ${i}= ${dan * i} `);
    }
}
