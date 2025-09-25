/**
 * Cleans a string by removing whitespace and converting it to uppercase.
 * @param {string} inputString - The string to process.
 */
function cleanAndFormat(inputString) {
    // 1. Use .trim() to remove leading/trailing whitespace
    const trimmedString = inputString.trim(); 
    
    // 2. Use .toUpperCase() to convert all characters to uppercase
    const formattedString = trimmedString.toUpperCase(); 

    console.log(`Original: "${inputString}"`);
    console.log(`Formatted: "${formattedString}"`);
    return formattedString;
}

// Example with extra spaces and mixed case
cleanAndFormat("   githUb cOde "); 
// Output: "Formatted: "GITHUB CODE""

cleanAndFormat("javascript");
// Output: "Formatted: "JAVASCRIPT""