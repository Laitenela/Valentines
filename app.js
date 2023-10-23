import BackClouds from './components/backClouds';
import sceneHelper from './components/helpers/sceneHelper';
document.bodyClicked = false;
document.bodyScrolling = 0;
document.TICK = 100;

addEventListener("click", () => {
  document.bodyClicked = true;
})

addEventListener("wheel", (event) => {
  if(!document.bodyClicked) return;
  if(event.deltaY < 0 && document.bodyScrolling === 0) return;
  if(event.deltaY > 0 && document.bodyScrolling > 8700) return;
  document.bodyScrolling += event.deltaY;
  sceneHelper.addHearts(event.deltaY);
})

const backClouds = [];
for(let i = 0; i < 8; i++){
  for(let j = 0; j < 8; j++){
    backClouds.push(new BackClouds(1, i*300+100*Math.random()-150, j*200+100*Math.random()-150));
  }
}

sceneHelper.cloudsController.createGroup(
  'TextGroup',
    ['big-cloud', 0.4, 1000, 350, {text: 'Hi!', posX: '14.58vw', posY: '3.64vw'}],
    ['medium-cloud', 0.25, 1250, 500, {text: 'Dear!', posX: '4.5vw', posY: '0vw'}],
)

sceneHelper.cloudsController.createGroup(
  'TextGroup2',
  ['big-cloud', 0.4, 100, 1350, {text: 'Have', posX: '14.58vw', posY: '3.645vw'}],
  ['medium-cloud', 0.25, 250, 1200, {text: 'Nice', posX: '5.21vw', posY: '0vw'}],
  ['low-cloud', 0.15, 300, 1050, {text: "day!", posX: '4.17vw', posY: '-4.17vw'}]
)

sceneHelper.cloudsController.createGroup(
  'TextGroup3',
  ['big-cloud', 0.4, 1000, 2350, {text: 'Let\'s', posX: '11.458vw', posY: '3.645vw'}],
  ['medium-cloud', 0.23, 1300, 1730, {text: 'Play', posX: '4.17vw', posY: '0vw'}],
)

sceneHelper.cloudsController.createGroup(
  'OtherClouds',
  ['big-clouds', 0.5, 100, 800],
  ['low-cloud', 0.1, 300, 250],
  ['big-clouds', 0.5, 1000, 1700],
  ['big-clouds', 0.5, -500, 2800],
  ['big-clouds', 0.5, -100, 3400],
  ['big-clouds', 0.5, 1500, 3900],
  ['big-cloud', 0.4, 600, 3750, {text: 'Click on me', posX: '8.33vw', posY: '3.645vw'}]
)