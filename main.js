const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let Fi=(1 + Math.sqrt(5))/2;
let x = canvas.height;
let y = x;
let r = x;
let angle1 = Math.PI;
let angle2 = angle1 + Math.PI/2;

const draw = (x, y, r, angle1, angle2) => {
    ctx.beginPath();
    ctx.arc(x, y, r, angle1, angle2);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
};

for (let i = 0; i <= 20; i++) {
    draw(x, y, r, angle1, angle2);
    x = x + r*(1 - 1/Fi)*Math.cos(angle2);
    y = y + r*(1 - 1/Fi)*Math.cos(angle1);
    r = r/Fi;
    angle1 = angle2;
    angle2 = angle2 + Math.PI/2;
};