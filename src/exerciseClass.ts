class Key {
  constructor(private sign: number = Math.random()) {
    this.sign = Math.random();
  }

  public getSign(): number {
    return this.sign;
  }
}

class Person {
  constructor(private key: Key) {}

  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  public comeIn(person: Person) {
    if (this.door === false) {
      throw new Error("Door is close");
    }

    this.tenants.push(person);
    console.log("Person inside");
  }

  public abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  public openDoor(key: Key) {
    if (key.getSign() !== this.key.getSign()) {
      throw new Error("Wrong key");
    }

    return (this.door = true);
  }
}

const key = new Key();

const home = new MyHouse(key);
const person1 = new Person(key);

home.openDoor(person1.getKey());
home.comeIn(person1);
