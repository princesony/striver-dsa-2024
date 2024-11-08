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

console.log()