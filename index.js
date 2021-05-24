// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Find all unique values in array

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [5, 6, 7, 8, 9, 10];
let unique = [];

for (let i = 0; i < array1.length; i++) {
  if (!array2.includes(array1[i])) {
    unique.push(array1[i]);
  }
  if (!array1.includes(array2[i])) {
    unique.push(array2[i]);
  }
}
console.log(unique);

// Split an array based on size

let data = [1, 2, 3, 4, 5, 6, 7];

function makeChunk(data, number) {
  let tempArr = [];
  let chunk = 0;
  for (let i = 0; i < data.length; i += number) {
    chunk = data.slice(i, i + number);
    tempArr.push(chunk);
  }
  console.log(tempArr);
}

makeChunk(data, 2);

// Remove duplicates

// let array = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 8, 23];
// let noDupe = [];
// let temp = 0;
// for (let i = 0; i < array.length; i++) {
//   if (temp == array[i]) {
//   } else {
//     noDupe.push(array[i]);
//   }
//   temp = array[i];
// }
// console.log(noDupe);

let unsorted = [3, 200, 5, 6, 2, 1, 38, 9];
let sorted = [];
let temp = 0;
// Double for loop is used to make sure each item is sorted or else it wouldn't be
// for (let i = 0; i < unsorted.length; i++) {
//   for (let j = 0; j < unsorted.length; j++) {
//     if (unsorted[j] > unsorted[j + 1]) {
//       temp = unsorted[j];
//       unsorted[j] = unsorted[j + 1];
//       unsorted[j + 1] = temp;
//     }
//   }
// }
// console.log(unsorted);

// for (let i = 0; i < unsorted.length; i++) {
//   for (let j = 0; j < unsorted.length; j++) {
//     if (unsorted[j] < unsorted[j + 1]) {
//       temp = unsorted[j];
//       unsorted[j] = unsorted[j + 1];
//       unsorted[j + 1] = temp;
//     }
//   }
// }
// console.log(unsorted);
