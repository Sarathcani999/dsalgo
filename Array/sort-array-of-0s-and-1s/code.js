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
function sort01Array(nums) {
  let count0 = 0;
  let count1 = 1;

  for (const val of nums) {
    if (val === 0) count0++;
    if (val === 1) count1++;
  }
  for (let i = 0; i < nums.length; i++) {
    if (count0) {
      nums[i] = 0;
      count0--;
    } else {
      nums[i] = 1;
      count1--;
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
    const ans = sort01Array(nums);
    console.log(ans);
  }
}
