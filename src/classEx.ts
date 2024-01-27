class Home {
  street: string;
  private members: string[] = [];
  protected flat: number;

  constructor(street: string, flat: number) {
    this.street = street;
    this.flat = flat;
  }

  public getStreet() {
    console.log("Address: " + this.street);
  }

  public getFlat() {
    console.log("Flat: " + this.flat);
  }

  public addMember(member: string) {
    this.members.push(member);
  }

  public getMembers() {
    console.log(this.members);
  }
}

const house = new Home("Pupupu", 15);
house.getStreet();
house.getFlat();
house.addMember("Anton");
house.addMember("Papa");
house.getMembers();

class StoneHome extends Home {
  constructor(street: string, flat: number) {
    super(street, flat);
  }

  public showMembers() {
    super.getMembers();
  }

  public addMember(member: string) {
    super.addMember(member);
  }
}

const house2 = new StoneHome("Rururu", 19);
console.log("----------------------------------------------------------");
house2.addMember("Max");
house2.showMembers();
