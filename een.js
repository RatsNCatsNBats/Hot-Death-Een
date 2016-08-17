
// main game loop

requestAnimationFrame(update);

function update() {

	// moving is an array of Card objects that are currently moving

	if (moving.length) {
		for (var i = moving.length - 1; i >= 0; i--) {
			var mover = moving[i];
			mover.move(i);
		}
	}

    requestAnimationFrame(update);
    renderer.render(stage);
}
