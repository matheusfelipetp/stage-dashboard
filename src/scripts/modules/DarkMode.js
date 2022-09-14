export class DarkMode {
  static toggleMode() {
    const html = document.querySelector('html');
    const checkbox = document.querySelector('#checkbox');

    checkbox.addEventListener('change', () => {
      html.classList.toggle('dark-mode');

      if (html.classList.contains('dark-mode')) {
        localStorage.setItem('@stage:mode', 'true');
      } else {
        localStorage.removeItem('@stage:mode');
      }
    });
  }

  static verifyMode() {
    const html = document.querySelector('html');
    const checkbox = document.querySelector('#checkbox');
    const darkMode = localStorage.getItem('@stage:mode');

    if (darkMode) {
      html.classList.add('dark-mode');
      checkbox.checked = true;
    }
  }
}
