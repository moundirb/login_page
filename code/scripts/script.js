function showLoginPopup() {
  document.getElementById('home-section').style.display = 'none';
  document.getElementById('login-popup').style.display = 'block';
  document.getElementById('register-popup').style.display = 'none';

}

function showRegisterPopup() {
  document.getElementById('login-popup').style.display = 'none';
  document.getElementById('register-popup').style.display = 'block';
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
  document.getElementById('home-section').style.display = 'block';
}