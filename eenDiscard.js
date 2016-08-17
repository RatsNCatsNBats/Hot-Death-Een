
// class to govern the discard pile
// pretty much all it does is accept new cards and tell you what's in it

class Discard {

	constructor() {
		this.pile = new PIXI.Container();
	    stage.addChild(this.pile);
	}

	playCard(card) {
		card.loc = "Discard";
		card.setFaceUp(true);
		var newX = Math.floor((window.innerWidth / 2) + 60);
	    var newY = Math.floor(window.innerHeight / 2);
	    card.moveCardTo(newX, newY);
	    this.pile.addChild(card);
	    theTable.currentPlayer.hand.reposCards();
	}

	getTopCard() {
		return this.pile.children[this.pile.children.length - 1];
	}
}

// INSTANTIATE THE SINGLETON!

var theDiscard = new Discard();

// turn over the top card to start the game
// this is a hack and should probably be handled elsewhere

theDiscard.playCard(theDeck.cards.children[theDeck.cards.children.length - 1]);
