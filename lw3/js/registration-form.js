function validateForm(password, passwordConfirm, mail) {
  var check = document.getElementsByClassName('check')[0].checked;
  var mask = mail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (!mask) {
    return 'Некорректный E-mail';
  } else if (password.length < 6) {
    return 'Пароль короткий';
  } else if (password != passwordConfirm) {
    return 'Пароли не совпадают';
  } else if (!check) {
    return 'Примите соглашение';
  } else {
    return true;
  };
}

function registration(event) {

  var mail = document.getElementsByClassName("login")[0].value;
  var pass = document.getElementsByClassName("password")[0].value;
  var passConfirm = document.getElementsByClassName("confirmPassword")[0].value;
  var validateResult = validateForm(pass, passConfirm, mail);
  if (validateResult === true) {
    alert("Регистрация прошла успешно!");
  } else {
    alert(validateResult);
    event.preventDefault();
  }
}

window.onload = function() {
  document.getElementById('registration').addEventListener('submit', registration);
}