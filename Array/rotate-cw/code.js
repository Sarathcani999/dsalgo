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
function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

function rotateCW(nums) {
  if (nums.length === 0) return;

  for (let i = nums.length - 2; i >= 0; i--) {
    swap(nums, i, i + 1);
  }
}

/* Main Function */
function main() {
  /* Write your code here */
  const t = Number.parseInt(readline());

  for (let i = 0; i < t; i++) {
    const nums = readline()
      .split(" ")
      .map((val) => Number.parseInt(val));
    rotateCW(nums)
    console.log(nums);
  }
}
