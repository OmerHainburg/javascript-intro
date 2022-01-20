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
//setTimeout(function() {
  //console.log("1000ms == 1 second");
//}, 1000);

//setTimeout(() => console.log("1000ms == 1 second")
//)

document.getElementById("main-header").style.background="red";
document.getElementById("main-header").style.height="100px";
document.getElementById("main-header").innerHTML="Hello Omer!Are you busy?";

document.getElementsByTagName("p")[0].style.background="green";

//document.getElementsByClassName("subheader")[1].innerHTML="Change Inner HTML";

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

//Redirect
const redirect = (a) => document.location.href = a;
document.getElementById("buttonone").addEventListener("click", redirect(a));

//Conditional OnClick
const redirect1 = () => document.location.href = "https://developer.mozilla.org/en-US/docs/Web/API/Document/location";
document.querySelector(".redirect").addEventListener("click", redirect1)

function myFunction(a) {
  document.location.href = a;
}


function redirectFunction() {
     document.location.href = ("https://developer.mozilla.org/en-US/docs/Web/API/Document/location");
 }
 function notRedirectFunction() {
  document.location.href = "";
}
 document.querySelector(".redirect") .addEventListener("click", notRedirectFunction);
 document.querySelector(".notredirect") .addEventListener("click", notRedirectFunction);

 function myFunction() {
  var x = document.getElementById("fname").value;
  document.getElementById("demo").innerHTML = x;
}


//document.getElementById("myForm").onsubmit = function() {onSubmitFunction()};
const inputField = document.getElementById("fname");

function onSubmitFunction() {

  if (inputField === "")
  {
    alert("Empty");
  }
  else{
    inputField = document.getElementById("fname").value;
    document.getElementById("demo").innerHTML = inputField;
  }
  
  document.getElementById("myForm").submit();
}

let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:
function showInfo()
{
  moreInfo.style.display ="block";  
}

eventTarget.addEventListener('click', showInfo);

readMore.addEventListener('click', showInfo);

//--------------------------//
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here
function textChange()
{
  view.innerHTML = "Hello, World!";
}
view.addEventListener('click', textChange);

function textReturn()
{
   view.innerHTML = "View";
}
view.addEventListener('click', textReturn);

view.onevent('click', textChange);

close.addEventListener('click', textReturn);

//------------Removing Event Handlers-------------------//
let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off."
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Come back tomorrow!";
  button.style.cursor = "default";

  //add your code here

}
button.removeEventListener('click', showFortune);

//---------------------Event Object Properties---------------//
let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
  event.target.style.display = "none";
  text.innerHTML = event.timeStamp;
}
share.addEventListener('click', sharePhoto);

//------------------Event Types--------------------------//
let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';

// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){
  event.target.style.background = randomColor;
}

button.addEventListener('click', colorChange);
mysteryButton.addEventListener('wheel', colorChange);


//-----------------Mouse Events------------------//
// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write your code here
function increaseWidth()
{
   itemOne.style.width = '500px';
}

itemOne.addEventListener('mouseover', increaseWidth);

function changeBackground()
{
  itemTwo.style.backgroundColor = 'green'
}

itemTwo.addEventListener('mouseup', changeBackground);

function changeText()
{
  itemThree.innerHTML = 'The mouse has left   the element';
}

itemThree.addEventListener('mouseout', changeText);

function showItem()
{
  itemFive.style.display = 'block';
}

itemFour.addEventListener('mousedown', showItem);

//------------------Keyboard Events----------------//
let ball = document.getElementById('float-circle');

// Write your code below
function up()
{
  ball.style.bottom = '250px';
}

function down()
{
  ball.style.bottom = '50px';
}

document.addEventListener('keydown', up);

document.addEventListener('keyup', down);

//-----------------Sleep Debt Calculator----------------//
const getSleepHours  = day => {
  if (day === 'monday'){
    return 8;
  } else if (day === 'tuesday') {
    return 8;
  } else if (day === 'wednesday') {
    return 8;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 8;
  } else if (day === 'sunday') {
    return 8;
  } 
 };
 
 console.log(getSleepHours('tuesday')); 
 
 //Task 5
 const getActualSleepHours = () => 
   getSleepHours('monday') + 
   getSleepHours('tuesday') + 
   getSleepHours('wednesday') +
   getSleepHours('thursday') + 
   getSleepHours('friday') + 
   getSleepHours('saturday') + 
   getSleepHours('sunday');
 
 //Function To Calculate Sleep Hours
 const getIdealSleepHours = () => {
   const idealHours = 7.5;
   return idealHours * 7;
 };
 
 //Sum Of Total Number OF Weeks Sleep
 console.log(getActualSleepHours());
 //Calculate Ideal Sleep Hours
 console.log(getIdealSleepHours());
 
 //Task 8
 const calculateSleepDebt = () => {
   //Task 9
     const actualSleepHours =      
     getActualSleepHours();
     const idealSleepHours = 
     getIdealSleepHours();
 
     //Task 10
     if (actualSleepHours === idealSleepHours)
     { console.log('Equal');
     } else if (actualSleepHours >   
       idealSleepHours)
      { console.log('Greater');
      } else { console.log('Less'); }
 };
 
 //Task 11
 calculateSleepDebt();

 

