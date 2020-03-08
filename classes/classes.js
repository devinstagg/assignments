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

    get name () {
        return this.name;
      }
      set name (Scout) {
        this.name = Scout;
      }
};

const dog1 = new Dog(bark,Buddy) 
console.log(dog1)
dog1.speak()
console.log(dog1)

