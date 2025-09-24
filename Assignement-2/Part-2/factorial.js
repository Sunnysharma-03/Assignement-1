let number = 5;
let factorial = 1;

if (number < 0) {
    console.log("Factorial is not defined for negative numbers.");
} else {
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    console.log("The factorial of " + number + " is " + factorial);
}
