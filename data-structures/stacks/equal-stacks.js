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
class stackAndCurrentHeight {
    constructor(stack){
        this.stack = stack;
        this.currentHeight = this.stack.reduce((sum, currentValue) => sum + currentValue);
    }
}

function main() {
    var n1_temp = readLine().split(' ');
    var n1 = parseInt(n1_temp[0]);
    var n2 = parseInt(n1_temp[1]);
    var n3 = parseInt(n1_temp[2]);
    h1 = readLine().split(' ');
    h1 = h1.map(Number);
    h2 = readLine().split(' ');
    h2 = h2.map(Number);
    h3 = readLine().split(' ');
    h3 = h3.map(Number);
    h1 = new stackAndCurrentHeight(h1.reverse()); //reversing arrays so we can pop instead of shift (faster)
    h2 = new stackAndCurrentHeight(h2.reverse());
    h3 = new stackAndCurrentHeight(h3.reverse());
    
    let stacks = [h1, h2, h3];
    // console.log(stacks);
    
    while ((h1.currentHeight != h2.currentHeight) || (h2.currentHeight != h3.currentHeight)) {
            if ((h1.currentHeight == 0) || (h2.currentHeight == 0) || (h3.currentHeight == 0)) {
                console.log(0);
                return;
            } else {
                for (let i=0; i<3; i++) {
                    if ((stacks[i].currentHeight) != Math.min(stacks[0].currentHeight, stacks[1].currentHeight, stacks[2].currentHeight)) {
                        stacks[i].currentHeight -= stacks[i].stack[stacks[i].stack.length-1];
                        stacks[i].stack.pop();
                    }            
                }   
                // console.log(stacks);
                // console.log();
            }
    }
    console.log(stacks[0].currentHeight);
    return;
}