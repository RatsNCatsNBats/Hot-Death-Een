
// class to govern the discard pile
// pretty much all it does is accept new cards and tell you what's in it

class Discard {

	constructor() {
		this.pile = new PIXI.Container();
	    stage.addChild(this.pile);
	}

	positionDiscard() {
	    for (var i = this.pile.children.length - 1; i >= 0; --i) {
	    	var card = this.pile.getChildAt(i);
		    card.x = (Math.floor(window.innerWidth / 2) + 60);
		    card.y = Math.floor(window.innerHeight / 2);
	    }
	}

	// plays a card into the Discard pile

	playCard(card) {
		card.cardToolTip.visible = false;
		card.loc = this;
		card.setFaceUp(true);
		var newX = Math.floor((window.innerWidth / 2) + 60);
	    var newY = Math.floor(window.innerHeight / 2);
	    card.moveCardTo(newX, newY, 1.5);
	    this.pile.addChild(card);
	    theTable.currentPlayer.hand.reposCards();
	}

	// returns the Card object on top of the pile

	getTopCard() {
		return this.pile.children[this.pile.children.length - 1];
	}
}

// INSTANTIATE THE SINGLETON!

var theDiscard = new Discard();

window.addEventListener("resize", function(event) {
    theDiscard.positionDiscard();
}, false);

// turn over the top card to start the game
// this is a hack and should probably be handled elsewhere

theDiscard.playCard(theDeck.cards.children[theDeck.cards.children.length - 1]);
var topDiscard = theDiscard.getTopCard();
if (topDiscard.cardColor == "W") {
	var colorPicker = new ColorPicker(topDiscard);
}
