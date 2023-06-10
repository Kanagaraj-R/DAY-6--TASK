class Person {
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }


    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setAge(age) {
        this.age = age;
    }

    setGender(gender) {
        this.gender = gender;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    getAge() {
        return this.age;
    }

    getGender() {
        return this.gender;
    }


}

// Passing the value to set
const person = new Person("Varun", "Kumar", 24, "Male");
console.log("Full Name: " + person.getFullName());   // getting the values 
console.log("Age: " + person.getAge());
console.log("Gender: " + person.getGender());

