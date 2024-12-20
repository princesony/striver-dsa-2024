let data = [95,95,85,44,55]


let selection_Sort = (arr)=>{
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
      if(minIndex!==i){
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
}
// console.log(selection_Sort(data));


const bubble_sort= (arr)=>{
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n-i-1 ; j++){
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        } 
    }
   
    return arr;
}
//   console.log(bubble_sort(data));


const inseration_Sort= (arr)=>{
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
    return arr;
}
//  console.log(inseration_Sort(data));



const merge_Sort= (arr)=>{
    if(arr.length<=1){
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(merge_Sort(left), merge_Sort(right));
}
const merge = (left, right) => {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        }
        else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
//console.log(merge_Sort(data));
 const quick_Sort= (arr)=>{
    if(arr.length<=1){
        return arr;
    }
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    return quick_Sort(left).concat(middle).concat(quick_Sort(right));
 }
//   console.log(quick_Sort(data));


let store= [9,5,8,5,2,9,2]

let binary_Search = (arr)=>{
    let low = 0;
    let high = arr.length - 1;
    let target = 9;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
        
    }
    return -1;
}
// console.log(binary_Search(store));

let find_data_small = [7, 12, 9, 4, 11]

function find_samll(arr){
    let min = arr[0];
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
           
            
        }

    }
    return min;

}
 console.log(find_samll(find_data_small));




