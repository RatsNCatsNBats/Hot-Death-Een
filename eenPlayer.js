
class Player extends PIXI.Sprite {

	constructor(playerName) {
		super(texturePlayerIcon);
		this.playerName = playerName;
		this.hand = new Hand(this.playerName);
	}
}

var player1 = new Player("User");
