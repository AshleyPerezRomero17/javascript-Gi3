// 1.Create a Person constructor that has three properties: name, job, and age.
// Note: A constructor is used to initialize object properties

// 2.Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".

// 3.Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".

// 4.Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that
// is passed in and a busy property that is NOT passed in and is set to true by default.
// Note: The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.

// 5.Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false.
// And give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.

// 6.Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy
// and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now."
// and "Mark would love to take on a new responsibility." if the programmer is not busy.

// 7.Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the
// programmer knows.

class Person {
    constructor(name, job, age) {
        this.name = name
        this.job = job
        this.age = age
    }

    exercise() {
        console.log("Running is fun! - said no one ever");
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}

class Programmer extends Person {
    constructor(language) {
        super();
        this.languagues = [language]
        this.busy = true
    }

    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {

        if (!this.busy) {
            return console.log("Mark would love to take on a new responsibility")
        }

        return console.log("Mark can't accept any new tasks right now.")
    }

    learnLanguage(language) {
        this.languagues.push(language)
    }

    listLanguages() {
        return console.log(this.languagues);
    }


}

let Mariela = new Programmer("JavaScript");
let Lesly = new Programmer("CSS");

Mariela.learnLanguage("CSS");
Mariela.name = "Mariela";
Mariela.job = "Software Engineer";
Mariela.age = 12;

Lesly.learnLanguage("HTML");
Lesly.name = "Lesly";
Lesly.job = "Software Engineer";
Lesly.age = 100;


Mariela.completeTask()
Lesly.acceptNewTask()

console.log("Mariela ", Mariela)
console.log("Lesly ", Lesly)