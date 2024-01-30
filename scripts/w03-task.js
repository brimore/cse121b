// w03-task.js

/* w03-task.js */
/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Declaration - Addition */
function add(number1, number2) {
    return number1 + number2;
  }
  
  /* Function Declaration - Add Numbers */
  function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }
  
  /* Function Expression - Subtraction */
  const subtract = function(number1, number2) {
    return number1 - number2;
  };
  
  /* Function Expression - Subtract Numbers */
  const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
  };
  
  /* Arrow Function - Multiplication */
  const multiply = (number1, number2) => number1 * number2;
  
  /* Arrow Function - Multiply Numbers */
  const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
  };
  
  /* Open Function Use - Division */
  function divide(number1, number2) {
    return number1 / number2;
  }
  
  /* Open Function Use - Divide Numbers */
  function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
  }
  
  /* Selection Structures */
  document.querySelector('#getTotal').addEventListener('click', function() {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let isMember = document.querySelector('#member').checked;
  
    if (isMember) {
      subtotal *= 0.8; // Apply 20% discount for club members
    }
  
    let total = subtotal.toFixed(2);
    document.querySelector('#total').textContent = `$ ${total}`;
  });
  
  /* Array Methods - Functional Programming */
  let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  
  document.querySelector('#array').textContent = numbersArray.join(', ');
  
  document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 === 1).join(', ');
  
  document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0).join(', ');
  
  document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number).toString();
  
  document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2).join(', ');
  
  document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2)
    .reduce((sum, number) => sum + number).toString();
  