$("#a1").click(function () {
    $("div:first").css("background-color","yellow");
});
$("#a2").click(function () {
    $("div:last").css("background-color","yellow");
});

$("#a3").click(function () {
    $("div:not(.one)").css("background-color","yellow");
});

$("#a4").click(function () {
    $("div:even").css("background-color","yellow");
});
$("#a5").click(function () {
    $("div:odd").css("background-color","yellow");
});
$("#a6").click(function () {
    $("div:eq(4)").css("background-color","yellow");
});
$("#a7").click(function () {
    $("div:gt(3)").css("background-color","yellow");
});
$("#a8").click(function () {
    $("div:lt(5)").css("background-color","yellow");
});
$("#a9").click(function () {
    $("div:header").css("background-color","yellow");
});
