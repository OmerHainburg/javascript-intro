function factorial(num) {
    if (num === 0 || num === 1) {
      return num;
    }
    return num * factorial(num - 1);
  }
  
  let n = factorial(8);
  console.log(n); // 40320

  var vacationSpots = ['Omer', 'Racheal', 'Zubair']

  console.log(vacationSpots[0]);
  console.log(vacationSpots[1]);
  console.log(vacationSpots[2]);

  // Write your code below
const bobsFollowers = ['Zubair', 'Omer', 'Racheal', 'Tanvi']; 

const tinasFollowers = ['Zubair', 'Tanvi', 'Enrique'];

const mutualFollowers = [];

for(let i= 0; i < bobsFollowers.length; i++)
{
  for (let j=0; j < tinasFollowers.length; j++)
  {
   if (bobsFollowers[i] === tinasFollowers[j]) {
       mutualFollowers.push(tinasFollowers[j]);

    }
  }
}

console.log(mutualFollowers);

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while (currentCard != 'spade') {
 currentCard = cards[Math.floor(Math.random() * 4)];
 console.log(currentCard);
} 

let cupsOfSugarNeeded = 5;
let cupsAdded = 0;

do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);
 
console.log(cupsOfSugarNeeded);

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");

console.log('------Valid Or Invalid-----')
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb')
  {
    console.log("Valid --> " + userInput)
    return userInput;
  } else {
    console.log('Invalid Input!');
  }
};
getUserChoice('rock');

console.log('---------Math.Random--------')
function getComputerChoice()
{
  var r = Math.floor(Math.random() * 4);
  //console.log(r);
  switch (r)
  {
    case 0:
      return console.log(r + ' Valid -> rock');
      break;
    case 1:
      return console.log(r + ' Valid -> paper');
      break;
    case 2:
      return console.log(r + ' Valid -> scissors');
      break;
    default:
      console.log(r + ' Not Valid!');
  }
}
getComputerChoice();


console.log('-----------Winner-----------')
function determineWinner(userChoice, computerChoice)
{
  computerChoice = Math.floor(Math.random() * 4);
  if(userchoice = 'bomb')
  {
    console.log('Bomb winner');
  }
  else if (userChoice === computerChoice)
  {
    console.log('Rock Winner');
  }
  else if (userChoice === computerChoice)
  {
    console.log('Paper Winner');
  }
   else if (userChoice === computerChoice)
  {
    console.log('scissors Winner');
  }
  else
  {
    console.log("The game has been Tie!");
  }
}

determineWinner(0, 0);

console.log('---------Play Game----------')
const playGame = () => {
   const userChoice = getUserChoice('bomb');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};

playGame();

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruitItem => console.log(fruitItem));

// Iterate over fruits below
fruits.forEach(fruit => {
  console.log('I want to eat '+fruit);
});

function printGrocery(element){
  console.log(element);
}
 
fruits.forEach(printGrocery);

// Iterate over fruits below
fruits.forEach(fruit => 
console.log('I want to eat a ' +fruit));

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0];
});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
  return number / 100;
});

console.log(smallNumbers);

const randomNumbers1 = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers1 = randomNumbers1.filter(thing => { 
  return thing < 250;
});
console.log(smallNumbers1);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter
(favoriteWord => {
  return favoriteWord.length > 7;
});
console.log(longFavoriteWords);

const animals1 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals1.findIndex(thing => {
  return thing === 'elephant';
});
console.log(foundAnimal);

const startsWithS = animals.findIndex(thing => {
  return thing[0] === 's'
});

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
 console.log(newSum) // Output: 17

 const newSum1 = newNumbers.reduce(function(accumulator, currentValue){
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
})

const newSum2 = newNumbers.reduce(function(accumulator, currentValue){
  // Existing code...
}, 10)

console.log(newSum2);

const newSum3 = newNumbers.reduce(function(accumulator, currentValue){
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10)

console.log(newSum3);

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

const interestingWords = words.filter(thing => { 
  return thing.length > 5;
});
console.log(interestingWords);

console.log(interestingWords.every((word) => { 
  return word.length > 5;
} ));

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

// Write your code below

const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;

is2p2();

console.log(is2p2.name);

console.log(Math.min(9,11,55,22));
console.log(Math.max(9,11,55,22));

// Function 1
//function notify(name) {
    //console.log(`${name} is here`);
//}

const notify = (name) => {
  console.log(`${name} is here`);
}

notify('Omer');

// Function 2
setTimeout(function() {
  console.log("1000ms == 1 second");
}, 1000);

setTimeout(() => console.log("1000ms == 1 second")
)

document.getElementById("main-header").style.background="red";
document.getElementById("main-header").style.height="100px";
document.getElementById("main-header").innerHTML="Hello Omer!Are you busy?";

document.getElementsByTagName("p")[0].style.background="green";

document.getElementsByClassName("subheader")[1].innerHTML="Change Inner HTML";

document.createElement("h1").innerHTML="New h1 Element";

document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

const alerter = () => alert("Boom");

document.getElementById("main-header").addEventListener('click', alerter);

const redirect = () => location.replace("https://www.w3schools.com");



const redirect1 = () =>  document.location.href = "https://www.w3schools.com";

//function redirect1()
//{
  //document.location.href = "https://www.w3schools.com"
//}
document.getElementById("buttonone").addEventListener("click", redirect1);
