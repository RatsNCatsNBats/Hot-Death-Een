
// object to represent a player's hand
// it has an area of the view in which to position the cards it holds

class Hand {

	// playerName - the name of this hand's player to use as a location label for the cards

	constructor(playerName) {

		// make a new Container to hold the cards and add it to the stage for rendering

		this.cards = new PIXI.Container();

	    stage.addChild(this.cards);

	    // store playerName in a property for access by other methods

		this.playerName = playerName;
	}

	// addCard adds a card to this hand
	//   card - the Card object to add

	addCard(card) {

		// set the location to this player's name

		card.loc = this.playerName;

		// if the card belongs to the player, turn it face up

		if (card.loc == "User") {
			card.setFaceUp(true);
		}

		// position it at the end of the hand

		card.position.x = 60 + (40 * this.cards.children.length);
		card.position.y = 90;

		// put it in our cards property, a Container object

		this.cards.addChild(card);
	}

	// reposCards repositions to fix holes left by playing a card

	reposCards() {

		// get the number of cards in this hand

		var numCards = this.cards.children.length;

		for (var i = 0; i < numCards; ++i) {

			// get the card and reposition it

			var card = this.cards.getChildAt(i);

			card.position.x = 60 + (40 * i);
			card.position.y = 90;
		}
	}

	// function to check if there are any cards in this hand matching a color
	//   cardColor - one of 'B', 'G', 'R', or 'Y'

	hasAnyColor(cardColor) {
		for (var i = this.cards.length; i; --i) {
			var card = this.cards.getChildAt(i - 1);
			if (card.cardColor == cardColor) {
				return true;
			}
		}
		return false;
	}
}
