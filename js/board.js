$(document).ready(function () {
    var board = new Board(19, [4, 10, 16], $('#grid'));
    board.paint();
});

function Board(size, stars, grid) {

    this.N = size,
    this.stars = stars,
    this.grid = grid,

    this.paint = function () {
        for (y = 1; y <= this.N; y++) {
            for (x = 1; x <= this.N; x++) {
                var cell = $("<div style='grid-row: " + y + "; grid-column: + " + x + ";'></div>")
                    .addClass("unselectable grid-item");
                if (y === 1 && x === 1) {
                    cell.addClass("grid-top-left");
                } else if (y === 1 && x === this.N) {
                    cell.addClass("grid-top-right");
                } else if (y === this.N && x === 1) {
                    cell.addClass("grid-bottom-left");
                } else if (y === this.N && x === this.N) {
                    cell.addClass("grid-bottom-right");
                } else if (y === 1) {
                    cell.addClass("grid-top");
                } else if (y === this.N) {
                    cell.addClass("grid-bottom");
                } else if (x === 1) {
                    cell.addClass("grid-left");
                } else if (x === this.N) {
                    cell.addClass("grid-right");
                } else if (this.stars.includes(x) && this.stars.includes(y)) {
                    cell.addClass("grid-cross-dot");
                } else {
                    cell.addClass("grid-cross");
                }
                this.grid.append(cell);
            }
        }
    }
}