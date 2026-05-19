function calculate() {
      let exp = document.getElementById("expression").value;
      let operator;
      let operands;

      // Detect operator
      if (exp.includes('+')) {
        operator = '+';
      } else if (exp.includes('-')) {
        operator = '-';
      } else if (exp.includes('*')) {
        operator = '*';
      } else if (exp.includes('/')) {
        operator = '/';
      } else {
        document.getElementById("result").innerHTML = "Invalid Expression";
        return;
      }

      operands = exp.split(operator);

      let num1 = parseFloat(operands[0]);
      let num2 = parseFloat(operands[1]);

      let result;

      // Using switch statement
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;

        case '-':
          result = num1 - num2;
          break;

        case '*':
          result = num1 * num2;
          break;

        case '/':
          if (num2 === 0) {
            result = "Cannot divide by zero";
          } else {
            result = num1 / num2;
          }
          break;

        default:
          result = "Invalid Operator";
      }

      document.getElementById("result").innerHTML = "Result: " + result;
    }