const calculator = {
  Add(text) {
    // Empty string check
    if (text === '') {
      return 0;
    }
    let numbers;  // Declare the variable so I can use it later
    
    // Support delimiters of any length 
    if (text.startsWith('//')) {
      let delimiter; // They have to be variables 
      let numbersString; // They have to be variables 

      if (text[2] === '[') {
        const start = text.indexOf('[') + 1; 
        const end = text.indexOf(']');
        delimiter = text.slice(start, end);
        numbersString = text.slice(end + 2);
      } else { 
        delimiter = text[2];
        numbersString = text.slice(4);
      }
      numbers = numbersString.split(delimiter).map(Number);
    } else {
      //Split the string and turn it into an array of numbers
      numbers = text.split('\n').join(',').split(',').map(Number); 
    }
    //Create an array of negative numbers and thrown an exception 
    const negatives = numbers.filter((num) => num < 0); 
    if (negatives.length > 0) {
      throw `Exception! Negatives are not allowed: ${negatives.join(',')}`;
    }
    //Ignore numbers greater than 1000 (optimized)
    const validNums = numbers.filter((num) => num <= 1000);
    return validNums.reduce((acc, curr) => acc + curr, 0);

    //Return the sum
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

}
export default calculator;