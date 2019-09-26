class Element {

  constructor(element) {
    this.element = document.createElement(element);
  }

  render(content){
    this.element.innerHTML = content;
    document.appenndChild(this.element);
  }

}

export default Card;