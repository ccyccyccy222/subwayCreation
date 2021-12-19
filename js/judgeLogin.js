// 存储注册信息
$('#register').click(function () {
    console.log($('#Username').val())
    sessionStorage.setItem("Username", $('#Username').val());
    sessionStorage.setItem("tel", $('#tel').val());
    sessionStorage.setItem("Password", $('#Password').val());
    alert("注册成功")
    $('#exampleModal1').modal('hide')
})
// 匹配一下登录信息
$('#confirm').click(function () {
    if ($('#tel1').val() === sessionStorage.getItem("tel") && $('#Password1').val() === sessionStorage.getItem('Password')) {
        alert("登录成功")
        const login = document.querySelector('#login');
        const register1 = document.querySelector('#register1');
        const test = document.querySelector('#test');
        const testbox = document.querySelector('#testbox');
        testbox.style.display = 'inline-block';
        test.innerHTML = sessionStorage.getItem("Username");
        login.style.display = 'none';
        register1.style.display = 'none';
        $('#exampleModal2').modal('hide')
    }
    else {
        alert("手机号或密码不正确")
    }
})

// 登录信息判断
const login = document.querySelector('#login');
const register1 = document.querySelector('#register1');
const test = document.querySelector('#test');
const testbox = document.querySelector('#testbox');
if (sessionStorage.getItem("Username") != null) {
    testbox.style.display = 'inline-block';
    test.innerHTML = sessionStorage.getItem("Username");
    login.style.display = 'none';
    register1.style.display = 'none';
}
