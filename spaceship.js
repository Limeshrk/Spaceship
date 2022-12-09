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
    //check for empty tank
    if (this.Fuel == 0) {
      console.log("Can't go further, tank is empty...");
    } else {
      //calculate needed fuel for the trip
      this.Fuel = this.Fuel - distance / 2;
      //if NOT ENOUGH, set doable distance and zero fuel
      if (this.Fuel < 0) {
        distance = distance - this.Fuel * -2;
        this.Fuel = 0;
      }
      //Normal Trip Case
      else {
        this.Fuel = this.Fuel - distance / 2;
      }
      //Do the travel and status
      this.Speedometer = this.Speedometer + distance;
      console.log("The Spaceship is at:", this.Speedometer);
      console.log("The Spaceship has:", this.Fuel, "fuel remaining");

      //check shields after arrival
      if (this.Fuel < 30 && this.Shields == true) {
        this.Shields = false;
        console.log("Fuel is low, turning off shields... ");
      }
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
