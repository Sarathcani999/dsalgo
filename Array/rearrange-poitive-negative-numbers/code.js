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

function rearrangePositiveNegative(nums) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] > 0) {
      if (nums[j] < 0) {
        j--;
      }
      i++;
    } else {
      if (nums[j] > 0) {
        swap(nums, i, j);
        i++;
      }
      j--;
    }
  }
  return nums;
}

/* Main Function */
function main() {
  /* Write your code here */
  const t = Number.parseInt(readline());

  for (let i = 0; i < t; i++) {
    const nums = readline()
      .split(" ")
      .map((val) => Number.parseInt(val));
    const ans = rearrangePositiveNegative(nums);
    console.log(ans);
  }
}
