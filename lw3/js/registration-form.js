var errorNumber = 0

function mailCheck(mail) {
  var mask = mail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (!mask) {
    errorNumber = 1;
    return false;
  }
  return true;
}

function passCheck(password, passwordConfirm) {
  if (password.length < 6) {
    errorNumber = 2;
    return false;
  }
  if (password != passwordConfirm) {
    errorNumber = 3;
    return false;
  }
  return true;
}
/*
function checkRules() {
  var check = $(".check").prop("checked");
  if (($(".check").prop("checked"))) {
    errorNumber = 4;
    return false;
  }
  return true;
}
*/
function checkRules() {
  if ($(".check").prop("checked")) {
    return true;
  }
  errorNumber = 4;
  return false;
}


$(".registration").submit(function() {
  var email = $(".login");
  var pass = $(".password");
  var passConfirm = $(".confirmPassword");
  if (mailCheck($(email[0]).val()) && passCheck($(pass[0]).val(), $(passConfirm[0]).val()) && checkRules()) {
    alert("регистрация прошла успешно");
  } else {
    switch (errorNumber) {
      case 1:
        errorMessage = 'Некорректный E-mail';
        break;
      case 2:
        errorMessage = 'Короткий пароль';
        break;
      case 3:
        errorMessage = 'Пароли не совпадают';
        break;
      case 4:
        errorMessage = 'Примите соглашение';
        break;
      default:
        errorMessage = 'Что-то пошло не так';
        break;
    }
    alert(errorMessage);
    return false;
  }
});

$(document).ready = (function() {
  $('.registration').on('submit', registration);
});