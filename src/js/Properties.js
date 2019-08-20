$("#b1").click(function () {
    $("input[type='test']:enabled").val("百度一下");
});
$("#b2").click(function () {
    $("input:text:disabled").val("百度一下");
});
$("#b3").click(function () {
    var sum=$("input:checkbox:checked").sum;
    alert(sum);
});
$("#b4").click(function () {
    var sun=$("select option:selected").text();
    alert(sun);
});