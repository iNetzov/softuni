

function getPersons(){
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
let persons = [];
persons.push(new Person("Peter1", "Marinov1", 180, "pesho18@abv.bg"));
persons.push(new Person("Peter2", "Marinov2", 181, "pesho18@abv.bg"));
persons.push(new Person("Peter3", "Marinov3",  undefined,"pesho18@abv.bg"));
persons.push(new Person("Peter4", "Marinov4", 183, "pesho18@abv.bg"));

return persons;
}
console.log(getPersons());