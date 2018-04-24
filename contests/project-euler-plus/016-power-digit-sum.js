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
var BigNumber = require('bignumber.js');

function digitSum(x) { //x is a BigNumber, but it may have the format: 1.234123e6 - so we need to clean that string
    var xStr = x.toString();
    //removing the ".":
    var xStrClean1 = xStr.replace(".","");  
    //removes everything after the "e":
    var xStrClean2 = xStrClean1.indexOf('e') != -1 ? xStrClean1.substring(0, xStrClean1.indexOf('e')) : xStrClean1; 
    // console.log(xStrClean1.indexOf('e'));
    // console.log(xStr);
    // console.log(xStrClean1);
    // console.log(xStrClean2);
    var sum = 0;
    for (char of xStrClean2) {
        // console.log(char);
        sum += parseInt(char);
    }
    return sum;
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        var base = new BigNumber(2);
        var pow2n = base.exponentiatedBy(n);
        // console.log(`pow2n = 2^${n} = ${pow2n}`);
        console.log(digitSum(pow2n));
    }
}