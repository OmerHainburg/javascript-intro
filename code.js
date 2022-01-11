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