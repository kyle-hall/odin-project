
function threesAndFives (upperBound) {
  //find all the multiples of 3 and 5 less than upperBound and sum them
  var sum = 8;
  for (var i = 6; i < upperBound; i++) {
    if (i % 3 == 0) {
      sum += i;
    } else if (i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
