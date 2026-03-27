function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return `${this._email} new member`
        },
        set: function(getterValue){
            this.email = getterValue
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return `${this._password} uniq Pass`
        },
        set: function(getterValue){
            this.password = getterValue
        }
    })
}

const goku = new User("goku@gaming.com", "2353")
console.log(goku.email)
console.log(goku.password)