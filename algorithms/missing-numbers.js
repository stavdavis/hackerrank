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

function missingNumbers(arr, brr) {
    let brrReduced = brr;
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < brr.length; j++) {
            if (arr[i] == brr[j]) {
                brrReduced.splice(j, 1);
                break;
            }
        }
    }
    sortedOutput = brrReduced.sort((a, b) => a-b);
    filteredOutput = sortedOutput.filter((item, pos) => sortedOutput.indexOf(item) == pos);
    return (filteredOutput);
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var m = parseInt(readLine());
    brr = readLine().split(' ');
    brr = brr.map(Number);
    var result = missingNumbers(arr, brr);
    console.log(result.join(" "));



}
