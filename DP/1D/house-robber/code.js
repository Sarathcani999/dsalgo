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
function soass(arr, ind = arr.length - 1, dp) {
  if (ind < 0) return 0;

  if (dp[ind] !== -1) return dp[ind];

  const pick = arr[ind] + soass(arr, ind - 2, dp);
  const notpick = 0 + soass(arr, ind - 1, dp);

  dp[ind] = Math.max(pick, notpick);
  return dp[ind];
}

/* Main Function */
function main() {
  /* Write your code here */
  const T = Number.parseInt(readline());
  for (let i = 0; i < T; i++) {
    // read inputs here
    const arr = readline()
      .split(" ")
      .map((val) => Number.parseInt(val));

    const dp1 = Array(arr.length).fill(-1);
    const dp2 = Array(arr.length).fill(-1);

    const arr1 = arr.slice(0, arr.length - 1);
    const arr2 = arr.slice(1, arr.length);

    const case1 = soass(arr1, arr1.length - 1, dp1);
    const case2 = soass(arr2, arr2.length - 1, dp2);

    const ans = Math.max(case1, case2);
    console.log(ans);
  }
}
