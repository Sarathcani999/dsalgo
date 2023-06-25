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
function generateParenthesis(n, ans = [], stack = [], candidate = "") {
  if (n === 0) {
    for (let i = 0; i < stack.length; i++) {
      candidate += stack[i];
    }

    ans.push(candidate);
    return ans;
  }

  candidate += "(";
  stack.push(")");
  ans = generateParenthesis(n - 1, ans, stack, candidate);
  stack.pop();
  candidate = candidate.slice(0, candidate.length - 1);

  if (stack.length) {
    let popped = stack.pop();
    candidate = candidate + popped;
    ans = generateParenthesis(n, ans, stack, candidate);
    stack.push(popped);
    candidate = candidate.slice(0, candidate.length - 1);
  }
  return ans;
};

/* Main Function */
function main() {
  /* Write your code here */
  const T = Number.parseInt(readline());
  for (let i = 0; i < T; i++) {
    const n = Number.parseInt(readline());
    let ans = generateParenthesis(n);
    console.log(ans);
  }
}
