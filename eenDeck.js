
// singleton class to govern the draw deck part of the table

class Deck {

	constructor() {

		// make a PIXI Contatiner to hols the Card objects and add it to the stage

		this.cards = new PIXI.Container();

		stage.addChild(this.cards);
	}

	positionDeck() {

		for (var i = this.cards.children.length - 1; i >= 0; --i) {

			var card = this.cards.getChildAt(i);

			card.x = Math.floor(window.innerWidth / 2) - 60;
			card.y = Math.floor(window.innerHeight / 2);
		}
	}

	// adds a card to the top of the deck

	pushCard(card) {

		// turn the card face down

		card.setFaceUp(false);

		// set the card's location to "Deck"

		card.loc = this;

		// add it to this.cards

		this.cards.addChild(card);

		// position the card

		card.x = Math.floor(window.innerWidth / 2) - 60;
		card.y = Math.floor(window.innerHeight / 2);
		//card.moveCardTo(newX, newY);
	}

	// shuffle all the cards currently in the deck
	// shuffling algorithm stolen from the internet

	shuffle() {
		for (var i = this.cards.children.length; i; --i) {

			var j = Math.floor(Math.random() * i);

			var x = this.cards.getChildAt(i - 1);
			var y = this.cards.getChildAt(j);

			this.cards.swapChildren(x, y);
		}
		//this.moveToTop("Hot Death");
		//this.moveToTop("Yellow Nine");
		//this.moveToTop("Green Six");
		//this.moveToTop("Red Six");
		//this.moveToTop("Sixty Nine");
		//this.moveToTop("Blue Nine");
	}

	// debugging helper

	moveToTop(cardName) {

		for (var i = this.cards.children.length - 1; i >= 0; i--) {

			var kid = this.cards.getChildAt(i);

			if (kid.cardName == cardName) {

				this.cards.removeChild(kid);

				this.pushCard(kid);

				return;
			}
		}
	}
}

// INSTANTIATE THE SINGLETON!

var theDeck = new Deck();

window.addEventListener("resize", function(event) {
	theDeck.positionDeck();
}, false);

// create the 216 individual cards in the full deck

theDeck.pushCard(new Card(textureHarvesterOfSorrows, "Harvester of Sorrows", "W", "*", tooltipHarvesterOfSorrows));
theDeck.pushCard(new Card(textureDelayedBlast, "Delayed Blast", "W", "*", tooltipDelayedBlast));

theDeck.pushCard(new Card(textureWildDrawFour, "Wild Draw Four", "W", "*", tooltipWildDrawFour));
theDeck.pushCard(new Card(textureWildDrawFour, "Wild Draw Four", "W", "*", tooltipWildDrawFour));
theDeck.pushCard(new Card(textureWildDrawFour, "Wild Draw Four", "W", "*", tooltipWildDrawFour));
theDeck.pushCard(new Card(textureWildDrawFour, "Wild Draw Four", "W", "*", tooltipWildDrawFour));
theDeck.pushCard(new Card(textureWildDrawFour, "Wild Draw Four", "W", "*", tooltipWildDrawFour));
theDeck.pushCard(new Card(textureWildDrawFour, "Wild Draw Four", "W", "*", tooltipWildDrawFour));

theDeck.pushCard(new Card(textureHotDeath, "Hot Death", "W", "*", tooltipHotDeath));
theDeck.pushCard(new Card(textureMysteryDraw, "Mystery Draw", "W", "*", tooltipMysteryDraw));

theDeck.pushCard(new Card(textureWild, "Wild", "W", "*", tooltipWild));
theDeck.pushCard(new Card(textureWild, "Wild", "W", "*", tooltipWild));
theDeck.pushCard(new Card(textureWild, "Wild", "W", "*", tooltipWild));
theDeck.pushCard(new Card(textureWild, "Wild", "W", "*", tooltipWild));
theDeck.pushCard(new Card(textureWild, "Wild", "W", "*", tooltipWild));
theDeck.pushCard(new Card(textureWild, "Wild", "W", "*", tooltipWild));

