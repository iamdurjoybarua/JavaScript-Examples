# JavaScript Core Concepts Examples 💡

This repository contains a collection of five simple, standalone JavaScript files (`.js`) designed to illustrate fundamental programming concepts, including **array iteration**, **object manipulation**, **basic validation**, **asynchronous timing**, and **string manipulation**.

These examples are perfect for developers who are **new to JavaScript** or as a **quick reference** for common tasks.

---

## 📂 Repository Contents

Each file demonstrates a specific core JavaScript feature:

| Filename | Concept Demonstrated | Description |
| :--- | :--- | :--- |
| `array-sum.js` | Array Iteration (`.forEach`) & Summation | Calculates the total sum of numbers in an array. |
| `object-user.js` | Object Creation & Property Access (Dot and Bracket Notation) | Defines an object and shows how to read and update its data. |
| `validation.js` | Basic Form Validation Logic | Simulates checking if an input string is empty or too short. |
| `timer.js` | Asynchronous Execution (`setTimeout`) | Demonstrates running a function once after a specified time delay. |
| `string-utils.js` | String Manipulation (`.trim()`, `.toUpperCase()`) | Cleans up a string by removing whitespace and changing its case. |

---

## ▶️ How to Run the Examples

You can execute any of these JavaScript files directly using **Node.js**.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) installed on your machine.

### Execution Steps

1.  **Clone the Repository** (or download the files):

    ```bash
    git clone [your-repository-url]
    cd [your-repository-folder]
    ```

2.  **Run a specific file** using the `node` command:

    For example, to run the array summation script:

    ```bash
    node array-sum.js
    ```

    You can replace `array-sum.js` with any other file like `object-user.js`, `timer.js`, etc. to see its output.

---

## 💻 Code Snippets (Quick Reference)

### 1. Array Iteration and Summation (`array-sum.js`)
Calculates the sum of `[10, 5, 20, 3, 12]`, which is **50**.

```javascript
const numbers = [10, 5, 20, 3, 12];
let totalSum = 0;

numbers.forEach(number => {
    totalSum += number;
});

// Output: The total sum is: 50


## Author

Durjoy Barua / https://github.com/iamdurjoybarua

Feel free to use these examples as a foundation for your own projects and to experiment with the code! 
Happy coding! 💻
