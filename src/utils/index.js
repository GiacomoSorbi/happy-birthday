import audio0 from '../assets/firework0.mp3';
import audio1 from '../assets/firework1.mp3';
import audio2 from '../assets/firework2.mp3';
import audio3 from '../assets/firework3.mp3';

const localStoragePath = 'happy-birthday';

export const loadState = () =>
  JSON.parse(localStorage.getItem(localStoragePath));

export const saveState = state => localStorage.setItem(localStoragePath, state);

export const randint = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

export const booms = [
  new Audio(audio0),
  new Audio(audio1),
  new Audio(audio2),
  new Audio(audio3)
];

export const boom = () => booms[randint(0, booms.length - 1)].play();

let fireworks = [];

export class FireWork {
  constructor(x, y, vx, vy, colour, ttl, radius, isBase) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.colour = colour;
    this.ttl = ttl;
    this.radius = radius;
    this.isBase = isBase;
  }
  update({ ax = 0, ay = 0 }) {
    this.x += this.vx;
    this.y += this.vy;
    this.vx += ax;
    this.vy += ay;
    --this.ttl;
    if (this.ttl <= 0 && this.isBase) {
      boom();
      const sparks = Array.from({ length: randint(16, 24) }, _ =>
        createFireWork(this.x, this.y, 0, 0, this.colour, false)
      );
      fireworks.push(...sparks);
    }
  }
}

export const createFireWork = (x, y, width, height, colour, isBase = true) => {
  const ttl = isBase ? randint(50, 120) : randint(80, 120);
  const destination = isBase
    ? { x: width * Math.random(), y: (height / 20) * Math.random() }
    : {};
  const [vx, vy] = isBase
    ? [(destination.x - x) / ttl, (destination.y - y) / ttl]
    : [20 * (0.5 - Math.random()), -20 * (0.75 - Math.random())];
  return new FireWork(
    x,
    y,
    vx,
    vy,
    isBase
      ? `rgb(${100 + randint(0, 155)},${100 + randint(0, 155)},${100 +
          randint(0, 155)})`
      : colour,
    ttl,
    isBase ? randint(3, 8) : randint(1, 3),
    isBase
  );
};

export const fireworksTick = ctx => {
  const { width, height } = ctx.canvas;
  if (Math.random() < 0.02) {
    const firework = createFireWork(
      width / (1.8 + 0.4 * Math.random()),
      height * (1 + 0.2 * Math.random()),
      width,
      height,
      true
    );
    fireworks.push(firework);
    console.log(fireworks);
  }
  fireworks = fireworks.filter(firework => firework.ttl);
  ctx.clearRect(0, 0, width, height);
  fireworks.forEach(firework => {
    ctx.lineWidth = firework.radius;
    ctx.strokeStyle = firework.colour;
    ctx.fillStyle = firework.colour;
    ctx.beginPath();
    ctx.arc(firework.x, firework.y, firework.radius / 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.globalAlpha = 0.5;
    ctx.stroke();
    firework.update({ ax: 0, ay: height / 6000 });
    ctx.lineWidth = firework.radius;
    ctx.strokeStyle = firework.colour;
    ctx.fillStyle = firework.colour;
    ctx.beginPath();
    ctx.arc(firework.x, firework.y, firework.radius / 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.stroke();
  });
};
