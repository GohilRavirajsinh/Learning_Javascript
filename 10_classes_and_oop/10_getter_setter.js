class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        // 'password' is the getter property, called like: obj.password
        // '_password' is a class property (by "convention", the underscore means "private" or "for internal use")
        // Typical usage: the setter assigns to this._password and the getter returns a processed value (or the raw value).
        // Example:
        return `${this._password}AddSomePoints` // it merge password
        // return `${this._password}jinhoo`
        // return this._password.toUpperCase()
    }

    set password(pass){
        this._password = pass
    }
}

const goku = new User("goku@dbz.com", 23343)
console.log(goku.password)