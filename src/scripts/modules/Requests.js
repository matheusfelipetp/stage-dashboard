import { instance } from './axios.js';
import { Toast } from './Toast.js';

export class Requests {
  static token = localStorage.getItem('@stage:token');
  static admin = localStorage.getItem('@stage:admin');

  static async getAllCompanies() {
    const response = await instance
      .get('/companies')
      .then((res) => res)
      .catch((err) => err);

    return response;
  }

  static async listCompanySector(sector) {
    const response = await instance
      .get(`/companies/${sector}`)
      .then((res) => res)
      .catch((err) => err);

    return response;
  }

  static async registerUser(user) {
    const response = await instance
      .post('/auth/register/user', user)
      .then((res) => {
        Toast.create(
          'Cadastro realizado com sucesso! Você será redirecionado para a página de login',
          'toast',
          '#21ae76'
        );

        setTimeout(() => {
          window.location.assign('../../pages/login/login.html');
        }, 3000);
        return res;
      })
      .catch((err) => {
        let mesage;
        if (err.response.data.error === 'required field password!') {
          mesage = 'Preencha os campos do formulário!';
        } else if (err.response.data.error[0] === 'email alread exists!') {
          mesage = 'Já existe um usuário cadastrado com esse e-mail!';
        } else if (
          err.response.data.error[0] ===
          'professional_level must be one of these: estágio, júnior, pleno, sênior'
        ) {
          mesage = 'Selecione o seu nível de experiência profissional';
        } else if (err.response.data.error[0] === 'insert a valid email!') {
          mesage = 'Insira um e-mail válido!';
        }

        Toast.create(mesage, 'toast', '#EB3333');
        return err;
      });

    return response;
  }

  static async loginUser(user) {
    const response = await instance
      .post('/auth/login', user)
      .then((res) => {
        localStorage.setItem('@stage:token', res.data.token);
        localStorage.setItem('@stage:id', res.data.uuid);

        if (res.data.is_admin) {
          localStorage.setItem('@stage:admin', 'true');
          window.location.assign(
            '../../pages/users/user-admin/dashboard/dashboard-admin.html'
          );
        } else {
          window.location.assign(
            '../../pages/users/user/dashboard/dashboard.html'
          );
        }

        return res;
      })
      .catch((err) => {
        Toast.create(
          'Alguma coisa deu errado! Confira suas informações!',
          'toast',
          '#EB3333'
        );

        return err;
      });

    return response;
  }

