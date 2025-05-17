abstract class Animal {
  public eat() {
    console.log("eating");
  }
}

class Dog extends Animal {
  public bark() {
    console.log("bark");
  }
}
class Cat extends Animal {
  public meow() {
    console.log("meow");
  }
}

const dog = new Dog();
const cat = new Cat();
// const animal = new Animal;

dog.bark();
dog.eat();
cat.meow();
cat.eat();
