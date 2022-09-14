import { Requests } from './Requests.js';
import { Toast } from './Toast.js';

export class Modal {
  static createModalUserDepartament(elem) {
    const section = document.createElement('section');
    const div = document.createElement('div');
    const title = document.createElement('h1');
    const btn = document.createElement('button');
    const list = document.createElement('ul');

    section.classList.add('modal');
    div.classList.add('down-text');
    div.classList.add('modal__content');
    list.classList.add('modal__list');
    btn.classList.add('close-modal');

    title.innerText = elem.name;
    btn.innerText = 'X';

    elem.users.forEach((elemUsers) => {
      const employee = document.createElement('li');
      const employeeName = document.createElement('p');
      const employeeEmail = document.createElement('p');
      const employeeExp = document.createElement('p');

      employeeName.innerText = elemUsers.username;
      employeeEmail.innerText = elemUsers.email;
      employeeExp.innerText = elemUsers.professional_level;

      employeeEmail.classList.add('hidden');

      employee.append(employeeName, employeeEmail, employeeExp);
      list.appendChild(employee);
    });

    div.append(title, btn, list);
    section.appendChild(div);

    return section;
  }

  static async openModalUserDepartament() {
    const body = document.querySelector('body');
    const departamentInfo = await Requests.getAllEmployeeDepartament();

    if (departamentInfo.data.length !== 0) {
      const template = this.createModalUserDepartament(departamentInfo.data[0]);

      body.appendChild(template);
    } else {
      Toast.create('Você ainda não possui um departamento!', 'toast', 'red');
    }
  }

  static createModalEdit() {
    const section = document.createElement('section');
    const form = document.createElement('form');
    const btnClose = document.createElement('button');
    const labelUsername = document.createElement('label');
    const inputUsername = document.createElement('input');
    const labelEmail = document.createElement('label');
    const inputEmail = document.createElement('input');
    const labelPassword = document.createElement('label');
    const inputPassword = document.createElement('input');
    const btnSend = document.createElement('button');

    section.classList.add('modal');
    form.classList.add('form');
    form.classList.add('bg-grey-4');
    form.classList.add('down-text');
    btnClose.classList.add('close-modal');
    labelUsername.classList.add('font-text-5');
    labelUsername.classList.add('color-grey-0');
    labelEmail.classList.add('font-text-5');
    labelEmail.classList.add('color-grey-0');
    labelPassword.classList.add('font-text-5');
    labelPassword.classList.add('color-grey-0');
    btnSend.classList.add('btn-default');

    inputUsername.type = 'text';
    inputUsername.id = 'username';
    inputUsername.name = 'username';
    inputUsername.placeholder = 'Digite seu novo usuário';

    inputEmail.type = 'email';
    inputEmail.id = 'email';
    inputEmail.name = 'email';
    inputEmail.placeholder = 'Digite seu novo e-mail';

    inputPassword.type = 'password';
    inputPassword.id = 'password';
    inputPassword.name = 'password';
    inputPassword.placeholder = 'Digite sua nova senha';

    btnSend.type = 'submit';

    btnClose.innerText = 'X';
    labelUsername.innerText = 'Nome do usuário';
    labelEmail.innerText = 'E-mail';
    labelPassword.innerText = 'Senha';
    btnSend.innerText = 'Editar';

    form.append(
      btnClose,
      labelUsername,
      inputUsername,
      labelEmail,
      inputEmail,
      labelPassword,
      inputPassword,
      btnSend
    );
    section.appendChild(form);

    return section;
  }

  static async openModalEdit() {
    const body = document.querySelector('body');
    const template = this.createModalEdit();

    body.appendChild(template);
  }

