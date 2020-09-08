//Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().
//You may use a for loop or the forEach method.

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  var newArray = [];
  // Only change code below this line
  this.forEach((element) => newArray.push(callback(element)));
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function (item) {
  return item * 2;
});
