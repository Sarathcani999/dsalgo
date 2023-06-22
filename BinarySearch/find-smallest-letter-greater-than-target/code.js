"use strict";

/* Driver Code Start */
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });
  main();
});

function readline() {
  return inputString[currentLine++];
}
/* Driver Code End */

function findSmallestLetterGreaterThanTarget(letters, target) {
  let start = 0;
  let end = letters.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (target >= letters[mid]) start = mid + 1;
    if (target < letters[mid]) end = mid - 1;
  }
  if (start >= letters.length) return 0;
  return start;
}

/* Main Function */
function main() {
  /* Write your code here */
  const T = Number.parseInt(readline());
  for (let i = 0; i < T; i++) {
    const target = readline();
    const arr = readline().split(" ");
    const ans = findSmallestLetterGreaterThanTarget(arr, target);
    console.log(ans);
  }
}
