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

// // Example usage:
// let array06 = [1, 0, 2, 3, 0, 4, 0, 1];
// console.log(moveZerosToEnd(array06)); // Output: [1, 2, 3, 4, 1, 0, 0, 0]

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
     console.log(actualSum)
    return expectedSum - actualSum; // The missing number is the difference between the expected and actual sum
}

// Example usage:
// let array09 = [1, 2, 3, 5];
// console.log(findMissingNumber(array09)); // Output: 4


function countWords(sentence) {
    // Use a regular expression to remove extra spaces and split by one or more spaces
    const words = sentence.trim().replace(/\s+/g, ' ').split(' ');

    // Initialize an object to store the space counts between words
    const wordCounts = {};

    // Iterate through the words and calculate the number of spaces between each pair of words
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        
        // Initialize word count for the current word if it's the first time encountering it
        if (!wordCounts[currentWord]) {
            wordCounts[currentWord] = 0;
        }

        // If it's not the last word, calculate the space difference between current word and next word
        if (i < words.length - 1) {
            const nextWord = words[i + 1];
            // Find the starting position of the current word and the next word in the original sentence
            let currentWordEnd = sentence.indexOf(currentWord) + currentWord.length;
            let nextWordStart = sentence.indexOf(nextWord, currentWordEnd);
             console.log("next"+nextWordStart)
            // Calculate space between the current word and the next word
            let spaceCount = nextWordStart - currentWordEnd;
            
            // Update the space count in the wordCounts object
            wordCounts[currentWord] = spaceCount;
        } else {
            // For the last word, set space count to 0 (since it has no next word)
            wordCounts[currentWord] = 0;
        }
    }

    return wordCounts;
}

// Example usage
// const sentence = "my name   is prince";
// const result = countWords(sentence);  // Expected output: { my: 1, name: 4, is: 1, prince: 0 }
// console.log(result);


let data05 = [1,1,0,1,1,1]
//otput =3
function count_max(arr){
    let max1 = 0;
    let count= 0

    for (let i = 0; i < arr.length; i++) {
      
       if(arr[i]==1){
          count++;
          max1 = Math.max(max1,count)

       }else{
        count = 0
       }
        
    }
    return max1
}

// let count=count_max(data05)
// console.log(count)
  let once_repat = [1,1,2,2,3,4,4,5,5]



  function once_repat_check(arr) {
    let counts = {};  // Object to track the count of each number
    
    // Loop through the array to count occurrences
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        counts[element] = (counts[element] || 0) + 1;
    }

    // Find the element that appears only once
    for (let element in counts) {
        if (counts[element] === 1) {
            console.log(element);  // Log the element that appears only once
            return element;  // Return the element
        }
    }
}

// Example usage:

// once_repat_check(once_repat);  // Output: 3


// let data = once_repat_check(once_repat)
// console.log(data)


function findSingleNumber(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num;  // XOR each number
    }
    return result;  // The result will be the number that appears only once
}

// // Example usage:
// const nums = [4, 1, 2, 1, 2];
// console.log(findSingleNumber(nums));  // Output: 4



let once_repat01 = [1, 1, 2, 2, 3, 4, 4, 5, 5];

function once_repat_check0(arr) {
    let element;
    
    for (let o = 0; o < arr.length; o++) {
        let count = 0;
        element = arr[o];  // use arr instead of array
        
        // Count occurrences of `element` in the array
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === element) {
                count++;
            }else{
                count = 0;
            }
        }
        
        // If the count is 1, then this is the number that appears once
        if (count === 1) {
            console.log(element);  // log the element that appears only once
            return element;  // return it
        }
    }
}

// Example usage:
once_repat_check0(once_repat01);  // Output: 3





// let count_array = [2,6,5,8,11] 
// let target = 14;


// function coun_sum(array,target){
// let count = false;
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     let find_num = target-element
//     let find_index = array.indexOf(find_num)
//     if(find_index !== -1 && find_index !== i){
//        count = true
    
//     }
// }
// console.log(count)
// return count

// }

//  coun_sum(count_array,target)


function coun_sum(array, target) {
    // Iterate through the array
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      const find_num = target - element;
      // Find the index of the complement, making sure it's not the same index
      let find_index = array.indexOf(find_num);
  
      if (find_index !== -1 && find_index !== i) {
        // Return the indices of the two numbers
        console.log(`Indices: ${i}, ${find_index}`);
        return [i, find_index]; // Return indices of the pair
      }
    }
    console.log("No pair found");
    return null; // Return null if no pair is found
  }
  
//   let count_array = [2, 6, 5, 8, 11];
//   let target = 8;
  
//   coun_sum(count_array, target); // Example usage



let onece_twos_threes = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1];

function sort_0_1_2(arr) {
    let leng_th = arr.length;
    let count_0 = {
        zero: 0,
        one: 0,
        two: 0
    };

    // Count the occurrences of 0, 1, and 2
    for (let j = 0; j < leng_th; j++) {
        if (arr[j] === 0) {
            count_0.zero++;
        } else if (arr[j] === 1) {
            count_0.one++;
        } else if (arr[j] === 2) {
            count_0.two++;
        }
    }

    // Create a new sorted array based on the counts
    return [
        ...new Array(count_0.zero).fill(0),
        ...new Array(count_0.one).fill(1),
        ...new Array(count_0.two).fill(2)
    ];
}

let x = sort_0_1_2(onece_twos_threes);
console.log(x);  // Output: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2]
