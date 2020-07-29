// 💙💙💙 Canvas drawing template 💙💙💙

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

const mouse = [canvas.width, canvas.height];
const centerPoint = [canvas.width / 2, canvas.height / 2];
const spiralCenter = [centerPoint[0], centerPoint[1]];


const spiral = (x, y, r, angle1, angle2) => {
	ctx.beginPath();
	ctx.arc(x, y, r, angle1, angle2);
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#000000';
	ctx.stroke();
};

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	const Fi = (1 + Math.sqrt(5)) / 2;
	let x = mouse[0];
	let y = mouse[1];
	let m = spiralCenter[0] - mouse[0];
	let n = spiralCenter[1] - mouse[1];
	let r = Math.sqrt(n * n + m * m);

	if (x <= spiralCenter[0]) {
		angle1 = Math.atan(n / m);
	} else {
		angle1 = Math.atan(n / m) - Math.PI;
	}

	let angle2 = angle1 + Math.PI / 2;

	for (let i = 0; i <= 30; i++) {
		spiral(x, y, r, angle1, angle2);
		x += r * (1 - 1 / Fi) * Math.cos(angle2);
		y += r * (1 - 1 / Fi) * Math.cos(angle1);
		r /= Fi;
		angle1 = angle2;
		angle2 += Math.PI / 2;
	}

	window.requestAnimationFrame(draw);
}

window.addEventListener('resize', () => {
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	centerPoint[0] = canvas.width / 2;
	centerPoint[1] = canvas.height / 2;

	draw();
});

canvas.addEventListener('mousemove', e => {
	mouse[0] = e.pageX;
	mouse[1] = e.pageY;
});

canvas.addEventListener('click', e => {
	spiralCenter[0] = e.clientX;
	spiralCenter[1] = e.clientY;

	draw();
});

window.requestAnimationFrame(draw);
