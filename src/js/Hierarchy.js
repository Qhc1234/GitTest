$("#b1").click(function () {
    $("body div").css("background-color","red");
});

$("#b2").click(function () {
    $("body > div").css("background-color","red");
});

$("#b3").click(function () {
    $("#one+div").css("background-color","red");
});

$("#b4").click(function () {
    $("#two~div").css("background-color","red");
});
$("#b5").click(function () {
    $("#two").siblings("div").css("background-color","red");
});