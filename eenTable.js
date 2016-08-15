
// Table object to control game flow
// Human Player is always position 0 followed by all other players
// laid out around edges in floor(n/4) ceil(n/4) floor(n/4) ceil(n/4) pattern for
// even number of players and floor(n/4) ceil(n/4) ceil(n/4) ceil(n/4) for odd

class Table {

	constructor() {
		this.players = new PIXI.Container();
		this.addPlayer(player1);
		this.currentPlayer = player1;
	    stage.addChild(this.players);
	}

	addPlayer(player) {
		this.players.addChild(player);
	}

	getPlayer() {
		return this.players.children[0];
	}
}

// INSTANTIATE THE SINGLETON!

var theTable = new Table();
