import { Requests } from './modules/Requests.js';
import { Modal } from './modules/Modal.js';
import { AdminPage } from './dashboard-admin.js';

class DepartamentPage {
  static token = localStorage.getItem('@stage:token');
  static admin = localStorage.getItem('@stage:admin');

  static goListDepartamentPage() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const listPage = document.getElementById('list-departament');

    if (listPage) {
      listPage.addEventListener('click', (e) => {
        e.preventDefault();

        window.location.assign(
          '/src/pages/users/user-admin/departament/list-departament/list.html'
        );
      });
    }
  }

  static createDepartament() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const create = document.getElementById('create-departament');

    if (create) {
      create.addEventListener('click', async (e) => {
        e.preventDefault();
        await Modal.openModalDepartament();

        const modal = document.querySelector('.modal');
        if (modal) {
          const btnClose = document.querySelector('.close-modal');
          btnClose.addEventListener('click', () => {
            modal.remove();
          });
        }

        const btnCreate = document.getElementById('btn-create');
        btnCreate.addEventListener('click', (e) => {
          e.preventDefault();

          const company = document.getElementById('company');
          const option = document.querySelectorAll('#company option');

          const find = Array.from(option).find(
            (options) => options.value === company.value
          );

          const departamentName = document.getElementById('input-name');
          const departamentDescription =
            document.getElementById('input-description');

          const newDepartament = {
            name: departamentName.value,
            description: departamentDescription.value,
            company_uuid: find.id,
          };

          Requests.createNewDepartament(newDepartament);
        });
      });
    }
  }

  static imageDepartamentPage() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const imgDarkMode = document.querySelector('.image-dark');
    const imgLightMode = document.querySelector('.image-light');
    const checkbox = document.querySelector('#checkbox');
    const mode = localStorage.getItem('@stage:mode');

    if (imgDarkMode && imgLightMode) {
      checkbox.addEventListener('change', () => {
        imgDarkMode.classList.toggle('hidden');
        imgLightMode.classList.toggle('hidden');
      });

      if (mode) {
        imgDarkMode.classList.toggle('hidden');
        imgLightMode.classList.toggle('hidden');
      }
    }
  }

  static async listAllCompanies() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const selectCompany = document.getElementById('company');
    const optionDefault = document.createElement('option');

    if (selectCompany) {
      optionDefault.innerText = 'Selecione uma empresa';
      selectCompany.appendChild(optionDefault);

      const allCompanies = await Requests.getAllCompanies();
      allCompanies.data.forEach((elem) => {
        const optionCompany = document.createElement('option');
        optionCompany.id = elem.uuid;
        optionCompany.value = elem.name;
        optionCompany.innerText = elem.name;

        selectCompany.appendChild(optionCompany);
      });
    }
  }

  static async renderDepartament() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const listCompanies = document.querySelector('.list-companies');
    const selectCompany = document.getElementById('company');

    if (selectCompany) {
      selectCompany.addEventListener('change', async () => {
        const option = document.querySelectorAll('#company option');

        const find = Array.from(option).find(
          (options) => options.value === selectCompany.value
        );

        const response = await Requests.getDepartamentCompany(find.id);

        const noDepartament = document.querySelector('.none-departament');

        if (response.data.length === 0) {
          noDepartament.style.display = 'block';
          listCompanies.innerHTML = '';
        } else {
          noDepartament.style.display = 'none';
          listCompanies.innerHTML = '';

          response.data.forEach((elem) => {
            const departament = document.createElement('li');
            const divInfo = document.createElement('div');
            const departamentName = document.createElement('h3');
            const companyName = document.createElement('p');
            const description = document.createElement('p');

            departament.id = elem.uuid;

            departament.classList.add('options');
            departament.classList.add('bg-grey-4');
            divInfo.classList.add('options__info');
            departamentName.classList.add('font-title-5');
            departamentName.classList.add('color-grey-1');
            companyName.classList.add('font-text-3');
            companyName.classList.add('color-grey-1');
            description.classList.add('font-text-3');
            description.classList.add('color-grey-1');

            departamentName.innerText = elem.name;
            companyName.innerText = `Empresa: ${elem.companies.name}`;
            description.innerText = elem.description;

            divInfo.append(departamentName);
            departament.append(divInfo, companyName, description);
            listCompanies.appendChild(departament);
          });
        }
      });
    }
  }

  static async selectedDepartament() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    let companies;

    const selectCompany = document.getElementById('company');
    if (selectCompany) {
      selectCompany.addEventListener('change', async () => {
        const option = document.querySelectorAll('#company option');

        const find = Array.from(option).find(
          (options) => options.value === selectCompany.value
        );

        const response = await Requests.getDepartamentCompany(find.id);

        companies = response.data;
      });
    }

    const list = document.getElementById('info-departament');
    if (list) {
      list.addEventListener('click', async (e) => {
        const departament = e.target.closest('li');

        if (departament) {
          const uuid = departament.id;
          const findDepartament = companies.find((elem) => elem.uuid === uuid);

          const main = document.querySelector('.main');
          const section = document.querySelector('.departament-selected');

          main.classList.toggle('hidden');
          section.classList.toggle('hidden');

          const titleDepartament = document.querySelector('.selected-title');
          const selectedDescripition = document.querySelector(
            '.selected-description'
          );

          titleDepartament.innerText = findDepartament.name;
          selectedDescripition.innerText = findDepartament.description;

          await this.employeeSelectedDepartament(findDepartament.uuid);
          this.dismiss();
          this.editEmployee();
        }
      });
    }
  }

  static buttonBack() {
    const btn = document.querySelector('.btn-back');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();

        const main = document.querySelector('.main');
        const section = document.querySelector('.departament-selected');

        main.classList.toggle('hidden');
        section.classList.toggle('hidden');
      });
    }
  }

  static async employeeSelectedDepartament(id) {
    const list = document.getElementById('list-employee');
    const allUsers = await Requests.getAllUsers();
    const filter = allUsers.data.filter((elem) => elem.department_uuid === id);

    const btnEdit = document.querySelector('.btn-edit');
    const btnDelete = document.querySelector('.btn-delete');
    btnEdit.id = id;
    btnDelete.id = id;

    list.innerHTML = '';

    filter.forEach((elem) => {
      const card = document.createElement('li');
      const div = document.createElement('div');
      const username = document.createElement('h3');
      const imgEdit = document.createElement('img');
      const imgDismiss = document.createElement('img');
      const email = document.createElement('p');
      const kindWork = document.createElement('p');
      const userExp = document.createElement('p');

      card.classList.add('options');
      card.classList.add('bg-grey-4');
      div.classList.add('options__info');
      username.classList.add('font-title-5');
      username.classList.add('color-grey-1');
      imgEdit.classList.add('btn-edit-user');
      imgDismiss.classList.add('btn-dismiss');
      email.classList.add('font-text-3');
      email.classList.add('color-grey-1');
      kindWork.classList.add('font-text-3');
      kindWork.classList.add('color-grey-1');
      userExp.classList.add('font-text-3');
      userExp.classList.add('color-grey-1');

      username.innerText = elem.username;
      email.innerText = elem.email;

      if (!elem.kind_of_work) {
        kindWork.innerText = 'Sem local de trabalho definido';
      } else {
        kindWork.innerText = elem.kind_of_work;
      }

      userExp.innerText = elem.professional_level;

      imgEdit.id = elem.uuid;
      imgEdit.src = '/src/assets/edit.svg';
      imgEdit.alt = 'Edit';
      imgDismiss.id = elem.uuid;
      imgDismiss.src = '/src/assets/dismiss.svg';
      imgDismiss.alt = 'Dismiss';

      div.append(username, imgEdit, imgDismiss);
      card.append(div, email, kindWork, userExp);
      list.appendChild(card);
    });
  }

  static goAvaliableUsersPage() {
    const btn = document.getElementById('btn-avaliable');

    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();

        window.location.assign(
          '/src/pages/users/user-admin/avaliable-users/avaliable.html'
        );
      });
    }
  }

  static async editSelectedDepartament() {
    const btnEdit = document.querySelector('.btn-edit');

    if (btnEdit) {
      btnEdit.addEventListener('click', async (e) => {
        e.preventDefault();
        await Modal.openModalEditDepartament();

        const modal = document.querySelector('.modal');
        if (modal) {
          const btnClose = document.querySelector('.close-modal');
          btnClose.addEventListener('click', () => {
            modal.remove();
          });

          const btnSend = document.getElementById('edit-send');
          btnSend.addEventListener('click', (e) => {
            e.preventDefault();

            const textarea = document.querySelector('textarea');

            const newDescription = {
              description: textarea.value,
            };

            Requests.editDepartament(btnEdit.id, newDescription);
          });
        }
      });
    }
  }

  static async deleteSelectedDepartament() {
    const btnDelete = document.querySelector('.btn-delete');

    if (btnDelete) {
      btnDelete.addEventListener('click', async (e) => {
        e.preventDefault();
        await Modal.openModalDeleteDepartament();

        const modal = document.querySelector('.modal');
        if (modal) {
          const btnClose = document.querySelector('.close-modal');
          const btnCancel = document.querySelector('.btn-cancel');
          const btns = [btnClose, btnCancel];

          btns.forEach((elem) => {
            elem.addEventListener('click', () => {
              modal.remove();
            });
          });

          const btnYes = document.getElementById('btn-yes');
          btnYes.addEventListener('click', () => {
            Requests.deleteDepartament(btnDelete.id);
          });
        }
      });
    }
  }

  static async dismiss() {
    const btnsDismiss = document.querySelectorAll('.btn-dismiss');

    btnsDismiss.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        await Modal.openModalDismiss();

        const modal = document.querySelector('.modal');
        if (modal) {
          const btnClose = document.querySelector('.close-modal');
          const btnCancel = document.querySelector('.btn-cancel');
          const btns = [btnClose, btnCancel];

          btns.forEach((elem) => {
            elem.addEventListener('click', () => {
              modal.remove();
            });
          });

          const btnYes = document.getElementById('btn-yes-dismiss');
          btnYes.addEventListener('click', () => {
            Requests.dismissUser(btn.id);
          });
        }
      });
    });
  }

  static async editEmployee() {
    const btnEdit = document.querySelectorAll('.btn-edit-user');

    btnEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        await Modal.openModalEditEmployee();

        const modal = document.querySelector('.modal');
        if (modal) {
          const btnClose = document.querySelector('.close-modal');
          btnClose.addEventListener('click', () => {
            modal.remove();
          });

          const btnSend = document.getElementById('send-edit-user');
          btnSend.addEventListener('click', (e) => {
            e.preventDefault();

            const selectWork = document.getElementById('kind-of-work');
            const selectExp = document.getElementById('user-exp');

            const editUser = {
              kind_of_work: selectWork.value,
              professional_level: selectExp.value,
            };

            Requests.updateEmployee(btn.id, editUser);
          });
        }
      });
    });
  }

  static async delete() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const btn = document.getElementById('users-delete');

    if (btn) {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        await Modal.openModalDeleteUser();

        const modal = document.querySelector('.modal');
        if (modal) {
          const btnClose = document.querySelector('.close-modal');
          btnClose.addEventListener('click', () => {
            modal.remove();
          });
        }

        const btnDelete = document.getElementById('delete');
        btnDelete.addEventListener('click', (e) => {
          e.preventDefault();

          const select = document.getElementById('all-users');
          const options = document.querySelectorAll('#all-users option');

          const find = Array.from(options).find(
            (opt) => opt.value === select.value
          );

          Requests.deleteUser(find.id);
        });
      });
    }
  }
}

DepartamentPage.goListDepartamentPage();
DepartamentPage.createDepartament();
DepartamentPage.imageDepartamentPage();
DepartamentPage.listAllCompanies();
await DepartamentPage.renderDepartament();
DepartamentPage.selectedDepartament();
DepartamentPage.buttonBack();
DepartamentPage.goAvaliableUsersPage();
DepartamentPage.editSelectedDepartament();
DepartamentPage.deleteSelectedDepartament();
DepartamentPage.delete();
