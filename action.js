//1.1 - Yell out "Who has a dog like mine?" to 15 people
//      Constant Time - Accesses 1 item in the array of people
//1.2 - Ask each of the 15 people until you find someone with the same breed.
//      Logarithmic Time - Loop will cut time in half each round


//2 - function isEven(value) {
//      if (value % 2 === 0) {
//        return true;
//      }
//      else
//           return false;
//      }
//    }
// Constant Time - The function checks only 1 value and runs a simple division to determine
//      if it's even or odd


//3 - function areYouHere(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         const el1 = arr1[i];
//         for (let j = 0; j < arr2.length; j++) {
//             const el2 = arr2[j];
//             if (el1 === el2) return true;
//         }
//     }
//     return false;
// }
// Polynomial Time - This is a nested loop. The run time will be exponentially increased 
//      based on the input


//4 - function doubleArrayValues(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] *= 2;
//     }
//     return array;
// }
// Logarithmic Time - 


//5 - function naiveSearch(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return i;
//         }
//     }
// }
// Logarithmic Time - 


//6 - function createPairs(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             console.log(arr[i] + ", " +  arr[j] );
//         }
//     }
// }
// Polynomial Time - Nested Loop


//7 - function compute(num) {
//     let result = [];
//     for (let i = 1; i <= num; i++) {

//         if (i === 1) {
//             result.push(0);
//         }
//         else if (i === 2) {
//             result.push(1);
//         }
//         else {
//             result.push(result[i - 2] + result[i - 3]);
//         }
//     }
//     return result;
// }
// Linear Time