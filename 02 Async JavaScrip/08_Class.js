class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}
 
const UserJoy = new User("joy", "joy69@gmail.com", "123123")

console.log(UserJoy.encryptPassword()); // 123123abc
console.log(UserJoy.changeUsername());  // JOY



// Same code without  use class

function User0(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User0.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User0.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const newUser01 = new User0("tea", "tea@gmail.com", "123")

console.log(newUser01.encryptPassword());
console.log(newUser01.changeUsername());



//In Class "call" keyword not "Super" keyword mostly used.


class User1 {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User1{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const newUser = new Teacher("ABCD", "ABCD12@teacher.com", "123")

newUser.logMe()
const user2 = new User1("XYZW")

newUser.logMe()

console.log(newUser instanceof User1);