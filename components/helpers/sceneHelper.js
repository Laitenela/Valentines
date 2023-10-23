import Heart from '../heart';
import Cloud from '../cloud';

const addHearts = (()=>{
  const hearts = [];
  let heartIsReady = true;

  return (deltaY) => {
    if(!heartIsReady || hearts.length > 90) return;

    const inner = undefined;
    const startPositionY = 500 - Math.sign(deltaY)*600;

    for(let i = 0; i < 10; i++){
      const speed = (10*Math.random()+10)*Math.sign(deltaY);
      const startPositionX = i*200+150*Math.random()-50;
      const scale = Math.random()*0.4+0.6;
      hearts.push(new Heart(speed, startPositionX, startPositionY, inner, scale));
    }

    heartIsReady = false;
    setTimeout(() => {
      heartIsReady = true;
    }, 1000)
  }
})();

const cloudsController = (() => {
  const allClouds = [];
  return {
    create: (name, speed, startPositionX, startPositionY, inner) => {
      allClouds.push(new Cloud(name, speed, startPositionX, startPositionY, inner));
    },
    createGroup: (name, ...clouds) => {
      const cloundsGroup = {
        name: name,
        clouds: []
      };
      clouds.forEach((cloud) => {
        console.log(cloud);
        cloundsGroup.clouds.push(new Cloud(...cloud));
      })
      allClouds.push(cloundsGroup);
    }
  }
})();

export default {addHearts, cloudsController};