// Global var
let displayBoxText = "";
const resetButton = document.querySelector('.spec-button-reset');
const enterButton = document.querySelector('.spec-button-enter');
const powerButton = document.querySelector('.spec-button-power');
const sumButton = document.querySelector('.op-button-add');
const subButton = document.querySelector('.op-button-sub');
const multButton = document.querySelector('.op-button-mult');
const divButton = document.querySelector('.op-button-div');

const displayBox = document.querySelector('.display-box');
const h2 = document.querySelector('.display-box > h2')
const botao = document.getElementsByClassName('num-button');

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

function addToDisplay(string){
    h2.textContent += string + " ";
    displayBoxText += string;
}

function clearDisplay(){
    h2.textContent = "";
    displayBoxText = "";
    resetReturn = true;
}

function enter(){
    const displayArr = displayBoxText.split(" ");
    const n1 = Number(displayArr[0]);
    const op = displayArr[1];
    const n2 = Number(displayArr[2]);
    if(displayArr.length > 3){
        alert("ERROR");
        clearDisplay()
        return;
    }
    let result = 0;
    switch(op){
        case '+':
            clearDisplay();
            addToDisplay(operate(n1, n2, 0));
            break;
        case '-':
            clearDisplay();
            addToDisplay(operate(n1, n2, 1));
            break;
        case '*':
            clearDisplay();
            addToDisplay(operate(n1, n2, 2));
            break;
        case '/':
            clearDisplay();
            addToDisplay(operate(n1, n2, 3));
            break;
    }
}

function calculator(){
    for(let i = 0; i < botao.length; i++){
        botao[i].addEventListener('click', (e) => {
            addToDisplay([botao[i].textContent]); 
        });
    }
    sumButton.addEventListener('click', (e) => addToDisplay(" + "));
    subButton.addEventListener('click', (e) => addToDisplay(" - "));
    multButton.addEventListener('click', (e) => addToDisplay(" * "));
    divButton.addEventListener('click', (e) => addToDisplay(" / "));
    enterButton.addEventListener('click', (e) => enter());
    resetButton.addEventListener('click', (e) => clearDisplay());
}

powerButton.addEventListener('click', (e) => calculator());
