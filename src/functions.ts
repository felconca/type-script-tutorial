// Function with Type Annotations: You can specify parameter types and a return type:
function addNumber(a: number, b: number): number {
  return a + b;
}
console.log(addNumber(2, 2));

// Function Return Type void: When a function doesn’t return anything, use void
function logs(message: string): void {
  console.log(message);
}

// Optional Parameters: Add ? to make a parameter optional: If you don’t provide age, it’s automatically undefined
function greet(name: string, age?: number): string {
  return age ? `Hello ${name}, age ${age}` : `Hello ${name}`;
}

console.log(greet("Alice"));
console.log(greet("Bob", 30));

// Default Parameters:Give parameters default values:
function multiply(a: number, b: number = 2): number {
  return a * b;
}

console.log(multiply(5)); // 10
console.log(multiply(5, 3)); // 15

// Arrow Functions: TypeScript supports arrow functions (like ES6), with typed parameters:
const divide = (x: number, y: number): number => x / y;
console.log(divide(3, 6));

// Function Type Aliases: You can define a function type using type or interface
type MathOperation = (x: number, y: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

// Interface
interface Logger {
  (msg: string): void;
}
const log: Logger = (message) => console.log("LOG:", message);

// Function Overloading: TypeScript allows multiple function signatures for one function body.
function format(value: string): string;
function format(value: number): string;

function format(value: string | number): string {
  return typeof value === "string" ? value.toUpperCase() : value.toFixed(2);
}

console.log(format("hello")); // "HELLO"
console.log(format(3.1415)); // "3.14"
// Here, the function can handle both string and number, but TypeScript keeps type safety for each case.

// Using Interfaces in Functions:You can define complex parameter shapes using interfaces.
interface User {
  name: string;
  age: number;
}
function printUser(user: User): void {
  console.log(`${user.name} is ${user.age} years old.`);
}
printUser({ name: "Alice", age: 25 });

// Return Type Inference: You don’t always need to specify the return type — TypeScript can infer it.
function square(num: number) {
  return num * num;
}

// Rest Parameters: You can collect multiple arguments using rest syntax
function sumAll(...nums: number[]): number {
  return nums.reduce((total, n) => total + n, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15
