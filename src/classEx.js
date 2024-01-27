var Home = /** @class */ (function () {
    function Home(street, flat) {
        this.members = [];
        this.street = street;
        this.flat = flat;
    }
    Home.prototype.getStreet = function () {
        console.log("Address: " + this.street);
    };
    Home.prototype.getFlat = function () {
        console.log("Flat: " + this.flat);
    };
    Home.prototype.addMember = function (member) {
        this.members.push(member);
    };
    Home.prototype.getMembers = function () {
        console.log(this.members);
    };
    return Home;
}());
