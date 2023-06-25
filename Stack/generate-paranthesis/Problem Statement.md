# Generate Parentheses (Leetcode 22)

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:
```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
```
Example 2:
```
Input: n = 1
Output: ["()"]
```

Constraints:
```
1 <= n <= 8
```

## Discussion

```mermaid
graph TD
L00[3] --> L10[2]
L10 --> L20[1]
L20 --> L30("((()))")
L20 --> L31[1]
L31 --> L42("(()())")
L31 --> L43[1]
L43 --> L56("(())()")
L10 --> L21[2]
L21 --> L32[1]
L32 --> L44("()(())")
L32 --> L45[1]
L45 --> L510("()()()")
```