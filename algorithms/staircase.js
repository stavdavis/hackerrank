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

function staircase(n) {
    for (let line=1; line<=n; line++) {
        let currentLine = "";
        for (let character=1; character<=n-line; character++) {
            currentLine += " "  
        }
        for (let character=n-line+1; character<=n; character++) {
            currentLine += "#"  
        }
        console.log(currentLine);   
    }
}

function main() {
    var n = parseInt(readLine());
    staircase(n);

}
