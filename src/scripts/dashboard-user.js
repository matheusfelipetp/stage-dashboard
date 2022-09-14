import { MenuMobile } from './modules/MenuMobile.js';
import { DarkMode } from './modules/DarkMode.js';
import { Requests } from './modules/Requests.js';
import { Modal } from './modules/Modal.js';

class UserPage {
  static token = localStorage.getItem('@stage:token');
  static admin = localStorage.getItem('@stage:admin');

  static async userInfos() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && this.admin) {
      window.location.replace(
        '/src/pages/users/user-admin/dashboard/dashboard-admin.html'
      );
    }

    const userInfo = await Requests.getInfoUser();

    const username = document.getElementById('welcome-user');
    username.innerText = `Bem-vindo, ${userInfo.data.username}!`;

    const companyInfo = await Requests.getUserDepartament();
    const departamentInfo = await Requests.getAllEmployeeDepartament();

    if (companyInfo.data) {
      const company = document.getElementById('company-name');

      if (userInfo.data.kind_of_work) {
        company.innerText = `${companyInfo.data.name} - ${userInfo.data.kind_of_work}`;
      } else {
        company.innerText = `${companyInfo.data.name} - Sem local de trabalho definido`;
      }
    }

    if (departamentInfo.data.length !== 0) {
      const department = document.getElementById('departament-name');
      department.innerText = `${departamentInfo.data[0].name} - ${userInfo.data.professional_level}`;
    }
  }

  static departament() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && this.admin) {
      window.location.replace(
        '/src/pages/users/user-admin/dashboard/dashboard-admin.html'
      );
    }

    const departamentPage = document.getElementById('departament-page');
    const departamentList = document.getElementById('departament-option');

    const links = [departamentPage, departamentList];

    links.forEach((elem) => {
      elem.addEventListener('click', async () => {
        await Modal.openModalUserDepartament();

        const modal = document.querySelector('.modal');
        if (modal) {
          const btnClose = document.querySelector('.close-modal');
          btnClose.addEventListener('click', () => {
            modal.remove();
          });
        }
      });
    });
  }

  static edit() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && this.admin) {
      window.location.replace(
        '/src/pages/users/user-admin/dashboard/dashboard-admin.html'
      );
    }

    const editPage = document.getElementById('edit-page');
    const edit = document.getElementById('edit-option');

    const links = [editPage, edit];

    links.forEach((elem) => {
      elem.addEventListener('click', async () => {
        await Modal.openModalEdit();

        const modal = document.querySelector('.modal');
        if (modal) {
          const btnClose = document.querySelector('.close-modal');
          btnClose.addEventListener('click', () => {
            modal.remove();
          });

          const form = document.querySelector('.form');
          form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username');
            const email = document.getElementById('email');
            const password = document.getElementById('password');

            const userEdit = {
              username: username.value,
              email: email.value,
              password: password.value,
            };

            Requests.editUser(userEdit);
          });
        }
      });
    });
  }

  static logout() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && this.admin) {
      window.location.replace(
        '/src/pages/users/user-admin/dashboard/dashboard-admin.html'
      );
    }

    const btnLogout = document.getElementById('logout');

    btnLogout.addEventListener('click', () => {
      localStorage.removeItem('@stage:token');
      localStorage.removeItem('@stage:id');

      window.location.replace('/index.html');
    });
  }
}

MenuMobile.toggleMenu();
DarkMode.toggleMode();
DarkMode.verifyMode();
UserPage.userInfos();
UserPage.departament();
UserPage.edit();
UserPage.logout();
