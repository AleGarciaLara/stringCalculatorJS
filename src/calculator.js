const calculator = {
  Add(text) {
    // Empty string check
    if (text === '') {
      return 0;
    }
    // Tasks simplified
    const numbers = text.split('\n').join(',').split(',').map(Number);
    return numbers.reduce((acc, curr) => acc + curr, 0);

}
}

export default calculator;