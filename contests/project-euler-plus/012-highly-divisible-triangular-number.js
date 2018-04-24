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
function findFactors(n) {
    output = [];
    for (let i=1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            output.push(i);
            output.push(n / i);
            if ((n / i) == i) {
                output.pop();
            }
        }
    }
    return output;
}

class numWithFactorsAndCount {
    constructor(num) {
        this.num = num;
        this.factors = findFactors(this.num);
        this.count = this.factors.length;
    }
}

var flag = 0;
var currSum = 0;
var currAdd = 1;
var fullList = [];
while (flag == 0) {
    currSum += currAdd;
    fullList.push(new numWithFactorsAndCount(currSum));
    currAdd++;
    fullList[fullList.length-1].count > 1000 ? flag = 1 : flag = 0;
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        console.log(fullList.find(x => x.count > n).num);
    }
}