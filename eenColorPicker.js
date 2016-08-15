
// This is a menu to allow the player to choose a color between blue, green, red, and yellow

class ColorPicker {

	// theCard - handle to the card that called this, which will be one of the wilds
	// we need a handle to the card so we can make changes to its cardColor and faceTexture properties

	constructor(theCard) {

		// turn on the modal flag

		isModal = true;

		// store theCard in a property so other methods can access

		this.theCard = theCard;

		// some math to figure out size and position for the color squares

		var middleX = Math.floor(window.innerWidth / 2);
		var middleY = Math.floor(window.innerHeight / 2);

		var outerBounds = (middleX <= middleY) ? middleX : middleY;

		var padding = 25;

		var boxSize = outerBounds - (padding * 2);

		var left =		middleX - padding - boxSize;
		var right =		middleX + padding;
		var top =		middleY - padding - boxSize;
		var bottom =	middleY + padding;

		// make the prompt text and add it to the stage

		this.promptText = new PIXI.Text('  choose a color  ');

		this.promptText.style = {fontStyle: 'italic', fontSize: '36pt', fontFamily: 'sans-serif', fill: 0xffffff, stroke: 0x000000, strokeThickness: 1, dropShadow: true};
		this.promptText.anchor.set(0.5);
		this.promptText.x = middleX;
		this.promptText.y = middleY;

		stage.addChild(this.promptText);

		// make the four color squares and add them to the stage

		this.blueSquare = new PIXI.Graphics();
		this.greenSquare = new PIXI.Graphics();
		this.redSquare = new PIXI.Graphics();
		this.yellowSquare = new PIXI.Graphics();

		this.makeSquare(this.blueSquare,	0x0000ff, left,		top,	boxSize, "B");
		this.makeSquare(this.greenSquare,	0x00ff00, right,	top,	boxSize, "G");
		this.makeSquare(this.redSquare,		0xff0000, left,		bottom,	boxSize, "R");
		this.makeSquare(this.yellowSquare,	0xffff00, right,	bottom,	boxSize, "Y");

		stage.addChild(this.blueSquare);
		stage.addChild(this.greenSquare);
		stage.addChild(this.redSquare);
		stage.addChild(this.yellowSquare);
	}

	// makes a square graphical object that can be clicked on to choose its color
	//   square - the PIXI Graphics object to use
	//   hexColor - the color in standard hex notation
	//   posX, posY - the position of the square
	//   boxSize - the size of the box in pixels
	//   cardColor - "B", "G", "R", or "Y"

	makeSquare(square, hexColor, posX, posY, boxSize, cardColor) {

		// draw the square

		square.beginFill(hexColor);
		square.lineStyle(5, 0x000000, 1);
		square.drawRect(0, 0, boxSize, boxSize);
		square.endFill();

		// position it

		square.x = posX;
		square.y = posY;

		// make it interactive and use a hand cursor over it

	    square.interactive = true;
	    square.buttonMode = true;

	    // store a closure variable for the event callback to have a handle to the ColorPicker object
	    // also using the parameter cardColor in this way

	    var colorPicker = this;

		square.click = function (e) {

			// set the color of the card to the chosen color for rules purposes

			colorPicker.theCard.cardColor = cardColor;

			// some cleanup

			stage.removeChild(colorPicker.yellowSquare);
			stage.removeChild(colorPicker.redSquare);
			stage.removeChild(colorPicker.greenSquare);
			stage.removeChild(colorPicker.blueSquare);
			stage.removeChild(colorPicker.promptText);

			colorPicker.promptText.destroy();
			colorPicker.blueSquare.destroy();
			colorPicker.greenSquare.destroy();
			colorPicker.redSquare.destroy();
			colorPicker.yellowSquare.destroy();

			// change the faceTexture of the card to reflect the chosen color

			if (colorPicker.theCard.cardColor == "B") {
				colorPicker.theCard.setWildFaceTextureBlue();
			} else if (colorPicker.theCard.cardColor == "G") {
				colorPicker.theCard.setWildFaceTextureGreen();
			} else if (colorPicker.theCard.cardColor == "R") {
				colorPicker.theCard.setWildFaceTextureRed();
			} else if (colorPicker.theCard.cardColor == "Y") {
				colorPicker.theCard.setWildFaceTextureYellow();
			}

			// if it's face up, update the card's main texture

			if (colorPicker.theCard.faceUp) {
				colorPicker.theCard.texture = colorPicker.theCard.faceTexture;
			}

			// turn off modal behavior

			isModal	= false;
		}
	}
}
