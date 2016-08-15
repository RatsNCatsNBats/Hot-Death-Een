
class Discard {

	constructor() {
		this.pile = new PIXI.Container();
	    stage.addChild(this.pile);
	}

	playCard(card) {
		card.loc = "Discard";
		card.setFaceUp(true);
		card.position.x = Math.floor((window.innerWidth / 2) + 60);
	    card.position.y = Math.floor(window.innerHeight / 2);
	    this.pile.addChild(card);
	}

	getTopCard() {
		return this.pile.children[this.pile.children.length - 1];
	}
}

var theDiscard = new Discard();

theDiscard.playCard(theDeck.cards.children[theDeck.cards.children.length - 1]);
