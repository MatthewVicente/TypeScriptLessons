const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMakers: string[][] = [];

// Help with inference when extracting values
const carMarker = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car:string): string => {
    return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [];
const today = new Date();
const dateOne = '2030-10-10';
