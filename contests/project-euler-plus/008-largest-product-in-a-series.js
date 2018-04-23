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
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var max = 0;
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        var num = readLine();
        numStr = num.toString();
        for (let startPosition = 0; startPosition < numStr.length - k + 1; startPosition++) {
            var currentTotal = 1;
            for (let j = 0; j < k; j++) {
                currentTotal = currentTotal * numStr[startPosition + j];   
            }
            if (currentTotal > max) {
                max = currentTotal;
            }
        }
        console.log(max);
    }
}