theDeck.pushCard(new Card(textureFucker, "Fucker", "B", "0", tooltipFucker));
theDeck.pushCard(new Card(textureBlueZero, "Blue Zero", "B", "0", tooltipNumber));

theDeck.pushCard(new Card(textureBlueOne, "Blue One", "B", "1", tooltipNumber));
theDeck.pushCard(new Card(textureBlueOne, "Blue One", "B", "1", tooltipNumber));
theDeck.pushCard(new Card(textureBlueOne, "Blue One", "B", "1", tooltipNumber));
theDeck.pushCard(new Card(textureBlueOne, "Blue One", "B", "1", tooltipNumber));

theDeck.pushCard(new Card(textureBlueShield, "Blue Shield", "B", "2", tooltipBlueShield));
theDeck.pushCard(new Card(textureBlueTwo, "Blue Two", "B", "2", tooltipNumber));
theDeck.pushCard(new Card(textureBlueTwo, "Blue Two", "B", "2", tooltipNumber));
theDeck.pushCard(new Card(textureBlueTwo, "Blue Two", "B", "2", tooltipNumber));

theDeck.pushCard(new Card(textureBlueThree, "Blue Three", "B", "3", tooltipNumber));
theDeck.pushCard(new Card(textureBlueThree, "Blue Three", "B", "3", tooltipNumber));
theDeck.pushCard(new Card(textureBlueThree, "Blue Three", "B", "3", tooltipNumber));
theDeck.pushCard(new Card(textureBlueThree, "Blue Three", "B", "3", tooltipNumber));

theDeck.pushCard(new Card(textureBlueFour, "Blue Four", "B", "4", tooltipNumber));
theDeck.pushCard(new Card(textureBlueFour, "Blue Four", "B", "4", tooltipNumber));
theDeck.pushCard(new Card(textureBlueFour, "Blue Four", "B", "4", tooltipNumber));
theDeck.pushCard(new Card(textureBlueFour, "Blue Four", "B", "4", tooltipNumber));

theDeck.pushCard(new Card(textureBlueFive, "Blue Five", "B", "5", tooltipNumber));
theDeck.pushCard(new Card(textureBlueFive, "Blue Five", "B", "5", tooltipNumber));
theDeck.pushCard(new Card(textureBlueFive, "Blue Five", "B", "5", tooltipNumber));
theDeck.pushCard(new Card(textureBlueFive, "Blue Five", "B", "5", tooltipNumber));

theDeck.pushCard(new Card(textureBlueSix, "Blue Six", "B", "6", tooltipNumber));
theDeck.pushCard(new Card(textureBlueSix, "Blue Six", "B", "6", tooltipNumber));
theDeck.pushCard(new Card(textureBlueSix, "Blue Six", "B", "6", tooltipNumber));
theDeck.pushCard(new Card(textureBlueSix, "Blue Six", "B", "6", tooltipNumber));

theDeck.pushCard(new Card(textureBlueSeven, "Blue Seven", "B", "7", tooltipNumber));
theDeck.pushCard(new Card(textureBlueSeven, "Blue Seven", "B", "7", tooltipNumber));
theDeck.pushCard(new Card(textureBlueSeven, "Blue Seven", "B", "7", tooltipNumber));
theDeck.pushCard(new Card(textureBlueSeven, "Blue Seven", "B", "7", tooltipNumber));

theDeck.pushCard(new Card(textureBlueEight, "Blue Eight", "B", "8", tooltipNumber));
theDeck.pushCard(new Card(textureBlueEight, "Blue Eight", "B", "8", tooltipNumber));
theDeck.pushCard(new Card(textureBlueEight, "Blue Eight", "B", "8", tooltipNumber));
theDeck.pushCard(new Card(textureBlueEight, "Blue Eight", "B", "8", tooltipNumber));

