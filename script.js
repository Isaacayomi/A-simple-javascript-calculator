let calculation = " "; //Variable where numbers are stored

// Function that logs the number 1 to the console
function num1(){
    calculation +=  1;
    document.getElementById("display-screen").innerText = calculation;
}

// Function that logs the number 2 to the console
function num2(){
    calculation = calculation + 2;
    // console.log(calculation)
    document.getElementById("display-screen").innerText = calculation;
}

// Function that logs the number 3 to the console
function num3(){
    calculation = calculation + 3;
    // console.log(calculation)
    document.getElementById("display-screen").innerText = calculation;
}

// Function that logs the number 4 to the console
function num4(){
    calculation = calculation + 4;
    // console.log(calculation)
    document.getElementById("display-screen").innerText = calculation;
}

// Function that logs the number 5 to the console
function num5(){
    calculation = calculation + 5;
    // console.log(calculation)
    document.getElementById("display-screen").innerText = calculation;
}

// Function that logs the number 6 to the console
function num6(){
    calculation = calculation + 6;
    // console.log(calculation)
    document.getElementById("display-screen").innerText = calculation;
}

// Function that logs the number 7 to the console
function num7(){
    calculation = calculation + 7;
    // console.log(calculation)
    document.getElementById("display-screen").innerText = calculation;
}

// Function that logs the number 8 to the console
function num8(){
    calculation = calculation + 8;
    // console.log(calculation)
    document.getElementById("display-screen").innerText = calculation;
}

// Function that logs the number 9 to the console
function num9(){
    calculation = calculation + 9;
    // console.log(calculation)
    document.getElementById("display-screen").innerText = calculation;
}

// Function that logs the number 0 to the console
function num0(){
    calculation = calculation + 0;
    // console.log(calculation)
    document.getElementById("display-screen").innerText = calculation;
}

// function that equates the entire calculation
function equalfunc(){
    calculation = eval(calculation);
    // console.log(calculation)
    document.getElementById("output-screen").innerText = calculation;
}

function addfunc(){
    calculation = calculation + " + ";
    // console.log(calculation);
    document.getElementById("display-screen").innerText = calculation;
}

function subfunc(){
    calculation = calculation + " - ";
    // console.log(calculation);
    document.getElementById("display-screen").innerText = calculation;
}

function mulfunc(){
    calculation = calculation + " * ";
    // console.log(calculation);
    document.getElementById("display-screen").innerText = calculation;
}

function divfunc(){
    calculation = calculation + " / ";
    // console.log(calculation);
    document.getElementById("display-screen").innerText = calculation;
}

function clrfunc(){
    calculation = " ";
    document.getElementById("display-screen").innerHTML = calculation;
    document.getElementById("output-screen").innerHTML = calculation;
}
