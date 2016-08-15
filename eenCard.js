
function isWithinInterval(t1, t2) {
	var doubleClickInterval = 250;
	var bool = (Math.abs(t1 - t2) < doubleClickInterval);
	return bool;
}

function onMouseUp() {

	if (isModal) {

		return;
	}

	var d = new Date();
	var timestamp = d.getTime();

	if (this.timestamp && isWithinInterval(this.timestamp, timestamp)) {

		if (this.loc == "Deck") {

			theTable.getPlayer().hand.addCard(this);

		} else if (this.loc == "User") {

			if (this.isLegalMove()) {

				if (this.cardColor == "W") {

					var colorPicker = new ColorPicker(this);
				}

				theDiscard.playCard(this);
				theTable.getPlayer().hand.reposCards();
			}
		}
	}
	this.timestamp = timestamp;
}

class Card extends PIXI.Sprite {

	constructor(faceTexture, cardName, cardColor, cardGlyph) {
		super(textureCardBack);

		this.faceTexture = faceTexture;
		this.cardName = cardName;
		this.cardColor = cardColor;
		this.cardGlyph = cardGlyph;
		this.faceUp = false;

	    // enable the this to be interactive... this will allow it to respond to mouse and touch events
	    this.interactive = true;

	    // this button mode will mean the hand cursor appears when you roll over the this with your mouse
	    this.buttonMode = true;

	    // center the this's anchor point
	    this.anchor.set(0.5);

	    // make it a bit bigger, so it's easier to grab
	    this.scale.set(1.5);

	    // setup events
	    this
	        .on('mouseup', onMouseUp)
	        .on('mouseupoutside', onMouseUp)
	        .on('touchend', onMouseUp)
	        .on('touchendoutside', onMouseUp);

	    // move the sprite to its designated position , 
	    this.position.x = Math.floor((window.innerWidth / 2) - 60);
	    this.position.y = Math.floor(window.innerHeight / 2);

	    // add it to the stage
	    //stage.addChild(this);
	}

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

	setFaceUp(boolFaceUp) {

		this.faceUp = boolFaceUp;

		if (this.faceUp) {

			this.texture = this.faceTexture;

		} else {

			this.texture = textureCardBack;
		}
	}

	flip() {

		this.setFaceUp(!this.faceUp);
	}

	isLegalMove() {

		var topDiscard = theDiscard.getTopCard();

		if (this.cardName == "Shitter") {

			topDiscard = theDiscard.getTopCard();

			if (topDiscard.cardName == "Magic Five" || topDiscard.cardName == "Holy Defender") {

				return true;

			} else if (theTable.currentPlayer.hand.children.length == 1) {

				if (topDiscard.cardColor == "Y" || topDiscard.cardGlyph == "0") {

					return true;
				}
			}

			return false;
		}

		if (this.cardName == "Magic Five") {

			return true;
		}

		if (this.cardColor == "W") {

			return true;
		}

		if (topDiscard.cardColor == this.cardColor) {

			return true;
		}

		if (topDiscard.cardGlyph == this.cardGlyph) {

			return true;
		}

		return false;
	}
}
