import { Requests } from './modules/Requests.js';
import { Modal } from './modules/Modal.js';
import { AdminPage } from './dashboard-admin.js';

class AvaliablePage {
  static token = localStorage.getItem('@stage:token');
  static admin = localStorage.getItem('@stage:admin');

  static async avaliable() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const users = await Requests.usersAvaliable();

    if (users.data.length === 0) {
      const noUsers = document.querySelector('.modal__list h2');
      noUsers.style.display = 'block';
    } else {
      const list = document.getElementById('list-users');

      users.data.forEach((elem) => {
        const card = document.createElement('li');
        const divInfo = document.createElement('div');
        const imgInfo = document.createElement('img');
        const title = document.createElement('h3');
        const work = document.createElement('p');

        card.classList.add('options');
        card.classList.add('bg-grey-4');
        card.classList.add('user-avaliable');
        divInfo.classList.add('options__info');
        title.classList.add('font-title-5');
        title.classList.add('color-grey-1');
        work.classList.add('font-text-3');
        work.classList.add('color-grey-1');

        card.id = elem.uuid;

        title.innerText = elem.username;
        work.innerText = `Cargo: ${elem.professional_level}`;
        imgInfo.src = '/src/assets/free.svg';
        imgInfo.alt = 'User avaliable';

        divInfo.append(imgInfo, title);
        card.append(divInfo, work);

        list.appendChild(card);
      });
    }
  }

  static async toHire() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const users = document.querySelectorAll('.user-avaliable');

    let userId;

    users.forEach((elem) => {
      elem.addEventListener('click', async () => {
        await Modal.openModalToHire();

        userId = elem.id;

        const modal = document.querySelector('.modal');
        if (modal) {
          const btnClose = document.querySelector('.close-modal');
          btnClose.addEventListener('click', () => {
            modal.remove();
          });
        }

        const btnHire = document.querySelector('.btn-default');
        btnHire.addEventListener('click', (e) => {
          e.preventDefault();

          const departament = document.getElementById('departament');
          const option = document.querySelectorAll('#departament option');

          const find = Array.from(option).find(
            (options) => options.value === departament.value
          );

          const data = {
            user_uuid: userId,
            department_uuid: find.id,
          };

          Requests.toHireUser(data);
        });
      });
    });
  }

  static goDashboradPage() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const dashboardPage = document.getElementById('dashboard-page');

    dashboardPage.addEventListener('click', () => {
      window.location.assign(
        '/src/pages/users/user-admin/dashboard/dashboard-admin.html'
      );
    });
  }
}

AvaliablePage.goDashboradPage();
await AvaliablePage.avaliable();
AvaliablePage.toHire();
