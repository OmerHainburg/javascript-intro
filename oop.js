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
  class Surgeon {
    constructor(name, department) {
      this.name = name;
      this.department = department;
    }
  }
  
  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular')
  
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics')

  console.log(surgeonRomero);
  
