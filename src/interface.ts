// If you forget or misspell a property, TypeScript warns you immediately.
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

const user: User = {
  name: "felcon",
  age: 27,
  isAdmin: false,
};
console.log(user);

// Optional Properties : Use ? to mark something optional: description is optional — you can include it or not.
interface Product {
  id: number;
  name: string;
  descriptions?: string;
}
const product: Product = {
  id: 1,
  name: "Item1",
};
console.log(product);

// Readonly Properties
interface Point {
  readonly x: number;
  readonly y: number;
}

const p1: Point = { x: 10, y: 20 };
// p1.x = 5; ❌ Error – cannot modify readonly property

//Extending Interfaces: Interfaces can inherit from other interfaces:
interface Person {
  name: string;
}

interface Employee extends Person {
  role: string;
}
const employee: Employee = {
  name: "John",
  role: "Developer",
};

// Interface vs Type Alias:You can also define shapes with type
type Car = {
  brand: string;
  year: number;
};

const myCar: Car = {
  brand: "Toyota",
  year: 2020,
};
/**
 * ✅ interface and type are often interchangeable —
but interface is best for object shapes, and type is more flexible (we’ll see why soon).
 */
