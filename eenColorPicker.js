
class ColorPicker {

	constructor(theCard) {

		isModal = true;

		this.theCard = theCard;
		this.chosenColor = "";

		var middleX = Math.floor(window.innerWidth / 2);
		var middleY = Math.floor(window.innerHeight / 2);

		var outerBounds = (middleX <= middleY) ? middleX : middleY;

		var padding = 25;

		var boxSize = outerBounds - (padding * 2);

		var left =		middleX - padding - boxSize;
		var right =		middleX + padding;
		var top =		middleY - padding - boxSize;
		var bottom =	middleY + padding;

		this.promptText = new PIXI.Text('  choose a color  ');

		this.promptText.style = {fontStyle: 'italic', fontSize: '36pt', fontFamily: 'sans-serif', fill: 0xffffff, stroke: 0x000000, strokeThickness: 1, dropShadow: true};
		this.promptText.anchor.set(0.5);
		this.promptText.x = middleX;
		this.promptText.y = middleY;

		stage.addChild(this.promptText);

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

	makeSquare(square, hexColor, posX, posY, boxSize, cardColor) {

		square.beginFill(hexColor);
		square.lineStyle(5, 0x000000, 1);
		square.drawRect(0, 0, boxSize, boxSize);
		square.endFill();

		square.x = posX;
		square.y = posY;

	    square.interactive = true;
	    square.buttonMode = true;

		square.cardColor = cardColor;

	    var colorPicker = this;

		square.click = function (e) {

			colorPicker.chosenColor = this.cardColor;
			colorPicker.theCard.cardColor = colorPicker.chosenColor;

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

			if (colorPicker.theCard.cardColor == "B") {
				colorPicker.theCard.setWildFaceTextureBlue();
			} else if (colorPicker.theCard.cardColor == "G") {
				colorPicker.theCard.setWildFaceTextureGreen();
			} else if (colorPicker.theCard.cardColor == "R") {
				colorPicker.theCard.setWildFaceTextureRed();
			} else if (colorPicker.theCard.cardColor == "Y") {
				colorPicker.theCard.setWildFaceTextureYellow();
			}

			if (colorPicker.theCard.faceUp) {
				colorPicker.theCard.texture = colorPicker.theCard.faceTexture;
			}

			isModal	= false;
		}
	}
}
