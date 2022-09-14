import { Requests } from './modules/Requests.js';
import { Modal } from './modules/Modal.js';
import { AdminPage } from './dashboard-admin.js';

class CompaniesPage {
  static token = localStorage.getItem('@stage:token');
  static admin = localStorage.getItem('@stage:admin');

  static async newCompany() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const btn = document.getElementById('new-company');

    if (btn) {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        await Modal.openModalNewCompany();

        const modal = document.querySelector('.modal');
        if (modal) {
          const btnClose = document.querySelector('.close-modal');
          btnClose.addEventListener('click', () => {
            modal.remove();
          });

          const btnCreate = document.getElementById('create-company');
          btnCreate.addEventListener('click', async (e) => {
            e.preventDefault();

            const input = document.querySelectorAll('.form input');
            const textarea = document.querySelector('.form textarea');
            const select = document.querySelector('.form select');
            const options = document.querySelectorAll('.form option');

            let uuid;
            options.forEach((opt) => {
              if (opt.value === select.value) {
                uuid = opt.id;
              }
            });

            const company = {
              name: input[0].value,
              opening_hours: input[1].value,
              description: textarea.value,
              sector_uuid: uuid,
            };

            Requests.createCompany(company);
          });
        }
      });
    }
  }

  static async createTemplate(elem) {
    const card = document.createElement('li');
    const divCompanyName = document.createElement('div');
    const name = document.createElement('h3');
    const imgArrow = document.createElement('img');
    const divContent = document.createElement('div');
    const divInfos = document.createElement('div');
    const hour = document.createElement('p');
    const sector = document.createElement('p');
    const sectionDepartament = document.createElement('section');
    const titleDepartament = document.createElement('h3');
    const listDepartaments = document.createElement('ul');
    const sectionEmplyoee = document.createElement('section');
    const titleEmplyoee = document.createElement('h3');
    const listEmplyoees = document.createElement('ul');

    const allDepartaments = await Requests.getDepartamentCompany(elem.uuid);

    allDepartaments.data.forEach(async (item) => {
      const template = document.createElement('li');
      const optionsDiv = document.createElement('div');
      const title = document.createElement('h3');
      const description = document.createElement('p');

      template.classList.add('options');
      template.classList.add('bg-grey-4');
      optionsDiv.classList.add('options__info');
      title.classList.add('font-title-5');
      title.classList.add('color-grey-1');
      description.classList.add('font-text-3');
      description.classList.add('color-grey-1');

      title.innerText = item.name;
      description.innerText = item.description;

      optionsDiv.appendChild(title);
      template.append(optionsDiv, description);
      listDepartaments.appendChild(template);

      const allUsers = await Requests.getAllUsers();
      const filter = allUsers.data.filter(
        (user) => user.department_uuid === item.uuid
      );
      filter.forEach((elemFilter) => {
        const templateEmployee = document.createElement('li');
        const optionsDivEmployee = document.createElement('div');
        const titleEmployeeFilter = document.createElement('h3');
        const expEmployee = document.createElement('p');
        const workEmployee = document.createElement('p');

        templateEmployee.classList.add('options');
        templateEmployee.classList.add('bg-grey-4');
        optionsDivEmployee.classList.add('options__info');
        titleEmployeeFilter.classList.add('font-title-5');
        titleEmployeeFilter.classList.add('color-grey-1');
        expEmployee.classList.add('font-text-3');
        expEmployee.classList.add('color-grey-1');
        workEmployee.classList.add('font-text-3');
        workEmployee.classList.add('color-grey-1');

        titleEmployeeFilter.innerText = elemFilter.username;
        expEmployee.innerText = elemFilter.professional_level;

        if (!elemFilter.kind_of_work) {
          workEmployee.innerText = 'Sem local de trabalho definido';
        } else {
          workEmployee.innerText = elemFilter.kind_of_work;
        }

        optionsDivEmployee.appendChild(titleEmployeeFilter);
        templateEmployee.append(optionsDivEmployee, expEmployee, workEmployee);
        listEmplyoees.appendChild(templateEmployee);

        if (filter.length !== 0) {
          titleEmplyoee.innerText = 'Funcionários';
        }
      });
    });

    if (allDepartaments.data.length !== 0) {
      titleDepartament.innerText = 'Departamentos';
    }

    card.classList.add('admin-company');
    card.classList.add('hidden');
    divCompanyName.classList.add('company-name');
    name.classList.add('font-text-2');
    name.classList.add('color-grey-0');
    divContent.classList.add('company-content');
    divInfos.classList.add('content__infos');
    hour.classList.add('font-text-3');
    hour.classList.add('color-grey-1');
    sector.classList.add('font-text-3');
    sector.classList.add('color-grey-1');
    titleDepartament.classList.add('font-text-2');
    titleDepartament.classList.add('color-grey-0');
    listDepartaments.classList.add('list-companies');
    titleEmplyoee.classList.add('font-text-2');
    titleEmplyoee.classList.add('color-grey-0');
    listEmplyoees.classList.add('list-companies');

    name.innerText = elem.name;
    imgArrow.src = '/src/assets/arrow.svg';
    imgArrow.alt = 'Open';
    hour.innerText = `Abre às ${elem.opening_hours}`;
    sector.innerText = `Setor: ${elem.sectors.description}`;

    divCompanyName.append(name, imgArrow);
    divInfos.append(hour, sector);
    sectionDepartament.append(titleDepartament, listDepartaments);
    sectionEmplyoee.append(titleEmplyoee, listEmplyoees);
    divContent.append(divInfos, sectionDepartament, sectionEmplyoee);
    card.append(divCompanyName, divContent);

    card.addEventListener('click', () => {
      card.classList.toggle('hidden');
    });

    return card;
  }

  static async renderAllCompanies(sector) {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const list = document.querySelector('.admin-companies');
    list.innerHTML = '';

    const allCompanies = await Requests.getAllCompanies();

    if (!sector) {
      allCompanies.data.forEach(async (elem) => {
        const template = await this.createTemplate(elem);
        list.appendChild(template);
      });
    } else {
      sector.data.forEach(async (elem) => {
        const template = await this.createTemplate(elem);
        list.appendChild(template);
      });
    }
  }

  static filterSector() {
    const select = document.getElementById('sector');
    select.addEventListener('change', async () => {
      if (select.value === 'all') {
        const allCompanies = await Requests.getAllCompanies();
        this.renderAllCompanies(allCompanies);
      } else {
        const sector = [
          'Alimenticio',
          'Varejo',
          'Textil',
          'Manufatura',
          'Aeroespacial',
          'Automotiva',
          'TI',
          'Atacado',
        ];

        sector.forEach(async (elem) => {
          if (select.value === elem) {
            const company = await Requests.listCompanySector(select.value);

            if (!company.data.length) {
              const list = document.querySelector('.admin-companies');
              const text = document.createElement('p');
              text.classList.add('none-company');
              text.classList.add('font-title-5');
              text.classList.add('color-grey-0');
              text.innerText =
                'Você não possui nenhuma empresa desse setor criada até o momento.';

              list.innerHTML = '';
              list.appendChild(text);
            } else {
              this.renderAllCompanies(company);
            }
          }
        });
      }
    });
  }

  static async renderSearchCompany(elem) {
    const list = document.querySelector('.admin-companies');
    list.innerHTML = '';

    const template = await this.createTemplate(elem);
    list.appendChild(template);
  }

  static searchCompany() {
    const input = document.querySelector('.search input');

    input.addEventListener('keyup', async () => {
      const inputValue = input.value.toLowerCase().trim();
      const allCompanies = await Requests.getAllCompanies();

      allCompanies.data.forEach((elem) => {
        const nameCompany = elem.name.toLowerCase().trim();
        if (nameCompany.includes(inputValue)) {
          this.renderSearchCompany(elem);
        }
      });
    });
  }
}

CompaniesPage.newCompany();
CompaniesPage.renderAllCompanies();
CompaniesPage.filterSector();
CompaniesPage.searchCompany();
