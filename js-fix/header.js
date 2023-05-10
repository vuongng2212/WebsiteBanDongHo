function valid_Ho() {
    let ho = $("#txtHo").val();
    let pattern = /[A-Z]{1}[a-z]{1,}/
    if (pattern.test(ho)) {
        $("#errName").html("");
        $("#txtHo").removeClass("border-danger");
        $("#txtHo").addClass("border-success");
        return true;
    }
    else {
        $("#errName").html("(*) Vui lòng nhập lại First name!");
        $("#txtHo").removeClass("border-success");
        $("#txtHo").addClass("border-danger");
        return false;
    }
}
function valid_Ten() {
    let ten = $("#txtName").val();
    let pattern = /([A-Z]{1}[a-z]{1,})|(\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*))+/
    if (pattern.test(ten)) {
        $("#errName").html("");
        $("#txtName").removeClass("border-danger");
        $("#txtName").addClass("border-success");
        return true;
    }
    else {
        $("#errName").html("(*) Vui lòng nhập lại Last name!");
        $("#txtName").removeClass("border-success");
        $("#txtName").addClass("border-danger");
        return false;
    }
}

function valid_TenTT() {
    let ten = $("#name-user").val();
    let pattern = /([A-Z]{1}[a-z]{1,})|(\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*))+/
    if (pattern.test(ten)) {
        $("#errFullName").html("");
        return true;
    }
    else {
        $("#errFullName").html("Vui lòng nhập lại Họ và Tên");
        return false;
    }
}
function valid_Phone(){
    let tel = $("#tel-user").val();
    let pattern = /((09|03|07|08|05)+([0-9]{8})\b)/
    if (pattern.test(tel)) {
        $("#errTel-user").html("");
        return true;
    }
    else {
        $("#errTel-user").html("Vui lòng nhập lại số điện thoại");
        return false;
    }
}
function valid_EmailTT() {
    let email = $("#email-user").val();
    let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (pattern.test(email)) {
        $("#errEmail-user").html("");
        return true;
    }
    else {
        $("#errEmail-user").html("Vui lòng nhập lại Email!");
        return false;
    }
}
function valid_Email() {
    let email = $("#txtEmail").val();
    let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (pattern.test(email)) {
        $("#errEmail").html("");
        $("#txtEmail").removeClass("border-danger");
        $("#txtEmail").addClass("border-success");
        return true;
    }
    else {
        $("#errEmail").html("(*) Vui lòng nhập lại Email!");
        $("#txtEmail").removeClass("border-success");
        $("#txtEmail").addClass("border-danger");
        return false;
    }
}
function valid_Username() {
    let user = $("#txtUser").val();
    let pattern = /\w+/
    if (pattern.test(user)) {
        $("#errUser").html("");
        $("#txtUser").removeClass("border-danger");
        $("#txtUser").addClass("border-success");
        return true;
    }
    else {
        $("#errUser").html("(*) User name không chứa ký tự đặc biệt! {!@#$%^&*}");
        $("#txtUser").removeClass("border-success");
        $("#txtUser").addClass("border-danger");
        return false;
    }
}
function valid_Pwd() {
    let pwd = $("#txtPwd").val();
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (pattern.test(pwd)) {
        $("#errPwd").html("");
        $("#txtPwd").removeClass("border-danger");
        $("#txtPwd").addClass("border-success");
        return true;
    }
    else {
        $("#errPwd").html("(*) Password phải chứa ký tự in hoa, thường và ký tự đặc biệt!");
        $("#txtPwd").removeClass("border-success");
        $("#txtPwd").addClass("border-danger");
        return false;
    }
}
function valid_CfmPwd() {
    let pwd = $("#txtPwd").val();
    let cfm = $("#cfmPwd").val();
    if (pwd == cfm) {
        $("#errCfmPwd").html("");
        $("#cfmPwd").removeClass("border-danger");
        $("#cfmPwd").addClass("border-success");
        return true;
    }
    else {
        $("#errCfmPwd").html("(*) Mật khẩu không khớp!");
        $("#cfmPwd").removeClass("border-success");
        $("#cfmPwd").addClass("border-danger");
        return false;
    }
}
function valid_Address() {
    let ho = $("#txtAdd").val();
    //let pattern = /\d{1,}(\s{1}\w{1,})(\s{1}?\w{1,})+)/
    if (pattern.test(ho)) {
        $("#errAdd").html("");
        return true;
    }
    else {
        $("#errAdd").html("(*) Vui long nhap lai!");
        return false;
    }
}
function valid_Tinh() {
    let ho = $("#txtTinh").val();
    let pattern = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
    if (pattern.test(ho)) {
        $("#err").html("");
        return true;
    }
    else {
        return false;
    }
}
function check_checkbox() {
    document.getElementById("cbox").onclick = function (e) {
        if (this.checked) {
            return true;
        }
        else {
            return false;
        }
    };
}

// localStorage
var storageKeyUser = 'User';
var storageKeyPwd = 'Password';
var storageKeyFirstN = 'FirstName';
var storageKeyLastN = 'LastName';

function LogOut() {
    localStorage.setItem('LoginStatus', 0);
    $("#formDN").css("display", "list-item");
    $("#AccountInfo").css("display", "none");
}
$(document).ready(function () {
    var loginSts = localStorage.getItem('LoginStatus');
    if (loginSts == '1') {
        $("#formDN").css("display", "none");
        $("#AccountInfo").css("display", "list-item");
        let ho = localStorage.getItem('FirstName');
        let ten = localStorage.getItem('LastName');
        $("#AccountName").html(ten + " " + ho);
    }
    else {
        $("#formDN").css("display", "list-item");
        $("#AccountInfo").css("display", "none");
    }
    $('#toggle-nav').click(function () {
        $('nav').slideToggle();
    });
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('header').addClass('sticky');
        }
    });
    $("#btnDK").click(function (e) {
        if (valid_Ho() && valid_Ten() && valid_Email() && valid_Username() && valid_Pwd() && valid_CfmPwd) {
            let ho = $("#txtHo").val();
            let ten = $("#txtName").val();
            let user = $("#txtUser").val();
            let pwd = $("#txtPwd").val();
            localStorage.setItem(storageKeyUser, user);
            localStorage.setItem(storageKeyPwd, pwd);
            localStorage.setItem(storageKeyFirstN, ho);
            localStorage.setItem(storageKeyLastN, ten);
            alert("Đăng ký thành công!");
        }
        else {
            alert("Đăng ký thất bại!")
        }

    });
    $("#btnLogin").click(function (e) {
        let localStorageLogin = 'LoginStatus';
        let user = $("#txtUser").val();
        let pwd = $("#txtPwd").val();
        var UserData = localStorage.getItem('User');
        var PwdData = localStorage.getItem('Password');
        // console.log(user);
        // console.log(pwd);
        // console.log(UserData);
        // console.log(PwdData);
        if (user == UserData && pwd == PwdData) {
            localStorage.setItem(localStorageLogin, 1);

            // localStorage.getItem('FirstName');
            // localStorage.getItem('LastName');
            alert("Đăng nhập thành công");
            location.replace("index.html")
        }
        else {
            localStorage.setItem(localStorageLogin, 0);
            alert("Đăng nhập thất bại! Vui lòng thử lại...");
        }
    });
    $("#chotDon").click(function (e) { 
        e.preventDefault();
        if(valid_TenTT() && valid_Phone() && valid_EmailTT()){
            return true;
        }
        else{
            return false;
        }
    });
});