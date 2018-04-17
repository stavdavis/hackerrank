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

function findPrimes(N) { //first we find all the primes smaller than N
    var myPrimes = [2];
    for (let i = 3; i <= N; i++) {
        if (isPrime(i)) {
            myPrimes.push(i);
        }
    }
    return myPrimes;
}



//the next function finds how many times each prime "fits" under N (example: N=10 --> 2x2x2 < 10, so 2 fits 3 times)
// then the smallest multiple is 2x2x2 x3x3 x5 x7 = 2520
//But first, we need to create a class that looks like this: {prime: howManyTime, prime: howManyTimes...}
//For example: {2:3, 3:2, 5:1, 7:1} --> 2x2x2 x3x3 x5 x7 = 2520
class primeCounter {
  constructor(prime, count) {
    this.prime = prime;
    this.count = count;
  }
}

function primeRepeats(primeArr, num) {
    let primesAndCounts = [];
    for (prime of primeArr) {
        let primeMult = prime;
        counter = 0;
        while (primeMult <= num) {
            primeMult *= prime;
            counter++;
        }
        let primeCount = new primeCounter(prime, counter);
        primesAndCounts.push(primeCount);        
    }
    return primesAndCounts;
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var myMultiple = 1;
        var n = parseInt(readLine());
        var myPrimes = findPrimes(n);
        var primeRepeatsArr = primeRepeats(myPrimes, n);
        for (item of primeRepeatsArr) {
            myMultiple *= Math.pow(item.prime, item.count);
        }
        console.log(myMultiple);
    }
}
