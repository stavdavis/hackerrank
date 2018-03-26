'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the miniMaxSum function below.
 */
function miniMaxSum(arr) {
    let sortedArr = arr.sort();
    let minSum = sortedArr[0] + sortedArr[1] + sortedArr[2] + sortedArr[3];
    let maxSum = sortedArr[1] + sortedArr[2] + sortedArr[3] + sortedArr[4];
    console.log(minSum, maxSum);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
