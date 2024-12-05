// string problem 
let sentence = ["kutta","kutt","kut"]

function prefix(sentence){
    let prefix = sentence[0];
    for(let i = 1; i < sentence.length; i++){
        while(sentence[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, -1);
        }
    }
    return prefix;

}
// test the function
// console.log(prefix(sentence)); // output: "kut"



//   // Example usage:
//    let inputString = "Hello World from ChatGPT";
//   let returndata = reverseWords(inputString)
//   console.log(returndata)
function reverseWords(inputString){
    let words = inputString.split(' ');
    let reverse_data = []
    for (let i = words.length - 1; i >= 0; i--) {
       reverse_data.push(words[i])
    }
 
    return reverse_data.join(" ")
}


function removeOuterParentheses(str) {
    return str.replace(/^\((.*)\)$/, '$1');
  }
  
//    console.log(removeOuterParentheses("(Hello World)"));  // Output: "Hello World"
//    console.log(removeOuterParentheses("(123)"));  // Output: "123"


   function largestOddNumber(str) {
    let digit = str.match(/\d+/g)
    return Math.max(...digit.map((num)=>parseInt(num,10)).filter((item)=>item%2!==0))
     }
     
     // // Example usage:
    //  let str = "abc122def45gh7ij";
    //  console.log(largestOddNumber(str)); 
      // Output: 123



      
  function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    // Sort both strings and compare
    return str1.split('').sort().join('') === str2.split('').sort().join('');
  }
  
//    console.log(areAnagrams("listen", "silent")); // true
   

   function reverseWords(str) {
    // Split the string by spaces to get an array of words
    return str.split(' ').map(item=>item.split("").reverse().join('')).join()  // Split by spaces
        
  }
  
//   console.log(reverseWords("Hello World"));  // Output: "olleH dlroW"
//   console.log(reverseWords("JavaScript is awesome"));  // Output: "tpircSavaJ si emosewa"
//   console.log(reverseWords("Reverse every word in a string"));  // Output: "esreveR yreve drow ni a gnirts"
  
  function sortCharactersByFrequency(str) {
    // Create a Map to store the frequency of each character
    let result = str.split("").sort().join("")
    
    // Count frequency of each character
  
    return result;
}

let check_funtion= countWords("prince          soni    ramgarh")
// console.log(check_funtion)
function countWords(sentence) {
   let words = sentence.trim().replace(/\s+/g," ").split(" ")
   let wordCount = {}
   

   for (let i = 0; i < words.length; i++) {
    const current = words[i];

    if(!wordCount[current]){
        wordCount[current]=0
    }
    if (i<words.length - 1) {
        const next = words[i+1]

       let current_end = sentence.indexOf(current)+ current.length
      let next_start = sentence.indexOf(next,current_end)
      let space_countdown = next_start-current_end
   
      wordCount[current]= space_countdown

    } else {
        wordCount[current]=0
    }

   }
   return wordCount
}


let unsort =  [64, 25, 12, 22, 11]
// selection_sort(unsort)
function selection_sort(arr){
    let n = arr.length;
   for (let i = 0; i < n; i++) {
    let current = i;
    for (let j = 1; j < n; j++){
        const next = arr[j];
        if(next<arr[current]){
           current = j
        }

    }
    if(i!==current){
        [arr[i],arr[current]]=[arr[current],arr[i]]
    }

   }
   console.log(arr)
   return arr
}

function bubble_sort(arr) {
    let length_arr = arr.length;
    for (let j = 0; j < length_arr-1; j++) {
     for(let i = 0; i < length_arr-i-1; i++){
        if (arr[j] > arr[j + 1]) {
                     let temp = arr[j];
                     arr[j] = arr[j + 1];
                     arr[j + 1] = temp;
            
     }
    }
    return arr
  }
}
  let array_mess = [12,9,16,25] ;

    // console.log("bubble_sort "+bubble_sort(array_mess))

function insertionSort(arr){
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    console.log(arr)
    return arr;
}
insertionSort(array_mess)