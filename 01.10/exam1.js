$('.picture').css({
    width: '200px',
    height: '200px',
    border: '5px ridge yellow',
    'border-radius': '40px',
    'text-align': 'center',
});

function banana() {
    $('.picture').empty();
    $('.picture').prepend('<img src="바나나.jpg" alt="banana">');
    $('img').css({ width: '200px', height: '200px', 'border-radius': '40px' });
}

function apple() {
    $('.picture').empty();
    $('.picture').prepend('<img src="사과.jpg" alt="apple">');
    $('img').css({ width: '200px', height: '200px', 'border-radius': '40px' });
}
function grape() {
    $('.picture').empty();
    $('.picture').prepend('<img src="포도.jpg" alt="grape">');
    $('img').css({ width: '200px', height: '200px', 'border-radius': '40px' });
}
function peach() {
    $('.picture').empty();
    $('.picture').prepend('<img src="복숭아.jpg" alt="peach">');
    $('img').css({ width: '200px', height: '200px', 'border-radius': '40px' });
}
