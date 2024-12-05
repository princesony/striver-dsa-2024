 /// sorting approach 

let array_mess = [12,9,16,25] ;


//// selection sort 

function selection_sor(arr){
let length_arr = arr.length;
for(let i = 0; i < length_arr; i++){
  let min_index = i ;
  for(let j = i+1; j < length_arr; j++){
    if(arr[min_index] > arr[j]){
      min_index = j ;
    }
  }
  if(arr[i]!==arr[min_index]){

  [arr[i],arr[min_index]] = [arr[min_index], arr[i]]
  }
}
return arr
}

//  console.log("selection_sort "+selection_sor(array_mess))

function bubble_sort(arr) {
  let length_arr = arr.length;
  for (let j = 0; j < length_arr; j++) {
   for(let i = 0; i < length_arr; i++){
    if(arr[i] < arr[i+1]){
     let temp = arr[i+1]
     arr[i+1] = arr[i]
     arr[i] = temp

    }
   }
  }
  return arr
}
//  console.log("bubble_sort "+bubble_sort(array_mess))
  

function insertionSort01(arr){
  let length_arr = arr.length;
  for(let i = 1; i < length_arr; i++){
    let current = arr[i];
    let j = i-1 ;
    while(j>=0 && arr[j]>current){
     arr[j+1] = arr[j]
     j--
    }
    arr[j+1] = current ;
  }
  return arr
}

  // console.log("insertionSort01 "+insertionSort01(array_mess))


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

  // console.log(mergeSort(array_mess))
  
  function countWords(sentence) {
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
 const sentence = "my name   is prince";
 const result = countWords(sentence);  // Expected output: { my: 1, name: 4, is: 1, prince: 0 }
 console.log(result)

