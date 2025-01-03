import calculator from './calculator.js';

document.addEventListener("DOMContentLoaded", function(){
  const textArea = document.querySelector('textarea[name="user-input"]');
  const showCharCount = document.querySelector('p[name="result"]');
  const sumButton = document.getElementById('sum');

    sumButton.addEventListener('click', function(){
      const text = textArea.value
      const count = calculator.Add(text);  
      showCharCount.textContent = `Result: ${count}`
    })
  });

