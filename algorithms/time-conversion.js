'use strict';

const fs = require('fs');

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
 * Complete the timeConversion function below.
 */

function removeAMPM(str) {
    return str.slice(0, -2);    
}

function timeConversion(s) {
    var militaryTime = removeAMPM(s);
    if ((s[8] == "A") && (s.slice(0,2) == "12")) {
        var newMilitaryTime = "00" + militaryTime.substr(2,militaryTime.length-1);
    } else if (s[8] == "P" && (s.slice(0,2) != "12")) {
        var militaryHour = parseInt(s.slice(0,2)) + 12;
        var militaryHourStr = militaryHour.toString();
        var newMilitaryTime = militaryHourStr + militaryTime.substr(2,militaryTime.length-1);
    } else {
        var newMilitaryTime = militaryTime; //for all regular AM cases
    } 
    return newMilitaryTime;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