  static createSectors(elem) {
    const sectors = document.createElement('li');
    const imgSector = document.createElement('img');
    const nameSector = document.createElement('p');

    nameSector.innerText = elem.description;

    if (elem.description === 'Alimenticio') {
      imgSector.src =
        'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2014%2014%22%20stroke-width%3D%221%22%3E%3Cg%3E%3Cpath%20d%3D%22M4%2C.5h6A3.5%2C3.5%2C0%2C0%2C1%2C13.5%2C4V4a1%2C1%2C0%2C0%2C1-1%2C1H1.5a1%2C1%2C0%2C0%2C1-1-1V4A3.5%2C3.5%2C0%2C0%2C1%2C4%2C.5Z%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cline%20x1%3D%220.5%22%20y1%3D%227.5%22%20x2%3D%2213.5%22%20y2%3D%227.5%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fline%3E%3Cpath%20d%3D%22M13%2C10H7L5.5%2C11.5%2C2.5%2C10H1a.5.5%2C0%2C0%2C0-.5.5h0a3%2C3%2C0%2C0%2C0%2C3%2C3h7a3%2C3%2C0%2C0%2C0%2C3-3h0A.5.5%2C0%2C0%2C0%2C13%2C10Z%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E';
    } else if (elem.description === 'Varejo') {
      imgSector.src =
        'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2014%2014%22%20stroke-width%3D%221%22%3E%3Cg%3E%3Cline%20x1%3D%226.5%22%20y1%3D%2211%22%20x2%3D%227.5%22%20y2%3D%2211%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fline%3E%3Cline%20x1%3D%2210%22%20y1%3D%225%22%20x2%3D%2210%22%20y2%3D%223%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fline%3E%3Cpath%20d%3D%22M12%2C1.75A1.25%2C1.25%2C0%2C0%2C1%2C10.75%2C3H9.25a1.25%2C1.25%2C0%2C0%2C1%2C0-2.5h1.5A1.25%2C1.25%2C0%2C0%2C1%2C12%2C1.75Z%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpolyline%20points%3D%225.5%205%205.5%201.5%202.5%201.5%202.5%205%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpolyline%3E%3Crect%20x%3D%220.5%22%20y%3D%228.5%22%20width%3D%2213%22%20height%3D%225%22%20rx%3D%221%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Frect%3E%3Cpath%20d%3D%22M12.5%2C8.5V6a1%2C1%2C0%2C0%2C0-1-1h-9a1%2C1%2C0%2C0%2C0-1%2C1V8.5%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E';
    } else if (elem.description === 'Textil') {
      imgSector.src =
        'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2014%2014%22%20stroke-width%3D%221%22%3E%3Cpath%20d%3D%22M11.5%2C9C11.5%2C6.51%2C7%2C.5%2C7%2C.5S2.5%2C6.51%2C2.5%2C9a4.5%2C4.5%2C0%2C0%2C0%2C9%2C0Z%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E';
    } else if (elem.description === 'Manufatura') {
      imgSector.src =
        'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2014%2014%22%20stroke-width%3D%221%22%3E%3Cpath%20d%3D%22M13.43%2C3.59a.76.76%2C0%2C0%2C0-.35-.51l-2%2C2a1%2C1%2C0%2C0%2C1-1.44%2C0L8.88%2C4.4A1%2C1%2C0%2C0%2C1%2C8.88%2C3l2-2A.76.76%2C0%2C0%2C0%2C10.4.57%2C3.8%2C3.8%2C0%2C0%2C0%2C6.26%2C6L.8%2C11.41a1%2C1%2C0%2C0%2C0%2C0%2C1.43l.36.36a1%2C1%2C0%2C0%2C0%2C1.43%2C0L8.05%2C7.75a3.81%2C3.81%2C0%2C0%2C0%2C5.38-4.16Z%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E';
    } else if (elem.description === 'Aeroespacial') {
      imgSector.src =
        'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2014%2014%22%20stroke-width%3D%221%22%3E%3Cg%3E%3Cpath%20d%3D%22M13.19%2C3.78l-1.37-.44a.46.46%2C0%2C0%2C0-.51.17L10.37%2C5%2C5.21%2C2.43A3.24%2C3.24%2C0%2C0%2C0%2C.54%2C4.08a.88.88%2C0%2C0%2C0%2C.58%2C1.1l3.39%2C1.1.34.11.64%2C2.19a.45.45%2C0%2C0%2C0%2C.31.32l1.54.5A.48.48%2C0%2C0%2C0%2C8%2C8.86L7.68%2C7.3l.22.07%2C3.31%2C1.07a.86.86%2C0%2C0%2C0%2C1.11-.52l1.16-3.6A.44.44%2C0%2C0%2C0%2C13.19%2C3.78Z%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cline%20x1%3D%220.5%22%20y1%3D%2213.5%22%20x2%3D%2213.5%22%20y2%3D%2213.5%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fline%3E%3C%2Fg%3E%3C%2Fsvg%3E';
    } else if (elem.description === 'Automotiva') {
      imgSector.src =
        'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2014%2014%22%20stroke-width%3D%221%22%3E%3Cg%3E%3Cpath%20d%3D%22M12.5%2C10.5a1%2C1%2C0%2C0%2C0%2C1-1v-2a1%2C1%2C0%2C0%2C0-1-1H11l-.77-2.32a1%2C1%2C0%2C0%2C0-1-.68H5.22a1%2C1%2C0%2C0%2C0-1%2C.68L3.5%2C6.5h-2a1%2C1%2C0%2C0%2C0-1%2C1v2a1%2C1%2C0%2C0%2C0%2C1%2C1%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Ccircle%20cx%3D%223.5%22%20cy%3D%2210.5%22%20r%3D%222%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fcircle%3E%3Ccircle%20cx%3D%2210.5%22%20cy%3D%2210.5%22%20r%3D%222%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fcircle%3E%3Cline%20x1%3D%225.5%22%20y1%3D%2210.5%22%20x2%3D%228.5%22%20y2%3D%2210.5%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fline%3E%3Cline%20x1%3D%227%22%20y1%3D%223.5%22%20x2%3D%227%22%20y2%3D%221.5%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fline%3E%3C%2Fg%3E%3C%2Fsvg%3E';
    } else if (elem.description === 'TI') {
      imgSector.src =
        'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2014%2014%22%20stroke-width%3D%221%22%3E%3Cg%3E%3Crect%20x%3D%221%22%20y%3D%223%22%20width%3D%227%22%20height%3D%2210.5%22%20rx%3D%223.5%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Frect%3E%3Cline%20x1%3D%221%22%20y1%3D%227%22%20x2%3D%228%22%20y2%3D%227%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fline%3E%3Cpath%20d%3D%22M4.5%2C7V2.75A2.25%2C2.25%2C0%2C0%2C1%2C6.75.5h0A2.25%2C2.25%2C0%2C0%2C1%2C9%2C2.75V3a2%2C2%2C0%2C0%2C0%2C2%2C2h0a2%2C2%2C0%2C0%2C0%2C2-2V1.5%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E';
    } else {
      imgSector.src =
        'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2014%2014%22%20stroke-width%3D%221%22%3E%3Cpath%20d%3D%22M10.5%2C1.5l3%2C3-2%2C2-1-1v6a1%2C1%2C0%2C0%2C1-1%2C1h-5a1%2C1%2C0%2C0%2C1-1-1v-6l-1%2C1-2-2%2C3-3Z%22%20fill%3D%22none%22%20stroke%3D%22%2328b679%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E';
    }

    sectors.append(imgSector, nameSector);

    return sectors;
  }

