var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Key = /** @class */ (function () {
    function Key(sign) {
        this.sign = sign;
        this.sign = Math.random();
    }
    Key.prototype.getSign = function () {
        return this.sign;
    };
    return Key;
}());
var Person = /** @class */ (function () {
    function Person(key) {
        this.key = key;
    }
    Person.prototype.getKey = function () {
        return this.key;
    };
    return Person;
}());
var House = /** @class */ (function () {
    function House(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    House.prototype.comeIn = function (person) {
        if (this.door === false) {
            throw new Error("Door is close");
        }
        this.tenants.push(person);
        console.log("Person inside");
    };
    return House;
}());
var MyHouse = /** @class */ (function (_super) {
    __extends(MyHouse, _super);
    function MyHouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyHouse.prototype.openDoor = function (key) {
        if (key.getSign() !== this.key.getSign()) {
            throw new Error("Wrong key");
        }
        return (this.door = true);
    };
    return MyHouse;
}(House));
var key = new Key(3);
var home = new MyHouse(key);
var person1 = new Person(key);
home.openDoor(person1.getKey());
home.comeIn(person1);
