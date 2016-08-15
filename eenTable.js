
class Table {

	constructor() {
		this.players = new PIXI.Container();
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

var theTable = new Table();

theTable.addPlayer(player1);
