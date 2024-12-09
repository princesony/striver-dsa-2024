// function selection_sort(arr) {
//   let n = arr.length;

//   let i = 0;
//   for (i; i < n - 1; i++) {
//     let small_number = i;
//     let j = i + 1;

//     for (j; j < n; j++) {
//       if (arr[j] < arr[small_number]) small_number = j;
//     }

//     if (small_number !== i) {
//       let temp = arr[i];
//       arr[i] = arr[small_number];
//       arr[small_number] = temp;
//     }
//   }
//   return arr;
// }
// const arr = [64, 25, 12, 22, 11];
// console.log("Sorted array:", selection_sort(arr));

// function bubble_sort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++)
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//   }
//   return arr;
// }
 


function insertionSort(arr) {
  // Start from the second element (index 1), since the first element is already sorted
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];  // Get the value at index i, not the index itself 3
    
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];  // Shift element to the right
      j--;
    }

    // Insert the current element into its correct position
    arr[j + 1] = current;
  }

  return arr;
}

// // Example usage
// const arr = [5, 3, 8, 4, 2];
// console.log(insertionSort(arr));  // Output: [2, 3, 4, 5, 8]




function mergeSort(arr) {
  // Step 1: Base case (array with 1 or 0 elements is already sorted)
  if (arr.length <= 1) {
      return arr;
  }
  
  // Step 2: Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);  // Left half of the array
  const right = arr.slice(mid);    // Right half of the array

  // Step 3: Recursively sort both halves
  const sortedLeft = mergeSort(left);  
  const sortedRight = mergeSort(right);
  
  // Step 4: Merge the sorted halves
  return merge(sortedLeft,sortedRight)
}


function merge(left, right) {
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Step 5: Compare the elements and merge the two arrays
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          sortedArray.push(left[leftIndex]);
          leftIndex++;
      } else {
          sortedArray.push(right[rightIndex]);
          rightIndex++;
      }
  }

  // Step 6: If any elements are left in either array, add them
  return sortedArray.concat(left.slice(leftIndex), right.slice(rightIndex));
}
// console.log(mergeSort([2, 3, 4, 5, 8]));  // Output: [2, 3, 4, 5, 8]






let data_binary = [1,2,3,4,5,6,7,8,9]


function binary_Search(arr,target){
let lenth_arr = arr.length;
let left =0;
let right = lenth_arr-1;
while(left<=right){
  let middle = Math.floor((left+right)/2)
  
  if(arr[middle]==target){
    return middle
  }
  if (arr[left]<target) {
    left = middle+1
    
  } else {
    right = middle-1
  }
  }

  return false
}


console.log(binary_Search(data_binary,7))
 