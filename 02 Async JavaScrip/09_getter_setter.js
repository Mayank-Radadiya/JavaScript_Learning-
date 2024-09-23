class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    } //Override the email value

    get password(){
        return `${this._password} ABC`
    }

    set password(value){
        this._password = value
    }
}

const NewUser = new User("ghatgpt.ai", "AB12")
console.log(NewUser.email);
console.log(NewUser.password);


// in Object

const UserInfo = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const user1 = Object.create(UserInfo)
console.log(user1.email);