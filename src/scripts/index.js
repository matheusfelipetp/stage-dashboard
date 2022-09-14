import { MenuMobile } from './modules/MenuMobile.js';
import { DarkMode } from './modules/DarkMode.js';
import { Requests } from './modules/Requests.js';

class HomePage {
  static createTemplate(elem) {
    const card = document.createElement('li');
    const divInfo = document.createElement('div');
    const imgInfo = document.createElement('img');
    const title = document.createElement('h3');
    const sector = document.createElement('p');
    const hour = document.createElement('p');
    const imgVerify = document.createElement('img');

    card.classList.add('options');
    card.classList.add('bg-grey-4');
    divInfo.classList.add('options__info');
    title.classList.add('font-title-5');
    title.classList.add('color-grey-1');
    sector.classList.add('font-text-3');
    sector.classList.add('color-grey-1');
    hour.classList.add('font-text-3');
    hour.classList.add('color-grey-1');
    imgVerify.classList.add('verify');

    imgVerify.src =
      'https://upload.wikimedia.org/wikipedia/commons/c/c6/Sign-check-icon.png';
    imgVerify.alt = 'Company Verify';
    imgInfo.alt = elem.sectors.description;

    if (elem.sectors.description === 'Alimenticio') {
      imgInfo.src =
        'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2014%2014%22%20stroke-width%3D%221%22%3E%3Cg%3E%3Cpath%20d%3D%22M4%2C.5h6A3.5%2C3.5%2C0%2C0%2C1%2C13.5%2C4V4a1%2C1%2C0%2C0%2C1-1%2C1H1.5a1%2C1%2C0%2C0%2C1-1-1V4A3.5%2C3.5%2C0%2C0%2C1%2C4%2C.5Z%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cline%20x1%3D%220.5%22%20y1%3D%227.5%22%20x2%3D%2213.5%22%20y2%3D%227.5%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fline%3E%3Cpath%20d%3D%22M13%2C10H7L5.5%2C11.5%2C2.5%2C10H1a.5.5%2C0%2C0%2C0-.5.5h0a3%2C3%2C0%2C0%2C0%2C3%2C3h7a3%2C3%2C0%2C0%2C0%2C3-3h0A.5.5%2C0%2C0%2C0%2C13%2C10Z%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E';
    } else if (elem.sectors.description === 'Varejo') {
      imgInfo.src =
        'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2014%2014%22%20stroke-width%3D%221%22%3E%3Cg%3E%3Cline%20x1%3D%226.5%22%20y1%3D%2211%22%20x2%3D%227.5%22%20y2%3D%2211%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fline%3E%3Cline%20x1%3D%2210%22%20y1%3D%225%22%20x2%3D%2210%22%20y2%3D%223%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fline%3E%3Cpath%20d%3D%22M12%2C1.75A1.25%2C1.25%2C0%2C0%2C1%2C10.75%2C3H9.25a1.25%2C1.25%2C0%2C0%2C1%2C0-2.5h1.5A1.25%2C1.25%2C0%2C0%2C1%2C12%2C1.75Z%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpolyline%20points%3D%225.5%205%205.5%201.5%202.5%201.5%202.5%205%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpolyline%3E%3Crect%20x%3D%220.5%22%20y%3D%228.5%22%20width%3D%2213%22%20height%3D%225%22%20rx%3D%221%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Frect%3E%3Cpath%20d%3D%22M12.5%2C8.5V6a1%2C1%2C0%2C0%2C0-1-1h-9a1%2C1%2C0%2C0%2C0-1%2C1V8.5%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E';
    } else if (elem.sectors.description === 'Textil') {
      imgInfo.src =
        'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2014%2014%22%20stroke-width%3D%221%22%3E%3Cpath%20d%3D%22M11.5%2C9C11.5%2C6.51%2C7%2C.5%2C7%2C.5S2.5%2C6.51%2C2.5%2C9a4.5%2C4.5%2C0%2C0%2C0%2C9%2C0Z%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E';
    } else if (elem.sectors.description === 'Manufatura') {
      imgInfo.src =
        'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2014%2014%22%20stroke-width%3D%221%22%3E%3Cpath%20d%3D%22M13.43%2C3.59a.76.76%2C0%2C0%2C0-.35-.51l-2%2C2a1%2C1%2C0%2C0%2C1-1.44%2C0L8.88%2C4.4A1%2C1%2C0%2C0%2C1%2C8.88%2C3l2-2A.76.76%2C0%2C0%2C0%2C10.4.57%2C3.8%2C3.8%2C0%2C0%2C0%2C6.26%2C6L.8%2C11.41a1%2C1%2C0%2C0%2C0%2C0%2C1.43l.36.36a1%2C1%2C0%2C0%2C0%2C1.43%2C0L8.05%2C7.75a3.81%2C3.81%2C0%2C0%2C0%2C5.38-4.16Z%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E';
    } else if (elem.sectors.description === 'Aeroespacial') {
      imgInfo.src =
        'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2014%2014%22%20stroke-width%3D%221%22%3E%3Cg%3E%3Cpath%20d%3D%22M13.19%2C3.78l-1.37-.44a.46.46%2C0%2C0%2C0-.51.17L10.37%2C5%2C5.21%2C2.43A3.24%2C3.24%2C0%2C0%2C0%2C.54%2C4.08a.88.88%2C0%2C0%2C0%2C.58%2C1.1l3.39%2C1.1.34.11.64%2C2.19a.45.45%2C0%2C0%2C0%2C.31.32l1.54.5A.48.48%2C0%2C0%2C0%2C8%2C8.86L7.68%2C7.3l.22.07%2C3.31%2C1.07a.86.86%2C0%2C0%2C0%2C1.11-.52l1.16-3.6A.44.44%2C0%2C0%2C0%2C13.19%2C3.78Z%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cline%20x1%3D%220.5%22%20y1%3D%2213.5%22%20x2%3D%2213.5%22%20y2%3D%2213.5%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fline%3E%3C%2Fg%3E%3C%2Fsvg%3E';
    } else if (elem.sectors.description === 'Automotiva') {
      imgInfo.src =
        'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2014%2014%22%20stroke-width%3D%221%22%3E%3Cg%3E%3Cpath%20d%3D%22M12.5%2C10.5a1%2C1%2C0%2C0%2C0%2C1-1v-2a1%2C1%2C0%2C0%2C0-1-1H11l-.77-2.32a1%2C1%2C0%2C0%2C0-1-.68H5.22a1%2C1%2C0%2C0%2C0-1%2C.68L3.5%2C6.5h-2a1%2C1%2C0%2C0%2C0-1%2C1v2a1%2C1%2C0%2C0%2C0%2C1%2C1%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Ccircle%20cx%3D%223.5%22%20cy%3D%2210.5%22%20r%3D%222%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fcircle%3E%3Ccircle%20cx%3D%2210.5%22%20cy%3D%2210.5%22%20r%3D%222%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fcircle%3E%3Cline%20x1%3D%225.5%22%20y1%3D%2210.5%22%20x2%3D%228.5%22%20y2%3D%2210.5%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fline%3E%3Cline%20x1%3D%227%22%20y1%3D%223.5%22%20x2%3D%227%22%20y2%3D%221.5%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fline%3E%3C%2Fg%3E%3C%2Fsvg%3E';
    } else if (elem.sectors.description === 'TI') {
      imgInfo.src =
        'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2014%2014%22%20stroke-width%3D%221%22%3E%3Cg%3E%3Crect%20x%3D%221%22%20y%3D%223%22%20width%3D%227%22%20height%3D%2210.5%22%20rx%3D%223.5%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Frect%3E%3Cline%20x1%3D%221%22%20y1%3D%227%22%20x2%3D%228%22%20y2%3D%227%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fline%3E%3Cpath%20d%3D%22M4.5%2C7V2.75A2.25%2C2.25%2C0%2C0%2C1%2C6.75.5h0A2.25%2C2.25%2C0%2C0%2C1%2C9%2C2.75V3a2%2C2%2C0%2C0%2C0%2C2%2C2h0a2%2C2%2C0%2C0%2C0%2C2-2V1.5%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E';
    } else {
      imgInfo.src =
        'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2014%2014%22%20stroke-width%3D%221%22%3E%3Cpath%20d%3D%22M10.5%2C1.5l3%2C3-2%2C2-1-1v6a1%2C1%2C0%2C0%2C1-1%2C1h-5a1%2C1%2C0%2C0%2C1-1-1v-6l-1%2C1-2-2%2C3-3Z%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E';
    }

    title.innerText = elem.name;
    sector.innerText = `Setor: ${elem.sectors.description}`;
    hour.innerText = `Abre às ${elem.opening_hours}`;

    divInfo.append(imgInfo, title);
    card.append(divInfo, sector, hour, imgVerify);

    return card;
  }

