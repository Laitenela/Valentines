import Sprite from "./sprite";

class Heart {
  sprite;
  scale;
  inner;
  position;
  maxSpeed;
  minSpeed;
  speed;
  interval;
  constructor(speed, startPositionX, startPositionY, inner, scale) {
    this.scale = scale;
    this.inner = inner;
    this.sprite = new Sprite(
      "heart",
      startPositionX,
      startPositionY,
      inner,
      scale,
      Math.round(scale * 3) + 6
    );
    this.position = {
      x: startPositionX,
      y: startPositionY,
    };
    this.maxSpeed = Math.abs(speed * 1.5);
    this.minSpeed = Math.abs(speed * 0.05);
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
      this.speed += event.deltaY * 0.05;
      if (Math.abs(this.speed) > this.maxSpeed)
        this.speed = this.maxSpeed * Math.sign(this.speed);
    });
  }

  update() {
    this.position.y += this.speed;
    this.speed *= 0.85;
    if (Math.abs(this.speed) < this.minSpeed) {
      this.speed = this.minSpeed * Math.sign(this.speed);
    }
    if (this.position.y > 1100) {
      this.position.y = -100;
      this.sprite.element.remove();
      this.sprite = new Sprite(
        "heart",
        this.position.x,
        this.position.y,
        this.inner,
        this.scale,
        Math.round(this.scale * 3) + 7
      );
    } else if (this.position.y < -100) {
      this.position.y = 1100;
      this.sprite.element.remove();
      this.sprite = new Sprite(
        "heart",
        this.position.x,
        this.position.y,
        this.inner,
        this.scale,
        Math.round(this.scale * 3) + 7
      );
    }
    this.sprite.position.y = this.position.y;
  }

  draw() {
    this.sprite.position.y = this.position.y;
  }
}

export default Heart;
