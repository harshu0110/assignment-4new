// Step 1: Setup Canvas and Helpers
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
function random(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomColor() 
{
  return `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
}

// Step 2: Ball Class
class Ball 
{
  constructor(x, y, velX, velY, color, size) {
    this.x = x; this.y = y;
    this.velX = velX; this.velY = velY;
    this.color = color; this.size = size;
  }
  draw() 
  {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
  update() 
  {
    if ((this.x + this.size) >= canvas.width || (this.x - this.size) <= 0) this.velX = -this.velX;
    if ((this.y + this.size) >= canvas.height || (this.y - this.size) <= 0) this.velY = -this.velY;
    this.x += this.velX;
    this.y += this.velY;
  }
  collisionDetect(balls) 
  {
    for (const b of balls) 
    {
      if (this !== b) 
        {
        const dx = this.x - b.x;
        const dy = this.y - b.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < this.size + b.size) 
        {
          this.color = b.color = randomColor();
        }
      }
    }
  }
}

class EvilCircle 
{
  constructor(x, y) 
  {
    this.x = x; this.y = y;
    this.velX = 20; this.velY = 20;
    this.size = 10; this.color = 'white';
    window.addEventListener('keydown', (e) => 
    {
      if (e.key === 'a') this.x -= this.velX;
      else if (e.key === 'd') this.x += this.velX;
      else if (e.key === 'w') this.y -= this.velY;
      else if (e.key === 's') this.y += this.velY;
    });
  }
  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  }
  checkBounds() 
  {
    if (this.x + this.size > canvas.width) this.x = canvas.width - this.size;
    if (this.x - this.size < 0) this.x = this.size;
    if (this.y + this.size > canvas.height) this.y = canvas.height - this.size;
    if (this.y - this.size < 0) this.y = this.size;
  }
  collisionDetect(balls) 
  {
    for (let i = balls.length - 1; i >= 0; i--) 
    {
      const b = balls[i];
      const dx = this.x - b.x;
      const dy = this.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < this.size + b.size)
      {
        balls.splice(i, 1);
        document.getElementById('ball-count').textContent = balls.length;
      }
    }
  }
}

const balls = [];
while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    random(size, canvas.width - size),
    random(size, canvas.height - size),
    random(-7, 7),
    random(-7, 7),
    randomColor(),
    size
  );
  balls.push(ball);
}
document.getElementById('ball-count').textContent = balls.length;
const evilCircle = new EvilCircle(canvas.width / 2, canvas.height / 2);


function loop() 
{
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect(balls);
  }
  evilCircle.draw();
  evilCircle.checkBounds();
  evilCircle.collisionDetect(balls);
  requestAnimationFrame(loop);
}
loop();
