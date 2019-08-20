$("#b1").click(function () {
    $("div[title]").css("background-color","red");
});

$("#b2").click(function () {
    $("div[title='test']").css("background-color","red");
});

$("#b3").click(function () {
    $("div[title!='test']").css("background-color","red");
});

$("#b4").click(function () {
    $("div[title^='te']").css("background-color","red");
});

$("#b5").click(function () {
    $("div[title$='est']").css("background-color","red");
});

$("#b6").click(function () {
    $("div[title*='es']").css("background-color","red");
});

$("#b7").click(function () {
    $("div[id][title*='es']").css("background-color","red");
});
