function addClass() {
    $('#hi').addClass('font-size');
}
function removeClass() {
    $('#hi').removeClass('font-size'); //특정 클래스 삭제
    //$('#hi').removeClass(); // class 전체삭제
}
function hasClass() {
    console.log($('#hi').hasClass('font-size'));
    // 트루(true) or 펄스(false) 반환
}
function toggleClass() {
    $('#hi').toggleClass('bg-color');
}

function switchClass() {
    $('#hi').switchClass('color-blue', 'color-red', 1000); //1000 -> 1초의미 (초단위)
}
