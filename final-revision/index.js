let mess_data = [95,85,55]

// selection sort firt i take get elemnt from start and replce it correct postion 


function selection_sort(arr){
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let min_index = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        // swap the found minimum element with the first element
        [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
    }
    return arr
}
// let res = selection_sort(mess_data)
// console.log(res)



function bubble_sort( mess_data){
    let n = mess_data.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++){
            if (mess_data[j] > mess_data[j + 1]) {
                // swap the elements
                [mess_data[j], mess_data[j + 1]] = [mess_data[j +1],mess_data[j]]
            }
        }
    }
    return mess_data
}
//  let res = bubble_sort(mess_data)
//  console.log(res)
function insertionSort(mess_data){
    let n = mess_data.length;
    for (let i = 1; i < n; i++) {
        let key = mess_data[i];
        let j = i - 1;
        // Shift elements of mess_data[0..i-1], that are greater than key
        while (j >= 0 && key < mess_data[j]) {
            mess_data[j + 1] = mess_data[j];
            j--;  // Decrement j to check the previous element
        }
        mess_data[j + 1] = key;
    }
    return mess_data;
}


// let res = insertionSort(mess_data); 
// console.log(res);  // Output: [5, 6, 11, 12, 13]

function mergeSort(data){
    if(data.length <= 1) return data;
    let mid = Math.floor(data.length / 2);
    let left = data.slice(0, mid);
    let right = data.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
    
}
function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;  // Increment i after pushing from left
        } else {
            result.push(right[j]);
            j++;  // Increment j after pushing from right
        }
    }
    result = result.concat(left.slice(i)).concat(right.slice(j));
    return result;  // Return the result array
}

//  let res = mergeSort(mess_data); 
// console.log(res);



// Quick Sort function
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: an array of length 0 or 1 is already sorted
    }

    // Select pivot (here we're using the last element as pivot)
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    
    // Partitioning the array into left (smaller) and right (larger) arrays based on the pivot
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sorting the left and right arrays, then concatenating with pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// // Example usage:
// const arr = [10, 7, 8, 9, 1, 5];
// const sortedArr = quickSort(arr);
// console.log(sortedArr); // Output: [1, 5, 7, 8, 9, 10]



// Binary Search function
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Find the middle index
        if (arr[mid] === target) {
            return mid; // Target found, return index
        }
        if (arr[mid] < target) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }
    return -1; // Target not found
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const result = binarySearch(arr, target);

console.log(result); // Output: 3 (index of 7 in the array)
