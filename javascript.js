// Primary functions add, subtract, multiply, divide
function add(n1, n2){
    return n1 + n2;
}

function subtract(n1, n2){
    return n1 - n2;
}

function multiply(n1,n2){
    return n1 * n2;
}

function divide(n1, n2){
    return n1 / n2;
}

// Operate function that takes 2nums and an operator
function operate(n1, n2, op){
    // op => 0 - add, 1 - sub, 2 - mult, 3 - divide
    switch(op){
        case 0:
            return add(n1, n2);
        case 1:
            return subtract(n1, n2);
        case 2:
            return multiply(n1, n2);
        case 3:
            return divide(n1, n2);
    }
}

function calculator(){
    const resetButton = document.querySelector('.spec-button-reset');
    const enterButton = document.querySelector('.spec-button-enter');
    const nineButton = document.querySelectorAll('.numbers-box');
    const displayBox = document.querySelector('.container');
    console.log(displayBox);
}

calculator();
