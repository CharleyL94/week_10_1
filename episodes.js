// #JS Day 1 Homework

// Go through each sample code and work out what the output will be and explain what happened.

// ### Episode 1
// ```
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
}

printName();

// Console.log takes the var name = "Keith" and + to "My name is"
// My name is Kieth will print. 

// ### Episode 2
// ```
score = 5;

var result = function() {
  var score = 3;
  return score;
}

console.log(result());

// score = 5 is a global variable
// a local variable is declared in the function which overwrites the global variable
// The number three (3) will print

// ### Episode 3
// ```
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// ```
// for loop will loop through the array and stop when the index has listed through the whole loop.
// there for the array would print along with the index number

// ### Episode 4

// ```
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree )
// ```
// Global variables are declared at the top of the function.
 //The suspects would be listed, and Harvey will be suspect three as he is now declared as a local variable which overrides the above.
  //Suspect three will print out as Keith as the allSuspects method does not have access to Harveys local variable change. 
// ### Episode 5

// ```
var detective = {
    name : 'Ace Ventura',
    pet : 'monkey'
  }

var printName = function(detective) {
  return detective.name
}

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
}

console.log(detectiveInfo());

// Poirot would print as detectiveInfo is returned.

// ```

// ### Episode 6
// ```
var murderer = 'rick';

var outerFunction = function(){
  var murderer = 'marc';

  var innerFunction = function(){
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);
// ```
// The murderer is Rick would return as the outer/inner functions would not affect the outcome. And Rick is declared at the top.

// ### Episode 7 - Make up your own episode/s!

// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.