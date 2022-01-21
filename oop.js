//class Animal{
    //run() {
      //alert('Animal Runs');
    //}
 //}

 //class Rabbit extends Animal {
   // hide() {
     // alert('Animal Hides');
    //}
 //}

 //let rabbit = new Rabbit();
 //rabbit.run();
 //rabbit.hide();

 class Student {
     constructor(name, subject, nationality){
         this._name = name;
         this._subject = subject;
         this._nationality = nationality;
     }

     call(){
         //console.log("Omer is here, He needs a hand here");

         console.log("omer " + this._nationality);
     }
 }

 const jeton = new Student
                         ("Jeton",
                          "FSWD",
                          "Italien");

const rachel = new Student
                         ("Rachel",
                          "FSWD",
                          "Australia");

const omer = new Student
                         ("Omer",
                          "FSWD",
                          "Pakistan");

const moses = new Student
                         ("Moses",
                          "FSWD",
                          "Nigeria");

console.log(jeton._name);
console.log(rachel._nationality);
console.log(omer._nationality);

console.log(rachel._subject === moses._subject);

console.log(omer._name + " is from " + omer._nationality);

omer.call();

class Prestudent extends Student {
    study() {
        console.log("I am trying to learn");
    }
}

const maria = new Prestudent("Maria", "Cybersecurity", "Spain");

maria.call();
maria.study();

