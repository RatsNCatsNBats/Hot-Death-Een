
// Table object to control game flow
// Human Player is always position 0 followed by all other players
// laid out around edges in ceil(n/4) floor(n/4) ceil(n/4) floor(n/4) pattern for
// even number of players and ceil(n/4) ceil(n/4) ceil(n/4) floor(n/4) for odd

class Table {

	constructor() {
		this.players = new PIXI.Container();
		this.addPlayer(player1);
		this.addPlayer(player2);
		this.addPlayer(player3);
		this.addPlayer(player4);
		this.addPlayer(player5);
		this.addPlayer(player6);
		this.addPlayer(player7);
		this.addPlayer(player8);
		this.addPlayer(player9);
		this.addPlayer(player10);
		this.addPlayer(player11);
		this.addPlayer(player12);
		this.playDirection = 1; // 1 for clockwise, -1 for widdershins
		this.currentPlayerIndex = 0;
		this.currentPlayer = player1;
	    stage.addChild(this.players);
	}

	addPlayer(player) {
		this.players.addChild(player);
	}

	getPlayer() {
		return this.players.getChildAt(this.currentPlayerIndex);
	}

	adjustRowsWithTwoPlayers(seatingIndex, player, horizSpacing) {

		var adjustment = Math.floor(horizSpacing / 2);

		if (seatingIndex == 3 || seatingIndex == 5) {
			if (player.seatNumber == 6) {
				player.x += adjustment;
			}
			if (player.seatNumber == 8) {
				player.x -= adjustment;
			}
		}

		if (seatingIndex == 6 || seatingIndex == 8) {
			if (player.seatNumber == 0 || player.seatNumber == 8) {
				player.x -= adjustment;
			}
			if (player.seatNumber == 2 || player.seatNumber == 6) {
				player.x += adjustment;
			}
		}

		if (seatingIndex == 7 || seatingIndex == 9) {
			if (player.seatNumber == 0) {
				player.x -= adjustment;
			}
			if (player.seatNumber == 2) {
				player.x += adjustment;
			}
		}
	}

	positionPlayers() {

		var left	= 40;
		var center	= Math.floor(window.innerWidth / 2) - 20;
		var right	= window.innerWidth - 80;

		var top		= 40;
		var middle	= Math.floor(window.innerHeight / 2) - 20;
		var bottom	= window.innerHeight - 80;

		var horizSpacing = Math.floor(window.innerWidth / 6);
		var vertSpacing = Math.floor(window.innerHeight / 6);

		var seats = [[right - horizSpacing, bottom], [center, bottom], [left + horizSpacing, bottom],
					 [left, bottom - vertSpacing],   [left, middle],   [left, top + vertSpacing],
					 [left + horizSpacing, top],     [center, top],    [right - horizSpacing, top],
					 [right, top + vertSpacing],     [right, middle],  [right, bottom - vertSpacing]];

		var seatPatterns = [[1, 7],
							[1, 4, 10],
							[1, 4, 7, 10],
							[1, 4, 6, 8, 10],
							[1, 3, 5, 7, 9, 11],
							[1, 3, 5, 6, 8, 9, 11],
							[0, 2, 3, 5, 6, 8, 9, 11],
							[0, 2, 3, 5, 6, 7, 8, 9, 11],
							[0, 2, 3, 4, 5, 6, 8, 9, 10, 11],
							[0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]];

		var seatingIndex = this.players.children.length - 2;

		for (var i = this.players.children.length - 1; i >= 0; i--) {
			var player = this.players.getChildAt(i);
			player.seatNumber = seatPatterns[seatingIndex][i]
			player.x = seats[player.seatNumber][0];
			this.adjustRowsWithTwoPlayers(seatingIndex, player, horizSpacing);
			player.y = seats[player.seatNumber][1];
		};
	}
}

// INSTANTIATE THE SINGLETON!

var theTable = new Table();

theTable.positionPlayers();
