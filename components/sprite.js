import shadow from "./shadowRoot/shadowRoot";

class Sprite {
  position;
  element;
  constructor(className, positionX, positionY, inner, scale, zIndex) {
    this.element = shadow.appendChild(document.createElement("div"));
    this.element.classList.add("sprite", className);
    if(zIndex) this.element.style.zIndex = zIndex;
    this.element.style.transform = `translateX(${100/1920*positionX + "vw"}) translateY(${100/1920*positionY + "vw"})`;
    this.position = {
      element: this.element,
      _x: positionX,
      set x(x) {
        this._x = x;
        this.element.style.transform = `translateX(${100/1920*this._x + "vw"}) translateY(${100/1920*this._y + "vw"}) scale(${scale ? scale : 1})`;
      },
      get x() {
        return this._x;
      },
      _y: positionY,
      set y(y) {
        this._y = y;
        this.element.style.transform = `translateX(${100/1920*this._x + "vw"}) translateY(${100/1920*this._y + "vw"}) scale(${scale ? scale : 1})`;},
      get y() {
        return this._y;
      },
    };
    if (inner) {
      this.element.innerHTML = `<h1 style="top: ${inner.posY}; left:${inner.posX}">${inner.text}</h1>`;
    }
  }
}

export default Sprite;
