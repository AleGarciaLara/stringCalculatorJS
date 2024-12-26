const calculator = {
  Add(text) {
    // Empty string check
    if (text === '') {
      return 0;
    }
    // Add support for custom delimiter
    if (text.startsWith('//')) {
      const delimiter = text[2];
      const numbersString = text.slice(4);
      const numbers = numbersString.split(delimiter).map(Number);
      return numbers.reduce((acc, curr) => acc + curr, 0);

    }
    // Tasks simplified
    const numbers = text.split('\n').join(',').split(',').map(Number);
    return numbers.reduce((acc, curr) => acc + curr, 0);

}
}

export default calculator;