function User(name, ssn) {
    var pii = {
        Name: name,
        SSN: ssn
    }

    getUserName() {
        return pii.Name;
    }
}

var user = new User("Ash", "888888");
console.log(user.getUserName());