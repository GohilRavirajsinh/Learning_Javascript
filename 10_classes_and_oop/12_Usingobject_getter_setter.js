const User = {
    _email: "r@rg.com",
    _password: "abc",

    get email(){
        /*
        'this' keyword refers to the current object (the object the method was called on). 
        For example, in this getter, 'this._email' accesses the '_email' property of the specific user object.
        
        Example:
        const obj = { name: "Jinhoo", get upperName() { return this.name.toUpperCase() } };
        console.log(obj.upperName); // Output: "JINHOO"

        When you use the 'new' keyword:
        function Car(model) { this.model = model }
        const myCar = new Car("Honda") // 'this' refers to the new object created

        */
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },

    get password(){
        return `${this._password}change`
    },

    set password(value){
        this._password = value
    }
}
const user1 = Object.create(User) // by default null rehta hai
console.log(user1.password)