export class Toast {
  static create(text, toastClass, color) {
    Toastify({
      text: text,
      duration: 2500,
      close: true,
      gravity: 'top',
      position: 'center',
      stopOnFocus: true,
      className: toastClass,
      style: {
        background: color,
      },
    }).showToast();
  }
}
