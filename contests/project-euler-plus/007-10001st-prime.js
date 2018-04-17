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
function isPrime(x) {
    for (let i = 2; i < Math.sqrt(x)+1; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

var primeArr = [2];
var counter = 1;
var currNum = 3;
while (counter <= 10002) {
    if (isPrime(currNum)) {
        primeArr.push(currNum);
        counter++;
    }
    currNum += 2;
} 

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        console.log(primeArr[n - 1]);
    }
}