theDeck.pushCard(new Card(textureBlueNine, "Blue Nine", "B", "9", tooltipNumber));
theDeck.pushCard(new Card(textureBlueNine, "Blue Nine", "B", "9", tooltipNumber));
theDeck.pushCard(new Card(textureBlueNine, "Blue Nine", "B", "9", tooltipNumber));
theDeck.pushCard(new Card(textureBlueNine, "Blue Nine", "B", "9", tooltipNumber));

theDeck.pushCard(new Card(textureBlueReverseSkip, "Blue Reverse Skip", "B", "R", tooltipReverseSkip));
theDeck.pushCard(new Card(textureBlueReverse, "Blue Reverse", "B", "R", tooltipReverse));
theDeck.pushCard(new Card(textureBlueReverse, "Blue Reverse", "B", "R", tooltipReverse));
theDeck.pushCard(new Card(textureBlueReverse, "Blue Reverse", "B", "R", tooltipReverse));

theDeck.pushCard(new Card(textureBlueDoubleSkip, "Blue Double Skip", "B", "S", tooltipDoubleSkip));
theDeck.pushCard(new Card(textureBlueSkip, "Blue Skip", "B", "S", tooltipSkip));
theDeck.pushCard(new Card(textureBlueSkip, "Blue Skip", "B", "S", tooltipSkip));
theDeck.pushCard(new Card(textureBlueSkip, "Blue Skip", "B", "S", tooltipSkip));

theDeck.pushCard(new Card(textureBlueSpreader, "Blue Spreader", "B", "D", tooltipSpreader));
theDeck.pushCard(new Card(textureBlueDrawTwo, "Blue Draw Two", "B", "D", tooltipDrawTwo));
theDeck.pushCard(new Card(textureBlueDrawTwo, "Blue Draw Two", "B", "D", tooltipDrawTwo));
theDeck.pushCard(new Card(textureBlueDrawTwo, "Blue Draw Two", "B", "D", tooltipDrawTwo));

theDeck.pushCard(new Card(textureQuitter, "Quitter", "G", "0", tooltipQuitter));
theDeck.pushCard(new Card(textureGreenZero, "Green Zero", "G", "0", tooltipNumber));

theDeck.pushCard(new Card(textureGreenOne, "Green One", "G", "1", tooltipNumber));
theDeck.pushCard(new Card(textureGreenOne, "Green One", "G", "1", tooltipNumber));
theDeck.pushCard(new Card(textureGreenOne, "Green One", "G", "1", tooltipNumber));
theDeck.pushCard(new Card(textureGreenOne, "Green One", "G", "1", tooltipNumber));

theDeck.pushCard(new Card(textureGreenTwo, "Green Two", "G", "2", tooltipNumber));
theDeck.pushCard(new Card(textureGreenTwo, "Green Two", "G", "2", tooltipNumber));
theDeck.pushCard(new Card(textureGreenTwo, "Green Two", "G", "2", tooltipNumber));
theDeck.pushCard(new Card(textureGreenTwo, "Green Two", "G", "2", tooltipNumber));

theDeck.pushCard(new Card(textureVirus, "Virus", "G", "3", tooltipVirus));
theDeck.pushCard(new Card(textureGreenThree, "Green Three", "G", "3", tooltipNumber));
theDeck.pushCard(new Card(textureGreenThree, "Green Three", "G", "3", tooltipNumber));
theDeck.pushCard(new Card(textureGreenThree, "Green Three", "G", "3", tooltipNumber));

theDeck.pushCard(new Card(textureLuckyClover, "Lucky Clover", "G", "4", tooltipLuckyClover));
theDeck.pushCard(new Card(textureGreenFour, "Green Four", "G", "4", tooltipNumber));
theDeck.pushCard(new Card(textureGreenFour, "Green Four", "G", "4", tooltipNumber));
theDeck.pushCard(new Card(textureGreenFour, "Green Four", "G", "4", tooltipNumber));

