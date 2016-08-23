
class HandMask extends PIXI.Sprite {

	// hand - handle to the owning Hand obj
	// direction - 1 for left, -1 for right

	constructor(hand, direction) {

		if (direction == 1) { // left
			super(textureHandMaskLeftDim);
		}

		if (direction == -1) { // right
			super(textureHandMaskRightDim);
		}

		this.hand = hand;
		this.direction = direction;

	    // enable interactivity

	    this.interactive = true;

	    // enable hand cursor on mouseover

	    this.buttonMode = true;

	    // center the anchor point

	    this.anchor.set(0.5);

	    this
	        .on('mouseover', this.onMouseOver)
	        .on('mouseout', this.onMouseOut);
	}

	onMouseOver() {

		overHandMask = this;

		if (this.direction == 1) { // left
			this.texture = textureHandMaskLeft;
		}

		if (this.direction == -1) { // right
			this.texture = textureHandMaskRight;
		}
	}

	onMouseOut() {

		overHandMask = null;

		if (this.direction == 1) { // left
			this.texture = textureHandMaskLeftDim;
		}

		if (this.direction == -1) { // right
			this.texture = textureHandMaskRightDim;
		}
	}
}