  static async openModalSectors() {
    const body = document.querySelector('body');
    const section = document.createElement('section');
    const div = document.createElement('div');
    const btnClose = document.createElement('button');
    const title = document.createElement('h1');
    const list = document.createElement('ul');

    section.classList.add('modal');
    div.classList.add('modal__content');
    div.classList.add('down-text');
    btnClose.classList.add('close-modal');
    list.classList.add('modal__list');

    btnClose.innerText = 'X';
    title.innerText = 'Setores cadastrados na plataforma';

    const response = await Requests.listAllSectors();
    response.data.forEach((elem) => {
      const template = this.createSectors(elem);

      list.appendChild(template);
      div.append(btnClose, title, list);
      section.appendChild(div);
      body.appendChild(section);
    });
  }

  static async createModalToHire() {
    const section = document.createElement('section');
    const form = document.createElement('form');
    const btnClose = document.createElement('button');
    const labelCompany = document.createElement('label');
    const divCompany = document.createElement('div');
    const selectCompany = document.createElement('select');
    const labelDepartament = document.createElement('label');
    const divDepartament = document.createElement('div');
    const selectDepartament = document.createElement('select');
    const btnSend = document.createElement('button');
    const optionDefault = document.createElement('option');

    let arrOptions = [];

    optionDefault.innerText = 'Selecione uma empresa';
    selectCompany.appendChild(optionDefault);

    const allCompanies = await Requests.getAllCompanies();
    allCompanies.data.forEach((elem) => {
      const optionCompany = document.createElement('option');
      optionCompany.id = elem.uuid;
      optionCompany.value = elem.name;
      optionCompany.innerText = elem.name;

      const companies = {
        id: elem.uuid,
        name: elem.name,
      };
      arrOptions.push(companies);

      selectCompany.appendChild(optionCompany);
    });

    selectCompany.addEventListener('change', async () => {
      const find = arrOptions.find(
        (option) => option.name === selectCompany.value
      );

      const allDepartaments = await Requests.getDepartamentCompany(find.id);

      selectDepartament.innerHTML = '';

      allDepartaments.data.forEach((data) => {
        const optionDepartament = document.createElement('option');
        optionDepartament.id = data.uuid;
        optionDepartament.value = data.name;
        optionDepartament.innerText = data.name;

        selectDepartament.appendChild(optionDepartament);
      });
    });

    section.classList.add('modal');
    form.classList.add('form');
    form.classList.add('bg-grey-4');
    form.classList.add('down-text');
    btnClose.classList.add('close-modal');
    labelCompany.classList.add('font-text-5');
    labelCompany.classList.add('color-grey-0');
    divCompany.classList.add('select');
    divDepartament.classList.add('select');
    labelDepartament.classList.add('font-text-5');
    labelDepartament.classList.add('color-grey-0');
    btnSend.classList.add('btn-default');

    selectCompany.id = 'company';
    selectDepartament.id = 'departament';
    btnSend.type = 'submit';
    btnClose.innerText = 'X';
    labelCompany.innerText = 'Selecione a empresa';
    labelDepartament.innerText = 'Selecione o departamento';
    btnSend.innerText = 'Contratar';

    divCompany.appendChild(selectCompany);
    divDepartament.appendChild(selectDepartament);
    form.append(
      btnClose,
      labelCompany,
      divCompany,
      labelDepartament,
      divDepartament,
      btnSend
    );
    section.appendChild(form);

    return section;
  }

