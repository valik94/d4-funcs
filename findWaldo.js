// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(array,found) {
  array.forEach(function(value,i) { //forEach is a callback function within itself
    if (value === "Waldo"){
      found(i); // execute callback
       }   
  });
}


const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


// var myArray = [123, 15, 187, 32];

// myArray.forEach(function (value, i) { //Callback function which has two arguments i - Index, Value -= Value in the Array
//     console.log(i, value);
// });

// // Outputs:
// // 0: 123
// // 1: 15
// // 2: 187
// // 3: 32
