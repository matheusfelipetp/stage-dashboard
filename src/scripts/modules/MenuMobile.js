export class MenuMobile {
  static toggleMenu() {
    const menu = document.querySelector('.nav__menu');
    const btn = document.querySelector('.btn-mobile');
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      menu.classList.toggle('active');

      setTimeout(() => {
        menu.classList.toggle('hidden');
      }, 1000);
    });
  }
}
