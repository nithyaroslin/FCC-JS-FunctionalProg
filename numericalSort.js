//Sort numbers in increasing order

function ascendingOrder(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
