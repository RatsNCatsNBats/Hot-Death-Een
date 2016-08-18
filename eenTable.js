
// Table object to control game flow
// Human Player is always position 0 followed by all other players
// laid out around edges in ceil(n/4) floor(n/4) ceil(n/4) floor(n/4) pattern for
// even number of players and ceil(n/4) ceil(n/4) ceil(n/4) floor(n/4) for odd

class Table {

	constructor() {
		this.players = new PIXI.Container();

		// seating patterns based on number of players
		// numbers are indexes into seats above

		this.seatPatterns = [[1, 7],
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

	// adds a player to the table

	addPlayer(player) {
		this.players.addChild(player);
	}

	// returns the current player
	// redunant with currentPlayer property

	getPlayer() {
		return this.players.getChildAt(this.currentPlayerIndex);
	}

	// adjusts the positioning of players in seating patterns where there are two players on an horizontal edge
	//   seatingIndex - the index of the seatPatterns array in use
	//   player - the Player object being seated
	//   horizSpacing - the number of pixels to adjust the seating by horizontally

	adjustRowsWithTwoPlayers(seatingIndex, player, horizSpacing) {

		var adjustment = Math.floor(horizSpacing / 2);

		if (seatingIndex == 3 || seatingIndex == 5) { // top
			if (player.seatNumber == 6) { // left
				player.x += adjustment;
			}
			if (player.seatNumber == 8) { // right
				player.x -= adjustment;
			}
		}

		if (seatingIndex == 6 || seatingIndex == 8) { // top & bottom
			if (player.seatNumber == 0 || player.seatNumber == 8) { // right
				player.x -= adjustment;
			}
			if (player.seatNumber == 2 || player.seatNumber == 6) { // left
				player.x += adjustment;
			}
		}

		if (seatingIndex == 7 || seatingIndex == 9) { // bottom
			if (player.seatNumber == 0) { // right
				player.x -= adjustment;
			}
			if (player.seatNumber == 2) { // left
				player.x += adjustment;
			}
		}
	}

	// seats the players around the table according to various preset seating patterns by number of players

	positionPlayers() {

		// some math to find coordinates and spacing

		var left	= 60;
		var center	= Math.floor(window.innerWidth / 2);
		var right	= window.innerWidth - 60;

		var top		= 60;
		var middle	= Math.floor(window.innerHeight / 2);
		var bottom	= window.innerHeight - 60;

		var horizSpacing = Math.floor(window.innerWidth / 6);
		var vertSpacing = Math.floor(window.innerHeight / 6);

		// these are the actual x, y coordinate values for each seat in this pattern, starting at lower right and going clockwise:
		//
		//		6	7	8
		//	5				9
		//	4				10
		//	3				11
		//		2	1	0

		this.seats = [[right - horizSpacing, bottom], [center, bottom], [left + horizSpacing, bottom],
					  [left, bottom - vertSpacing],   [left, middle],   [left, top + vertSpacing],
					  [left + horizSpacing, top],     [center, top],    [right - horizSpacing, top],
					  [right, top + vertSpacing],     [right, middle],  [right, bottom - vertSpacing]];

		var seatingIndex = this.players.children.length - 2;

		// seat each player

		for (var i = this.players.children.length - 1; i >= 0; i--) {
			var player = this.players.getChildAt(i);
			player.seatNumber = this.seatPatterns[seatingIndex][i]
			player.x = this.seats[player.seatNumber][0];
			this.adjustRowsWithTwoPlayers(seatingIndex, player, horizSpacing);
			player.y = this.seats[player.seatNumber][1];
			player.hand.calcBounds();
			player.displayName();
		};
	}
}

// INSTANTIATE THE SINGLETON!

var theTable = new Table();

theTable.positionPlayers();

window.addEventListener("resize", function(event) {
    theTable.positionPlayers();
}, false);
