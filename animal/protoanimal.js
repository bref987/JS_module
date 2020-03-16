function Animal(name) { //class Animal
	this.name = name;
}

Animal.prototype.getName = function getName() {
	return this.name;
}

function Cat(name) { //class Cat
	this.name = name;
}

Cat.prototype = Object.create(Animal.prototype); //prototype inheritance

Cat.prototype.meow = function meow() { // prototype method of class Cat
	console.log(`Cat ${this.getName()} is saying meow`)
}

function Dog(name) {
	this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function bark() {
	console.log(`Dog ${this.getName()} is saying bark`);
}

const cat = new Cat("Heraseeeeee");
cat.meow();

const dog = new Dog("Nishtiak");
dog.bark();
