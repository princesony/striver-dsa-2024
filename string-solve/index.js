function reverseWords(str) {
   
    return str.split(' ').reverse().join(' ');
  }
  
//   // Example usage:
//   let inputString = "Hello World from ChatGPT";
//   let reversedString = reverseWords(inputString);
//   console.log(reversedString);  // Output: "ChatGPT from World Hello"
  
  function isPalindrome(str) {
    // Remove spaces and convert the string to lowercase for comparison
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    
    // Check if the string is equal to its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  // Example usage:
  let inputString = "A man a plan a canal Panama";
  let isPalindromic = isPalindrome(inputString);
  console.log(isPalindromic);  // Output: true


  function removeOuterParentheses(str) {
    return str.replace(/^\(.*\)$/, '');
  }
  
  function removeOuterParentheses(str) {
    return str.replace(/^\((.*)\)$/, '$1');
  }
  
  // console.log(removeOuterParentheses("(Hello World)"));  // Output: "Hello World"
  // console.log(removeOuterParentheses("(123)"));  // Output: "123"
  

  function largestOddNumber(str) {
 /// first check only digit 
 let num_didgit = str.match(/\d+/g)
 let odd_digit = num_didgit.map((num)=>parseInt(num,10)
).filter((item)=>item%2!==0)
return Math.max.apply({},odd_digit)
  }
  
  // // Example usage:
  // let str = "abc122def45gh7ij";
  // console.log(largestOddNumber(str));  // Output: 123

  let str = ["flower","flow","flight"]

  function find_prefic(str){
    let prefix = str[0]

    for (let i = 0; i < str.length; i++) {
      
      while(str[i].indexOf(prefix)!==0){
        prefix = prefix.slice(0,str.length-1)
      }
      
    }
    return prefix
  }
  
  let prefix_01 = find_prefic(str)
  console.log(prefix_01)


  function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    // Sort both strings and compare
    return str1.split('').sort().join('') === str2.split('').sort().join('');
  }
  
  // console.log(areAnagrams("listen", "silent")); // true
  // console.log(areAnagrams("hello", "world"));   // false
  
  function sortCharactersByFrequency(str) {
    // Create a Map to store the frequency of each character
    let result = str.split("").sort().join("")
    
    // Count frequency of each character
  
    return result;
}

// console.log(sortCharactersByFrequency('abacbba'));

// function sortCharactersByFrequency(str) {
//   // Create a Map to store the frequency of each character
//   let frequencyMap = new Map();
  
//   // Count the frequency of each character
//   for (let char of str) {
//       frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
//   }

//   // Sort characters by their frequency in descending order
//   let sortedCharacters = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1]);

//   // Create the result string based on the sorted characters
//   let result = '';
//   for (let [char, freq] of sortedCharacters) {
//       result += char.repeat(freq); // Repeat the character by its frequency
//   }
//   console.log("i am ")
//   return result;
// }

// console.log(sortCharactersByFrequency('abacbba'));



function reverseWords(str) {
  // Split the string by spaces to get an array of words
  return str.split(' ').map(item=>item.split("").reverse().join('')).join()  // Split by spaces
      
}

console.log(reverseWords("Hello World"));  // Output: "olleH dlroW"
console.log(reverseWords("JavaScript is awesome"));  // Output: "tpircSavaJ si emosewa"
console.log(reverseWords("Reverse every word in a string"));  // Output: "esreveR yreve drow ni a gnirts"

