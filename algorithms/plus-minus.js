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

function plusMinus(arr) {
    let negatives = 0;
    let positives = 0;
    let zeroes = 0;
    let total = arr.length;
    for (item of arr) {
        if (item < 0) {
            negatives++;
        } else if (item > 0) {
            positives++;
        } else {
            zeroes++;
        }
    }
    console.log(positives / total);
    console.log(negatives / total);
    console.log(zeroes / total);
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    plusMinus(arr);

}
