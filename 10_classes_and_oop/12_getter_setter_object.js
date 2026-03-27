const User = {
    _email: 'goku@gaming.com',
    _password: '34646',

    get email() {
        return `${this._email} new member`
    },

    set email(getterValue) {
        this._email = getterValue
    },

    get password() {
        return `${this._password} uniq pass`
    },

    set password(getterValue) {
        this._password = getterValue
    }
}

const goku = Object.create(User)
console.log(goku.email)
console.log(goku.password)