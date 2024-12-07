let data = [95,85,75]


function selection_sort(arr){
  let n = arr.length;
 for (let i = 0; i < n; i++) {
  let curret_index = i
    let j = i+1
   for ( j; j < n; j++) {
     if(arr[curret_index]>arr[j]){
          curret_index = j
     }
    
   }
   if(curret_index !==i){
    [arr[i],arr[curret_index]]=[arr[curret_index],arr[i]]
   }
  
 }
 return arr
}

// console.log(selection_sort(data))


function bubble_sort(arr){
  let n = arr.length;
  for (let i = 0; i < n-1; i++) {
   for (let j = 0; j <n-i-1 ; j++) {
     if(arr[j]>arr[j+1]){
      [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
     }
    
   }
    
  }
  return arr
}
// console.log(bubble_sort(data))


function inseration_sort(arr){
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = arr[i]
    let j = i-1;
    while(j>=0 && arr[j]>current){
      arr[j+1]=arr[j]
      j--;
    }
    arr[j+1]=current
    
  }
  return arr
}

// console.log(inseration_sort(data))





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
console.log(mergeSort(data));  // Output: [2, 3, 4, 5, 8]




