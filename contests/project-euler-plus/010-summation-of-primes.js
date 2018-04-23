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
//running through 1000000 numbers is not efficient enough to pass all cases.
//So we use the sieve of Eratosthenes
//(see: https://stackoverflow.com/questions/15471291/sieve-of-eratosthenes-algorithm-in-javascript-running-endless-for-large-number)

function primesSieve(n) {
    var array = [], upperLimit = Math.sqrt(n), primes = [];
    // Make an array from 2 to (n - 1). This is an array of trues. We will "mark" items by changing them to false
    for (var i = 0; i < n; i++) {
        array.push(true);
    }
    // Now remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }
    // Finally, all remaining array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            primes.push(i);
        }
    }
    return primes;
};

//Now we need to create an array of sums [0,2,5,5,10,10,17,17,17,17,28...] so we can later get mySums[n]

var myPrimes = primesSieve(1000001);
var mySumsSteps = new Array(1000001).fill(0);
for (item of myPrimes) {
    mySumsSteps[item] = item;
}

var mySums = new Array(1000001);
mySums[0] = 0;
for (let j = 1; j < mySums.length; j++) {
    mySums[j] = mySums[j-1] + mySumsSteps[j];
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        var sum = mySums[n];
        console.log(sum);
    }
}
