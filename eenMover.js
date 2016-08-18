
// class to control movement of a card
// has a moveCount property that is decremented every update and the Mover deletes itself after it reaches 0

class Mover {

	// card - the moving Card object
	// newX - the final x value
	// newY - the final y value

	constructor(card, newX, newY) {

		// moveCount will give us n+1 frames of movement

		this.moveCount = 9;

		this.card = card;

		var dirX = newX - this.card.x;
		var dirY = newY - this.card.y;
		var deltaX = Math.floor(dirX / (this.moveCount + 1));
		var deltaY = Math.floor(dirY / (this.moveCount + 1));

		this.step = [deltaX, deltaY];

		this.newX = newX;
		this.newY = newY;
	}

	// moves the card one frame
	// called by update()

	move(index) {
		if (this.moveCount) { // haven't reached final destination yet
			this.card.x += this.step[0];
			this.card.y += this.step[1];
			this.moveCount--;
		} else { // reached the end
			this.card.x = this.newX;
			this.card.y = this.newY;

			// delete self from moving array
			// Array.splice was acting funny so I did it this way

			if (moving.length == 1) {
				moving = [];
			} else {
				if (index == 0) {
					moving = moving.slice(1, moving.length);
				} else if (index == moving.length - 1) {
					moving = moving.slice(0, index);
				} else {
					var left = moving.slice(0, index);
					var right = moving.slice(index + 1, moving.length);
					moving = left.concat(right);
				}
			}
		}
	}
}
