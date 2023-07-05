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

function frogJump(N, heights, dp) {
  if (N === 0) return 0;
  if (N === 1) return Math.abs(heights[N] - heights[0]);

  if (dp[N] !== -1) return dp[N];

  const case1 =
    frogJump(N - 1, heights, dp) + Math.abs(heights[N] - heights[N - 1]);
  const case2 =
    frogJump(N - 2, heights, dp) + Math.abs(heights[N] - heights[N - 2]);

  dp[N] = Math.min(case1, case2);
  return dp[N];
}

/* Main Function */
function main() {
  /* Write your code here */
  const T = Number.parseInt(readline());
  for (let i = 0; i < T; i++) {
    // read inputs here
    const N = Number.parseInt(readline());
    const heights = readline()
      .split(" ")
      .map((val) => Number.parseInt(val));

    const dp = Array(N).fill(-1);

    const ans = frogJump(N - 1, heights, dp);
    console.log(ans);
  }
}
