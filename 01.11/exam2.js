let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
function changeColor() {
    if ($('div').hasClass('red')) {
        $('div').switchClass('red', 'orange', 1000);
    } else if ($('div').hasClass('orange')) {
        $('div').switchClass('orange', 'yellow', 1000);
    } else if ($('div').hasClass('yellow')) {
        $('div').switchClass('yellow', 'green', 1000);
    } else if ($('div').hasClass('green')) {
        $('div').switchClass('green', 'blue', 1000);
    } else if ($('div').hasClass('blue')) {
        $('div').switchClass('blue', 'purple', 1000);
    } else if ($('div').hasClass('purple')) {
        $('div').switchClass('purple', 'red', 1000);
    }
}
