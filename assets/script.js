function checkNums() {

    if ( !firstNumElem.value.length ) {
        errorMessages.push("You should give me first number");
    }
    if ( !secondNumElem.value.length ) {
        errorMessages.push("You should give me second number");
    }
    showErrors();
}
function checkDivision() {
    if ( secondNumElem.value === "0" ) {
        errorMessages.push("Division by zero!");
        resultElem.value = "";
        secondNumElem.style.color = "red";
        showErrors();
    }
}

let sum = () => {
    if ( errorMessages.length ) return;
    resultElem.value = 
    Number(firstNumElem.value) + 
    Number(secondNumElem.value);
}

let mult = () => {
    if ( errorMessages.length ) return;
    resultElem.value = 
    Number(firstNumElem.value) *
    Number(secondNumElem.value);

}
let division = () => {
    if ( errorMessages.length ) return;
    resultElem.value = 
    Number(firstNumElem.value) /
    Number(secondNumElem.value);

};
let subtr = () => {
    if ( errorMessages.length ) return;
    resultElem.value = 
    Number(firstNumElem.value) -
    Number(secondNumElem.value);

};

let clearCalc = () => {
    resultElem.value = "";
    firstNumElem.value = "";
    secondNumElem.value = "";  
    removeErrors();
}

let showErrors = () => {
    errorMessageBlock.style.display = ( errorMessages.length ) ? "" : "none";
    errorMessageBlock.innerHTML = ( errorMessages.length ) ? errorMessages.join('<br>') : "";
    resultElem.value = ( errorMessages.length ) ? "" : resultElem.value;
}

let removeErrors = () => {
    errorMessages = [];
    errorMessageBlock.style.display = "none";
    errorMessageBlock.innerHTML = "";
    secondNumElem.style.color = "black";
}

let firstNumElem = document.getElementById("calculator__first-num");
let secondNumElem = document.getElementById("calculator__second-num");
let resultElem = document.getElementById("calculator__result");

let errorMessageBlock = document.getElementById("errorMessages");
errorMessageBlock.style.display = "none";

let errorMessages = [];

let sumButton = document.getElementById("sum");
sumButton.addEventListener("click", checkNums);
let subtrButton = document.getElementById("subtr");
subtrButton.addEventListener("click", checkNums);
let multButton = document.getElementById("mult");
multButton.addEventListener("click", checkNums);
let divisionButton = document.getElementById("division");
divisionButton.addEventListener("click", checkNums);

divisionButton.addEventListener("click", checkDivision);

sumButton.addEventListener("click", sum);
subtrButton.addEventListener("click", subtr);
divisionButton.addEventListener("click", division);
multButton.addEventListener("click", mult);

firstNumElem.addEventListener("click", removeErrors );
secondNumElem.addEventListener("click", removeErrors ); 