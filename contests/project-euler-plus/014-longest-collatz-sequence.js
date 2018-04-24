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
function collatzLength(x) {
    var counter = 1;
    while (x != 1) {
        x % 2 == 0 ? x = x / 2 : x = 3 * x + 1;
        counter++;
    }
    return counter;
}

collatzIndex = [];
for (let num = 1; num <= 5000000; num++) {
    collatzIndex.push(collatzLength(num));
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        var relevantCollatz = collatzIndex.slice(0,n);
        var maxCollatzValue = Math.max(...collatzIndex.slice(0,n));
        var maxCollatzIndex = relevantCollatz.lastIndexOf(maxCollatzValue) + 1;
        console.log(maxCollatzIndex);
    }
}
