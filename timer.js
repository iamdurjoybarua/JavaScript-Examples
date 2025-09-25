console.log("Starting countdown...");

// Set the time delay in milliseconds (5000ms = 5 seconds)
const delay = 5000; 

/**
 * Function to run once the timer expires.
 */
function showNotification() {
    console.log("====================================");
    console.log("5 seconds have passed! The notification is displayed.");
    console.log("====================================");
}

// setTimeout calls showNotification() AFTER the delay
setTimeout(showNotification, delay);

console.log("The application continues to run while the timer is counting down.");