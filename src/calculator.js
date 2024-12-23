const calculator = {
  //characterCount: (text) => {
    //return text.length;
  //},
  Add(text) {
    // check if the string is empty
    if (text === '') {
      return 0;
    }
    // divide the string into numbers   // turn the numbers into integers
    const numbers = text.split(',').map(Number);
    // sum (if there's only one number, return that number...if there are two, return the sum)
    if (numbers.length === 1) {
      return numbers[0];
    }
    if (numbers.length === 2) {
      return numbers[0] + numbers [1];
    }

}
}

export default calculator;