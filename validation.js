/**
 * Simulates checking if a form field is valid (not empty).
 * @param {string} input - The simulated value from a form input field.
 */
function validateInput(input) {
    if (input.trim() === "") {
        console.log("Validation Failed: Input cannot be empty.");
        return false;
    } else if (input.length < 5) {
        console.log("Validation Failed: Input must be at least 5 characters.");
        return false;
    } else {
        console.log("Validation Success! Input is valid.");
        return true;
    }
}

// Test cases
validateInput("hello world"); // Success
validateInput("");             // Failed (empty)
validateInput("dev");          // Failed (too short)