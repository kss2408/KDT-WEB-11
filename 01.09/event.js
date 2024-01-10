const btn = document.getElementById('btn');
const def = document.getElementById('default');

btn.addEventListener('click', function (event) {
    //console.log('안녕하세요');
    console.log(event);
    console.log(event.target);
    event.preventDefault();
});
btn.addEventListener('mouseover', function () {
    console.log('mousover');
});
btn.addEventListener('mouseout', function () {
    console.log('mouseout');
});
input.addEventListener('focus', function () {
    console.log('focus');
    //alert('문자열입력가능');
});
input.addEventListener('blur', function () {
    console('blur');
});
input.addEventListener('keydown', function () {
    console.log('keydown');
});
input.addEventListener('keyup', function () {
    console.log('keyup'); // 길이제한할떄 쓴다. -> 아이디글자수 등등
});

// this: 그 함수가 속해 있던 개체 참조
// 뭔가를 클릭할때 불러오는 함수(콜백함수)에서 this는 그 뭔가를 의미함

//preventDefault
def.addEventListener('click', function (e) {
    e.preventDefault(); // form 전송을 막는 메소드
    console.log('first');
    this.textContent = '클릭함';
});
