/**
 * Calculates the sum of all elements in an array.
 */
function calculateSum() {
    const numbers = [10, 5, 20, 3, 12];
    let totalSum = 0;

    // Iterate over the array and add each number to totalSum
    numbers.forEach(number => {
        totalSum += number;
    });

    console.log("The array is:", numbers);
    console.log("The total sum is:", totalSum); // Output: 50
}

calculateSum();