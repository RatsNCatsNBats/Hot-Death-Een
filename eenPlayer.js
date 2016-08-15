
// Player object to contain AI

class Player extends PIXI.Sprite {

	constructor(playerName) {
		super(texturePlayerIcon);
		this.playerName = playerName;
		this.hand = new Hand(this.playerName);
	}
}

// special player object for human player

var player1 = new Player("User");
