
 // Logic Practice: 10 Problems, Pseudocode First

// ==========================================
// 1. EVEN OR ODD
// ==========================================

// Pseudocode:
// 1. Start
// 2. Create a number
// 3. Divide the number by 2 and check the remainder
// 4. If remainder is 0, print "even"
// 5. Otherwise, print "odd"

const number = 8;

if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}


// ==========================================
// 2. GRADE CALCULATOR
// ==========================================

// Pseudocode:
// 1. Start
// 2. Create a score between 0 and 100
// 3. If the score is below 0 or above 100, reject it
// 4. If score is 80 or above, print A
// 5. Otherwise, check the ranges for B, C, D, and F
// 6. Print the grade

const score = 75;

if (score < 0 || score > 100) {
    console.log("Invalid score");
} else if (score >= 80) {
    console.log("Grade: A");
} else if (score >= 70) {
    console.log("Grade: B");
} else if (score >= 60) {
    console.log("Grade: C");
} else if (score >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}


// ==========================================
// 3. TICKET PRICE
// ==========================================

// Pseudocode:
// 1. Start
// 2. Create the person's age and student status
// 3. If the person is over 65, the ticket is free
// 4. Otherwise, if the person is under 12, price is 2000 RWF
// 5. Otherwise, if the person is a student, price is 3000 RWF
// 6. Otherwise, price is 5000 RWF
// 7. Print the ticket price

const age = 20;
const isStudent = true;

let ticketPrice;

if (age > 65) {
    ticketPrice = 0;
} else if (age < 12) {
    ticketPrice = 2000;
} else if (isStudent) {
    ticketPrice = 3000;
} else {
    ticketPrice = 5000;
}

if (ticketPrice === 0) {
    console.log("Ticket price: Free");
} else {
    console.log("Ticket price:", ticketPrice, "RWF");
}


// ==========================================
// 4. DAY PLANNER
// ==========================================

// Pseudocode:
// 1. Start
// 2. Create a variable containing the day name
// 3. Use switch to check the day
// 4. Print the class activity for Monday to Friday
// 5. Print "No class" on weekends
// 6. Handle an invalid day name

const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Monday: Control Flow");
        break;

    case "Tuesday":
        console.log("Tuesday: Control Flow practice");
        break;

    case "Wednesday":
        console.log("Wednesday: Functions and Scope");
        break;

    case "Thursday":
        console.log("Thursday: JavaScript practice");
        break;

    case "Friday":
        console.log("Friday: Review and assignments");
        break;

    case "Saturday":
    case "Sunday":
        console.log("No class");
        break;

    default:
        console.log("Invalid day");
}


// ==========================================
// 5. COUNTDOWN
// ==========================================

// Pseudocode:
// 1. Start
// 2. Set the counter to 10
// 3. While the counter is greater than or equal to 1
// 4. Print the counter
// 5. Decrease the counter by 1
// 6. After the loop, print "Liftoff!"

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Liftoff!");


// ==========================================
// 6. SUM AND AVERAGE USING FOR...OF
// ==========================================

// Pseudocode:
// 1. Start
// 2. Create an array of five scores
// 3. Set sum to zero
// 4. Use for...of to visit each number
// 5. Add each number to sum
// 6. Calculate average by dividing sum by array length
// 7. Print sum and average

const scores = [45, 78, 90, 62, 88];
let sum = 0;

for (const score of scores) {
    sum += score;
}

const average = sum / scores.length;

console.log("Sum:", sum);
console.log("Average:", average);


// ==========================================
// 7. FIND THE FIRST NUMBER GREATER THAN 100
// ==========================================

// Pseudocode:
// 1. Start
// 2. Create an array of numbers
// 3. Loop through the array
// 4. If a number is greater than 100, print it
// 5. Use break to stop the loop immediately
// 6. If no number is found, print a message

const numbers = [25, 60, 95, 120, 150, 200];
let found = false;

for (const num of numbers) {
    if (num > 100) {
        console.log("First number greater than 100:", num);
        found = true;
        break;
    }
}

if (!found) {
    console.log("No number greater than 100 found");
}


// ==========================================
// 8. SKIP NEGATIVES
// ==========================================

// Pseudocode:
// 1. Start
// 2. Create an array of positive and negative numbers
// 3. Loop through each number
// 4. If the number is negative or zero, continue to the next
// 5. Otherwise, print the number

const values = [-5, 10, -3, 8, 0, 12, -1, 4];

for (const value of values) {
    if (value <= 0) {
        continue;
    }

    console.log(value);
}


// ==========================================
// 9. MULTIPLICATION TABLE OF 7
// ==========================================

// Pseudocode:
// 1. Start
// 2. Set the number to 7
// 3. Loop from 1 to 12
// 4. Multiply 7 by the counter
// 5. Print in the format "7 x counter = result"
// 6. Stop after 12

for (let i = 1; i <= 12; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}


// ==========================================
// 10. FIZZBUZZ - KIGALI VERSION
// ==========================================

// Pseudocode:
// 1. Start
// 2. Loop through numbers from 1 to 100
// 3. If a number is divisible by both 3 and 5, print "FizzBuzz"
// 4. Otherwise, if divisible by 7, print "Kigali"
// 5. Otherwise, if divisible by 3, print "Fizz"
// 6. Otherwise, if divisible by 5, print "Buzz"
// 7. Otherwise, print the number

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 7 === 0) {
        console.log("Kigali");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
