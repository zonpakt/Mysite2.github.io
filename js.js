const ResultSecond = document.getElementById("result");
const Input1 = document.getElementById("input1");
const Input2 = document.getElementById("input2");
const buttonBTN = document.getElementById("submit");
const Plus = document.getElementById("plus");
const Minus = document.getElementById("minus");
const Мultiplication = document.getElementById("multiply");
const Division = document.getElementById("division");
let sum = "+";

Division.onclick = function () {
  action = "/";
};

Мultiplication.onclick = function () {
  action = "*";
};

Plus.onclick = function () {
  action = "+";
};

Minus.onclick = function () {
  action = "-";
};
function printResult(result) {
  if (result < 0) {
    ResultSecond.style.color = "red";
  }
  if (result > 0) {
    ResultSecond.style.color = "green";
  }
  ResultSecond.textContent = result;
}

buttonBTN.onclick = function (result) {
  if (action == "+") {
    const sum = Number(Input1.value) + Number(Input2.value);
    printResult(sum);
  }

  if (action == "-") {
    const sum = Number(Input1.value) - Number(Input2.value);
    printResult(sum);
  }

  if (action == "*") {
    const sum = Number(Input1.value) * Number(Input2.value);
    printResult(sum);
  }

  if (action == "/") {
    const sum = Number(Input1.value) / Number(Input2.value);
    printResult(sum);
  }
};
