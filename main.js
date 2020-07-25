let canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

window.addEventListener('resize', ()=>{
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

draw();
});




function draw() {
let time = Date.now() * 0.0015;
let x = Math.sin(time) * canvas.width/5 + canvas.width/2 - 100;


ctx.fillStyle = 'rgb(22,36, 77)';
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.fillRect(x,
canvas.height/2-100,
200,
200);

window.requestAnimationFrame(draw);
}


window.requestAnimationFrame(draw);