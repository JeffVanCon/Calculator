let operand1 = "";
let operand2 = "";
let operator = "";

function appendToDisplay(value) {
  if (!operator) {
    operand1 += value;
  } else {
    operand2 += value;
  }

  switch (value) {
    case "+":
    case "-":
    case "*":
      setOperator(value);
      break;
    default:
      document.getElementById("display").value += value;
  }
}

function setOperator(op) {
  if (operand1) {
    operator = op;
    document.getElementById("display").value += " " + op + " ";
  }
}

function calculate() {
  let result;
  switch (operator) {
    case "+":
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case "-":
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case "*":
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    default:
      result = "";
  }
  document.getElementById("display").value = result;
  operand1 = result.toString();
  operand2 = "";
  operator = "";
}

function clearDisplay() {
  operand1 = "";
  operand2 = "";
  operator = "";
  document.getElementById("display").value = "";
}
