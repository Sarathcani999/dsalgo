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
function kadanesAlgorithm(nums) {
  let maxValue = 0;
  let currentRunningSum = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    currentRunningSum += nums[windowEnd];
    maxValue = Math.max(maxValue, currentRunningSum);
    if (currentRunningSum < 0) {
      currentRunningSum = 0;
    }
  }

  return maxValue;
}

/* Main Function */
function main() {
  /* Write your code here */
  const t = Number.parseInt(readline());

  for (let i = 0; i < t; i++) {
    const nums = readline()
      .split(" ")
      .map((val) => Number.parseInt(val));
    const ans = kadanesAlgorithm(nums)
    console.log(ans);
  }
}
