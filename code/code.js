'use strict'

/* Driver Code Start */
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    main();
});

function readline() {
    return inputString[currentLine++];
}
/* Driver Code End */

/* Main Function */
function main() {
    /* Write your code here */
    let line = readline();
    console.log(line);
}