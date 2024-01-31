/* 여러개모듈연습위해 주석처리
const a = 10;
const b = 20;

// 하나의 모듈 파일에 하나의 모듈 만들기
function connect() {
    // 많은 로직들
    return a + b; //가정.
}

module.exports = connect;

// 함수를 외부에서 쓸수 있게 만듦   */

//하나의 모듈 파일에 여러개 모듈 만들기
const a = 'a 변수';
const b = 'b 변수';
const c = 20;

module.exports = { a, b, c };
