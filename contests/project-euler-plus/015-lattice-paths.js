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
//We are basically using the nCr formula: 
// M!/((M-N)!*N!), where M = total slots and N = moves right 
//Exampe: 2x3 ==> M = 2+3, N = 3 ==> M!/((M-N)!*N!) = 5!/(2)!*3! = 5!/(2*3*2) = 5!/12 = 120/12 = 10
//Here M = m+n and N = n

//Also, we need BigInteger to handle the large numbers (it converts numbers to strings)
var BigNumber = require('bignumber.js');

function factorial(x) { //x is a BitNumber
    var fact = new BigNumber(1);
    for (let i = x.c[0]; i > 0; i--) {
        fact = fact.multipliedBy(i);
    }
    return (fact);
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = new BigNumber(n_temp[0]);
        var m = new BigNumber(n_temp[1]);
        var M = m.plus(n);
        var upper = factorial(M);
        var lower1 = factorial(m);
        var lower2 = factorial(n);
        var lower = lower1.multipliedBy(lower2);
        var output = upper.dividedBy(lower);
        var moduloDiv = new BigNumber(10**9+7);
        console.log(output.modulo(moduloDiv).c[0]);
    }
}