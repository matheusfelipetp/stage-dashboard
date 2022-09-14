import { MenuMobile } from './modules/MenuMobile.js';
import { DarkMode } from './modules/DarkMode.js';
import { Requests } from './modules/Requests.js';
import { Modal } from './modules/Modal.js';

export class AdminPage {
  static token = localStorage.getItem('@stage:token');
  static admin = localStorage.getItem('@stage:admin');

  static async sectors() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const sectorOption = document.getElementById('sector-option');
    const sectorPage = document.getElementById('sector-page');
    const links = [sectorOption, sectorPage];

    links.forEach((elem) => {
      if (elem) {
        elem.addEventListener('click', async () => {
          await Modal.openModalSectors();

          const modal = document.querySelector('.modal');
          if (modal) {
            const btnClose = document.querySelector('.close-modal');
            btnClose.addEventListener('click', () => {
              modal.remove();
            });
          }
        });
      }
    });
  }

  static goDashboardPage() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const dashboard = document.getElementById('dashboard-page');

    dashboard.addEventListener('click', () => {
      window.location.assign(
        '/src/pages/users/user-admin/dashboard/dashboard-admin.html'
      );
    });
  }

  static goAvaliableUsersPage() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const users = document.getElementById('users-option');

    if (users) {
      users.addEventListener('click', () => {
        window.location.assign(
          '/src/pages/users/user-admin/avaliable-users/avaliable.html'
        );
      });
    }
  }

  static goDepartamentPage() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const departament = document.getElementById('departament-option');

    const departamentPage = document.getElementById('departament-page');

    const links = [departament, departamentPage];

    links.forEach((elem) => {
      if (elem) {
        elem.addEventListener('click', () => {
          window.location.assign(
            '/src/pages/users/user-admin/departament/departament.html'
          );
        });
      }
    });
  }

  static goCompaniesPage() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const companies = document.getElementById('company-option');

    const companiesPage = document.getElementById('company-page');

    const links = [companies, companiesPage];

    links.forEach((elem) => {
      if (elem) {
        elem.addEventListener('click', () => {
          window.location.assign(
            '/src/pages/users/user-admin/companies/companies.html'
          );
        });
      }
    });
  }

  static logout() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const btnLogout = document.getElementById('logout');

    btnLogout.addEventListener('click', () => {
      localStorage.removeItem('@stage:token');
      localStorage.removeItem('@stage:id');
      localStorage.removeItem('@stage:admin');

      window.location.replace('/index.html');
    });
  }
}

MenuMobile.toggleMenu();
DarkMode.toggleMode();
DarkMode.verifyMode();
AdminPage.sectors();
AdminPage.logout();
AdminPage.goAvaliableUsersPage();
AdminPage.goDepartamentPage();
AdminPage.goCompaniesPage();
AdminPage.goDashboardPage();
