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
  