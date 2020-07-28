// 💙💙💙 Canvas drawing template 💙💙💙

// Getting canvas element from page and after getting it`s context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Setting up canvas size to browser window size
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

// In next line i setting up mouse position to default value.
// And then in mouse move event listener i setting current mouse position to this array.
// Use mouse[0] for mouse X position and mouse[1] for Y
const mouse = [canvas.width, canvas.height];
// This is just shortcut for getting center of canvas. Use centerPoint[0] for X instead canvas.width / 2
const centerPoint = [canvas.width / 2, canvas.height / 2];

// Main function. Our entry point to drawing
// This function calls every moment and draw every frame
function draw() {
	// Before drawing new objects in canvas we need to clear previous frame
	// And to do this we use clearRect that starts at point (0, 0) and clear area to point (canvas.width, canvas.width)
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Your code and your functions that u want to draw goes here
	// For example i show how to display rectangle at the center of the screen
	ctx.fillRect(centerPoint[0] - 100, centerPoint[1] - 100, 200, 200);

	// This line calls draw() again and loop this function for infinite drawing
	window.requestAnimationFrame(draw);
}

// This event listener setting current canvas Width&Height and current center position
// every time when browser window resizes
window.addEventListener('resize', () => {
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	centerPoint[0] = canvas.width / 2;
	centerPoint[1] = canvas.height / 2;

	// Calling draw function again to render resized scene
	draw();
});

// Changing mouse array values to current mouse position every time
canvas.addEventListener('mousemove', e => {
	mouse.x = e.pageX;
	mouse.y = e.pageY;
});

// Initial call our main drawing function
window.requestAnimationFrame(draw);
