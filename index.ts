class Car {
  color: string;
  year: number;

  constructor(color: string, year: number) {
    this.color = color;
    this.year = year;
  }

  drive() {
    console.log("Vroom");
  }
}

const myCar = new Car("Red", 2012);
myCar.drive();

console.log(myCar.color, myCar.year);
