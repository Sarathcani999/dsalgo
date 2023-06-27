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

function sizeOfUnion(a, b) {
  let set = new Set([...a, ...b]);
  return set.size;
}

/* Main Function */
function main() {
  /* Write your code here */
  const t = Number.parseInt(readline());

  for (let i = 0; i < t; i++) {
    const a = readline()
      .split(" ")
      .map((val) => Number.parseInt(val));
    const b = readline()
      .split(" ")
      .map((val) => Number.parseInt(val));
    const ans = sizeOfUnion(a, b);
    console.log(ans);
  }
}
