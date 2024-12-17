function fibonacci(n) {
  if (n < 1) {
    return [];
  }
  if (n == 1) {
    return [0];
  }
  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]); // Sum of the previous two numbers
  }
  return result;
}
let x = fibonacci(5);

console.log(x);

function findHighLowFrequency(arr) {
  const frequencyMap = {};

  // Step 1: Count frequencies using hashing
  for (const element of arr) {
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;
  }

  // Step 2: Find the maximum and minimum frequency
  let maxFrequency = -1;
  let minFrequency = Infinity;
  let maxFrequencyElement;
  let minFrequencyElement;
  console.log(frequencyMap);
  for (const [key, value] of Object.entries(frequencyMap)) {
    if (value > maxFrequency) {
      maxFrequency = value;
      maxFrequencyElement = key;
    }
    if (value < minFrequency) {
      minFrequency = value;
      minFrequencyElement = key;
    }
  }

  return [maxFrequencyElement, minFrequencyElement];
}

// Example usage:

const array = [10, 5, 10, 15, 10, 5];

const result = findHighLowFrequency(array);

console.log(result); // Outputs: [10, 15]

function reverse(x) {
  let data_return = Math.abs(x).toString().split("").reverse().join("");
  let data = x < 0 ? -parseInt(data_return, 10) : parseInt(data_return, 10);

  if (data < -2147483648 || data > 2147483647) {
    return 0;
  }

  return data;
}
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
