class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email(){
        return `${this._email} new member`
    }

    set email(getterValue){
        this._email = getterValue
    }

    get password(){
        return `${this._password} uniq Pass`
    }

    set password(getterValue){
        this._password = getterValue
    }
}

const goku = new User("goku@gmail.com", "235")
console.log(goku.email)
console.log(goku.password)