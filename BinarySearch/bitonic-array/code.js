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

function bitonicArray(arr) {
  if (arr.length === 0) return -1;

  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    if (s === e) return s;
    let mid = Math.floor((s + e) / 2);
    if (arr[mid] > arr[mid + 1]) {
      e = mid;
    } else {
      s = mid + 1;
    }
  }

  return -1;
}

/* Main Function */
function main() {
  /* Write your code here */
  const T = Number.parseInt(readline());
  for (let i = 0; i < T; i++) {
    const arr = readline()
      .split(" ")
      .map((val) => Number.parseInt(val));
    const ans = bitonicArray(arr);
    console.log(ans);
  }
}
