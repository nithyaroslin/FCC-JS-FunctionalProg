/*
Use the slice method in the sliceArray function to return part of the anim array 
given the provided beginSlice and endSlice indices. The function should return an array.
*/

function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line

  var newArray = anim.slice(beginSlice, endSlice);
  console.log(newArray);

  return newArray;

  // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
