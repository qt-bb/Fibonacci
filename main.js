const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

const mouse = [canvas.width, canvas.height];

let x = canvas.width/2;
let y = canvas.height/2;
let r0 = 1;
let r1 = r0;
let angle1_0 = Math.PI/2;
let angle2_0 = Math.PI;
let angle1_1 = angle2_0;
let angle2_1 = Math.PI*1.5;

ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.arc(x, y, r0, angle1_0, angle2_0);
ctx.lineWidth = 1;
ctx.strokeStyle = '#000000';
ctx.stroke();

ctx.beginPath();
ctx.arc(x, y, r1, angle1_1, angle2_1);
ctx.lineWidth = 1;
ctx.strokeStyle = '#000000';
ctx.stroke();

let r2 = r1 + r0; 
let r = r2 - r1;
let x2 = x - Math.cos(angle2_1)*r;
let y2 = y - Math.cos(angle1_1)*r;
let angle1_2 = angle1_1 + Math.PI/2;
let angle2_2 = angle2_1 + Math.PI/2;


const draw = (x2, y2, r2, angle1_2, angle2_2) => {
ctx.beginPath();
ctx.arc(x2, y2, r2, angle1_2, angle2_2);
ctx.lineWidth = 1;
ctx.strokeStyle = '#000000';
ctx.stroke();
};

while (r<10000) {
draw(x2, y2, r2, angle1_2, angle2_2);

r1 = r2;
r0 = r1;
angle1_1 = angle1_2;
angle2_1 = angle2_2;
x = x2;
y = y2;

r2 = r1 + r0; 
r = r2 - r1;
x2 = x - Math.cos(angle2_1)*r;
y2 = y - Math.cos(angle1_1)*r;
angle1_2 = angle1_1 + Math.PI/2;
angle2_2 = angle2_1 + Math.PI/2;
};