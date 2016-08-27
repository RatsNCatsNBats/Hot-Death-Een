
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

	// overHandMask has the HandMask obj mouse is currently over

	if (overHandMask) {

		// changing viewOffset scrolls through the hand

		overHandMask.hand.viewOffset += overHandMask.direction;

		// check if we've hit the end and remove the mask if so

		if (overHandMask.direction == 1) {

			if (overHandMask.hand.viewOffset == 0) {
				overHandMask.visible = false;
				overHandMask = null;
			}

		} else if (overHandMask.direction == -1) {

			if (overHandMask.hand.viewOffset == overHandMask.hand.rightEndOffset) {
				overHandMask.visible = false;
				overHandMask = null;
			}
		}
	}

	// cycle through the players and call their hand's drawHand method

	for (var i = theTable.players.children.length - 1; i >= 0; i--) {

		var player = theTable.players.getChildAt(i);

		player.hand.drawHand();
	}

	requestAnimationFrame(update);
	renderer.render(stage);
}
