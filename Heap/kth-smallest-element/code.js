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

// Brute Force
function findKthSmallest(nums, k) {
  nums.sort(function (a, b) {
    return a - b;
  });
  return nums[k - 1];
}

/* Main Function */
function main() {
  /* Write your code here */
  const t = Number.parseInt(readline());

  for (let i = 0; i < t; i++) {
    const K = Number.parseInt(readline());
    const nums = readline()
      .split(" ")
      .map((val) => Number.parseInt(val));
    const ans = findKthSmallest(nums, K);
    console.log(ans);
  }
}
