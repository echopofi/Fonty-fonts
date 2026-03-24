class CarPapers {
    constructor(owner, carName, model, year, isRegistered = false, engineType, driveType) {
        this.owner = owner;
        this.carName = carName;
        this.model = model;
        this.year = year;
        this.isRegistered = isRegistered;
        this.engineType = engineType;
        this.driveType = driveType;
    }
    showParticulars() {
        return `
        Owner: ${this.owner},
        Brand: ${this.carName},
        Model: ${this.model},
        Year: ${this.year},
        isRegistered: ${this.isRegistered},
        Engine Type: ${this.engineType},
        Drive Type: ${this.driveType}
        ` 
    }
    getRegistration() {
        if (this.isRegistered === true) {
            this.isRegistered = true
            return `Your car ${this.carName} is registered.`
        }
        return `${this.carName} is not registered.`
    }


}
let hilux = new CarPapers("A'aron", "Toyota", "Hilux", "2015", true, "V6", "4WD");
let bmw = new CarPapers("Emma", "BMW", "X6", "2017", false, "V6", "AWD")

//console.log(hilux.showParticulars());
console.log(bmw.getRegistration());

class Truck extends CarPapers {
    constructor(owner, carName, model, year, isRegistered = false, engineType, driveType, maxCargoWeight, cargpType) {
        super(owner, carName, model, year, isRegistered = false, engineType, driveType)
        this.maxCargoWeight = maxCargoWeight;
        this.cargpType = cargpType;
    }
    showTruckParticulars() {
        return `
        ${this.showParticulars()},
        Max Weight: ${this.maxCargoWeight},
        Cargo Type: ${this.cargpType}`
    }
     
}
let optimus = new Truck("Biggie", "HOWO", "Optimus Pi", "2012", true, "In-line 6", "RWD", "1000kg", "Petrol" );

console.log(optimus.showTruckParticulars())
console.log(optimus.getRegistration());