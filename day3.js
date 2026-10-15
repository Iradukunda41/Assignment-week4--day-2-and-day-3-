
 // Function Factory — 12 functions + tests

// ==========================================
// 1. square(n) — arrow function, implicit return
// ==========================================

const square = n => n * n;

console.log("1.", square(4));   
console.log("1.", square(7));   
console.log("1.", square(0));   


// ==========================================
// 2. isEven(n) — returns a boolean
// ==========================================

function isEven(n) {
    return n % 2 === 0;
}

console.log("2.", isEven(4));   
console.log("2.", isEven(7));   
console.log("2.", isEven(0));   


// ==========================================
// 3. celsiusToFahrenheit(c)
// ==========================================

function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

console.log("3a.", celsiusToFahrenheit(0));    
console.log("3a.", celsiusToFahrenheit(25));   
console.log("3a.", celsiusToFahrenheit(-40));  


// ==========================================
// 4. fahrenheitToCelsius(f)
// ==========================================

function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

console.log("4.", fahrenheitToCelsius(32));    
console.log("4.", fahrenheitToCelsius(77));    
console.log("4.", fahrenheitToCelsius(-40));   


// ==========================================
// 5. formatPrice(amount, currency = "RWF")
// Uses toLocaleString
// ==========================================

function formatPrice(amount, currency = "RWF") {
    return `${amount.toLocaleString("en-US")} ${currency}`;
}

console.log("5.", formatPrice(2500));              
console.log("5.", formatPrice(1500000));            
console.log("5.", formatPrice(0));                  
console.log("5.", formatPrice(2500, "USD"));        


// ==========================================
// 6. getGrade(score) — guard clause
// ==========================================

function getGrade(score) {
    if (typeof score !== "number" ||
        !Number.isFinite(score) ||
        score < 0 ||
        score > 100) {
        return "Invalid score";
    }

    if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}

console.log("6.", getGrade(85));    
console.log("6.", getGrade(65));    
console.log("6.", getGrade(49));    
console.log("6.", getGrade(101));   
console.log("6.", getGrade(-1));    


// ==========================================
// 7. max(...numbers) — without Math.max
// ==========================================

function max(...numbers) {
    if (numbers.length === 0) {
        return undefined;
    }

    let largest = numbers[0];

    for (const number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}

console.log("7.", max(3, 8, 2));        
console.log("7.", max(10, 25, 17));     
console.log("7.", max(-8, -2, -15));    
console.log("7.", max());                


// ==========================================
// 8. capitalize(word)
// ==========================================

function capitalize(word) {
    if (word.length === 0) {
        return "";
    }

    return word[0].toUpperCase() + word.slice(1);
}

console.log("8.", capitalize("kigali")); 
console.log("8.", capitalize("flora"));   
console.log("8.", capitalize(""));        


// ==========================================
// 9. countVowels(text)
// Case-insensitive
// ==========================================

function countVowels(text) {
    let count = 0;
    const vowels = "aeiou";

    for (const character of text.toLowerCase()) {
        if (vowels.includes(character)) {
            count++;
        }
    }

    return count;
}

console.log("9.", countVowels("hello"));       
console.log("9.", countVowels("EDUCATION"));   
console.log("9.", countVowels("rhythm"));      


// ==========================================
// 10. isPalindrome(word)
// ==========================================

function isPalindrome(word) {
    const normalized = word.toLowerCase();
    return normalized === normalized.split("").reverse().join("");
}

console.log("10.", isPalindrome("racecar"));  
console.log("10.", isPalindrome("hello"));    
console.log("10.", isPalindrome(""));         


// ==========================================
// 11. repeatAction(times, callback)
// ==========================================

function repeatAction(times, callback) {
    for (let i = 1; i <= times; i++) {
        callback(i);
    }
}

repeatAction(3, round => console.log("11. Round:", round));

repeatAction(2, round => console.log("11. Count:", round));

repeatAction(0, round => console.log("11. Zero:", round));



// ==========================================
// 12. createCounter(start = 0)
// Closure returning an object
// ==========================================

function createCounter(start = 0) {
    let count = start;

    return {
        increment: function () {
            count++;
            return count;
        },

        decrement: function () {
            count--;
            return count;
        },

        getValue: function () {
            return count;
        }
    };
}

const counter1 = createCounter();

console.log("12.", counter1.getValue());   
console.log("12.", counter1.increment());  
console.log("12.", counter1.increment());  
console.log("12.", counter1.decrement());  

const counter2 = createCounter(10);

console.log("12.", counter2.getValue());  
console.log("12.", counter2.decrement()); 

const counter3 = createCounter(0);

console.log("12.", counter3.getValue());  


// ==========================================
// 13. makeDiscount(percent)
// Returns a discount function
// ==========================================

function makeDiscount(percent) {
    return function (price) {
        return price - (price * percent / 100);
    };
}

const tenPercentOff = makeDiscount(10);
const twentyPercentOff = makeDiscount(20);
const fullDiscount = makeDiscount(100);

console.log("13.", tenPercentOff(1000));     
console.log("13.", twentyPercentOff(500));   
console.log("13.", fullDiscount(1000));      
