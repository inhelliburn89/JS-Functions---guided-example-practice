///Define function welcome() that will receive one argument, your name, and greet you with your name.

function sayWelcome(){
  console.log('Good afternoon, Mauricio!');
  
}

sayWelcome();

///Define a function printToTwenty() that will print the numbers from 0 to 20 to the console ( don’t forget we have to invoke/call the function to see it working )

function printToTwenty(){
  console.log('0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20');
  
}

printToTwenty();

///Define a function printNumbers() that receives one argument and prints the numbers from 0 to whatever number we pass to it as an argument.

function printNumbers(a, b, c, d){
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments[3]);
} 

printNumbers(1, 2, 3, 4);


///Define a function printArrElements(someArr) that will loop through array and print all the elements of that array. Use the following array to pass it as an argument to the function you have just defined:

let ironCities = [
  'Amsterdam',
  'Barcelona',
  'Berlin',
  'Lisbon',
  'Madrid',
  'Mexico City',
  'Miami',
  'Paris',
  'Sao Paulo'
];

function printArrElements(someArr) {
  
    for (let i = 0; i < someArr.length; i++) {
  console.log(`${someArr[i]}`);
  }
};

printArrElements(ironCities);


///Define an array of your favorite cities and pass it as an argument to the previously defined function. Invoke a function

printArrElements(ironCities);

let favCities = [
  'Amsterdam',
  'Prague',
  'Berlin',
  'Brugges',
  'San Antonio',
  'Dillon',
  'Wacken',
];
function printArrElements(favCit) {
  
    for (let i = 0; i < favCit.length; i++) {
  console.log(`${favCit[i]}`);
  }
};

printArrElements(favCities);

///Define another array of your favorite food and pass it to this function when invoking it.

let favFood = [
  'Tacos',
  'Barbacoa',
  'Pozole',
  'Sausage',
  'Rib-eye',
  'Goulash',
 
];

function printArrElements(favFood) {
  
    for (let i = 0; i < favFood.length; i++) {
  console.log(`${favFood[i]}`);
  }
};

printArrElements(favFood);

///Define a function printEvens(someArr) and use the ironCities array and print only its even elements. The output should be:

function printEvens (someArray){
  for(let i=0; i<someArray.length; i+=2){
    console.log(`${someArray[i]}`)
  }
}


printEvens(["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo"]); 


///Define a function that will receive an array as an argument and calculate a sum of all its elements. For example, if we pass the following array to that function: const prices = [5, 7.99, 9.99, 0.99, 21], it should return 44.97 as output. How would you concatenate $ sign in front of the sum?

const prices = [5, 7.99, 9.99, 0.99, 21];

function theSum(arr){
let sum = 0
for (i=0; i<arr.length; i++){
    sum += arr[i];
  
 
}
   console.log (`Total sum is ${sum}`);
}

theSum(prices);


///Define a function stringToLetters() that receives a string as an argument and returns an array of its letters. Example:

function stringToLetters(string){
  let arrayLetter = string.split("");
 
 
  console.log(arrayLetter);
}
stringToLetters("Hello");


Define a function that will:
count from 1 to 100,
on numbers divisible with 4 print “Hey”,
on numbers divisible with 6 print “There”,
on numbers divisible with both 4 and 6 print “Ironhack”, // I could not make this part work, if anyone could help me with this, thanks.
skip numbers divisible with 7,
on the number that represents your age add ! (ex. 34!).

 function countToHundrer(){
  for (let i=1; i<100; i++){
    if (i % 4 ===0) {
       console.log ("Hey");
    }
    else if (i % 6 === 0) {
       console.log ("There");
    } 
    
    else if (i % 4 === 0 && i % 6 === 0){
       console.log ("Ironhack");
      break;
    }
    else if (i % 7 === 0){
      break;
        }
      else {
  console.log (i);
}
    
  }
}
countToHundrer();


/////for my age I couldn't make it work, console crashed unless I erase the "break" commands, but by doing that, it becomes an infinite loop.

else if (i= 32){
      console.log(`${i}!`)
    }
