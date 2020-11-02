interface Driveable {
  speed: number;
  drive(): string;
}

class Car implements Driveable {
  speed = 10;

  drive(): string {
    return `Driving at ${this.speed} km/h.`;
  }
}

const myCar = new Car();

const startDriving = (vehicle: Driveable) => {
  console.log(vehicle.drive());
};

startDriving(myCar);
