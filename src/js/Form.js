//验证所有的项
function checkAll() {
    //所有的方法都返回true才表示通过
    return checkAll() && checkPassword() && checkEmail() && checkMobile() && checkBirthday();
}
//只能由英文字母和数字组成 长度为4-16个字符 并且以英文字母开头
function checkUser() {
    var reg=/^[a-aA-Z]\w{3,15}$/;
    if (reg.test(getEle("user").value)){
        getEle("userInfo").innerHTML="";
        return true;
    } else {
        getEle("userInfo").innerHTML="error";
        return false;
    }
}
//大小写字母和数字6-20个字符
function checkPassword() {
    var reg=/^\w{6,20}$/;

    if (reg.test(getEle("pwd").value)){
        getEle("pasInfo").innerHTML="";
        return true;
    } else {
        getEle("pasInfo").innerHTML="error";
        return false;
    }
}
//验证邮箱
function checkEmail() {
    var reg=/^\w+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

    if (reg.test(getEle("email").value)){
        getEle("emailInfo").innerHTML="";
        return true;
    } else {
        getEle("emailInfo").innerHTML="error";
        return false;
    }
}
//验证手机号
function checkMobile() {
    var reg=/^1[3|5|7|8]\d{9}$/;

    if (reg.test(getEle("mobile").value)){
        getEle("mobileInfo").innerHTML="";
        return true;
    } else {
        getEle("mobileInfo").innerHTML="error";
        return false;
    }
}
//验证生日
function checkBirthday() {
    var reg=/^(19[0-9][0-9]|200[0-9])-([1-9]|0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]| [1-9])$/;

    if (reg.test(getEle("birth").value)){
        getEle("birthdayInfo").innerHTML="";
        return true;
    } else {
        getEle("birthdayInfo").innerHTML="error";
        return false;
    }
}