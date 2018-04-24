process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var grid = [];
    for(grid_i = 0; grid_i < 20; grid_i++){
       grid[grid_i] = readLine().split(' ');
       grid[grid_i] = grid[grid_i].map(Number);
    }
    var max = 0;
    for (let x = 0; x <= 19; x++) {
        for (let y = 0; y <= 16; y++) {
            var currSumRight = grid[x][y] * grid[x][y+1] * grid[x][y+2] * grid[x][y+3];
            max < currSumRight ? max = currSumRight : max = max;
        }
    }
    for (let x = 0; x <= 16; x++) {
        for (let y = 0; y <= 19; y++) {
            var currSumDown = grid[x][y] * grid[x+1][y] * grid[x+2][y] * grid[x+3][y];
            max < currSumDown ? max = currSumDown : max = max;
        }
    }
    for (let x = 0; x <= 16; x++) {
        for (let y = 0; y <= 16; y++) {
            var currSumDiag1 = grid[x][y] * grid[x+1][y+1] * grid[x+2][y+2] * grid[x+3][y+3];
            max < currSumDiag1 ? max = currSumDiag1 : max = max;
        }
    }
    for (let x = 0; x <= 16; x++) {
        for (let y = 3; y <= 19; y++) {
            var currSumDiag2 = grid[x][y] * grid[x+1][y-1] * grid[x+2][y-2] * grid[x+3][y-3];
            max < currSumDiag2 ? max = currSumDiag2 : max = max;
        }
    }
    console.log(max);
}
