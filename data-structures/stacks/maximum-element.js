//need to create a class to capture a snapshot of the current max (just using max gets too heavy for large inputs)
class valueAndCurrentMaxSnapshot {
    constructor(value,currentMax){
        this.value = value;
        this.currentMax = currentMax;
    }
}

function processData(input) {
    let inputArr = input.split("\n");
    let numberOfActions = Number(inputArr[0]);
    let outputArr = [];
    let currentMax = 0;
    for (let i=1; i<numberOfActions+1; i++) {
        let currentAction = inputArr[i].split(" ");
        let actionType = Number(currentAction[0]);
        let actionValue = Number(currentAction[1]);
        switch(actionType) {
            case 1:
                currentMax = Math.max(actionValue, currentMax);
                outputArr.push(new valueAndCurrentMaxSnapshot(actionValue, currentMax));                 
                break;
            case 2:
                outputArr.pop();
                if(outputArr.length==0){
                   currentMax = 0;
                }else{
                   currentMax = outputArr[outputArr.length-1].currentMax;                    
                }     
                break;
            case 3:
                console.log(outputArr[outputArr.length-1].currentMax);
                break;
        }
    }
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
