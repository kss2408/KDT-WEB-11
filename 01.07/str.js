let str = 'Happy day~!   ';
console.log(str.length); //빈 문자 포함한 문자열길이
console.log(str.toUpperCase()); // 대문자로 변환
console.log(str.toLowerCase()); // 소문자로 변환

/* toUpperCase나 tpLowerCase는 보통 회원가입시
   아이디 중복을 막기위해 자주 사용 */

console.log(str.indexOf('y')); // 몇번째 인덱스인지 확인(단, 첫번째 문자만 검색 )
console.log(str.slice(2)); //글자 자르기
console.log(str.slice(2, -3)); //양수는 앞에서부터 음수는 뒤에서부터 자른다.

console.log(str.replace('a', 's')); // 문자 변경: 앞 값을 뒤 값으로 변경 (단, 첫번째 문자만)
console.log(str.replaceAll('y', 'i')); // 전체 문자 변경
console.log(str.repeat(4)); // 문자열 반복
console.log(str.trim().length); // 문자열길이를 파악해보면 11이 나온다(기존 14) -> 즉, 공백삭제

console.log(str.split(' ')); //문자열 자르기. **중요하다 외우자. ' '빈문자 자르기 많이쓴다.

const colors = ['red', 'orange', 'yellow'];
console.log(colors.join('--')); //joim()안에 있는 문자를 기준으로 병합

//연결해서 써보자 메소드 체이닝
console.log(str.trim().toUpperCase().split());
//ppt 복습/