theDeck.pushCard(new Card(textureGreenFive, "Green Five", "G", "5", tooltipNumber));
theDeck.pushCard(new Card(textureGreenFive, "Green Five", "G", "5", tooltipNumber));
theDeck.pushCard(new Card(textureGreenFive, "Green Five", "G", "5", tooltipNumber));
theDeck.pushCard(new Card(textureGreenFive, "Green Five", "G", "5", tooltipNumber));

theDeck.pushCard(new Card(textureGreenSix, "Green Six", "G", "6", tooltipNumber));
theDeck.pushCard(new Card(textureGreenSix, "Green Six", "G", "6", tooltipNumber));
theDeck.pushCard(new Card(textureGreenSix, "Green Six", "G", "6", tooltipNumber));
theDeck.pushCard(new Card(textureGreenSix, "Green Six", "G", "6", tooltipNumber));

theDeck.pushCard(new Card(textureGreenSeven, "Green Seven", "G", "7", tooltipNumber));
theDeck.pushCard(new Card(textureGreenSeven, "Green Seven", "G", "7", tooltipNumber));
theDeck.pushCard(new Card(textureGreenSeven, "Green Seven", "G", "7", tooltipNumber));
theDeck.pushCard(new Card(textureGreenSeven, "Green Seven", "G", "7", tooltipNumber));

theDeck.pushCard(new Card(textureGreenEight, "Green Eight", "G", "8", tooltipNumber));
theDeck.pushCard(new Card(textureGreenEight, "Green Eight", "G", "8", tooltipNumber));
theDeck.pushCard(new Card(textureGreenEight, "Green Eight", "G", "8", tooltipNumber));
theDeck.pushCard(new Card(textureGreenEight, "Green Eight", "G", "8", tooltipNumber));

theDeck.pushCard(new Card(textureGreenNine, "Green Nine", "G", "9", tooltipNumber));
theDeck.pushCard(new Card(textureGreenNine, "Green Nine", "G", "9", tooltipNumber));
theDeck.pushCard(new Card(textureGreenNine, "Green Nine", "G", "9", tooltipNumber));
theDeck.pushCard(new Card(textureGreenNine, "Green Nine", "G", "9", tooltipNumber));

theDeck.pushCard(new Card(textureGreenReverseSkip, "Green Reverse Skip", "G", "R", tooltipReverseSkip));
theDeck.pushCard(new Card(textureGreenReverse, "Green Reverse", "G", "R", tooltipReverse));
theDeck.pushCard(new Card(textureGreenReverse, "Green Reverse", "G", "R", tooltipReverse));
theDeck.pushCard(new Card(textureGreenReverse, "Green Reverse", "G", "R", tooltipReverse));

theDeck.pushCard(new Card(textureGreenDoubleSkip, "Green Double Skip", "G", "S", tooltipDoubleSkip));
theDeck.pushCard(new Card(textureGreenSkip, "Green Skip", "G", "S", tooltipSkip));
theDeck.pushCard(new Card(textureGreenSkip, "Green Skip", "G", "S", tooltipSkip));
theDeck.pushCard(new Card(textureGreenSkip, "Green Skip", "G", "S", tooltipSkip));

theDeck.pushCard(new Card(textureGreenSpreader, "Green Spreader", "G", "D", tooltipSpreader));
theDeck.pushCard(new Card(textureGreenDrawTwo, "Green Draw Two", "G", "D", tooltipDrawTwo));
theDeck.pushCard(new Card(textureGreenDrawTwo, "Green Draw Two", "G", "D", tooltipDrawTwo));
theDeck.pushCard(new Card(textureGreenDrawTwo, "Green Draw Two", "G", "D", tooltipDrawTwo));

