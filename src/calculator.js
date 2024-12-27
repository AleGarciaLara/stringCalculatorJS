const calculator = {
  Add(text) {
    // Empty string check
    if (text === '') {
      return 0;
    }
    let numbers;  // Declare the variable so I can use it later
    // Add support for custom delimiter
    if (text.startsWith('//')) {
      const delimiter = text[2]; 
      const numbersString = text.slice(4);
      const numbers = numbersString.split(delimiter).map(Number);
      return numbers.reduce((acc, curr) => acc + curr, 0);
    } else {
      numbers = text.split(',').map(Number); //Split the string and turn it into an array of numbers
    }
    //Create an array of negative numbers and thrown an exception 
    const negatives = numbers.filter((num) => num < 0); 
    if (negatives.length > 0) {
      throw `Exception: negatives not allowed: ${negatives.join(',')}`;
    }
    //Ignore numbers greater than 1000
    const giantNums = numbers.filter((num) => num > 1000);
    const validNums = numbers.filter((num) => num <= 1000);
    if (giantNums.length > 0) {
      return validNums.reduce((acc, curr) => acc + curr, 0);
    }
    //Return the sum
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

}
export default calculator;