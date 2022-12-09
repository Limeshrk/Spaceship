const spaceship = {
  Fuel: 400,
  Passengers: ["John", "Steve", "Sam", "Danielle"],
  Shields: true,
  Speedometer: 0,
  listPassengers() {
    for (let i = 0; i < this.Passengers.length; i++) {
      console.log(this.Passengers[i]);
    }
  },
  addPassenger(newPassenger) {
    this.Passengers.push(newPassenger);
    console.log(newPassenger, "was added to the ship");
  },
  travel(distance) {
    console.log("Trying to travel:", distance);
    //check IF empty tank
    if (this.Fuel == 0) {
      console.log("Can't go further, tank is empty...");
    } else {
      //calculate needed fuel left after the trip
      this.Fuel = this.Fuel - distance / 2;
      //check shields
      if (this.Fuel < 30 && this.Shields == true) {
        this.Shields = false;
        console.log("Fuel is low, turning off shields... ");
      }
      //IF negative left (not enough), set doable distance and zero fuel
      if (this.Fuel < 0) {
        distance = distance - this.Fuel * -2;
        console.log("Fuel is low, can only travel:", distance);
        this.Fuel = 0;
      }
      //Do the travel and status
      this.Speedometer = this.Speedometer + distance;

      console.log("The Spaceship is at:", this.Speedometer);
      console.log("The Spaceship has:", this.Fuel, "fuel remaining");
    }
  },
};

//function for quick testing
function spaceadventure() {
  spaceship.listPassengers();
  spaceship.addPassenger("Lindsay");
  spaceship.listPassengers();
  spaceship.travel(750);
  spaceship.travel(200);
  spaceship.travel(100);
}