theDeck.pushCard(new Card(textureHolyDefender, "Holy Defender", "R", "0", tooltipHolyDefender));
theDeck.pushCard(new Card(textureRedZero, "Red Zero", "R", "0", tooltipNumber));

theDeck.pushCard(new Card(textureRedOne, "Red One", "R", "1", tooltipNumber));
theDeck.pushCard(new Card(textureRedOne, "Red One", "R", "1", tooltipNumber));
theDeck.pushCard(new Card(textureRedOne, "Red One", "R", "1", tooltipNumber));
theDeck.pushCard(new Card(textureRedOne, "Red One", "R", "1", tooltipNumber));

theDeck.pushCard(new Card(textureGlasnost, "Glasnost", "R", "2", tooltipGlasnost));
theDeck.pushCard(new Card(textureRedTwo, "Red Two", "R", "2", tooltipNumber));
theDeck.pushCard(new Card(textureRedTwo, "Red Two", "R", "2", tooltipNumber));
theDeck.pushCard(new Card(textureRedTwo, "Red Two", "R", "2", tooltipNumber));

theDeck.pushCard(new Card(textureRedThree, "Red Three", "R", "3", tooltipNumber));
theDeck.pushCard(new Card(textureRedThree, "Red Three", "R", "3", tooltipNumber));
theDeck.pushCard(new Card(textureRedThree, "Red Three", "R", "3", tooltipNumber));
theDeck.pushCard(new Card(textureRedThree, "Red Three", "R", "3", tooltipNumber));

theDeck.pushCard(new Card(textureRedFour, "Red Four", "R", "4", tooltipNumber));
theDeck.pushCard(new Card(textureRedFour, "Red Four", "R", "4", tooltipNumber));
theDeck.pushCard(new Card(textureRedFour, "Red Four", "R", "4", tooltipNumber));
theDeck.pushCard(new Card(textureRedFour, "Red Four", "R", "4", tooltipNumber));

theDeck.pushCard(new Card(textureMagicFive, "Magic Five", "R", "5", tooltipMagicFive));
theDeck.pushCard(new Card(textureRedFive, "Red Five", "R", "5", tooltipNumber));
theDeck.pushCard(new Card(textureRedFive, "Red Five", "R", "5", tooltipNumber));
theDeck.pushCard(new Card(textureRedFive, "Red Five", "R", "5", tooltipNumber));

theDeck.pushCard(new Card(textureRedSix, "Red Six", "R", "6", tooltipNumber));
theDeck.pushCard(new Card(textureRedSix, "Red Six", "R", "6", tooltipNumber));
theDeck.pushCard(new Card(textureRedSix, "Red Six", "R", "6", tooltipNumber));
theDeck.pushCard(new Card(textureRedSix, "Red Six", "R", "6", tooltipNumber));

theDeck.pushCard(new Card(textureRedSeven, "Red Seven", "R", "7", tooltipNumber));
theDeck.pushCard(new Card(textureRedSeven, "Red Seven", "R", "7", tooltipNumber));
theDeck.pushCard(new Card(textureRedSeven, "Red Seven", "R", "7", tooltipNumber));
theDeck.pushCard(new Card(textureRedSeven, "Red Seven", "R", "7", tooltipNumber));

theDeck.pushCard(new Card(textureRedEight, "Red Eight", "R", "8", tooltipNumber));
theDeck.pushCard(new Card(textureRedEight, "Red Eight", "R", "8", tooltipNumber));
theDeck.pushCard(new Card(textureRedEight, "Red Eight", "R", "8", tooltipNumber));
theDeck.pushCard(new Card(textureRedEight, "Red Eight", "R", "8", tooltipNumber));

theDeck.pushCard(new Card(textureRedNine, "Red Nine", "R", "9", tooltipNumber));
theDeck.pushCard(new Card(textureRedNine, "Red Nine", "R", "9", tooltipNumber));
theDeck.pushCard(new Card(textureRedNine, "Red Nine", "R", "9", tooltipNumber));
theDeck.pushCard(new Card(textureRedNine, "Red Nine", "R", "9", tooltipNumber));

