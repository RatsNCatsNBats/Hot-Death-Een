
// class for the individual cards
// does all the heavy lifting wrt rules and such

class Card extends PIXI.Sprite {

	// faceTexture - the texture for the front of the card
	// cardName - the name of the card, string
	// cardColor - one of 'B', 'G', 'R', or 'Y'
	// cardGlyph - one of '0' - '9', 'R', 'S', 'D', or '69'

	constructor(faceTexture, cardName, cardColor, cardGlyph, cardToolTip) {

		// make a PIXI Sprite

		super(textureCardBack);

		// add a bunch of properties

		this.faceTexture = faceTexture;
		this.cardName = cardName;
		this.cardColor = cardColor;
		this.cardGlyph = cardGlyph;
		this.cardToolTip = cardToolTip;
		this.faceUp = false;
		this.big = false;

		// enable interactivity

		this.interactive = true;

		// enable hand cursor above cards

		this.buttonMode = true;

		// center the anchor point

		this.anchor.set(0.5);

		// scale the card image up a bit

		this.scale.set(1.5);

		// setup event callbacks

		this
			.on('mouseover', this.onMouseOver)
			.on('mouseout', this.onMouseOut)
			.on('mouseup', this.onMouseUp)
			.on('mouseupoutside', this.onMouseUp)
			.on('touchend', this.onMouseUp)
			.on('touchendoutside', this.onMouseUp);
	}

	// function to see if two timestamps are within an interval of each other

	isWithinInterval(t1, t2) {
		var doubleClickInterval = 250;
		var bool = (Math.abs(t1 - t2) < doubleClickInterval);
		return bool;
	}

	onMouseOver() {

		if (this.loc == player1.hand) {

			this.big = true;

			this.moveCardTo(this.x, player1.y - 16, 1.5);

			this.cardToolTip.x = this.x;
			this.cardToolTip.y = this.y - Math.floor(this.cardToolTip.height / 2) - 75;

			stage.addChild(this.cardToolTip);

			this.cardToolTip.visible = true;
		}
	}

	onMouseOut() {

		if (this.loc == player1.hand) {

			if (this.x == this.cardToolTip.x) {
				this.cardToolTip.visible = false;
			}

			this.big = false;

			this.moveCardTo(this.x, player1.y, 1);
		}
	}

	// event callback for clicks

	onMouseUp() {

		//console.log(this.cardName + "'s onMouseUp()");

		// if we're modal ignore any clicks

		if (isModal) {
			return;
		}

		// get a current timestamp

		var d = new Date();
		var timestamp = d.getTime();

		// is this the second click of a doubleclick?

		if (this.timestamp && this.isWithinInterval(this.timestamp, timestamp)) {

			// do stuff based on the current location

			if (this.loc == theDeck) {

				// if it's in the deck add it to the player's hand

				theTable.getPlayer().hand.addCard(this);

			} else if (this.loc == player1.hand) {

				// if it's in the player's hand see if it's a legal move and add it to the discard if so

				if (this.isLegalMove()) {

					// if it's a wild card have the player pick a color

					if (this.cardColor == "W") {
						var colorPicker = new ColorPicker(this);
					}

					theDiscard.playCard(this);
				}
			}
		}
		this.timestamp = timestamp;
	}

	// animate moving to a new position

	moveCardTo(newX, newY, newScale) {

		var mover = new Mover(this, newX, newY, newScale);

		moving.push(mover);
	}

	// returns true if this Card is currently in the moving array

	isMoving() {

		for (var i = moving.length - 1; i >= 0; i--) {

			var mover = moving[i];

			if (this == mover.card) {
				return true;
			}
		}

		return false;
	}

	// call this to use the blue version of a wild card's image

	setWildFaceTextureBlue() {

		if (this.cardName == "Harvester of Sorrows") {
			this.faceTexture = textureHarvesterOfSorrowsBlue;
		} else if (this.cardName == "Delayed Blast") {
			this.faceTexture = textureDelayedBlastBlue;
		} else if (this.cardName == "Wild Draw Four") {
			this.faceTexture = textureWildDrawFourBlue;
		} else if (this.cardName == "Hot Death") {
			this.faceTexture = textureHotDeathBlue;
		} else if (this.cardName == "Mystery Draw") {
			this.faceTexture = textureMysteryDrawBlue;
		} else if (this.cardName == "Wild") {
			this.faceTexture = textureWildBlue;
		}
	}

	// call this to use the green version of a wild card's image

	setWildFaceTextureGreen() {

		if (this.cardName == "Harvester of Sorrows") {
			this.faceTexture = textureHarvesterOfSorrowsGreen;
		} else if (this.cardName == "Delayed Blast") {
			this.faceTexture = textureDelayedBlastGreen;
		} else if (this.cardName == "Wild Draw Four") {
			this.faceTexture = textureWildDrawFourGreen;
		} else if (this.cardName == "Hot Death") {
			this.faceTexture = textureHotDeathGreen;
		} else if (this.cardName == "Mystery Draw") {
			this.faceTexture = textureMysteryDrawGreen;
		} else if (this.cardName == "Wild") {
			this.faceTexture = textureWildGreen;
		}
	}

	// call this to use the red version of a wild card's image

