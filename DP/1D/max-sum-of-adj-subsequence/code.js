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

    const dp = Array(arr.length).fill(-1);

    const ans = soass(arr, arr.length - 1, dp);
    console.log(ans);
  }
}
