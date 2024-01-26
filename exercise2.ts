// Задайте правильні ts типи для класичних js;

let age: number = 50;
let indName: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => {
  return 100 + a;
};

// Задайте тип для змінної, в яку можна зберегти будь-яке значення.

let anything: any = -20;
anything = "Text";
anything = {};

// Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.

let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}

// Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.

let person: [string, number] = ["Max", 21];

/* Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
Зробіть змінну, яка може приймати або рядок, або число.
Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
Вкажіть типи для наступних функцій */

enum Load {
  LOADING,
  READY,
}

const page = { load: Load.LOADING };

if (page.load === Load.LOADING) {
  console.log("Loading");
}

if (page.load === Load.READY) {
  console.log("Ready");
}

let union: string | number;

let literal: "enable" | "disable";

function showMessage(message: string) {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// Створіть свій тип даних на основі наявних даних.

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
