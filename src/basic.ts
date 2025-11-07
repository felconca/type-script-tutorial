let username: string = "Felcon";
let age: number = 28;
let isIt: boolean = true;

console.log(`${username} is ${age} years. He is and IT Guy, ${isIt}`);
console.log(username.toUpperCase());

/**
 * any disables type-checking.
❌ Use it only when you have no control over the data (e.g., external APIs).
 */
let randomValue: any = "Hello";
randomValue = 42; // works
randomValue = true; // works
console.log(randomValue);

// Unlike any, you can’t directly use unknown values — you must check their type first. ✅
let input: unknown = "Hi";
if (typeof input === "string") {
  console.log(input.toUpperCase());
}

// arrays
let numbers: number[] = [1, 2, 3];
let fruits: string[] = ["apple", "banana"];
console.log(numbers, fruits);

// alternative you can decalre multiple types in array
let list: Array<number> = [1, 2, 3];

//Tuples (Fixed-length arrays)
let mixList: [number, string, boolean] = [0, "string", true]; // You must provide the exact number and types of values.
console.log(list, mixList);

// Objects:If you add or remove a property that doesn’t match the type, TS will complain.
let user: { name: string; age: number } = {
  name: "Bob",
  age: 22,
};
console.log(user);

// Union Types: Means the variable can hold either a string or a number.
let value: string | number;
value = "hello";
value = 100;

// Literal Types:Useful for enforcing specific options (like enums, which we’ll see later).
let direction: "up" | "down";
direction = "up"; // ✅
direction = "left"; // ❌ Error

// Type Inference:You don’t always have to explicitly type everything.TypeScript figures it out automatically.
let city = "Paris"; // inferred as string
let count = 10; // inferred as number
