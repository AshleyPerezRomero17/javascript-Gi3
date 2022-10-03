function cutPizzaSlices(pizzaSlices, numberOfPeople) {
    return "Each person gets " + (pizzaSlices / numberOfPeople) + " slices of pizza";
}

var sharePizza = cutPizzaSlices(12, 6);
console.log(sharePizza)