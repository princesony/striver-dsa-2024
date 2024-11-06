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
    let current = arr[i];  // Get the value at index i, not the index itself
    
    let j = i - 1;

    // Move elements of the sorted part that are greater than current to one position ahead
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];  // Shift element to the right
      j--;
    }

    // Insert the current element into its correct position
    arr[j + 1] = current;
  }

  return arr;
}

// Example usage
const arr = [5, 3, 8, 4, 2];
console.log(insertionSort(arr));  // Output: [2, 3, 4, 5, 8]
