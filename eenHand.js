
class Hand {

	constructor(userName) {
		this.cards = new PIXI.Container();
		this.userName = userName;
	    stage.addChild(this.cards);
	}

	addCard(card) {
		card.loc = this.userName;
		if (card.loc == "User") {
			card.setFaceUp(true);
		}
		card.position.x = 60 + (40 * this.cards.children.length);
		card.position.y = 90;
		this.cards.addChild(card);
	}

	reposCards() {
		var numCards = this.cards.children.length;
		for (var i = 0; i < numCards; ++i) {
			var card = this.cards.getChildAt(i);
			card.position.x = 60 + (40 * i);
			card.position.y = 90;
		}
	}
}
