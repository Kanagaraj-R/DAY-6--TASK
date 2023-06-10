class UberCalculator {
    constructor(distance, surgeMultiplier) {
        this.baseFare = 2.5; // Base fare amount
        this.costPerKilometer = 1.5; // Cost per kilometer
        this.surgeMultiplier = surgeMultiplier || 1; // Surge pricing multiplier (default is 1)
        this.distance = distance || 0; // Distance in kilometers (default is 0)
    }

    setDistance(distance) {
        this.distance = distance;
    }

    setSurgeMultiplier(surgeMultiplier) {
        this.surgeMultiplier = surgeMultiplier;
    }
 
    // function to calculate the price
    calculatePrice() {
        const totalFare = this.baseFare + this.distance * this.costPerKilometer;
        const finalFare = totalFare * this.surgeMultiplier;
        return finalFare.toFixed(2); // Return the fare rounded to 2 decimal places
    }
}

// Example usage
const calculator = new UberCalculator(10, 1.2); // creating new class object--Distance: 10 km, Surge multiplier: 1.2
const price = calculator.calculatePrice();    // invoking the function in the class
console.log("Uber Price: Rs." + price);