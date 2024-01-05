/* // 오브젝트(객체)는 여러가지 데이터가 하나로 묶여있는 형태
let dog = {
    //key: value 형태
    name: "깜이",
    age: 15,
    isCute: true,
    mew: function() {
        return "왈!"
    }
}
console.log(dog.name)
console.log(dog.age)
console.log(dog.isCute)
console.log(dog.mew())


let mySelf ={
    name: "김성수",
    age: "3X",
    gender: "Man",
    human: true,
    solo: true,
    hobby: "bowling"

}
console.log(mySelf)
//console.log(mySelf.name)
// console.log(mySelf.age)
// console.log(mySelf.gender)
// console.log(mySelf.human)
// console.log(mySelf.hobby)   */

//
/*실습3
console.log(typeof "hello");
console.log(typeof true);
const types = 20;


console.log(typeof 32 + "isn't" + typeof "흠" +"date type");
console.log("Typeof를 boolean 이나 null에 사용하면," + typeof true + "결과를 얻을 수 있습니다.");
*/
// 리더님 자료 보기.

//형변환: 데이터의 타입을 변환시켜주는 것
//prompt(): 사용자에 데이터를 입력받게 하는것
/* let mathScore = prompt("수학 점수를 입력하세요.")
let engScore = prompt("영어 점수를 입력 하세요.")
let sum = (Number(mathScore) + Number(engScore)) / 2
console.log(typeof sum)
let avg = (mathScore + engScore) / 2

console.log(avg)  

//문자형 변환
let num = 123;
console.log(typeof num)

let a = String(num)
console.log(typeof a)

let b = num.toString() //null과 undefined에서 사용불가
console.log(typeof b)
*/
//연산자 -> 암기


let num = 5
num += 10 // num = num+ 10과 동일
console.log(num)
let nums = 10, nums2 = 15

result1 = nums++;  //10
result1 = nums++;  //11

console.log(result1)

result2 = ++nums2; //16
result2 = ++nums2; //17

console.log(result2)

//비교 연산자

//논리 연산자
// || or 연산자는 둘중 하나만 조건이 일치해도 통과
// && and 연산자는 두ㅐㄱ 모두 조건이 일치해야 통과

let name = "뽀로로"
let age = 18;
let isAdult = age >19;
//  ||  <- 무슨버튼? 
if( name === "뽀로로" && age > 19) {
    console.log('통과')
} else{
    console.log('돌아가')
}

if ( !isAdult) {
    console.log('돌아가')
} else(
    console.log('통과')
)