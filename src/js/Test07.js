$(function () {
    $.validator.addMethod("testUsername",function () {
        if (value>=params[0] && value<=params[1]){
            return true;
        }else {
            return false;
        }
    });
    $.validator.addMethod("cart15",function () {
        if (value.length==15){
            var reg=/^\d{15}$/;
            if (reg.test(value)){
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    });
    $.validator.addMethod("cart18",function () {
        if (value.length==18){
            var reg=/^\d{17}[0-9x]$/;
            if (reg.test(value)){
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    });
    $("#empForm").validate({
        rules:{
            realname:"required",
            username:{
                required:true,
                testUsername:[5,10]
            },
            psw:{
                required: true,
                rangelength:[6,12]
            },
            psw2:{
                required:true,
                rangelength: [6,12],
                equalTo:"#psw"
            },
            gender:{
                required:true
            },
            age:{
                required:true,
                range:[26,50]
            },
            edu:"required",
            birthday:{
                required:true,
                date:true
            },
            checkbox1:"required",
            cart:{
                required:true,
                rangelength:[15,18],
                cart15:true,
                cart18:true
            },
            email:{
                required:true,
                email: true
            }
        },
        messages:{
            username: {
                required:"用户名不能为空",
                testUsername: '长度不符合'
            },
            psw:{
                rangelength:'长度不合法'
            },
            edu: "您还没有填写学历呢",
        }
    });
});