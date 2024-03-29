// Function to generate an array of numbers from start to end (inclusive)
function generateArray(start, end) {
    // Initialize an empty array to store the generated numbers
    let arr = [];
    
    // Loop from start to end (inclusive)
    for (let i = start; i <= end; i++) {
        // Push each number to the array
        arr.push(i);
    }
    // Return the generated array
    return arr;
}

console.log(generateArray(4, 7)); // [4, 5, 6, 7]
console.log(generateArray(-4, 7)); // [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