//----------Introduction to Classes----------//
class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
  
  const halley = new Dog('Halley');
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console
  halley.incrementBehavior(); // Add one to behavior
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console

  //----------------Constructor---------------//
  //class Surgeon{
    //constructor(name, department){
      //this._name = name;
      //this._department = department;
    //}
  //}
  

  //-----------------Instance------------------//
  //class Surgeon {
    //constructor(name, department) {
      //this.name = name;
      //this.department = department;
    //}
  //}
  
  //const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular')
  
  //const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics')

  //console.log(surgeonRomero);

  //-----------------Methods---------------------//

  //class Surgeon {
    //constructor(name, department) {
      //this._name = name;
      //this._department = department;
      //this._remainingVacationDays = 20;
    //}
  
    //get name(){
      //return this._name;
    //}
  
    //get department(){
      //return this._department;
    //}
  
    //get remainingVacationDays(){
      //return this._remainingVacationDays;
    //}
  
    //takeVacationDays(daysOff){
      //this._remainingVacationDays -= daysOff;
      //}
  //}
  
  //const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
  //const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
  
  //const surgenRaja = new Surgeon();
  //surgenRaja.takeVacationDays(5);
  
  //console.log(surgenRaja);

  //----------------Method Calls---------------------//
  class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get department() {
      return this._department;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
  
  console.log(surgeonRomero.name);
  surgeonRomero.takeVacationDays(3);
  console.log(surgeonRomero.remainingVacationDays);

  //---------------------Inheritance II--------------------//
//   class HospitalEmployee{
//     constructor(name){
//       this._name = name;
//       this._remainingVacationDays = 20;
//     }
  
//     get name(){
//     return this._name;
//     }
  
//     get remainingVacationDays(){
//       return this._remainingVacationDays;
//     }
  
//     takeVacationDays(daysOff) {
//         this._remainingVacationDays -= daysOff;
//       }
//   }
  
//   class Doctor{
//     constructor(name, insurance)
//     {
//       this._name = name;
//       this._insurance = insurance;
//       this._remainingVacationDays = 20;
//     }
  
//     takeVacationDays(daysOff) {
//         this._remainingVacationDays -= daysOff;
//       }
//   }
  
//   class Nurse{
//     constructor(name, certification)
//     {
//       this._name = name;
//       this._certification = certification;
//       this._remainingVacationDays = 20;
//     }
  
//     takeVacationDays(daysOff) {
//         this._remainingVacationDays -= daysOff;
//       }
  
//     addCertification() {
//       }
//   }
//-----------------Inheritance III---------//
// class HospitalEmployee {
//     constructor(name) {
//       this._name = name;
//       this._remainingVacationDays = 20;
//     }
    
//     get name() {
//       return this._name;
//     }
    
//     get remainingVacationDays() {
//       return this._remainingVacationDays;
//     }
    
//     takeVacationDays(daysOff) {
//       this._remainingVacationDays -= daysOff;
//     }
//   }
  
//   class Nurse extends HospitalEmployee {
//     constructor(name, certifications)
//     {
//       super(name);
//       this._certifications = certifications;
//       this._remainingVacationDays = 20;
//     }
  
//     takeVacationDays(daysOff)
//     {
//       this._remainingVacationDays -=    daysOff;
//     }
    
//     addCertification() {}
//   }
  
//   const nurseOlynyk = 
//       new Nurse('Olynyk', ['Trauma', 'Pediatrics']); 
//   console.log(nurseOlynyk);
//-------------------Inheritance IV--------------------------//  
// class HospitalEmployee {
//     constructor(name) {
//       this._name = name;
//       this._remainingVacationDays = 20;
//     }
    
//     get name() {
//       return this._name;
//     }
    
//     get remainingVacationDays() {
//       return this._remainingVacationDays;
//     }
    
//     takeVacationDays(daysOff) {
//       this._remainingVacationDays -= daysOff;
//     }
//   }
  
//   class Nurse extends HospitalEmployee {
//    constructor(name, certifications) {
//      super(name);
//      this._certifications = certifications;
//    } 
//   }
  
//   const nurseOlynyk = new
//                       Nurse(
//                        'Olynyk',
//                        ['Trauma','Pediatrics']);
//   var remainingVacationDays = nurseOlynyk.takeVacationDays(5);
//   console.log(nurseOlynyk.remainingVacationDays);

  //----------------------Inheritance V-------------------------//
//   class HospitalEmployee {
//     constructor(name) {
//       this._name = name;
//       this._remainingVacationDays = 20;
//     }
    
//     get name() {
//       return this._name;
//     }
    
//     get remainingVacationDays() {
//       return this._remainingVacationDays;
//     }
    
//     takeVacationDays(daysOff) {
//       this._remainingVacationDays -= daysOff;
//     }
//   }
  
//   class Nurse extends HospitalEmployee {
//     constructor(name, certifications) {
//       super(name);
//       this._certifications = certifications;
//     } 
  
//     get certifications()
//     {
//       return this._certifications;
//     }
  
//     addCertification(newCertification){
//         this._certifications.push(newCertification);
//      }
//   }
  
//   const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
//   nurseOlynyk.takeVacationDays(5);
//   console.log(nurseOlynyk.remainingVacationDays);
//   nurseOlynyk.addCertification('Genetics');
//   console.log(nurseOlynyk.certifications);

  //-----------------Static Methods------------//
  class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  
    static generatePassword(){
     return Math.floor(Math.random() * 10000);
     
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    } 
    
    get certifications() {
      return this._certifications;
    }
    
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);
  
  console.log(HospitalEmployee.generatePassword());

  //---------------------Creating Object Literals------------//
  let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
  };
  console.log(fasterShip);
  //---------------------Accessing Properties----------------//
  // let spaceship = {
  //   homePlanet: 'Earth',
  //   color: 'silver',
  //   'Fuel Type': 'Turbo Fuel',
  //   numCrew: 5,
  //   flightPath: ['Venus', 'Mars', 'Saturn']
  // };
  
  // // Write your code below
  // let crewCount = spaceship.numCrew;
  // let planetArray = spaceship.flightPath;

  // console.log(crewCount);
  // console.log(planetArray);
  //------------------Bracket Notation--------------------//
  // let spaceship = {
  //   'Fuel Type' : 'Turbo Fuel',
  //   'Active Mission' : true,
  //   homePlanet : 'Earth', 
  //   numCrew: 5
  //  };
  
  // let propName =  'Active Mission';
  
  // // Write your code below
  // let isActive = spaceship['Active Mission'];
  // console.log(isActive);
  //-------------------Property Assignment-------------------//
  // let spaceship = {
  //   'Fuel Type' : 'Turbo Fuel',
  //   homePlanet : 'Earth',
  //   color: 'silver',
  //   'Secret Mission' : 'Discover life outside of Earth.'
  // };
  
  // Write your code below
  //Assign Property Value
  // spaceship.color = 'glorious gold';
  // //Add New Propert in Spaceship
  // spaceship['numEngines'] = 5;
  // //Delete
  // delete spaceship['Secret Mission'];

  //----------------------lifePhase()---------------//
  const lifePhase = age => {
    if (age < 0 || age > 140) {
        return 'This is not a valid age'
    } else if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
        return 'teen'
    } else if (age < 65) {
        return 'adult'
    } else {
        return 'senior citizen'
    }
}

console.log(lifePhase(5));

//------------------finalGrade()----------------------//
const finalGrade = (midterm, final, homework) => {
  if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
      return 'You have entered an invalid grade.'
  }
  let average = (midterm + final + homework) / 3
  if (average < 60) {
      return 'F'
  }
  else if (average < 70) {
      return 'D'
  }
  else if (average < 80) {
      return 'C'
  }
  else if (average < 90) {
      return 'B'
  } else {
      return 'A'
  }
}

//-------------reportingForDuty()-------------//
function reportingForDuty(rank, lastName)
{
  return rank + " " + lastName + " reporting for duty!";
}

console.log(reportingForDuty('Private', 'Fido'));
  
//---------------------------------------------//
const rollTheDice = () => {
  let die1 = Math.floor(Math.random() * 6 + 1)
  let die2 = Math.floor(Math.random() * 6 + 1)
  return die1 + die2
} 

