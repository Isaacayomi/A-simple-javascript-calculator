let calculation = localStorage.getItem('updatedScore'); //Variable where numbers are stored;

if (calculation === null){
    calculation = 0
};

// Function that logs the number 1 to the console
function num1() {
    calculation += 1;
    // localStorage.setItem('updatedScore' , calculation);
    document.getElementById("display-screen").innerText = calculation;
}

// Function that logs the number 2 to the console
function num2() {
    calculation = calculation + 2;
    // localStorage.setItem('updatedScore' , calculation);
    document.getElementById("display-screen").innerText = calculation;
}

// Function that logs the number 3 to the console
function num3() {
    calculation = calculation + 3;
    // localStorage.setItem('updatedScore' , calculation);
    document.getElementById("display-screen").innerText = calculation;
}

// Function that logs the number 4 to the console
function num4() {
    calculation = calculation + 4;
    localStorage.setItem('updatedScore' , calculation);
    // document.getElementById("display-screen").innerText = calculation;
}

// Function that logs the number 5 to the console
function num5() {
    calculation = calculation + 5;
    // localStorage.setItem('updatedScore' , calculation);
    document.getElementById("display-screen").innerText = calculation;
}

// Function that logs the number 6 to the console
function num6() {
    calculation = calculation + 6;
    // localStorage.setItem('updatedScore' , calculation);
    document.getElementById("display-screen").innerText = calculation;
}

// Function that logs the number 7 to the console
function num7() {
    calculation = calculation + 7;
    // localStorage.setItem('updatedScore' , calculation);
    document.getElementById("display-screen").innerText = calculation;
}

// Function that logs the number 8 to the console
function num8() {
    calculation = calculation + 8;
    // localStorage.setItem('updatedScore' , calculation);
    document.getElementById("display-screen").innerText = calculation;
}

// Function that logs the number 9 to the console
function num9() {
    calculation = calculation + 9;
    // localStorage.setItem('updatedScore' , calculation);
    document.getElementById("display-screen").innerText = calculation;
}

// Function that logs the number 0 to the console
function num0() {
    calculation = calculation + 0;
    // localStorage.setItem('updatedScore' , calculation);
    document.getElementById("display-screen").innerText = calculation;
}

// function that equates the entire calculation
function equalfunc() {
    calculation = eval(calculation);
    localStorage.setItem('updatedScore' , calculation);
    document.getElementById("output-screen").innerText = calculation;
}

function addfunc() {
    calculation = calculation + " + ";
    // localStorage.setItem('updatedScore' , calculation);
    document.getElementById("display-screen").innerText = calculation;
}

function subfunc() {
    calculation = calculation + " - ";
    // localStorage.setItem('updatedScore' , calculation);
    document.getElementById("display-screen").innerText = calculation;
}

function mulfunc() {
    calculation = calculation + " * ";
    // localStorage.setItem('updatedScore' , calculation);
    document.getElementById("display-screen").innerText = calculation;
}

function divfunc() {
    calculation = calculation + " / ";
    // localStorage.setItem('updatedScore' , calculation);
    document.getElementById("display-screen").innerText = calculation;
}

function clrfunc() {
    calculation = " ";
    document.getElementById("display-screen").innerHTML = calculation;
    document.getElementById("output-screen").innerHTML = calculation;
    localStorage.setItem('updatedScore' , calculation);
}
