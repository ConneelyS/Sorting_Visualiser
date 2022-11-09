// Author Sam Conneely
// Declaring the variables to be used within the program
let generate_random_array_button = document.getElementById(
  "generate_random_array"
);
let sort_button = document.getElementById("sort_array");

// Setting the min and max size of the data to be stored
// in the array before the random array is generated
let minArraySize = 1;
let maxArraySize = 49;

// This will be the total number of elements in the array
let numberOfChunks = 60;
let unsorted_array = new Array(numberOfChunks);

// The lower the sortingSpeed the faster the array will be sorted.
// sortingSpeed is the wait time between async method iteration.
let sortingSpeed = 30;

// Functions
function generateRandomNumber(minimumValue, maximumValue) {
  return (
    Math.floor(Math.random() * (maximumValue - minimumValue + 1)) + minimumValue
  );
}

function generateRandomArray() {
  for (let element = 0; element < numberOfChunks; element++) {
    unsorted_array[element] = generateRandomNumber(minArraySize, maxArraySize);
  }
}

function animateArray(array) {
  for (let element = 0; element < array.length; element++) {
    let chunk = document.createElement("div");
    chunk.classList.add("chunk");
    chunk.style.height = array[element] * 10 + "px";
    array_chunks.appendChild(chunk);
  }
}

async function bubbleSortTest(array) {
  let chunks = document.getElementsByClassName("chunk");
  for (let element = 0; element < array.length; element++) {
    for (
      let elementTwo = 0;
      elementTwo < array.length - element - 1;
      elementTwo++
    ) {
      if (array[elementTwo] > array[elementTwo + 1]) {
        for (
          let elementThree = 0;
          elementThree < chunks.length;
          elementThree++
        ) {
          if (elementThree !== elementTwo && elementThree !== elementTwo + 1) {
            chunks[elementThree].style.backgroundColor = "coral";
          }
        }
        let temporary = array[elementTwo];
        array[elementTwo] = array[elementTwo + 1];
        array[elementTwo + 1] = temporary;
        chunks[elementTwo].style.height = array[elementTwo] * 10 + "px";
        chunks[elementTwo].style.backgroundColor = "white";
        chunks[elementTwo + 1].style.height = array[elementTwo + 1] * 10 + "px";
        chunks[elementTwo + 1].style.backgroundColor = "white";
        await timeBetweenCalls(sortingSpeed);
      }
    }
    await timeBetweenCalls(sortingSpeed);
  }
  return array;
}

function timeBetweenCalls(waitTime) {
  return new Promise((resolve) => setTimeout(resolve, waitTime));
}

// Adding Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  generateRandomArray();
  animateArray(unsorted_array);
});

generate_random_array.addEventListener("click", function () {
  generateRandomArray();
  array_chunks.innerHTML = "";
  animateArray(unsorted_array);
});

sort_button.addEventListener("click", function () {
  let sorted_array = bubbleSortTest(unsorted_array);
  //console.log(sorted_array);
});
