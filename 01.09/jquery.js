//$선택자.동작함수();
console.log($('#hello').text());
$('#hello').text('안녕히가세요');
$('#hello').css('font-size', '20px');

//jquery 메소드
//val()

function getValue() {
    let value = $;
}

function changeCssJs() {
    let span = document.querySelector('span');
    span.style = 'font-size:20px; color:red';
}

function changeCssJquery() {
    $('span').css('font=size', '40px');
    $('span').css('color', 'blue');
    $('span').css({ 'font-size': '40px', color: 'blue' });
}
function getCssJquery() {
    console.log($('span').css('color'));
}

//attr()
