
// function to see if two timestamps are within an interval of each other

function isWithinInterval(t1, t2) {
	var doubleClickInterval = 250;
	var bool = (Math.abs(t1 - t2) < doubleClickInterval);
	return bool;
}

// event callback for clicks

function onMouseUp() {

	// if we're in modal mode ignore any clicks

	if (isModal) {
		return;
	}

	// get a current timestamp

	var d = new Date();
	var timestamp = d.getTime();

	// is this the second click of a doubleclick?

	if (this.timestamp && isWithinInterval(this.timestamp, timestamp)) {

		// do stuff based on the current location

		if (this.loc == "Deck") {

			// if it's in the deck add it to the player's hand

			theTable.getPlayer().hand.addCard(this);

		} else if (this.loc == "User") {

			// if it's in the player's hand see if it's a legal move and add it to the discard if so

			if (this.isLegalMove()) {

				// if it's a wild card have the player pick a color

				if (this.cardColor == "W") {
					var colorPicker = new ColorPicker(this);
				}

				theDiscard.playCard(this);

				// reposition the cards in the player's hand to fix the hole

				theTable.getPlayer().hand.reposCards();
			}
		}
	}
	this.timestamp = timestamp;
}

// class for the individual cards
// does all the heavy lifting wrt rules and such

class Card extends PIXI.Sprite {

	// faceTexture - the texture for the front of the card
	// cardName - the name of the card, string
	// cardColor - one of 'B', 'G', 'R', or 'Y'
	// cardGlyph - one of '0' - '9', 'R', 'S', 'D', or '69'

	constructor(faceTexture, cardName, cardColor, cardGlyph) {

		// make a PIXI Sprite

		super(textureCardBack);

		// add a bunch of properties

		this.faceTexture = faceTexture;
		this.cardName = cardName;
		this.cardColor = cardColor;
		this.cardGlyph = cardGlyph;
		this.faceUp = false;

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
	        .on('mouseup', onMouseUp)
	        .on('mouseupoutside', onMouseUp)
	        .on('touchend', onMouseUp)
	        .on('touchendoutside', onMouseUp);

	    // position the card

	    this.position.x = Math.floor((window.innerWidth / 2) - 60);
	    this.position.y = Math.floor(window.innerHeight / 2);
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

	// determine if it would be legal to play this card on the current discard pile

	isLegalMove() {

		// get the top Card object of the discard pile

		var topDiscard = theDiscard.getTopCard();

		// the Shitter
		// this rule is not working

		if (this.cardName == "Shitter") {

			// can play it on Magic Five or Holy Defender

			if (topDiscard.cardName == "Magic Five" || topDiscard.cardName == "Holy Defender") {
				return true;

			// can play if the player has one card left and the top discard is yellow or a zero

			} else if (theTable.currentPlayer.hand.children.length == 1) {
				if (topDiscard.cardColor == "Y" || topDiscard.cardGlyph == "0") {
					return true;
				}
			}

			// otherwise you can't play it

			return false;
		}

		// you can play the Magic Five on anything
		// this rule is working fine

		if (this.cardName == "Magic Five") {
			return true;
		}

		// you can play a wild on anything but wild draws have more rules about that

		if (this.cardColor == "W") {

			// wild draw cards cannot be played unless the player has no cards that match the color of the top discard
			// this rule doesn't appear to be working

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
