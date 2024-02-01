function showLoginPopup() {
  document.getElementById("main-left").style.display = "none";
  document.getElementById("login-popup").style.display = "block";
  document.getElementById("register-popup").style.display = "none";
}

function showRegisterPopup() {
  document.getElementById("main-left").style.display = "none";
  document.getElementById("login-popup").style.display = "none";
  document.getElementById("register-popup").style.display = "block";
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
  document.getElementById("main-left").style.display = "flex";
}
