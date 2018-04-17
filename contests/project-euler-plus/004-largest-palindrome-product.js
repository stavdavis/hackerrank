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
function isPalindrome(x) {
    xStr = x.toString().split("");
    for (let i=0; i<xStr.length; i++) {
        if (xStr[i] != xStr[xStr.length-1-i]) {
            return false;
        }
    }
    return true;
}

function findMultips(z) {
    for (k=100; k<1000; k++) {
        if (Number.isInteger(z / k) && (z / k < 1000) && (z / k >= 100)) {
            return true;
        }
    }
    return false;
}

function findClosestPal(y) {
    for (let j=y-1; j>10000; j--) {
        if (isPalindrome(j) && findMultips(j)) {
            return j;
        }
    }
    return false;
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        let closestPal = findClosestPal(n);
        console.log(closestPal);
    }

}
