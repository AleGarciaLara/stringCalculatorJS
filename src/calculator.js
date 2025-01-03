const calculator = {
  Add(text) {
    // Empty string check
    if (text === '') {
      return 0;
    }
    let numbers;  // Declare the variable so I can use it later
    
    // Support delimiters of any length 
    if (text.startsWith('//')) {
      let delimiters = []; // I need an array because they can be more than one 
      let numbersString; // They have to be variables 

      if (text[2] === '[') {
        //Find the 'delimiter' section until \n
        const delimiterSection = text.slice(2, text.indexOf('\n'));
        //Find the content between the []
        let start = delimiterSection.indexOf('[');
        
        while(start !== -1) {
          const end = delimiterSection.indexOf(']', start);
          const delimiter = delimiterSection.slice(start + 1, end);
          delimiters.push(delimiter);
          start = delimiterSection.indexOf('[', end);
        }
        //Get the numbers after \n 
        numbersString = text.slice(text.indexOf('\n') + 1);

        //Replace delimiters with ',' 
        delimiters.forEach((delimiter) => {
          numbersString = numbersString.split(delimiter).join(',');
        });
        //Split the string and turn it into an array of numbers (optimized)
        numbers = numbersString.split('\n').join(',').split('\\n').join(',').split(',').map(Number);

      } else { 
        //Single delimiter logic (optimized)
        const delimiter = text[2];
        numbersString = text.slice(4);
        numbers = numbersString.split('\n').join(',').split('\\n').join(',').split(delimiter).map(Number);
      }
    } else {
      //Split the string and turn it into an array of numbers (optimized)
      numbers = text.split('\n').join(',').split('\\n').join(',').split(',').map(Number); 
    }
    //Create an array of negative numbers and thrown an exception 
    const negatives = numbers.filter((num) => num < 0); 
    if (negatives.length > 0) {
      throw `Exception! Negatives are not allowed: ${negatives.join(',')}`;
    }
    //Ignore numbers greater than 1000 (optimized)
    const validNums = numbers.filter((num) => num <= 1000);
    //Return the sum
    return validNums.reduce((acc, curr) => acc + curr, 0);

    
}

}
export default calculator;