  static async openModalToHire() {
    const body = document.querySelector('body');
    const template = await this.createModalToHire();

    body.appendChild(template);
  }

  static async createModalDepartament() {
    const section = document.createElement('section');
    const form = document.createElement('form');
    const btnClose = document.createElement('button');
    const labelCompany = document.createElement('label');
    const divCompany = document.createElement('div');
    const selectCompany = document.createElement('select');
    const labelName = document.createElement('label');
    const inputName = document.createElement('input');
    const labelDescription = document.createElement('label');
    const inputDescription = document.createElement('textarea');
    const btnSend = document.createElement('button');

    let arrOptions = [];

    const allCompanies = await Requests.getAllCompanies();
    allCompanies.data.forEach((elem) => {
      const optionCompany = document.createElement('option');
      optionCompany.id = elem.uuid;
      optionCompany.value = elem.name;
      optionCompany.innerText = elem.name;

      const companies = {
        id: elem.uuid,
        name: elem.name,
      };
      arrOptions.push(companies);

      selectCompany.appendChild(optionCompany);
    });

    section.classList.add('modal');
    form.classList.add('form');
    form.classList.add('bg-grey-4');
    form.classList.add('down-text');
    btnClose.classList.add('close-modal');
    labelCompany.classList.add('font-text-5');
    labelCompany.classList.add('color-grey-0');
    divCompany.classList.add('select');
    labelName.classList.add('font-text-5');
    labelName.classList.add('color-grey-0');
    labelDescription.classList.add('font-text-5');
    labelDescription.classList.add('color-grey-0');
    btnSend.classList.add('btn-default');

    btnSend.id = 'btn-create';
    selectCompany.id = 'company';
    btnSend.type = 'submit';
    btnClose.innerText = 'X';
    labelCompany.innerText = 'Selecione a empresa';
    labelName.innerText = 'Nome do departamento';
    labelDescription.innerText = 'Descrição';
    btnSend.innerText = 'Criar';

    inputName.id = 'input-name';
    inputDescription.id = 'input-description';
    inputName.placeholder = 'Digite o nome do departamento';
    inputDescription.placeholder = 'Digite a descrição do departamento';

    divCompany.appendChild(selectCompany);
    form.append(
      btnClose,
      labelCompany,
      divCompany,
      labelName,
      inputName,
      labelDescription,
      inputDescription,
      btnSend
    );
    section.appendChild(form);

    return section;
  }

