//https://www.hackerrank.com/challenges/2d-array/problem

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

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    let mySum = 0;
    let maxSum = arr[0][0] + arr[0][1] + arr[0][2] + arr[1][1] + arr[2][0] + arr[2][1] + arr[2][2];
    for (let j = 0; j < 4; j++) {
        for (let k = 0; k < 4; k++) {
            let mySum = arr[j][k] + arr[j][k+1] + arr[j][k+2] + arr[j+1][k+1] + arr[j+2][k]+ arr[j+2][k+1]+ arr[j+2][k+2];
            if (mySum > maxSum) {
                maxSum = mySum
            }
        }
    }
    console.log(maxSum);
}
