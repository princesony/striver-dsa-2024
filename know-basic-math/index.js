function count_digit(n){
    let count_digit = 0;
    while(n>0){
       let last_digit = n%10;
       count_digit++;
       n = Math.floor(n/10);
    }
    console.log(count_digit)
    return count_digit;

}

// count_digit(952456584123044)




function reverse(x) {
    let data_return = Math.abs(x).toString().split('').reverse().join('');
    let data = x < 0 ? -parseInt(data_return, 10) : parseInt(data_return, 10);


    if (data < -2147483648 || data > 2147483647) {
        return 0; 
    }

    return data;
};
// console.log(reverse(123));  // Output: 321
// console.log(reverse(-123)); // Output: -321
// console.log(reverse(120));  // Output: 21



function palindrome(x) {
    // Convert to string and check for palindrome
    let originalString = Math.abs(x).toString();
    let reversedString = originalString.split('').reverse().join('');

    // Compare the original and reversed strings
    if (originalString === reversedString) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

// Example usage:
// console.log(palindrome(-121)); // Output: true
// console.log(palindrome(-353)); // Output: true
// console.log(palindrome(121));  // Output: true
// console.log(palindrome(353));  // Output: true
// console.log(palindrome(-123)); // Output: false


function isArmstrongNumber(num) {
  
    const absoluteNum = Math.abs(num);

    
    const strNum = absoluteNum.toString();
    const numDigits = strNum.length;
    
    let sum = 0;
    for (let digit of strNum) {
        sum += Math.pow(parseInt(digit), numDigits);
    }
    
    if (sum === absoluteNum) {
        return num < 0 ? "negative sahi jaa rahe ho" : "sahi jaa rahe ho";
    } else {
        return "nahi jaa rahe ho";
    }
}

// console.log(isArmstrongNumber(153));   // Output: "sahi jaa rahe ho"
// console.log(isArmstrongNumber(-153));  // Output: "negative sahi jaa rahe ho"
// console.log(isArmstrongNumber(-371));  // Output: "negative sahi jaa rahe ho"
// console.log(isArmstrongNumber(-123));  // Output: "nahi jaa rahe ho"


function gcd(N1, N2) {
    function getFactors(num) {
        const factors = [];
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                factors.push(i);
            }
        }
        return factors;
    }

    const factorsN1 = getFactors(N1);
    const factorsN2 = getFactors(N2);

    const commonFactors = factorsN1.filter(factor => factorsN2.includes(factor));

    return Math.max(...commonFactors);
}

console.log(gcd(9, 12)); // Output: 3
console.log(gcd(20, 15)); // Output: 5


function getDivisors(N) {
    const divisors = [];
    for (let i = 1; i <= N; i++) {
        if (N % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

// Example usage:
console.log(getDivisors(36)); // Output: [1, 2, 3, 4, 6, 9, 12, 18, 36]
console.log(getDivisors(12)); // Output: [1, 2, 3, 4, 6, 12]

function isPrime(N) {
    if (N <= 1) return false; // Numbers less than 2 are not prime
    if (N === 2) return true;  // 2 is the only even prime number

   let i = 2; i
        if (N % i === 0) {
            return false; 
        }
    
    return true; 
}

// Example usage:
console.log(isPrime(2)); // Output: true
console.log(isPrime(10)); // Output: false
