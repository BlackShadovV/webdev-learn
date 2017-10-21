function mailCheck(mail) {
  var mask = mail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (!mask) {
    alert('Введите валидный E-mail');
    return false;
  }
  return true;
}

function passCheck(password, passwordConfirm) {
  if (password.length < 6) {
    alert("Пароль слишком короткий");
    return false;
  }
  if (password != passwordConfirm) {
    alert("Пароли не совпадают");
    return false;
  }
  return true;
}

function checkRules() {
  var check = $(".check").prop("checked");
  if (!check) {
    alert("вы не приняли соглашение");
    return false;
  }
  return true;
}

$(".registration").submit(function() {
  var email = $(".login");
  var pass = $(".password");
  var passConfirm = $(".confirmPassword");
  if (mailCheck($(email[0]).val()) && passCheck($(pass[0]).val(), $(passConfirm[0]).val()) && checkRules()) {
    alert("регистрация прошла успешно");
  }
});