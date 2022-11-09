// async function bubbleSort(array) {
//     let bars = document.getElementsByClassName("bar");
//     for (let i = 0; i < array.length; i++) {
//       for (let j = 0; j < array.length - i - 1; j++) {
//         if (array[j] > array[j + 1]) {
//           for (let k = 0; k < bars.length; k++) {
//             if (k !== j && k !== j + 1) {
//               bars[k].style.backgroundColor = "coral";
//             }
//           }
//           let temp = array[j];
//           array[j] = array[j + 1];
//           array[j + 1] = temp;
//           bars[j].style.height = array[j] * 10 + "px";
//           bars[j].style.backgroundColor = "lightgreen";
//           bars[j + 1].style.height = array[j + 1] * 10 + "px";
//           bars[j + 1].style.backgroundColor = "lightgreen";
//           await sleep(50);
//         }
//       }
//       await sleep(50);
//     }
//     return array;
//   }
