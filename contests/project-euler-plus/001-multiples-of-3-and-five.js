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
//(1) iteration doesn't work for large sets, so using summation formula
//(2) Need to use bignumber library, because large numbers get screwed up when divided
var BigNumber = require('bignumber.js');
function main() {
    var t = new BigNumber(readLine()).toNumber();
    for (var a0 = 0; a0 < t; a0++) {
        var n = new BigNumber(readLine());  
        let sum = 0;
        let threes = n.minus(1).dividedBy(3).floor();
        sum = threes.times(3).times(threes.plus(1)).dividedBy(2);
        let fives = n.minus(1).dividedBy(5).floor();
        sum = sum.plus(fives.times(5).times(fives.plus(1)).dividedBy(2));
        let fifteens = n.minus(1).dividedBy(15).floor();
        sum = sum.minus(fifteens.times(15).times(fifteens.plus(1)).dividedBy(2));
        console.log(sum.toString());
    }
}