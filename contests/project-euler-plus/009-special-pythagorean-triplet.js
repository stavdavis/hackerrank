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
class triplet {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.sum = a + b + c;
        this.product = a * b * c;
    }
}

var tripletsArr = [];
for (let a = 1; a < 3001; a++) { // N < 3000 --> a+b+c < 3000; a < b < c --> a<1000, b<1000, c<1000
    for (let b = a + 1; b < 3001; b++) {
        let c = Math.sqrt(a*a + b*b);
        if (c % 1 == 0) {
            tripletsArr.push(new triplet(a, b, c));
        }
    }
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        var allMatches = tripletsArr.filter( triplet => triplet.sum === n );
        var allMatchesShowProducts = allMatches.map(triplet => triplet.product);
        var maxProduct = Math.max(...allMatchesShowProducts);
        console.log(allMatchesShowProducts.length != 0 ? maxProduct : -1);
    }
}