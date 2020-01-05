'use strict';

class Person {
  constructor(name, lastname) {
    this.name = name; // Atributo interno
    this.lastname = lastname;
  }

  get fullName() {
    return `${this.name} ${this.lastname}`;
  }
}

const Ana = new Person('Ana', 'López');
console.log(Ana.fullName);

