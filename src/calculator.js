const calculator = {
  //characterCount: (text) => {
    //return text.length;
  //},
  Add(text) {
    // check if the string is empty
    if (text === '') {
      return 0;
    }
    // separates the string at new line into an array, puts it back together, splits it at commas, converts each string into numbers
    const numbers = text.split('\n').join(',').split(',').map(Number);
    // sum (if there's only one number, return that number...if there are two, return the sum)
    if (numbers.length === 1) {
      return numbers[0];
    }
    if (numbers.length === 2) {
      return numbers[0] + numbers [1];
    }
    let sum = function(n1, n2) {
      return n1 + n2;
    }
    return numbers.reduce(sum);

}
}

export default calculator;