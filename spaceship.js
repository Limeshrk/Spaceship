//Travels (fuel consumption: distance/2) */
//Stored variables for testing
// let newPassenger = Lindsay;
// let fuel = 400;
// let Passengers = [John, Steve, Sam, Danielle];
// let Shields = true;
// let Speedometer = 0;

const spaceship = {
  fuel: 400,
  passengers: [John, Steve, Sam, Danielle],
  shields: true,
  speedometer: 0,
  listPassengers: function () {
    for (let i = 0; i < Passengers.length; i++) {
      console.log(Passengers[i]);
    }
  },
  addPassenger: function (newPassenger) {
    Passengers.push(newPassenger);
    console.log(newPassenger, "was added to the ship");
  },
  travel: function (distance) {
    console.log("Trying to travel:", distance);
    if (fuel == 0) {
      console.log("Can't go further, tank is empty...");
    }
    fuel = fuel - distance / 2;
    if (fuel < 0) {
      distance = distance - fuel * -2;
      fuel = 0;
    }
    speedometer = speedometer + distance;
    if (fuel < 30) {
      shields = false;
      console.log("Fuel is low, turning off shields... ");
    }
    console.log("The Spaceship is at:", speedometer);
    console.log("The Spaceship has:", fuel, "fuel remaining");
  },
};

function spaceadventure() {
  spaceship.listPassengers();
  spaceship.addPassenger("Lindsay");
  spaceship.listPassengers();
  spaceship.travel(750);
  spaceship.travel(200);
  spaceship.travel(100);
}
