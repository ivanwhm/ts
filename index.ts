class Car {
  constructor(public color: string, private year: number) {}

  public drive() {
    this.putInGear();
    this.pressPedal();
    this.turnWheel();
  }

  private putInGear() {}

  private pressPedal() {}

  private turnWheel() {}
}

const myCar = new Car('Red', 2012);
myCar.drive();

console.log(myCar.color);
