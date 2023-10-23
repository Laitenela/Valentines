import Sprite from "./sprite";

class Cloud {
  sprite;
  position;
  speed;
  constructor(name, speed, startPositionX, startPositionY, inner) {
    this.sprite = new Sprite(name, startPositionX, startPositionY, inner);
    this.position = {
      x: startPositionX,
      y: startPositionY,
    };
    addEventListener("wheel", (event) => {
      if(!document.bodyClicked) return;
      if (event.deltaY < 0 && document.bodyScrolling <= 0) return;
      if (event.deltaY > 0 && document.bodyScrolling > 8700) return;
      this.position.y -= event.deltaY * speed;
      this.sprite.position.y = this.position.y;
    });
  }
}

export default Cloud;
