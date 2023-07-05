import { Stack } from "./stack";

let stack = new Stack();
console.log("Stack empty:", stack.isEmpty());
stack.push(0);
stack.push(4);
stack.push(2);
stack.pop();
stack.pop();
stack.pop();

console.log("Stack empty:", stack.isEmpty());
console.log("Stack: ", stack);