theDeck.pushCard(new Card(textureRedReverseSkip, "Red Reverse Skip", "R", "R", tooltipReverseSkip));
theDeck.pushCard(new Card(textureRedReverse, "Red Reverse", "R", "R", tooltipReverse));
theDeck.pushCard(new Card(textureRedReverse, "Red Reverse", "R", "R", tooltipReverse));
theDeck.pushCard(new Card(textureRedReverse, "Red Reverse", "R", "R", tooltipReverse));

theDeck.pushCard(new Card(textureRedDoubleSkip, "Red Double Skip", "R", "S", tooltipDoubleSkip));
theDeck.pushCard(new Card(textureRedSkip, "Red Skip", "R", "S", tooltipSkip));
theDeck.pushCard(new Card(textureRedSkip, "Red Skip", "R", "S", tooltipSkip));
theDeck.pushCard(new Card(textureRedSkip, "Red Skip", "R", "S", tooltipSkip));

theDeck.pushCard(new Card(textureRedSpreader, "Red Spreader", "R", "D", tooltipSpreader));
theDeck.pushCard(new Card(textureRedDrawTwo, "Red Draw Two", "R", "D", tooltipDrawTwo));
theDeck.pushCard(new Card(textureRedDrawTwo, "Red Draw Two", "R", "D", tooltipDrawTwo));
theDeck.pushCard(new Card(textureRedDrawTwo, "Red Draw Two", "R", "D", tooltipDrawTwo));

theDeck.pushCard(new Card(textureShitter, "Shitter", "Y", "0", tooltipShitter));
theDeck.pushCard(new Card(textureYellowZero, "Yellow Zero", "Y", "0", tooltipNumber));

theDeck.pushCard(new Card(textureMutuallyAssuredDestruction, "Mutually Assured Destruction", "Y", "1", tooltipMutuallyAssuredDestruction));
theDeck.pushCard(new Card(textureYellowOne, "Yellow One", "Y", "1", tooltipNumber));
theDeck.pushCard(new Card(textureYellowOne, "Yellow One", "Y", "1", tooltipNumber));
theDeck.pushCard(new Card(textureYellowOne, "Yellow One", "Y", "1", tooltipNumber));

theDeck.pushCard(new Card(textureYellowTwo, "Yellow Two", "Y", "2", tooltipNumber));
theDeck.pushCard(new Card(textureYellowTwo, "Yellow Two", "Y", "2", tooltipNumber));
theDeck.pushCard(new Card(textureYellowTwo, "Yellow Two", "Y", "2", tooltipNumber));
theDeck.pushCard(new Card(textureYellowTwo, "Yellow Two", "Y", "2", tooltipNumber));

theDeck.pushCard(new Card(textureYellowThree, "Yellow Three", "Y", "3", tooltipNumber));
theDeck.pushCard(new Card(textureYellowThree, "Yellow Three", "Y", "3", tooltipNumber));
theDeck.pushCard(new Card(textureYellowThree, "Yellow Three", "Y", "3", tooltipNumber));
theDeck.pushCard(new Card(textureYellowThree, "Yellow Three", "Y", "3", tooltipNumber));

theDeck.pushCard(new Card(textureYellowFour, "Yellow Four", "Y", "4", tooltipNumber));
theDeck.pushCard(new Card(textureYellowFour, "Yellow Four", "Y", "4", tooltipNumber));
theDeck.pushCard(new Card(textureYellowFour, "Yellow Four", "Y", "4", tooltipNumber));
theDeck.pushCard(new Card(textureYellowFour, "Yellow Four", "Y", "4", tooltipNumber));

