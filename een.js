
// main game loop

requestAnimationFrame(update);

function update() {

	if (moving.length) {
		//console.log("moving.length: " + moving.length);
		for (var i = moving.length - 1; i >= 0; i--) {
			var mover = moving[i];
			//console.log("mover: " + mover.card.cardName);
			mover.move(i);
		}
	}

    requestAnimationFrame(update);
    renderer.render(stage);
}
