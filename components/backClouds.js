import Sprite from "./sprite";

class BackClouds {
  sprite;
  position;
  speed;
  newSpeed;
  interval;
  constructor(speed, startPositionX, startPositionY) {
    this.sprite = new Sprite("back-clouds", startPositionX, startPositionY);
    this.position = {
      x: startPositionX,
      y: startPositionY,
    };
    this.speed = speed;
    this.newSpeed = speed;
    setTimeout(() => {
      this.update();
    }, 10);
    this.interval = setInterval(() => {
      this.update();
    }, document.TICK);

    addEventListener("wheel", (event) => {
      if(!document.bodyClicked) return;
      if (event.deltaY < 0 && document.bodyScrolling <= 0) return;
      if (event.deltaY > 0 && document.bodyScrolling > 8700) return;
      this.sprite.position.y -= event.deltaY * 0.02;
    });
  }

  update() {
    this.position.x += this.speed;
    if (this.position.x > 1900) {
      this.position.x = -500;
      this.sprite.element.remove();
      this.sprite = new Sprite("back-clouds", this.position.x, this.position.y);
    }

    this.sprite.position.x = this.position.x;
  }
}

export default BackClouds;
