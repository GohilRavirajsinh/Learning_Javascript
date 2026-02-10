# Explaination 

## Javascript me alag se constructor function nahin hota

```javascript
function car(brand){
    this.brand = brand
}
```

- ye normal function hi hota hai lekin:
- Agar ise aise call karo: Car("BMW") -> normal function call bolte hai
- Aagr aise call karen:    new Car ("BMW") -> constructor function call 
- Ye constructor ki trah behave krega: naya object banega, this Us nye object ko point karega, brand uske set hoga!

```javascript
function Car(brand, model){
    this.brand = brand;
    this.model = model;
}

Car.prototype.horn = function(){
    console.log(`${this.brand} says Beep!`)
}

const c1 = new Car("BMW", "M7"); // instance
const c2 = new Car("Audi", "R8");
```

## Explain in words:
- Car ek constructor function hai, kyunki ham use new Car() ke sath use kar rahe hai
- Har new Car() call ek naya object/instance banata hai jisme brand aur model set hote hain.
- horn Method Car.prototype pe hota hai, isliye c1 aur c2 same method share karte hain (memory efficient).

## A constructor function in Javascript is a regular function that we call with the <b>new</b> keyword to create objects.
## Inside it we use <b>this</b> to set properties on the new object, and all such objects become instances of that constructor.
## Methods that should be shared be shared across instances are usually put on ConstructorName.prototype. For Example, Function Car(){...} with const c1 = new Car().