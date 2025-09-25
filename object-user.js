// Define a simple JavaScript object (like a JSON structure)
const userProfile = {
    username: "coder42",
    age: 28,
    isVerified: true,
    skills: ["HTML", "CSS", "JavaScript"]
};

// Access properties using dot notation
console.log(`Username: ${userProfile.username}`); 

// Access properties using bracket notation (useful for dynamic keys)
console.log(`First Skill: ${userProfile.skills[0]}`);

// Update a property
userProfile.age = 29;
console.log(`Updated Age: ${userProfile.age}`);