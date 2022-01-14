

class Popup {
  constructor () {
    this.self = document.createElement('div');
    this.self.classList.add('popup');
    document.body.append(this.self);
  }

  hide () {
    this.self.classList.remove('show');
  }

  show (text, x, y) {
    this.self.textContent = text;
    this.self.style.left = `${x}px`;
    this.self.style.top = `${y}px`;
    this.self.classList.add('show');

    setTimeout(this.hide.bind(this), 2000);
  }
}


export default new Popup();