theDeck.pushCard(new Card(textureYellowFive, "Yellow Five", "Y", "5", tooltipNumber));
theDeck.pushCard(new Card(textureYellowFive, "Yellow Five", "Y", "5", tooltipNumber));
theDeck.pushCard(new Card(textureYellowFive, "Yellow Five", "Y", "5", tooltipNumber));
theDeck.pushCard(new Card(textureYellowFive, "Yellow Five", "Y", "5", tooltipNumber));

theDeck.pushCard(new Card(textureSixtyNine, "Sixty Nine", "Y", "69", tooltipSixtyNine));
theDeck.pushCard(new Card(textureYellowSix, "Yellow Six", "Y", "6", tooltipNumber));
theDeck.pushCard(new Card(textureYellowSix, "Yellow Six", "Y", "6", tooltipNumber));
theDeck.pushCard(new Card(textureYellowSix, "Yellow Six", "Y", "6", tooltipNumber));

theDeck.pushCard(new Card(textureYellowSeven, "Yellow Seven", "Y", "7", tooltipNumber));
theDeck.pushCard(new Card(textureYellowSeven, "Yellow Seven", "Y", "7", tooltipNumber));
theDeck.pushCard(new Card(textureYellowSeven, "Yellow Seven", "Y", "7", tooltipNumber));
theDeck.pushCard(new Card(textureYellowSeven, "Yellow Seven", "Y", "7", tooltipNumber));

theDeck.pushCard(new Card(textureYellowEight, "Yellow Eight", "Y", "8", tooltipNumber));
theDeck.pushCard(new Card(textureYellowEight, "Yellow Eight", "Y", "8", tooltipNumber));
theDeck.pushCard(new Card(textureYellowEight, "Yellow Eight", "Y", "8", tooltipNumber));
theDeck.pushCard(new Card(textureYellowEight, "Yellow Eight", "Y", "8", tooltipNumber));

theDeck.pushCard(new Card(textureYellowNine, "Yellow Nine", "Y", "9", tooltipNumber));
theDeck.pushCard(new Card(textureYellowNine, "Yellow Nine", "Y", "9", tooltipNumber));
theDeck.pushCard(new Card(textureYellowNine, "Yellow Nine", "Y", "9", tooltipNumber));
theDeck.pushCard(new Card(textureYellowNine, "Yellow Nine", "Y", "9", tooltipNumber));

theDeck.pushCard(new Card(textureYellowReverseSkip, "Yellow Reverse Skip", "Y", "R", tooltipReverseSkip));
theDeck.pushCard(new Card(textureYellowReverse, "Yellow Reverse", "Y", "R", tooltipReverse));
theDeck.pushCard(new Card(textureYellowReverse, "Yellow Reverse", "Y", "R", tooltipReverse));
theDeck.pushCard(new Card(textureYellowReverse, "Yellow Reverse", "Y", "R", tooltipReverse));

theDeck.pushCard(new Card(textureYellowDoubleSkip, "Yellow Double Skip", "Y", "S", tooltipDoubleSkip));
theDeck.pushCard(new Card(textureYellowSkip, "Yellow Skip", "Y", "S", tooltipSkip));
theDeck.pushCard(new Card(textureYellowSkip, "Yellow Skip", "Y", "S", tooltipSkip));
theDeck.pushCard(new Card(textureYellowSkip, "Yellow Skip", "Y", "S", tooltipSkip));

theDeck.pushCard(new Card(textureYellowSpreader, "Yellow Spreader", "Y", "D", tooltipSpreader));
theDeck.pushCard(new Card(textureYellowDrawTwo, "Yellow Draw Two", "Y", "D", tooltipDrawTwo));
theDeck.pushCard(new Card(textureYellowDrawTwo, "Yellow Draw Two", "Y", "D", tooltipDrawTwo));
theDeck.pushCard(new Card(textureYellowDrawTwo, "Yellow Draw Two", "Y", "D", tooltipDrawTwo));

theDeck.shuffle();
