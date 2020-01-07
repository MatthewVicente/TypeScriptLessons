class Vehicle {
    constructor(public color: string) {}

    protected honk(): void {
        console.log('beep');
    }
}

class Car extends Vehicle {
    private drive(): void {
        console.log('vrum vrum');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car('red');
car.startDrivingProcess();
console.log(car.color);
