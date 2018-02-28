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
function leftRotation(a, d) {
    outputArray = [];
    for (let i=0; i<a.length; i++) {
        if ((i - d) % (a.length) >= 0) {
            outputArray[(i - d) % (a.length)] = a[i];    
        } else {
            outputArray[(i - d) % (a.length) + a.length] = a[i];    
        } 
    }
    return outputArray;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var d = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    var result = leftRotation(a, d);
    console.log(result.join(" "));



}
