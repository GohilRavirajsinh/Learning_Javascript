function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return `${this._email.toUpperCase()}`
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return `${this._password}addSomething`
        },
        set: function(pass){
            this._password = pass
        }
    })
}

const goku = new User("goku@dbz.com", 3454)
console.log(goku.email)
console.log(goku.password)