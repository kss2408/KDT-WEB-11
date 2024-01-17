$(document).ready(function () {
    $(".introMenu").mouseover(function () {
        $(".introSubMenu ul li").css({
            visibility: "visible",
            opacity: "1",
            transition: "1s",
            top: "4vh",
        });
    });
});
$(document).ready(function () {
    $(".activityMenu").mouseover(function () {
        $(".activitySubMenu ul li").css({
            visibility: "visible",
            opacity: "1",
            transition: "1s",
            top: "4vh",
        });
    });
});
$(document).ready(function () {
    $(".businessMenu").mouseover(function () {
        $(".businessSubMenu ul li").css({
            visibility: "visible",
            opacity: "1",
            transition: "1s",
            top: "4vh",
        });
    });
});

$(document).ready(function () {
    $(".communicationMenu").mouseover(function () {
        $(".communicationSubMenu ul li").css({
            visibility: "visible",
            opacity: "1",
            transition: "1s",
            top: "4vh",
        });
    });
});

$(document).ready(function () {
    $(".donationMenu").mouseover(function () {
        $(".donationSubMenu ul li").css({
            visibility: "visible",
            opacity: "1",
            transition: "1s",
            top: "4vh",
        });
    });
});

window.addEventListener("mouseout", function () {
    $(".main-menu ul li").css({
        visibility: "hidden",
        opacity: "0",
        transition: "0.5s",
        top: "0vh",
    });
});
