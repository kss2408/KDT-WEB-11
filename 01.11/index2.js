//javascript

console.log(document);

//jQuery
console.log($(document));
$(document).ready(function () {
    console.log('ready() - 문서의 DOM 트리가 완성');
});
$(function () {
    console.log('안녕');
});

//click()
$('.hello').click(function () {
    $('.hello').css('color', 'red');
});

$('.num').click(function () {
    //$('.nums').css('color','blue');
    //$(this)는 자기자신 = 이벤트가 적용된 요소
    $(this).css('color', 'blue');
});

//mouseover() : 마우스 올렸을때
$('.number').mouseover(function () {
    $('.numbers').css('background-color', 'green');
    //$('.numbers').append(<li.mouseover() call<li>'));
    $(this).css('background-color', 'green');
});

//hover(): 마우스 올렸을때와 떼었을때
$('.div-hover').hover(
    function () {
        $(this).addClass('hover');
    },
    function () {
        $(this).removeClass('hover');
    }
);

//scroll()
//ex: 윈도우 창 스크롤 할 경우
$(window).scroll(function () {
    console.log('scroll');
});

//keydown()
$('.input-key').keydown(funtion (event){
    console.log(event);
    console.
})
