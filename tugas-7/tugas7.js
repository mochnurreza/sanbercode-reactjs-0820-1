// soal1

class Animal {
    constructor(){
        this._name = null
        this._legs = null
        this._cold_blooded = null
    }

    get name (){
        return `${this._name}`
    }
    get legs(){
        return `${this._legs}`
    }
    get cold_blooded(){
        return `${this._cold_blooded}`
    }
    set name(name){
        this._name = `${name}`
    }
    set legs(legs){
        this._legs = `${legs}`
    }
    set cold_blooded(cold_blooded){
        this._cold_blooded = `${cold_blooded}`
    }

}

var animal = new Animal()
animal.name = "Shaun"
animal.legs = 4
animal.cold_blooded = false

console.log(animal.name)
console.log(animal.legs)
console.log(animal.cold_blooded)

class Ape {
    constructor(nama){
        this.apeName = nama 
    }
}
class Kera extends Ape {
    constructor(nama, kaki){
        super(nama)
        this._kaki = kaki;
        this._yell = yell;
    }
    get kaki(){
        return `${this._kaki}`
    }
    get yell(){
        return `${this._yell}`
    }
    set kaki(kaki){
        this._kaki = `${kaki}`
    }
    set yell(yell){
        this._yell = `${yell}`
    }
}
    var sungokong = new Ape("Kera sakti");
    sungokong.kaki = "Berkaki 2"
    sungokong.yell = "Auoooo"
    console.log(sungokong);


    class Frog {
        constructor(nama){
            this.frogName = nama
        }
    }
    class Kodok extends Frog {
        constructor(nama, kaki){
            super(nama)
            this._kaki = kaki;
            this._jump = jump;
        }
        get kaki(){
            return `${this._kaki}`
        }
        get jump(){
            return `${this._jump}`
        }
        set kaki(kaki){
            this._kaki = `${kaki}`
        }
        set jump(jump){
            this._jump = `${jump}`
        }
    }
        var kodok = new Frog("buduk");
        kodok.kaki = "Berkaki 4"
        kodok.jump = "hop-hop"
        console.log(kodok);
    

//soal2

class Clock {
    constructor({template}){
        this.template = template;
        this.timer;
    }
    render(){
        var date = new Date();

        var hours = date.getHours()
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var sec = date.getSeconds();
        if (sec <10) sec = '0' + sec;

        var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', sec);

        console.log(output)
    }
    start(){
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    }
    stop(){
        clearInterval(this.timer)
    }
}
var clock = new Clock({template: 'h:m:s'});
clock.start();
