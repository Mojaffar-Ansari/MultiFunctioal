const userInput = document.getElementById('userInput');
let  expression = '';

function press(num){
    expression += num;
    userInput.value = expression;
}

function equal(){
    userInput.value = eval(expression);
    expression = '';
}

function erase(){
    // erasing one by one from right of the expression
    expression = expression.replace(expression[expression.length-1],'');
    userInput.value = expression;

    // erasing at once
    // expression = '';
    // userInput.value = expression;
}