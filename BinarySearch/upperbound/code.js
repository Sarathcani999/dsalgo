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
function upperbound(arr, target) {
  let ans = null;
  let l = 0;
  let h = arr.length - 1;
  while (l <= h) {
    const mid = Math.floor((l + h) / 2);
    const midVal = arr[mid];

    if (midVal > target) {
      ans = midVal;
      h = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return ans;
}

/* Main Function */
function main() {
  /* Write your code here */
  const t = Number.parseInt(readline());

  for (let i = 0; i < t; i++) {
    const target = Number.parseInt(readline());
    const arr = readline()
      .split(" ")
      .map((val) => Number.parseInt(val));
    const ans = upperbound(arr, target);
    console.log(ans);
  }
}
