function validateForm(password, passwordConfirm, mail) {
  var check = $(".check").prop("checked");
  var mask = mail.val().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (!mask) {
    return 'Некорректный E-mail';
  } else if (password.val().length < 6) {
    return 'Пароль короткий';
  } else if (password.val() != passwordConfirm.val()) {
    return 'Пароли не совпадают';
  } else if (!check) {
    return 'Примите соглашение';
  } else {
    return true;
  }
}

$(".registration").submit(function(event) {
  var mail = $(".login");
  var pass = $(".password");
  var passConfirm = $(".confirmPassword");
  var validateResult = validateForm(pass, passConfirm, mail)
  if (validateResult === true) {
    alert("Регистрация прошла успешно!");
  } else {
    alert(validateResult);
    event.preventDefault();
  }
});

$(document).ready = (function() {
  $('.registration').on('submit', registration);
});