//Function that returns when invoked.

var input = "Greeting"; 

function greeting(input) {
    if (input == "Greeting") {
        return `Hey There`
    }
}

console.log(input);
console.log(greeting(input));
//Function that reverses a number
var num = 12345;

function reverse(num) {
    num = num + "";
    //Split method splits a string object into an array
    //Reverse method reverses the array
    //Join Method brings all elements of the array together
    return num.split("").reverse().join("");
}

console.log("Num to reverse is: 12345");
console.log(reverse(num));

//Function that checks if the word is a palindrome

function palindrome(str) {
    //This turns the string into all lowercase
    var lowStr = str.toLowerCase();

    //This reverses the string to see if it equals to the current string
    var reverseStr = lowStr.split('').reverse().join('');

    return reverseStr === lowStr;
}

console.log("RaceCar");
console.log("The string is a Palindrome: " + palindrome("raceCar"));

//Function that returns String in alphabetical order

function alphaOrder(n) {
    return n.split('').sort().join('');
}

console.log("The alpha order of SteveJobs is: " + alphaOrder("stevejobs"));

//Function that convert a string to all lowercase 

var string = "YOU LOOK GOOD TODAY";

function changeToLowerCase(string) {
    return string.toLowerCase();
}

console.log(string);
console.log(changeToLowerCase(string));

//Function that converts a string to all uppercase

var upperString = "i u-u-uh think y-your pre-pr-pretty today..."

function changeToUpperCase(upperString) {
    return upperString.toUpperCase();
}

console.log(upperString);
console.log(changeToUpperCase(upperString));

//Function that returns the largest string in a phrase

var phrase = "Yo momma is so fat, I took a picture of her last Christmas and it's still printing.";

function longestWord(phrase) {
    //Match method will get the strings in the expression
    var array1 = phrase.match(/\w[a-z]{0,}/gi);
    var result = array1[0];
  
    //The for loop goes through the array and checks each words length
    for(var x = 1 ; x < array1.length ; x++)
    {
      if(result.length < array1[x].length)
      {
      result = array1[x];
      } 
    }

    //after the for loop is done looping it will return the longest word
    return result;
}

console.log(phrase);
console.log(longestWord(phrase));

//Function that multiplies a and b when called

function multiply(a, b) {
    return a * b;
}

var a = prompt("Enter a value for a: ");
var b = prompt("Enter a value for b: ");

console.log(multiply(a, b));

//Function that returns an array

var cars = new Array("Camaro", "Lambo", "BMW");

function arrayReturn(cars) {
    return cars;
}

console.log(arrayReturn(cars));

//Function that returns the repeated char in a String

var charStr = "lemonade";

function repeatedCharacter(str){
    for (let i = 0; i < str.length; i++){
        if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))){
            console.log(str.charAt(i));
        }
    }
}

console.log(repeatedCharacter(charStr));

//Create a function that calculates a dogs age

var dogsAge = prompt(`Input the dogs age: `);

function dogAgeConverter(age) {
    return age * 7;
}

console.log("The dogs age in human years is: " + dogsAge);
console.log("The dogs age in dog years is: " + dogAgeConverter(dogsAge));