  static async renderCompanies(sector) {
    const listCompanies = document.querySelector('.list-companies');
    listCompanies.innerHTML = '';

    const allCompanies = await Requests.getAllCompanies();

    if (!sector) {
      allCompanies.data.forEach((elem) => {
        const template = this.createTemplate(elem);
        listCompanies.appendChild(template);
      });
    } else {
      sector.data.forEach((elem) => {
        const template = this.createTemplate(elem);
        listCompanies.appendChild(template);
      });
    }
  }

  static filterSector() {
    const select = document.getElementById('sector');
    select.addEventListener('change', async () => {
      if (select.value === 'all') {
        const allCompanies = await Requests.getAllCompanies();
        this.renderCompanies(allCompanies);
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
              const listCompanies = document.querySelector('.list-companies');
              const text = document.createElement('p');
              text.classList.add('none-company');
              text.classList.add('font-title-5');
              text.classList.add('color-grey-0');
              text.innerText =
                'Não temos nenhuma empresa desse setor cadastrada até o momento.';

              listCompanies.innerHTML = '';
              listCompanies.appendChild(text);
            } else {
              this.renderCompanies(company);
            }
          }
        });
      }
    });
  }

  static imageHomePage() {
    const imgDarkMode = document.querySelector('.image-home-dark');
    const imgLightMode = document.querySelector('.image-home');
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
    loginPage.addEventListener('click', () => {
      window.location.assign('./src/pages/login/login.html');
    });
  }

  static goRegisterPage() {
    const registerPage = document.getElementById('register-page');
    registerPage.addEventListener('click', () => {
      window.location.assign('./src/pages/register/register.html');
    });
  }
}

MenuMobile.toggleMenu();
DarkMode.toggleMode();
DarkMode.verifyMode();
HomePage.renderCompanies();
HomePage.filterSector();
HomePage.imageHomePage();
HomePage.goLoginPage();
HomePage.goRegisterPage();
