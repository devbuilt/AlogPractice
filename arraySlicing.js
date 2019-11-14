//In JavaScript you can create a new array of the elements in myArray, from startIndex to endIndex (exclusive), like this:
myArray.slice(startIndex, endIndex);

// You can also get everything from startIndex onwards by just omitting endIndex:
myArray.slice(startIndex, endIndex);


// That's a bit easier to see when you save the result of the slice to a variable:

  const tailOfArray = myArray.slice(1);


//   But a bit harder to see when you don't save the result of the slice to a variable:

  return myArray.slice(1);
// Whoops, I just spent O(n) time and space!JavaScript
  
myArray.slice(1).forEach(item => {
  // Whoops, I just spent O(n) time and space!
});
// JavaScript So keep an eye out. Slice wisely.