//--------------Methods---------------//
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
// const alienShip = {
//   retreat() {
//     console.log(retreatMessage);
//   },
//   takeOff() {
//     console.log('Spim... Borp... Glix... Blastoff!');
//   }
// };

// alienShip.retreat();
// alienShip.takeOff();

//-------------Nested Objects----------------//
// let spaceship = {
//   passengers: [{name: 'Space Dog'}],
//   telescope: {
//     yearBuilt: 2018,
//     model: "91031-XLT",
//     focalLength: 2032 
//   },
//   crew: {
//     captain: { 
//       name: 'Sandra', 
//       degree: 'Computer Engineering', 
//       encourageTeam() { console.log('We got this!') },
//      'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
//   },
//   engine: {
//     model: "Nimbus2000"
//   },
//   nanoelectronics: {
//     computer: {
//       terabytes: 100,
//       monitors: "HD"
//     },
//     'back-up': {
//       battery: "Lithium",
//       terabytes: 50
//     }
//   }
// }; 

// let capFave = spaceship.crew.captain['favorite foods'][0];

// let firstPassenger = spaceship.passengers[0];
// console.log(firstPassenger);
//--------------Pass By Reference--------------//
// let spaceship = {
//   'Fuel Type' : 'Turbo Fuel',
//   homePlanet : 'Earth'
// };

// // Write your code below
// function greenEnergy(spaceship)
// {
//   spaceship['Fuel Type'] = 'avocado oil';
// }

// function remotelyDisable(spaceship)
// {
//   spaceship['disabled'] = true;
// }

// greenEnergy(spaceship);
// remotelyDisable(spaceship);

// console.log(spaceship);

//------------Looping Through Objects------------//
let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

// Write your code below
for (var item in spaceship.crew)
{
  console.log(`${item}: ${spaceship.crew[item].name}`)
};

for (var item in spaceship.crew)
{
  console.log(`${spaceship.crew[item].name}: ${spaceship.crew[item].degree}`)
};

//--------------------------//
const calculateWeight = (earthWeight, planet) => {
  switch (planet) {
      case 'Mercury':
          return earthWeight * .378;
      case 'Venus':
          return earthWeight * .907;
      case 'Mars':
          return earthWeight * .377;
      case 'Jupiter':
          return earthWeight * 2.36;
      case 'Saturn':
          return earthWeight * .916;
      default:
          return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  }
}

console.log(calculateWeight(100, 'Jupiter'))

//-------------------------------------------------//
const truthyOrFalsy = value => {
  if (value) {
      return true
  }
  return false
}

truthyOrFalsy('truthy');

/*
// As a function declaration:
function truthyOrFalsy(value) {
  if (value) {
      return true
  } else {
      return false
  }
}

// Using a ternary: 
const truthyOrFalsy = value => value ? true : false 
*/

//-------------numImaginaryFriends()-------------//
// Write your function here:
function numImaginaryFriends(totalFriends)
{
  return Math.ceil(totalFriends * .25);
}

// Uncomment the lines below when you're ready to try out your function
 console.log(numImaginaryFriends(10)) // Should print 5
// console.log(numImaginaryFriends(10)) // Should print 3 (2.5 rounded up!)

// We encourage you to add more function calls of your own to test your code!

//---------------sillySentence()------------//
const sillySentence = (adjective, verb, noun) => `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`

console.log(sillySentence('excited', 'love', 'functions'));

/*
// With string concatenation:
const sillySentence = (adjective, verb, noun) => 'I am so ' + adjective + ' because I ' + verb +  ' coding! Time to write some more awesome ' + noun + '!'


// As a function declaration:
function sillySentence(adjective, verb, noun) {
    return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`
}
*/

//---------------howOld()-------------//
/* 
Our solution is written as a function expression and uses string interpolation, but it would be equally acceptable to use a function declaration and/or string concatenation
*/

const howOld = (age, year) => {
  // The following two lines make it so that our function always knows the current year.
      let dateToday = new Date();
      let thisYear = dateToday.getFullYear();
  // It is totally ok if your function used the current year directly!
    
      const yearDifference = year - thisYear
      const newAge = age + yearDifference
      if (newAge > age) {
          return `You will be ${newAge} in the year ${year}`
      } else if (newAge < 0) {
          return `The year ${year} was ${-newAge} years before you were born`
      } else {
          return `You were ${newAge} in the year ${year}`
      }
  }

  //---------------------------------//
  const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    if (percentSharedDNA > 34) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA > 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA > 5) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA > 2) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA > 0) {
        return 'You are likely 3rd cousins'
    }
    return 'You are likely not related.'
}

console.log(whatRelation(34))

console.log(whatRelation(3))