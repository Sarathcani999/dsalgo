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
function findinrotatedsortedarr(arr, target) {
  let l = 0;
  let h = arr.length - 1;
  while (l <= h) {
    const mid = Math.floor((l + h) / 2);
    const midVal = arr[mid];
    const firstVal = arr[l];
    const lastVal = arr[h];

    if (target === midVal) return mid;

    if (firstVal <= midVal) {
      if (target <= midVal && target >= firstVal) {
        h = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (target <= lastVal && target >= midVal) {
        l = mid + 1;
      } else {
        h = mid - 1;
      }
    }
  }

  return -1;
}

/* Main Function */
function main() {
  /* Write your code here */
  const T = Number.parseInt(readline());
  for (let i = 0; i < T; i++) {
    // read inputs here
    const target = Number.parseInt(readline());
    const arr = readline()
      .split(" ")
      .map((val) => Number.parseInt(val));

    const ans = findinrotatedsortedarr(arr, target);
    console.log(ans);
  }
}
