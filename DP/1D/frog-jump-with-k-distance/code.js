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

function frogJump(N, heights, K, dp) {
  if (N === 0) return 0;
  if (N === 1) return Math.abs(heights[N] - heights[0]);

  if (dp[N] !== -1) return dp[N];

  let minVal = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i <= K; i++) {
    if (N - i < 0) break;
    const val =
      frogJump(N - i, heights, K, dp) + Math.abs(heights[N] - heights[N - i]);
    minVal = Math.min(minVal, val);
  }

  dp[N] = minVal;
  return dp[N];
}

/* Main Function */
function main() {
  /* Write your code here */
  const T = Number.parseInt(readline());
  for (let i = 0; i < T; i++) {
    // read inputs here
    const [N, K] = readline()
      .split(" ")
      .map((val) => Number.parseInt(val));
    const heights = readline()
      .split(" ")
      .map((val) => Number.parseInt(val));

    const dp = Array(N).fill(-1);

    const ans = frogJump(N - 1, heights, K, dp);
    console.log(ans);
  }
}
