    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = Number(age);
            this.email = email;
        }
        toString() {
            return(`${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`);

        }
    }
    let result = new Person();
    let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
result.toString();
module.exports = Person;