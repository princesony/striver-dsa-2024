// Input: n = 10
// Output: 1 2 3 4 5 6 7 8 9 10

// function something(n=0,curent=1){
//     if(curent>n){
//         return
//     }
//     console.log(curent);
//     something(n,curent+1)
// }
// something(10)


// Input:
// 5
// Output:
// GFG GFG GFG GFG GFG
function printGFG(n, count = 0) {
    // Base case: if count equals n, stop recursion
    if (count >= n) {
        return;
    }
    
    console.log("GFG"); // Print "GFG"
    count++; // Increment the count
    printGFG(n, count); // Recursive call with updated count
}

// Example usage:
printGFG(5); // Output: GFG GFG GFG GFG GFG
