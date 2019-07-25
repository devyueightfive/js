// const re = /^([01]+)([-+*/]{1,1})([01]+)$/g;
re = /\b/;
document.getElementById('btnClr').onclick = function () {
    document.getElementById('res').innerHTML = "";
};

document.getElementById('btn0').onclick = function () {
    document.getElementById('res').innerHTML += "0";
};

document.getElementById('btn1').onclick = function () {
    document.getElementById('res').innerHTML += "1";
};
document.getElementById('btnSum').onclick = function () {
    document.getElementById('res').innerHTML += "+";
};

document.getElementById('btnSub').onclick = function () {
    document.getElementById('res').innerHTML += "-";
};

document.getElementById('btnMul').onclick = function () {
    document.getElementById('res').innerHTML += "*";
};

document.getElementById('btnDiv').onclick = function () {
    document.getElementById('res').innerHTML += "/";
};

document.getElementById('btnEql').onclick = function () {
    let input = document.getElementById('res').innerHTML;
    let [operand1, operator,operand2] = input.split(re);
    let result = 0;
    [operand1,operand2] = [parseInt(operand1,2),parseInt(operand2, 2)];
    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "/":
            result = operand1 / operand2;
            break;
    }
    document.getElementById('res').innerHTML = result.toString(2);

};