  static async openModalDepartament() {
    const body = document.querySelector('body');
    const template = await this.createModalDepartament();

    body.appendChild(template);
  }

  static async createModalEditDepartament() {
    const section = document.createElement('section');
    const div = document.createElement('div');
    const title = document.createElement('h3');
    const textarea = document.createElement('textarea');
    const btnClose = document.createElement('button');
    const btnEdit = document.createElement('button');

    section.classList.add('modal');
    div.classList.add('down-text');
    div.classList.add('modal__content');
    title.classList.add('font-title-4');
    title.classList.add('color-grey-0');
    btnClose.classList.add('close-modal');
    btnEdit.classList.add('btn-default');

    btnEdit.id = 'edit-send';

    title.innerText = 'Editar';
    btnClose.innerText = 'X';
    btnEdit.innerText = 'Editar';
    textarea.placeholder = 'Digite a nova descrição do departamento';

    div.append(btnClose, title, textarea, btnEdit);
    section.appendChild(div);

    return section;
  }

  static async openModalEditDepartament() {
    const body = document.querySelector('body');
    const template = await this.createModalEditDepartament();

    body.appendChild(template);
  }

  static async createModalDelete(title, text, idBtn) {
    const section = document.createElement('section');
    const div = document.createElement('div');
    const titleModal = document.createElement('h3');
    const textModal = document.createElement('p');
    const btnClose = document.createElement('button');
    const btnSend = document.createElement('button');
    const btnCancel = document.createElement('button');

    section.classList.add('modal');
    div.classList.add('down-text');
    div.classList.add('modal__content');
    titleModal.classList.add('font-title-5');
    titleModal.classList.add('color-grey-0');
    textModal.classList.add('font-text-4');
    textModal.classList.add('color-grey-1');
    btnClose.classList.add('close-modal');
    btnSend.classList.add('btn-default');
    btnCancel.classList.add('btn-default');
    btnCancel.classList.add('btn-cancel');

    btnSend.id = idBtn;

    titleModal.innerText = title;
    textModal.innerText = text;
    btnClose.innerText = 'X';
    btnSend.innerText = 'Sim';
    btnCancel.innerText = 'Não';

    div.append(btnClose, titleModal, textModal, btnSend, btnCancel);
    section.appendChild(div);

    return section;
  }

  static async openModalDeleteDepartament() {
    const body = document.querySelector('body');
    const template = await this.createModalDelete(
      'Você tem certeza que quer excluir esse departamento?',
      'Todos os seus funcionários serão demitidos.',
      'btn-yes'
    );

    body.appendChild(template);
  }

