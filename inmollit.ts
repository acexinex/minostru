class Person {
  age: number;

  constructor(age: number) {
    this.age = age;
  }

  // Optionally, add methods to work with the person's age
  celebrateBirthday() {
    this.age += 1;
    console.log(`Happy Birthday! Age is now ${this.age}`);
  }
}

// Usage
const person = new Person(30);
person.celebrateBirthday(); // Increases age by 1 and logs the birthday message
