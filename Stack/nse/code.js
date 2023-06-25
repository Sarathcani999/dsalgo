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

function nextSmallestElement(arr) {
  const n = arr.length;
  const nse = Array(n).fill(-1);
  const stack = [];
  for (let i = n - 1; i >= 0; i--) {
    let top = stack.length - 1;
    while (top >= 0 && arr[i] <= arr[stack[top]]) {
      stack.pop();
      top = stack.length - 1;
    }
    nse[i] = stack.length === 0 ? -1 : stack[top];
    stack.push(i);
  }

  return nse;
}

/* Main Function */
function main() {
  /* Write your code here */
  const t = Number.parseInt(readline());
  for (let i = 0; i < t; i++) {
    const arr = readline()
      .split(" ")
      .map((val) => Number.parseInt(val));

    const ans = nextSmallestElement(arr);
    for (let i = 0; i < ans.length; i++) {
      if (ans[i] >= 0) ans[i] = arr[ans[i]];
    }
    console.log(ans);
  }
}
