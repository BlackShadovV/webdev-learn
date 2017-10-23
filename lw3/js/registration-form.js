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

function checkRules() {
  var check = document.getElementsByClassName("check")[0].checked;
  if (!check) {
    errorNumber = 4;
    return false;
  }
  return true;
}

function registration() {
  var email = document.getElementsByClassName("login")[0].value;
  var pass = document.getElementsByClassName("password")[0].value;
  var passConfirm = document.getElementsByClassName("confirmPassword")[0].value;
  localStorage.setItem("email", JSON.stringify(email));
  localStorage.setItem("password", JSON.stringify(pass));
  localStorage.setItem("passConfirm", JSON.stringify(passConfirm));
  if (mailCheck(email) && passCheck(pass, passConfirm) && checkRules()) {
    alert("регистрация прошла успешно");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("passConfirm");
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
  }
}

window.onload = function() {
  document.getElementById('registration').addEventListener('submit', registration);
}