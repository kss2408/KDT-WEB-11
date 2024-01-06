/* 예제6

let now = new Date().getHours();
console.log(now);
now >= 12 ? console.log('오후') : console.log('오전');   */

//반복문 [for]
// for(초기갑; 조건식; 증감식){
// 반복코드
//}

// step1 0부터 5까지 1씩증가

for (let i = 0; i < 6; i++) {
    // console.log(i)
}

// step2 5부터 0까지 1씩감소
for (let i = 5; i >= 0; i--) {
    // console.log(i);
}

//step3 1부터 10까지 중 짝수 출력
// 반복문과 조건문 활용
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        // console.log(i);
    }
}

//sol2
for (let i = 2; i <= 10; i = i + 2) {
    // console.log(i);
}

// step4. 배열과 함께
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];
for (let i = 0; i < colors.length; i++) {
    console.log(`무지개 ${i + 1}번째 색상은 ${colors[i]} 입니다`); // 자바에선 ' " 용도 같다 ` 만 용도 다르다.
}
