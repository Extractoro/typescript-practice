"use strict";
// Задайте правильні ts типи для класичних js;
let age = 50;
let name = "Max";
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => number;
callback = (a) => {
    return 100 + a;
};
// Задайте тип для змінної, в яку можна зберегти будь-яке значення.
let anything = -20;
anything = "Text";
anything = {};
// Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
// Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
let person = ["Max", 21];
/* Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
Зробіть змінну, яка може приймати або рядок, або число.
Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
Вкажіть типи для наступних функцій */
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
const page = { load: Load.LOADING };
if (page.load === Load.LOADING) {
    console.log("Loading");
}
if (page.load === Load.READY) {
    console.log("Ready");
}
let union;
let literal;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
