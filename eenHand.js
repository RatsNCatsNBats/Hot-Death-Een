
// object to represent a player's hand
// it has an area of the view in which to position the cards it holds

class Hand {

	// player - the Player obj holding this Hand

	constructor(player) {

		// make a new Container to hold the cards and add it to the stage for rendering

		this.cards = new PIXI.Container();

	    stage.addChild(this.cards);

	    // store playerName in a property for access by other methods

		this.player = player;
	}

	calcBounds() {

		var horizOffset = Math.floor(window.innerWidth / 6);

		if (this.player.seatNumber == 0) {
			this.leftBound = this.player.x + 50;
			this.rightBound = window.innerWidth - 50;
		}

		if (this.player.seatNumber == 1) {
			this.leftBound = this.player.x + 50;
			this.rightBound = theTable.seats[0][0] - 50;
		}

		if (this.player.seatNumber == 2) {
			this.leftBound = this.player.x + 50;
			this.rightBound = theTable.seats[1][0] - 50;
		}

		if (this.player.seatNumber == 3 || this.player.seatNumber == 4 || this.player.seatNumber == 5) {
			this.leftBound = this.player.x + 50;
			this.rightBound = this.leftBound + horizOffset;
		}

		if (this.player.seatNumber == 6) {
			this.leftBound = 50;
			this.rightBound = this.player.x - 50;
		}

		if (this.player.seatNumber == 7) {
			this.leftBound = theTable.seats[6][0] + 50;
			this.rightBound = this.player.x - 50;
		}

		if (this.player.seatNumber == 8) {
			this.leftBound = theTable.seats[7][0] + 50;
			this.rightBound = this.player.x - 50;
		}

		if (this.player.seatNumber == 9 || this.player.seatNumber == 10 || this.player.seatNumber == 11) {
			this.rightBound = this.player.x - 50;
			this.leftBound = this.rightBound - horizOffset;
		}
	}

	// addCard adds a card to this hand
	//   card - the Card object to add

	addCard(card) {

		// set the location to this player's name

		card.loc = this;

		// if the card belongs to the player, turn it face up

		if (card.loc == player1.hand) {
			card.setFaceUp(true);
		}

		// position it at the end of the hand

		var newX = this.leftBound + (20 * this.cards.children.length);
		if (newX > this.rightBound) {
			//this.handleOverflow();
			newX = this.rightBound;
		}
		var newY = this.player.y;

		card.moveCardTo(newX, newY, 1);

		// put it in our cards property, a Container object

		this.cards.addChild(card);
	}

	// reposCards repositions to fix holes left by playing a card

	reposCards() {
		for (var i = this.cards.children.length - 1; i >= 0; i--) {
			var card = this.cards.getChildAt(i);

			var newX = this.leftBound + (20 * i);
			var newY = this.player.y;

			card.moveCardTo(newX, newY, 1);
		}
	}

	// function to check if this hand has a specific card
	//   cardName - the name of the card to search for

	hasCard(cardName) {
		for (var i = this.cards.children.length - 1; i >= 0; i--) {
			var card = this.cards.getChildAt(i);
			if (card.cardName == cardName) {
				return true;
			}
		}
		return false;
	}

	// function to check if there are any cards in this hand matching a color
	//   cardColor - one of 'B', 'G', 'R', or 'Y'

	hasAnyColor(cardColor) {
		for (var i = this.cards.children.length - 1; i >= 0; i--) {
			var card = this.cards.getChildAt(i);
			if (card.cardColor == cardColor && card.cardName != "Shitter") {
				return true;
			}
		}
		return false;
	}
}
