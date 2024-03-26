function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > numberToInsert; j--) {
      if (arr[j] > numberToInsert) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}
