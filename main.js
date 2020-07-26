const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

const mouse = [canvas.width, canvas.height];

const rect = (posX, posY, width, height, color)=>{
ctx.fillStyle = color;

ctx.fillRect(posX - width/2,
posY - height/2,
width,
height);
}

function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

rect(canvas.width/2, canvas.height/2, 200, 200, '#540000');
rect(30, 20, 20, 30, '#005400');

window.requestAnimationFrame(draw) ;
}

window.addEventListener('resize', ()=>{
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

draw();
});

canvas.addEventListener('mousemove', (e)=>{
mouse.x = e.pageX;
mouse.y = e.pageY;
});