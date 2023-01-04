// // Insertion Sort Algorithm Code Below

// async function insertionSortAlgorithm(array) {
//   let chunks = document.getElementsByClassName("chunk");
//   let testTimingStart = performance.now();
//   let testTimingEnd;

//   for (let i = 1; i < array.length; i++) {
//     let key = array[i];
//     let j = i - 1;
//     while (j >= 0 && array[j] > key) {
//       array[j + 1] = array[j];
//       chunks[j + 1].style.height = array[j + 1] * 10 + "px";
//       chunks[j + 1].style.backgroundColor = "red";
//       await timeBetweenCalls(sortingSpeed);

//       for (let k = 0; k < chunks.length; k++) {
//         if (k != j + 1) {
//           chunks[k].style.backgroundColor = "aqua";
//         }
//       }
//       j = j - 1;
//     }
//     array[j + 1] = key;
//     chunks[j + 1].style.height = array[j + 1] * 10 + "px";
//     chunks[j + 1].style.backgroundColor = "lightgreen";
//     await timeBetweenCalls(sortingSpeed);
//   }

//   testTimingEnd = performance.now();
//   let totalSortTimeSeconds = testTimingEnd - testTimingStart;
//   totalSortTimeSeconds = totalSortTimeSeconds / 1000;

//   // Storing Timings Locally to Compare to Previous Sorts
//   localStorage.setItem("sortTimeInsertion", totalSortTimeSeconds.toFixed(2));

//   for (let k = 0; k < chunks.length; k++) {
//     chunks[k].style.backgroundColor = "aqua";
//   }

//   document.getElementById(
//     "timer"
//   ).innerHTML = `Previous Sort Time: ${localStorage.sortTimeInsertion} Seconds`;
//   console.log(
//     `Sort Time: ${localStorage.getItem("sortTimeInsertion")} Seconds`
//   );
//   return array;
// }
