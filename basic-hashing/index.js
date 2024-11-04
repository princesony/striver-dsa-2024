
// function countFrequencies(arr) {
//     const frequencyMap = {};

//     for (const element of arr) {
//         if (frequencyMap[element]) {
//             frequencyMap[element]++;
//         } else {
//             frequencyMap[element] = 1;
//         }
//     }

//     return frequencyMap;
// }

// // Example usage:
// const array = [1, 2, 2, 3, 1, 4, 4, 4];
// const frequencies = countFrequencies(array);
// console.time()
// console.log(frequencies);
// console.timeEnd()


function findHighLowFrequency(arr) {
    const frequencyMap = {};

    // Step 1: Count frequencies using hashing
    for (const element of arr) {
        if (frequencyMap[element]) {
            frequencyMap[element]++;
        } else {
            frequencyMap[element] = 1;
        }
    }

    // Step 2: Find the maximum and minimum frequency
    let maxFrequency = -1;
    let minFrequency = Infinity;
    let maxFrequencyElement;
    let minFrequencyElement;

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



function countCharacterFrequencies(str) {
    const frequencyMap = {};

    for (const char of str) {
        if (frequencyMap[char]) {
            frequencyMap[char]++;
        } else {
            frequencyMap[char] = 1;
        }
    }

    return frequencyMap;
}

// Example usage:
const inputString = "hello world";
const frequencies = countCharacterFrequencies(inputString);
console.log(frequencies);
