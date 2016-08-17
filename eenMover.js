
class Mover {
	constructor(card, deltaX, deltaY, newX, newY) {
		//this.player = theTable.currentPlayer;
		this.moveCount = 5;
		this.card = card;
		this.step = [deltaX, deltaY];
		this.newX = newX;
		this.newY = newY;
		//console.log("moveCount: " + this.moveCount + " step: " + this.step + " newX: " + this.newX + " newY: " + this.newY);
	}

	move(index) {
		//console.log("index: " + index);
		if (this.moveCount) {
			this.card.x += this.step[0];
			this.card.y += this.step[1];
			//console.log("moving " + this.card.x + ", " + this.card.y);
			this.moveCount--;
		} else {
			this.card.x = this.newX;
			this.card.y = this.newY;
			//console.log("moving: " + moving + " about to splice at: " + index);
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
			//console.log("moving: " + moving);
		}
	}
}
