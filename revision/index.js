 /// sorting approach 

let array_mess = [12,9,16,25] ;
  
function selection_sort(arr){
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        let small_numindex = i

        for (let j = i+1; j < n; j++) {
            if(arr[j] <arr[small_numindex]){
                small_numindex = j
            }
            
        }
     
        [arr[i],arr[small_numindex]] =[arr[small_numindex],arr[i]]
    }
    return arr
}

// let sort = selection_sort(array_mess)
// console.log(sort) 


function insertionSort(data){
    let n = data.length;
    for (let i = 1; i <n-1; i++) {
       let current = data[i] 
       // 12
       let j = i -1
       while(j>=0 && data[j]>current){
         data[j+1] =data[j]
         j--
       }
       data[j+1] = current 
        
    }
    console.log(data)
    return data

}
insertionSort(array_mess)

 function bubble_sort(arr) {
       let n = arr.length;
       for (let i = 0; i < n - 1; i++) {
         for (let j = 0; j < n - i - 1; j++)
           if (arr[j] > arr[j + 1]) {
             let temp = arr[j];
             arr[j] = arr[j + 1];
             arr[j + 1] = temp;
           }
       }
       return arr;
     }
let bubble = bubble_sort(array_mess)
console.log(bubble)
