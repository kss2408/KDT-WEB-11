//HTML 요소 내용 읽고 쓰기
const text = document.getElementById('text');
console.log(text);
text.textContent = 'hi';
text.innerText = '안녕하세요';
text.innerHTML = '여기는 <b>첫번째</b> 태그입니다.';
/*
* textContent : 요소안에 텍스트를 가져오거나 수정
* innerText : 요소안에 텍스트를 가져오거나 수정
textContent vs innerText
-textContent: 공백 문자 그대로 반환, IE9 이전 버전사용 불가
-innerText: 남는 공백 문자 제거, table, tbody, tr 등 테이블 요소 수정 불가
*/

// classList
text.classList.add('title');
// 검사 -> 네트워크 -> slow 3g (타국가 아직 3g쓰는곳많다) -> 검사하는것 중요!

text.classList.remove('title');
// 요소검사 보면 class라고 흔적만 남아있다.

text.classList.toggle('title-big');
/* add: 클래스 추가
    remove: 클래스 제거
    toggle: 클래스가 있으면 제거, 없으면 추가. (html div에 클래스 추가해서 실험해보기)
    toggle 많이 쓰인다.
    */
console.log(text.classList.contains('title-big'));
// 클래스명을 적어주면 클래스가 있나 없나 체크해주는것.
