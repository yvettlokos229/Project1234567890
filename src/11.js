// Get the current date and time
var dt = new Date();

// Create an array to store the numbers
var arr = [];

// Loop through each number from 1 to 100
for (var i = 1; i <= 100; i++) {
  // Check if the number is prime
  if (isPrime(i)) {
    // Add it to the array if it is prime
    arr.push(i);
  }
}

// Print the array
console.log(arr);

// Define a function to check if a number is prime
function isPrime(n) {
  // Loop through each number from 2 to the square root of n
  for (var i = 2; i <= Math.sqrt(n); i++) {
    // If a factor is found, return false
    if (n % i === 0) {
      return false;
    }
  }
  // If no factor is found, return true
  return true;
}