	setWildFaceTextureRed() {

		if (this.cardName == "Harvester of Sorrows") {
			this.faceTexture = textureHarvesterOfSorrowsRed;
		} else if (this.cardName == "Delayed Blast") {
			this.faceTexture = textureDelayedBlastRed;
		} else if (this.cardName == "Wild Draw Four") {
			this.faceTexture = textureWildDrawFourRed;
		} else if (this.cardName == "Hot Death") {
			this.faceTexture = textureHotDeathRed;
		} else if (this.cardName == "Mystery Draw") {
			this.faceTexture = textureMysteryDrawRed;
		} else if (this.cardName == "Wild") {
			this.faceTexture = textureWildRed;
		}
	}

	// call this to use the yellow version of a wild card's image

	setWildFaceTextureYellow() {

		if (this.cardName == "Harvester of Sorrows") {
			this.faceTexture = textureHarvesterOfSorrowsYellow;
		} else if (this.cardName == "Delayed Blast") {
			this.faceTexture = textureDelayedBlastYellow;
		} else if (this.cardName == "Wild Draw Four") {
			this.faceTexture = textureWildDrawFourYellow;
		} else if (this.cardName == "Hot Death") {
			this.faceTexture = textureHotDeathYellow;
		} else if (this.cardName == "Mystery Draw") {
			this.faceTexture = textureMysteryDrawYellow;
		} else if (this.cardName == "Wild") {
			this.faceTexture = textureWildYellow;
		}
	}

	// turn a card face up or face down
	//   boolFaceUp - true or false

	setFaceUp(boolFaceUp) {

		this.faceUp = boolFaceUp;

		if (this.faceUp) {
			this.texture = this.faceTexture;
		} else {
			this.texture = textureCardBack;
		}
	}

	// flip the card over, vestigial

	flip() {

		this.setFaceUp(!this.faceUp);
	}

	// is the Shitter legal to play?
	//   topDiscard - handle to the Card on top of the Discard pile

	isShitterLegal(topDiscard) {

		// can play it on Magic Five or Holy Defender

		if (topDiscard.cardName == "Magic Five" || topDiscard.cardName == "Holy Defender") {
			return true;

		// can play if the player has one card left and the top discard is yellow or a zero

		} else if (theTable.currentPlayer.hand.cards.children.length == 1) {
			if (topDiscard.cardColor == "Y" || topDiscard.cardGlyph == "0") {
				return true;
			}
		}

		// otherwise you can't play it

		return false;
	}

	// is a wild draw legal to play?
	//   topDiscard - handle to the Card on top of the Discard pile

	isWildLegal(topDiscard) {

		// wild draw cards cannot be played unless the player has no cards that match the color of the top discard

		if (this.cardName == "Harvester of Sorrows" ||
			this.cardName == "Delayed Blast" ||
			this.cardName == "Hot Death" ||
			this.cardName == "Wild Draw Four") {
			if (theTable.currentPlayer.hand.hasAnyColor(topDiscard.cardColor)) {
				return false;
			}
		}

		// otherwise yes

		return true;
	}

	// figure out situations involving Sixty Nine
	//   topDiscard - handle to the Card on top of the Discard pile

	isSixtyNineLegal(topDiscard) {

		// if the glyphs match, allow it

		if (topDiscard.cardGlyph == "6" && this.cardGlyph == "6") {
			return true;
		}

		if (topDiscard.cardGlyph == "9" && this.cardGlyph == "9") {
			return true;
		}

		// if colors match, allow it

		if (this.cardColor == topDiscard.cardColor) {
			return true;
		}

		// Sixty Nine itself can be played on a Six or Nine and vice versa

		if (this.cardGlyph == "69" &&
			(topDiscard.cardGlyph == "6" || topDiscard.cardGlyph == "9")) {
			return true;
		}

		if (topDiscard.cardGlyph == "69" &&
			(this.cardGlyph == "6" || this.cardGlyph == "9")) {
			return true;
		}

		// mismatching Sixes and Nines can be played while holding Sixty Nine

		if ((this.cardGlyph == "6" || this.cardGlyph == "9") &&
			(topDiscard.cardGlyph == "6" || topDiscard.cardGlyph == "9")) {
			if (theTable.currentPlayer.hand.hasCard("Sixty Nine")) {
				return true;
			}
			return false;
		}

		// shouldn't reach here, all possibilities should be accounted for

		console.log("something is wrong in isSixtyNineLegal");
		console.log("this: " + this.cardName + " " + this.cardColor + " " + this.cardGlyph);
		console.log("topDiscard: " + topDiscard.cardName + " " + topDiscard.cardColor + " " + topDiscard.cardGlyph);

		return false;
	}

	// determine if it would be legal to play this card on the current discard pile

	isLegalMove() {

		// get the top Card object of the discard pile

		var topDiscard = theDiscard.getTopCard();

		// the Shitter

		if (this.cardName == "Shitter") {
			return this.isShitterLegal(topDiscard);
		}

		// you can play the Magic Five on anything

		if (this.cardName == "Magic Five") {
			return true;
		}

		// handle situations possibly involving Sixty Nine

		if (/(6|9)/.test(this.cardGlyph) && /(6|9)/.test(topDiscard.cardGlyph)) {
			return this.isSixtyNineLegal(topDiscard);
		}

		// you can play a wild on anything but wild draws have more rules about that

		if (this.cardColor == "W") {
			return this.isWildLegal(topDiscard);
		}

		// if this card matches color with the top discard, you can play it

		if (topDiscard.cardColor == this.cardColor) {
			return true;
		}

		// if the glyph on this card matches the top discard, you can play it

		if (topDiscard.cardGlyph == this.cardGlyph) {
			return true;
		}

		// default to no

		return false;
	}
}
