
function evenFibonacci(upperBound) {
  var previous = 2,
      beforeThat = 1,
      current = 0
      sum = 2;

  while (current < upperBound) {
    current = previous + beforeThat;
    if (current % 2 == 0) {
      sum += current;
    }
    beforeThat = previous;
    previous = current;
  }

  return sum;

}
