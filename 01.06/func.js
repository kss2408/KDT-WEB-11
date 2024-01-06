//조건문 [if]

/* 조건문은 항상 true / false가 와야함
if(조건) { 조건 참일때 }
else { 조건이 거짓일때 }  */
/*
if( 5> 3 ) {
    console.log("큽니다");
} else {
    console.log("작습니다");
}

let isShow = true ;
let checked = false ;

//else는 선택!
if (isShow) {
    console.log("show!");
} 

//if(조건) 일때 조건은 참일때 실행
//이 조건이 거짓일때 실행하고 싶으면 not 연산자(!) 사용.
else { (checked)
    console.log("hide!");
}
let name = "이몽룡";
if( name === "홍길동") {
    console.log('홍길동입니다');
} else if( name === '성춘향') {
    console.log('성춘향입니다');
} else if ( name === '이몽룡') {
    console.log('이몽룡입니다.');
} else {
    console.log('변사또입니다')
}
*/
//if 중첩
/*
const myId = 'abc' ;
const myPw = '1234' ;
const inputId = prompt("아이디를 입력하세요");
const inputPw = prompt("비밀번호를 입력하세요");
console.log(inputId, inputPw) ;
if( myId === inputId ) {
    if (myPw === inputPw ) {
        console.log('로그인에 성공했습니다.')
    } else {
        console.log('비밀번호가 틀렸습니다.')
    }
} else {
    console.log('아이디가 틀렸습니다.')
}*/

//삼(3)항 연산자

let myId = 'abc';
let myPw = '1234';
const inputId = prompt('아이디를 입력하세요');
const inputPw = prompt('비밀번호를 입력하세요');

myId === inputId
    ? myPw === inputPw
        ? console.log('존재하는 아이디')
        : console.log('비밀번호가 틀립니다')
    : console.log('아이디가 틀립니다');
