//함수
//함수 선언문(기본적인 형태)
/* function sayHello() {
    console.log("Hello");
}
console.log("전역 Hello"); */

// sayHello();   //-> 써주면 제대로 동작

//덧셈기능이 있는 함수를 선언

/* const num1 = 10;  //전역변수
function sumFunc(num2, num3) { //num2,num3는 매개변수 , ()안에 변수들은 매개변수
    const num1 = 11;
    const sum = num1 + num2 + num3 ;
    
    //console.log("지역",num1);

    console.log("결과",sum);
    // return 함수제일 마지막에 사용. 값을 다시 전달
    return sum
}
//console.log("전역",num1) ;
sumFunc(60,10); ///()안에 값은 인자
// num2 = 60
// num3 = 10
let result = sumFunc(30, 20)
//let result = 61

console.log(result) ;   */


///// 함수 표현식 //////
let sayHello = function() {
    console.log("Hello")
}
sayHello();