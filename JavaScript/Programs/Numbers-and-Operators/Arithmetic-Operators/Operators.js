let num1 = 20;
let num2 = 5;
let num3 = 6;
let num4 = 2;

let operatorDisplay = `
Addition  : ${num1} + ${num2} = ${num1+num2}
Substraction : ${num1} - ${num2} = ${num1-num2}
Multiplication : ${num1} x ${num2} = ${num1*num2}
Division : ${num1} / ${num2} = ${num1/num2}
Exponentiatoin = ${num1} ^ ${num2} = ${num1**num2}
Remainder = ${num1} % ${num2} = ${num1%num2}
Complex = ${num1} x ${num2} + ${num3} ^ ${num4} / ${num1} = ${num1*num2+num3**num4/num1}
`;
console.log(operatorDisplay);