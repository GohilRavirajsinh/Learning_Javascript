class User {
    constructor(IGN){
        this.IGN = IGN
    }

    changeName(){
        console.log(`In Game Name ${this.IGN}New`)
    }

    static createId(){
        return 'uniq id ki functionality'
    }
}

const Goku = new User("Goku")
console.log(Goku.changeName())

class Maps extends User {
    constructor(mapName, size){
        super(mapName)
        this.size = size
    }
}

const newMap = new Maps("Miramar")
console.log(newMap.changeName())