import { MenuMobile } from './modules/MenuMobile.js';
import { DarkMode } from './modules/DarkMode.js';
import { Requests } from './modules/Requests.js';

class RegisterPage {
  static createNewUser() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const newUser = {
        password: form[3].value,
        email: form[1].value,
        professional_level: form[2].value,
        username: form[0].value,
      };

      Requests.registerUser(newUser);
    });
  }

  static imageRegisterPage() {
    const imgDarkMode = document.querySelector('.image-register-dark');
    const imgLightMode = document.querySelector('.image-register');
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

  static goLoginPage() {
    const loginPage = document.getElementById('login-page');
    const spanLogin = document.getElementById('go-login');
    const btns = [loginPage, spanLogin];

    btns.forEach((elem) => {
      elem.addEventListener('click', () => {
        window.location.assign('../../pages/login/login.html');
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
RegisterPage.createNewUser();
RegisterPage.imageRegisterPage();
RegisterPage.goLoginPage();
RegisterPage.goHomePage();
