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

/* Data Structure Start */
class Stack {
  stack = [];

  constructor() {}

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    if (this.stack.length === 0) return -1;
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

/* Data Structure End */

function largestHistogram(heights) {
  let stack = new Stack();
  let ans = -1;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] >= stack.peek().height) {
      const item = { index: i, height: heights[i] };
      stack.push(item);
    } else {
      let j = i;
      while (stack.peek().height >= heights[i]) {
        const { index, height } = stack.pop();
        const area = height * (i - index);
        j = index;
        ans = Math.max(ans, area);
      }
      const item = { index: j, height: heights[i] };
      stack.push(item);
    }
  }

  while (!stack.isEmpty()) {
    // calculate the area
    const { index, height } = stack.pop();
    const area = height * (heights.length - index);
    ans = Math.max(ans, area);
  }

  return ans;
}

/* Main Function */
function main() {
  /* Write your code here */
  const T = Number.parseInt(readline());
  for (let i = 0; i < T; i++) {
    const arr = readline()
      .split(" ")
      .map((val) => Number.parseInt(val));
    const ans = largestHistogram(arr);
    console.log(ans);
  }
}
