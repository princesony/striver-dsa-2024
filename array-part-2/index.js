
function mergeSortedArrays(arr1, arr2) {
  let result = [...arr1,...arr2].sort((a,b)=>a-b);
  return result
}

const arr1 = [1, 5, 9, 10, 15];
const arr2 = [2, 3, 8, 13];
let data =mergeSortedArrays(arr1, arr2);
console.log(data); // Output: [1, 2, 3, 5, 8, 9, 10, 13, 15]



function fibonacci(n) {
  let result = [];

  // If n is less than 1, return an empty array.
  if (n < 1) {
      return [];
  }

  // If n is 1, return an array with only the first Fibonacci number (0).
  if (n === 1) {
      return [0];
  }

  // Initialize the result array with the first two Fibonacci numbers [0, 1].
  result = [0, 1];

  // Generate the Fibonacci sequence up to the n-th number.
  for (let i = 2; i < n; i++) {
      result.push(result[i - 1] + result[i - 2]);  // Sum of the previous two numbers
  }

  return result;  // Return the Fibonacci sequence up to the n-th number
}
console.log(fibonacci(5));  // Output: [0, 1, 1, 2, 3]
console.log(fibonacci(1));  // Output: [0]
console.log(fibonacci(0));  // Output: []
console.log(fibonacci(8));  // Output: [0, 1, 1, 2, 3, 5, 8, 13]
