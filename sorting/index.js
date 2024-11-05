function selection_sort(arr) {
  let n = arr.length;

  let i = 0;
  for (i; i < n - 1; i++) {
    let small_number = i;
    let j = i + 1;

    for (j; j < n; j++) {
      if (arr[j] < arr[small_number]) small_number = j;
    }

    if (small_number !== i) {
      let temp = arr[i];
      arr[i] = arr[small_number];
      arr[small_number] = temp;
    }
  }
  return arr;
}
const arr = [64, 25, 12, 22, 11];
console.log("Sorted array:", selection_sort(arr));

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
