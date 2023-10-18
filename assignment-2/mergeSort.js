function mergeSort(arr) {
  let middle = arr.length / 2;

  if (arr.length < 2) {
    return arr;
  } else {
    let arrayL = arr.slice(0, middle);
    let arrayR = arr.slice(middle);
    return merge(mergeSort(arrayL), mergeSort(arrayR));
  }
}

function merge(arrayL, arrayR) {
  let array = [];

  while (arrayL.length && arrayR.length) {
    if (arrayL[0] < arrayR[0]) {
      array.push(arrayL.shift());
    } else {
      array.push(arrayR.shift());
    }
  }
  return [...array, ...arrayL, ...arrayR];
}

console.log(mergeSort([3, 1, 4, 9])); // [1, 3, 4, 9]
console.log(mergeSort([3, 1, 4, 9, 7, 8, 5, 6, 10, 2])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mergeSort([14, 25, 17, 29, 36, 99, 77])); // [14, 17, 25, 29, 36, 77, 99]
