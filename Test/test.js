const data = [1,2,3,4,5]
let max = Math.max(...data)
console.log('Max Value is '+max)

const readline = require('readline');
const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input

readInterface.question('Enter Your Input: ', input => {
 input = Number(input)

for(let i=0;i<data.length;i++){
    for(let j=i+1;j<data.length;j++){
        let x = data[i] + data[j]
        if(x == input){
            console.log(`${data[i]}+${data[j]}`)
           }
        }
    }
    readInterface.close()
});
