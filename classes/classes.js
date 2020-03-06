class Animal {

    sound = null
    name = null

    speak = () => {
        console.log(this.sound)
    }

    sayName () {
        console.log(this.name)
    } 
}

class Dog extends Animal {
    constructor (sound, name) {
        super()
        this.sound = sound
        this.name = name
    }
};

const dog1 = new Dog('bark','Buddy') 
dog1.speak()