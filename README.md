# JavaScript Block Scope Gotcha
This repository demonstrates a common source of confusion in JavaScript related to block scope and the `let` keyword.  The example highlights how declaring a variable within a block using `let` creates a new variable, which is only accessible within that block, effectively shadowing any variables with the same name in outer scopes.

## How to reproduce
1. Clone this repository.
2. Open `bug.js` and run the code in a JavaScript environment (e.g., Node.js, browser's console).
3. Observe the output.  The unexpected behavior stems from the block scope of the inner `let x`. 

## Solution
The `bugSolution.js` file demonstrates one way to avoid this issue by using more descriptive variable names or ensuring consistent variable naming across scopes.