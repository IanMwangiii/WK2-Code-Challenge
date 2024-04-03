// Function to generate an array of numbers from start to end 
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

console.log(generateArray(4, 7)); 
console.log(generateArray(-4, 7)); 
