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

function findJ(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (target >= arr[mid]) start = mid + 1;
    if (target < arr[mid]) end = mid - 1;
  }

  if (start - 1 < 0 || start - 1 > arr.length - 1) return -1;
  if (arr[start - 1] === target) return start - 1;
  return -1;
}

function findI(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (target > arr[mid]) start = mid + 1;
    if (target <= arr[mid]) end = mid - 1;
  }
  if (end + 1 > arr.length - 1 || end + 1 < 0) return -1;
  if (arr[end + 1] === target) return end + 1;
  return -1;
}

/* Main Function */
function main() {
  /* Write your code here */
  const T = Number.parseInt(readline());
  for (let i = 0; i < T; i++) {
    const target = Number.parseInt(readline());
    const arr = readline()
      .split(" ")
      .map((val) => Number.parseInt(val));
    const i = findI(arr, target);
    const j = findJ(arr, target);
    console.log(i, j);
  }
}
