const arr = [1, 5, 3, 9, 2];
const largest = Math.max(...arr);
// console.log(largest); // 9



const arr1 = [1, 5, 3, 9, 2];
let largest1 = arr[0];

for (let i = 1; i < arr.length1; i++) {
  if (arr[i] > largest1) {
    largest = arr[i];
  }
}

// console.log(largest); // 9

const arr02 = [1, 5, 3, 9, 2];
//const largest02 = arr02.reduce((max, current) => (current > max ? current : max), arr[0]);
// console.log(largest02); // 9

function secondLargest(arr) {
    if (arr.length < 2) return null; // We need at least two elements to have a second largest
    
    let first = -Infinity, second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first; // Update second largest
            first = num;    // Update largest
        } else if (num > second && num !== first) {
            second = num;  // Update second largest if valid
        }
    }

    // If no second largest number exists (e.g. all elements are the same)
    return second === -Infinity ? null : second;
}

//  console.log(secondLargest(arr))
function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}
function removeDuplicates(arr) {
    return arr.reduce((acc, curr) => {
        if (!acc.includes(curr)) acc.push(curr);
        return acc;
    }, []);
}


function leftShiftArray(arr) {
    // Remove the first element using shift() and store it
    let firstElement = arr.shift();
    
    // Add the removed first element to the end of the array using push()
    arr.push(firstElement);
    
    // Return the modified array
    return arr;
}

// Example usage:
let array = [1, 2, 3, 4, 5];
console.log(leftShiftArray(array)); // Output: [2, 3, 4, 5, 1]



function rotateArray(arr, k) {
    const n = arr.length;
    // Normalize k to avoid unnecessary full rotations
    k = k % n;

    // Slice the array into two parts and concatenate them in reverse order
    const rightPart = arr.slice(n - k);
    const leftPart = arr.slice(0, n - k);
    
    return rightPart.concat(leftPart);
}

// Example usage:
// let array05 = [1, 2, 3, 4, 5, 6, 7];
// let k = 5;
// console.log(rotateArray(array05, k)); // Output: [6, 7, 1, 2, 3, 4, 5]


function moveZerosToEnd(arr) {
    let nonZeroElements = arr.filter(num => num !== 0); // Collect all non-zero elements
    let zeroCount = arr.length - nonZeroElements.length; // Count the number of zeros
    let zeros = Array(zeroCount).fill(0); // Create an array of zeros

    return nonZeroElements.concat(zeros); // Concatenate non-zero elements and zeros
}

// Example usage:
let array06 = [1, 0, 2, 3, 0, 4, 0, 1];
console.log(moveZerosToEnd(array06)); // Output: [1, 2, 3, 4, 1, 0, 0, 0]

function findIndex(arr, num) {
   
    return arr.indexOf(num);
}

// Example usage:
// let arr07 = [1, 2, 3, 4, 5];
// let num = 3;
// console.log(findIndex(arr07, num)); // Output: 2

function findUnion(arr1, arr2) {
    // Use Set to get unique values and combine the arrays
    return [...new Set([...arr1, ...arr2])];
}

// Example usage:
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [4, 5, 6, 7, 8];
// console.log(findUnion(array1, array2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

function findMissingNumber(arr) {
    let n = arr.length + 1; // Since one number is missing, the expected length is arr.length + 1
    let expectedSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to n
    let actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of elements in the array
    
    return expectedSum - actualSum; // The missing number is the difference between the expected and actual sum
}

// Example usage:
let array09 = [1, 2, 3, 5];
console.log(findMissingNumber(array09)); // Output: 4
