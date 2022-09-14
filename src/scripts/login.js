import { MenuMobile } from './modules/MenuMobile.js';
import { DarkMode } from './modules/DarkMode.js';
import { Requests } from './modules/Requests.js';

class LoginPage {
  static login() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const user = {
        email: form[0].value,
        password: form[1].value,
      };

      Requests.loginUser(user);
    });
  }

  static imageLoginPage() {
    const imgDarkMode = document.querySelector('.image-login-dark');
    const imgLightMode = document.querySelector('.image-login');
    const checkbox = document.querySelector('#checkbox');
    const mode = localStorage.getItem('@stage:mode');

    checkbox.addEventListener('change', () => {
      imgDarkMode.classList.toggle('hidden');
      imgLightMode.classList.toggle('hidden');
    });

    if (mode) {
      imgDarkMode.classList.toggle('hidden');
      imgLightMode.classList.toggle('hidden');
    }
  }

  static goRegisterPage() {
    const registerPage = document.getElementById('register-page');
    const spanRegister = document.getElementById('go-register');
    const btns = [registerPage, spanRegister];

    btns.forEach((elem) => {
      elem.addEventListener('click', () => {
        window.location.assign('../../pages/register/register.html');
      });
    });
  }

  static goHomePage() {
    const registerPage = document.getElementById('home-page');
    registerPage.addEventListener('click', () => {
      window.location.assign('../../../index.html');
    });
  }
}

MenuMobile.toggleMenu();
DarkMode.toggleMode();
DarkMode.verifyMode();
LoginPage.login();
LoginPage.imageLoginPage();
LoginPage.goRegisterPage();
LoginPage.goHomePage();
