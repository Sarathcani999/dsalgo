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
function climbingStairs(N, dp) {
  if (N <= 2) return N;

  if (dp[N] !== -1) return dp[N];

  dp[N] = climbingStairs(N - 1, dp) + climbingStairs(N - 2, dp);

  return dp[N];
}

function tabulation(N) {
  let prev = 0;
  let curr = 1;
  for (let i = 1; i <= N; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

/* Main Function */
function main() {
  /* Write your code here */
  const T = Number.parseInt(readline());
  for (let i = 0; i < T; i++) {
    // read inputs here
    const N = Number.parseInt(readline());
    const dp = Array(N + 1).fill(-1);
    const ans = climbingStairs(N, dp);
    const ans_tabulation = tabulation(N);
    console.log(ans, ans_tabulation);
  }
}