  static async openModalDismiss() {
    const body = document.querySelector('body');
    const template = await this.createModalDelete(
      'Você tem certeza que quer demitir esse funcionário?',
      'Ele ficará disponível para contratação imediata.',
      'btn-yes-dismiss'
    );

    body.appendChild(template);
  }

  static async createModalEditEmployee() {
    const section = document.createElement('section');
    const form = document.createElement('form');
    const btnClose = document.createElement('button');
    const labelWork = document.createElement('label');
    const divWork = document.createElement('div');
    const selectWork = document.createElement('select');
    const optionDefaultWork = document.createElement('option');
    const optionHomeOfficeWork = document.createElement('option');
    const optionPresentialtWork = document.createElement('option');
    const optionHybridWork = document.createElement('option');
    const labelUserExp = document.createElement('label');
    const divUserExp = document.createElement('div');
    const selectUserExp = document.createElement('select');
    const optionDefaultExp = document.createElement('option');
    const optionSeniorExp = document.createElement('option');
    const optionInternExp = document.createElement('option');
    const optionJuniorExp = document.createElement('option');
    const optionFullExp = document.createElement('option');
    const btnSend = document.createElement('button');

    selectUserExp.id = 'user-exp';
    selectWork.id = 'kind-of-work';
    btnSend.id = 'send-edit-user';

    section.classList.add('modal');
    form.classList.add('form');
    form.classList.add('bg-grey-4');
    form.classList.add('down-text');
    btnClose.classList.add('close-modal');
    labelWork.classList.add('font-text-5');
    labelWork.classList.add('color-grey-0');
    divWork.classList.add('select');
    divUserExp.classList.add('select');
    labelUserExp.classList.add('font-text-5');
    labelUserExp.classList.add('color-grey-0');
    btnSend.classList.add('btn-default');

    btnSend.innerText = 'Editar';
    btnClose.innerText = 'X';
    labelWork.innerText = 'Tipo de trabalho';
    optionDefaultWork.innerText = 'Selecione o tipo de trabalho';
    optionHomeOfficeWork.innerText = 'Home Office';
    optionHomeOfficeWork.value = 'home office';
    optionPresentialtWork.innerText = 'Presencial';
    optionPresentialtWork.value = 'presencial';
    optionHybridWork.innerText = 'Híbrido';
    optionHybridWork.value = 'hibrido';
    labelUserExp.innerText = 'Experiência profissional';
    optionDefaultExp.innerText = 'Selecione a experiência profissional';
    optionSeniorExp.innerText = 'Sênior';
    optionSeniorExp.value = 'sênior';
    optionInternExp.innerText = 'Estagiário';
    optionInternExp.value = 'estágio';
    optionJuniorExp.innerText = 'Júnior';
    optionJuniorExp.value = 'júnior';
    optionFullExp.innerText = 'Pleno';
    optionFullExp.value = 'pleno';

    selectWork.append(
      optionDefaultWork,
      optionHomeOfficeWork,
      optionPresentialtWork,
      optionHybridWork
    );

    divWork.appendChild(selectWork);

    selectUserExp.append(
      optionDefaultExp,
      optionSeniorExp,
      optionInternExp,
      optionJuniorExp,
      optionFullExp
    );

    divUserExp.appendChild(selectUserExp);

    form.append(
      btnClose,
      labelWork,
      divWork,
      labelUserExp,
      divUserExp,
      btnSend
    );

    section.appendChild(form);

    return section;
  }

  static async openModalEditEmployee() {
    const body = document.querySelector('body');
    const template = await this.createModalEditEmployee();

    body.appendChild(template);
  }

