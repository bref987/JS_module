class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  meow() {
    console.log(`Cat ${this.getName()} is saying meow`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  bark() {
    console.log(`Dog ${this.getName()} is saying bark`);
  }
}

const cat = new Cat('Norm');
cat.meow();

const dog = new Dog('Buldog');
dog.bark();
