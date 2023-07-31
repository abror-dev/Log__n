var elForm = document.querySelector(".form");
var elLogin = document.querySelector(".login");
var elPassword = document.querySelector(".password");

elForm.addEventListener("submit", function (evn) {
  evn.preventDefault();

  if (elLogin.value.length > 10 && elPassword.value.length > 8) {
    alert("Qabul qlndi🆒️");
  } else {
    alert("Qabul qlnmadi🤷‍♂");
  }
});
