function processData(input) {
    var inputsArr = input.split("\n");
    var inputsArrInts = [];
    var sum = 0;
    for (let i = 1; i < inputsArr.length; i++) {
        inputsArrInts.push(parseInt(inputsArr[i])); //excluding the first line 
        sum += parseInt(inputsArr[i]);
    }
    var dividedSum = sum/Math.pow(10, 40);
    var dividedSumStr = dividedSum.toString();
    var dividedSum1stDigits = dividedSumStr.slice(0, 10);
    console.log(dividedSum1stDigits);    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
