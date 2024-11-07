// Input: n = 10
// Output: 1 2 3 4 5 6 7 8 9 10

// function something(n=0,curent=1){
//     if(curent>n){
//         return
//     }
//     console.log(curent);
//     something(n,curent+1)
// }
// something(10)


// Input:
// 5
// Output:
// GFG GFG GFG GFG GFG
function printGFG(n, count = 0) {
    // Base case: if count equals n, stop recursion
    if (count >= n) {
        return;
    }
    
    console.log("GFG"); // Print "GFG"
    count++; // Increment the count
    printGFG(n, count); // Recursive call with updated count
}

// Example usage:
// printGFG(5); // Output: GFG GFG GFG GFG GFG


// Input: n = 5
// Output: 225
// Explanation: 13 + 23 + 33 + 43 + 53 = 225
function sum_num(n,current=1 ,sum =0){
 if(current>n){
    console.log(sum)
    return current ;
 }
 let cube = Math.pow(current,3)
 sum = sum + cube
 current = current + 1
 return sum_num(n,current,sum)
 
}
// sum_num(784)


// Input: n = 5
// Output: 120
// Explanation: 5! = 5 × 4 × 3 × 2 ×
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
        }
        return n * factorial(n - 1);
        }


// let data =  factorial(5)
// console.log(data)



function reverseArray(arr, start, end) {
    // Base case: if start index is greater than or equal to end index, return
    if (start >= end) {
        return;
    }

    // Swap elements at start and end
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // Recursive call with next positions
    reverseArray(arr, start + 1, end - 1);
}

// Example usage
// const arr = [5, 4, 3, 2, 1];
// reverseArray(arr, 0, arr.length - 1);
// console.log(arr); // Output: [1, 2, 3, 4, 5]



function isPalindrome(str) {
    // Remove spaces and convert to lowercase for comparison
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');

    // Check if the original cleaned string is the same as the reversed one
    return cleanedStr === reversedStr ? "Palindrome" : "Not Palindrome";
}

// // Example usage
// console.log(isPalindrome("ABCDCBA"));        // Output: Palindrome
// console.log(isPalindrome("ABCDCBA U ABCDCBA")); // Output: Not Palindrome


function fibonacciIterative(n) {
    if (n <= 0) return []; // Return empty array for non-positive input
    if (n === 1) return [0]; // Fibonacci sequence starts with 0
    if (n === 2) return [0, 1]; // First two Fibonacci numbers

    const fibSequence = [0, 1]; // Start with the first two Fibonacci numbers
    for (let i = 2; i < n; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2]; // Next Fibonacci number
    }
    return fibSequence;
}

// Example usage
console.log(fibonacciIterative(3)); // Output: [0, 1, 1, 2, 3]