  static async getInfoUser() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && this.admin) {
      window.location.replace(
        '/src/pages/users/user-admin/dashboard/dashboard-admin.html'
      );
    }

    const response = await instance
      .get('/users/profile')
      .then((res) => res)
      .catch((err) => err);

    return response;
  }

  static async getUserDepartament() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && this.admin) {
      window.location.replace(
        '/src/pages/users/user-admin/dashboard/dashboard-admin.html'
      );
    }

    const response = await instance
      .get('/users/departments')
      .then((res) => res)
      .catch((err) => {
        if (err.response.data.error === "you don't belong to a department") {
          const company = document.getElementById('company-name');
          const department = document.getElementById('departament-name');

          company.innerText = 'Você ainda não possui uma empresa';
          department.innerText = 'Você ainda não faz parte de um departamento';
        }
        return err;
      });

    return response;
  }

  static async getAllEmployeeDepartament() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && this.admin) {
      window.location.replace(
        '/src/pages/users/user-admin/dashboard/dashboard-admin.html'
      );
    }

    const response = await instance
      .get('/users/departments/coworkers')
      .then((res) => res)
      .catch((err) => err);

    return response;
  }

  static async editUser(user) {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && this.admin) {
      window.location.replace(
        '/src/pages/users/user-admin/dashboard/dashboard-admin.html'
      );
    }

    const response = await instance
      .patch('/users', user)
      .then((res) => {
        Toast.create('Usuário atualizado com sucesso!', 'toast', '#21ae76');

        setTimeout(() => {
          const modal = document.querySelector('.modal');
          modal.remove();
          window.location.reload();
        }, 2000);

        return res;
      })
      .catch((err) => {
        Toast.create(
          'Algo deu errado! Verifique os campos do formulário!',
          'toast',
          '#EB3333'
        );
        return err;
      });

    return response;
  }

  static async listAllSectors() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const response = await instance
      .get('/sectors')
      .then((res) => res)
      .catch((err) => err);

    return response;
  }

  static async usersAvaliable() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const response = await instance
      .get('/admin/out_of_work')
      .then((res) => res)
      .catch((err) => err);

    return response;
  }

  static async getDepartamentCompany(id) {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const response = await instance
      .get(`/departments/${id}`)
      .then((res) => res)
      .catch((err) => err);

    return response;
  }

  static async toHireUser(data) {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const response = await instance
      .patch('/departments/hire/', data)
      .then((res) => {
        Toast.create('Usuário contratado com sucesso!', 'toast', '#21ae76');

        setTimeout(() => {
          window.location.reload();
        }, 2000);

        return res;
      })
      .catch((err) => {
        Toast.create('Verifique os campos do formulário!', 'toast', '#EB3333');

        return err;
      });

    return response;
  }

  static async createNewDepartament(departament) {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const response = await instance
      .post('/departments', departament)
      .then((res) => {
        Toast.create('Departamento criado com sucesso!', 'toast', '#21ae76');

        setTimeout(() => {
          const modal = document.querySelector('.modal');
          modal.remove();
        }, 2500);

        return res;
      })
      .catch((err) => {
        Toast.create('Verifique os campos do formulário!', 'toast', '#EB3333');

        return err;
      });

    return response;
  }

  static async getAllUsers() {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const response = await instance
      .get('/users')
      .then((res) => res)
      .catch((err) => err);

    return response;
  }

  static async editDepartament(id, data) {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const response = await instance
      .patch(`/departments/${id}`, data)
      .then((res) => {
        Toast.create('Departamento atualizado!', 'toast', '#21ae76');

        setTimeout(() => {
          window.location.reload();
        }, 2000);

        return res;
      })
      .catch((err) => {
        Toast.create('Alguma coisa deu errado!', 'toast', '#EB3333');
        return err;
      });

    return response;
  }

  static async deleteDepartament(id) {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const response = await instance
      .delete(`/departments/${id}`)
      .then((res) => {
        Toast.create('Departamento deletado com sucesso!', 'toast', '#21ae76');

        setTimeout(() => {
          window.location.reload();
        }, 2000);

        return res;
      })
      .catch((err) => {
        Toast.create('Alguma coisa deu errado!', 'toast', '#EB3333');
        return err;
      });

    return response;
  }

  static async dismissUser(id) {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const response = await instance
      .patch(`/departments/dismiss/${id}`)
      .then((res) => {
        Toast.create('Usuário demitido com sucesso!', 'toast', '#21ae76');

        setTimeout(() => {
          window.location.reload();
        }, 2000);

        return res;
      })
      .catch((err) => {
        Toast.create('Alguma coisa deu errado!', 'toast', '#EB3333');
        return err;
      });

    return response;
  }

  static async updateEmployee(id, data) {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const response = await instance
      .patch(`/admin/update_user/${id}`, data)
      .then((res) => {
        Toast.create('Usuário atualizado com sucesso!', 'toast', '#21ae76');

        setTimeout(() => {
          window.location.reload();
        }, 2000);

        return res;
      })
      .catch((err) => {
        Toast.create('Verifique os campos do formulário!', 'toast', '#EB3333');

        return err;
      });

    return response;
  }

  static async createCompany(data) {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const response = await instance
      .post('/companies', data)
      .then((res) => {
        Toast.create('Empresa criada com sucesso!', 'toast', '#21ae76');

        setTimeout(() => {
          window.location.reload();
        }, 2000);

        return res;
      })
      .catch((err) => {
        Toast.create('Verifique os campos do formulário!', 'toast', '#EB3333');

        return err;
      });

    return response;
  }

  static async deleteUser(id) {
    if (!this.token) {
      window.location.replace('/src/pages/login/login.html');
    }

    if (this.token && !this.admin) {
      window.location.replace('/src/pages/users/user/dashboard/dashboard.html');
    }

    const response = await instance
      .delete(`/admin/delete_user/${id}`)
      .then((res) => {
        Toast.create('Usuário deletado com sucesso!', 'toast', '#21ae76');

        setTimeout(() => {
          const modal = document.querySelector('.modal');
          modal.remove();
        }, 2000);

        return res;
      })
      .catch((err) => {
        Toast.create('Alguma coisa deu errado!', 'toast', '#EB3333');

        return err;
      });

    return response;
  }
}
