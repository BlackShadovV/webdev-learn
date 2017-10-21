/*Написать программу определения корректности ввода пользователем адреса электронной почты. Программа должна проверять следующие условия:
1. наличие символа «@»;
2. минимальный размер адреса – 6 символов (например, a@b.by);
3. слева от символа «@» должен быть, как минимум, один символ;
4. справа от символа «@» должна быть, как минимум, одна точка;
5. справа от последней точки должно быть, как минимум, 2 символа;
6. между символом «@» и следующей за ним точкой должен быть, как минимум, один символ.
*/


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
  var check = document.getElementsByClassName("check")[0].checked;
  if (!check) {
    alert("вы не приняли соглашение");
    return false;
  }
  return true;
}

function mailCheck(mail) {
  var mask = mail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (!mask) {
    alert('Введите валидный E-mail');
    return false;
  }
  return true;
}

function main() {
  var email = document.getElementsByClassName("login")[0].value;
  var pass = document.getElementsByClassName("password")[0].value;
  var passConfirm = document.getElementsByClassName("confirmPassword")[0].value;
  if (mailCheck(email) && passCheck(pass, passConfirm) && checkRules()) {
    alert("регистрация прошла успешно");
  }
}