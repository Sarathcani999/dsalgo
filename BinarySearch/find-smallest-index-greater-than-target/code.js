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

function findSmallestElementGreaterThanTarget(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (target >= arr[mid]) start = mid + 1;
    if (target < arr[mid]) end = mid - 1;
  }
  if (start >= arr.length) return -1;
  return start;
}

/* Main Function */
function main() {
  /* Write your code here */
  const T = Number.parseInt(readline());
  for (let i = 0; i < T; i++) {
    const target = Number.parseInt(readline());
    const arr = readline()
      .split(" ")
      .map((val) => Number.parseInt(val));
    const ans = findSmallestElementGreaterThanTarget(arr, target);
    console.log(ans);
  }
}