  static async createModalNewCompany() {
    const section = document.createElement('section');
    const form = document.createElement('form');
    const btnClose = document.createElement('button');
    const labelName = document.createElement('label');
    const inputName = document.createElement('input');
    const labelHours = document.createElement('label');
    const inputHours = document.createElement('input');
    const labelDescription = document.createElement('label');
    const inputDescription = document.createElement('textarea');
    const labelSector = document.createElement('label');
    const divSelect = document.createElement('div');
    const selectSector = document.createElement('select');
    const optionDefault = document.createElement('option');
    const btnSend = document.createElement('button');

    section.classList.add('modal');
    form.classList.add('form');
    form.classList.add('bg-grey-4');
    form.classList.add('down-text');
    btnClose.classList.add('close-modal');
    labelName.classList.add('font-text-5');
    labelName.classList.add('color-grey-0');
    labelHours.classList.add('font-text-5');
    labelHours.classList.add('color-grey-0');
    labelDescription.classList.add('font-text-5');
    labelDescription.classList.add('color-grey-0');
    labelSector.classList.add('font-text-5');
    labelSector.classList.add('color-grey-0');
    btnSend.classList.add('btn-default');
    divSelect.classList.add('select');
    selectSector.id = 'sector';
    btnSend.id = 'create-company';

    btnClose.innerText = 'X';
    labelName.innerText = 'Nome da empresa';
    inputName.placeholder = 'Digite o nome da empresa';
    labelHours.innerText = 'Horário de abertura';
    inputHours.placeholder = 'Ex: 09:00';
    labelDescription.innerText = 'Descrição';
    inputDescription.placeholder = 'Digite a descrição da empresa';
    labelSector.innerText = 'Setor';
    optionDefault.innerText = 'Selecione o setor de atuação';
    btnSend.innerText = 'Cadastrar';

    selectSector.appendChild(optionDefault);

    const allSectors = await Requests.listAllSectors();
    allSectors.data.forEach((elem) => {
      const optionSector = document.createElement('option');
      optionSector.innerText = elem.description;
      optionSector.value = elem.description;
      optionSector.id = elem.uuid;

      selectSector.appendChild(optionSector);
    });

    divSelect.appendChild(selectSector);

    form.append(
      btnClose,
      labelName,
      inputName,
      labelHours,
      inputHours,
      labelDescription,
      inputDescription,
      labelSector,
      divSelect,
      btnSend
    );

    section.appendChild(form);

    return section;
  }

  static async openModalNewCompany() {
    const body = document.querySelector('body');
    const template = await this.createModalNewCompany();

    body.appendChild(template);
  }

  static async createModalDeleteUser() {
    const section = document.createElement('section');
    const form = document.createElement('form');
    const btnClose = document.createElement('button');
    const label = document.createElement('label');
    const divSelect = document.createElement('div');
    const select = document.createElement('select');
    const optionDefault = document.createElement('option');
    const textAlert = document.createElement('p');
    const btnSend = document.createElement('button');

    section.classList.add('modal');
    form.classList.add('form');
    form.classList.add('bg-grey-4');
    form.classList.add('down-text');
    btnClose.classList.add('close-modal');
    label.classList.add('font-text-5');
    label.classList.add('color-grey-0');
    textAlert.classList.add('font-text-4');
    textAlert.classList.add('text-delete');
    btnSend.classList.add('btn-default');
    divSelect.classList.add('select');
    select.id = 'all-users';
    btnSend.id = 'delete';

    btnClose.innerText = 'X';
    label.innerText = 'Selecione o usuário';
    optionDefault.innerText = 'Selecione o usuário';
    textAlert.innerText =
      'Atenção! Ao deletar um usuário, o mesmo será excluído permanentemente do sistema.';
    btnSend.innerText = 'Deletar';

    select.appendChild(optionDefault);

    const allUsers = await Requests.getAllUsers();
    const idAdmin = localStorage.getItem('@stage:id');

    allUsers.data.forEach((elem) => {
      if (elem.uuid !== idAdmin) {
        const option = document.createElement('option');
        option.value = elem.username;
        option.innerText = elem.username;
        option.id = elem.uuid;

        select.appendChild(option);
      }
    });

    divSelect.appendChild(select);
    form.append(btnClose, label, divSelect, textAlert, btnSend);
    section.appendChild(form);

    return section;
  }

  static async openModalDeleteUser() {
    const body = document.querySelector('body');
    const template = await this.createModalDeleteUser();

    body.appendChild(template);
  }
}
