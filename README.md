Let’s start **from zero** — you’ll go from installing TypeScript to running your first real TypeScript program.

We’ll cover everything step-by-step 💡

---

# 🧭 Step 1: Install Node.js

TypeScript runs **on top of Node.js**, so you need Node first.

👉 **Download Node.js:**
Go to [https://nodejs.org](https://nodejs.org) and install the **LTS** version (Long-Term Support).

Once installed, check:

```bash
node -v
npm -v
```

If you see version numbers, you’re good!

---

# 🧰 Step 2: Install TypeScript

TypeScript is distributed as an **npm package**.

You can install it **globally** (available everywhere) or **locally** (per project).

### 🔹 Global install (recommended for learning)

```bash
npm install -g typescript
```

Then check:

```bash
tsc -v
```

If you see something like `Version 5.x.x`, TypeScript is installed 🎉

---

# 🧩 Step 3: Create a Project Folder

Make a new directory and open it:

```bash
mkdir ts-tutorial
cd ts-tutorial
```

Initialize it as an npm project:

```bash
npm init -y
```

That creates a `package.json` file.

---

# 🧱 Step 4: Create a TypeScript Config

TypeScript uses a config file called `tsconfig.json`.

Generate one automatically:

```bash
tsc --init
```

This creates a file with many options. For now, open it and make sure these lines are set (you can edit it manually):

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true
  }
}
```

📘 Explanation:

* `target`: version of JavaScript to compile to.
* `module`: how imports/exports work.
* `rootDir`: where your TypeScript source files live.
* `outDir`: where compiled JS files go.
* `strict`: enables strict type-checking (recommended!).

---

# 🧾 Step 5: Write Your First TypeScript File

Make a new folder and file:

```bash
mkdir src
cd src
```

Create `hello.ts`:

```ts
// hello.ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("TypeScript"));
```

---

# ⚙️ Step 6: Compile TypeScript → JavaScript

Go back to the project root:

```bash
cd ..
```

Then compile your code:

```bash
tsc
```

This will:

* Read your `tsconfig.json`
* Convert everything from `/src` → `/dist`
* Produce a new file: `dist/hello.js`

---

# 🚀 Step 7: Run the JavaScript

Now run the compiled JS with Node.js:

```bash
node dist/hello.js
```

✅ Output:

```
Hello, TypeScript!
```

---

# ⚡ Bonus: Run TypeScript Directly (Optional)

If you don’t want to compile every time, install `ts-node`:

```bash
npm install -g ts-node
```

Then run TypeScript files **directly**:

```bash
ts-node src/hello.ts
```

It runs without manual compilation.

---

# 🎓 Step 8: Next Steps (Learning Path)

Now that you can run TypeScript, learn these next:

| Concept                        | Description                                              |
| ------------------------------ | -------------------------------------------------------- |
| **Types**                      | `string`, `number`, `boolean`, `any`, `unknown`, `never` |
| **Interfaces & Types**         | Define shapes of objects                                 |
| **Functions**                  | Type parameters and return types                         |
| **Classes**                    | Object-oriented programming in TS                        |
| **Generics**                   | Reusable, type-safe functions/classes                    |
| **Modules**                    | `import` / `export` syntax                               |
| **Enums**                      | Named constant values                                    |
| **Union & Intersection types** | Combine multiple type possibilities                      |

---
