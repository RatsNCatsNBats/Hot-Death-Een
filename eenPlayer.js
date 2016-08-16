
// Player object to contain AI

class Player extends PIXI.Sprite {

	// playerName - string containing the player's name
	// agg - 0-100 aggression level
	// sus - 0-100 suspicion level
	// sne - 0-100 sneak level
	// mem - 0-100 memory level
	// enmityFor - [] of playerNames this player has it out for

	constructor(playerName, agg, sus, sne, mem, enmityFor) {

		super(texturePlayerIcon);

		this.playerName = playerName;
		this.agg = agg;
		this.sus = sus;
		this.sne = sne;
		this.mem = mem;
		this.enmityFor = enmityFor;

		this.hand = new Hand(this.playerName);
	}

	takeTurn() {

	}
}

var player1 = new Player("User", 0, 0, 0, 100, []);
var player2 = new Player("Pam", 0, 0, 0, 100, []);
var player3 = new Player("Heather", 0, 0, 0, 100, []);
var player4 = new Player("Rebecca", 0, 0, 0, 100, []);
var player5 = new Player("Jennifer", 0, 0, 0, 100, []);
var player6 = new Player("Lori", 0, 0, 0, 100, []);
var player7 = new Player("Josh", 0, 0, 0, 100, []);
var player8 = new Player("Tim", 0, 0, 0, 100, []);
var player9 = new Player("James", 0, 0, 0, 100, []);
var player10 = new Player("Matt", 0, 0, 0, 100, []);
var player11 = new Player("Troy", 0, 0, 0, 100, []);
var player12 = new Player("DEATH", 0, 0, 0, 100, []);
