var a = 5;
var b = 3;

function getErrors()
{
    try {
        if (a < b) {
            console.log("Right Answer");            
        }
        else {
            throw ("Wrong Answer");
        }
    } catch (e) {
        console.log("Error: " + e);
    }
}

getErrors();

//Convert number to reversed array of digits
function digitize(n) {
  //code here
  console.log (String(n)
               .split("")
               .reverse()
               .map(Number));
}
digitize(7654321);

//Reversed Strings
function solution(str){
  console.log(str
            .split("")
            .reverse()
            .join(""));
}
solution("Omer");

//Double String
function doubleChar(str) {
    // Your code here
    let string =  str.replace(/(.)/g, "$1$1");
    console.log(string);
  }
  
  doubleChar("String");

//Find Word in Whole Sentence
function spEng(sentence){
    //write your code here
      let text = sentence.toLowerCase().includes("English".toLowerCase());
      console.log(text);
    }
    
    spEng("Omernglishgh");

    //Smash Words In Sentence
    function smash (words) {
      //console.log(words);
      console.log(words.join(' '));
   };
   smash(['hello', 'world', 'this', 'is', 'great']);

   //Sum of Multiples
   function sumMul(n,m){
    if (n >= m) return "INVALID";
   
   var sum = 0;
     for (var i = n; i < m; i+=n) {
       sum += i;
     }
     console.log(sum);
   }
   
   sumMul(3, 9);
   

   function hero(bullets, dragons){
    //Get Coding!
    if (bullets / 2 >= dragons) 
    {
      console.log(true); 
     }else {
      console.log(false)};
    }
    
    hero(4, 2);

    //Inlcude Array
    function check(a,x){
      return a.includes(x);
    };

    check([1,2,3], [6,4,5]);

    //Check Age Difference
    function twiceAsOld(dadYearsOld, sonYearsOld) {
      //return Math.abs(dadYearsOld - 2 * sonYearsOld);
      console.log(Math.abs(dadYearsOld - 2 * sonYearsOld));
    }

    twiceAsOld(52, 24);

    //Write a function that accepts two arguments: an array/list of integers and another integer (n).

    //Determine the number of times where two integers in the array have a difference of n.

    const intDiff = (arr, n) => {
      let count = 0;
      for(let i=1; i<arr.length; i++)
        for(let j=0; j<i; j++)
            if (Math.abs(arr[i]-arr[j]) === n) count++;
      return count;
    }

    intDiff([1, 1, 5, 6, 9, 16, 27], n=6);

    //

    function solve(nums, div) {
      return nums.map(x => x + x % div)
    }
    
    solve([2,7,5,9,100,34,32,0],3);

    //Create a function that returns the sum of the two lowest positive numbers
    //given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
    function sumTwoSmallestNumbers(numbers){  
      numbers = numbers.sort((a, b) => a - b);
      console.log(numbers);
      console.log(numbers[0] + numbers[1]);
    };

    sumTwoSmallestNumbers([99, 8, 67, 98, 4, 100, 1]);

    //Your task is to remove all consecutive duplicate words from a string, 
    //leaving only first words entries.
     const categories = 'mexican, restaurant, mexican, food, restaurant'.split(', ');

     const unique = Array.from(new Set(categories));

     console.log(unique.sort());
     
     //Write a function that doubles every second integer in a list, starting from the left.
     const doubleEveryOther = (a) => a.map((c,i) => i % 2 == 0 ? c : 2 * c);

    // This time no story, no theory. The examples below show you how to write function accum:
    function accum(s) {
      return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
    }

    //Our football team finished the championship. The result of each match look like "x:y".
    // Results of all matches are recorded in the collection.
    //For example: ["3:1", "2:2", "0:1", ...]
    //Write a function that takes such collection and counts the points of our team in the championship.
    // Rules for counting points for each match: if x>y - 3 points if x<y - 0 point if x=y - 1 point
     function points(games) {
      return games.reduce((output,current)=>{
        let x = parseInt(current[0]);
        let y = parseInt(current[2]);
        let value= x>y ? 3 : x===y ? 1 : 0;
        return output+value;
        },0)
      }

      //points(5);

      //You are given an odd-length array of integers,
      //in which all of them are the same, except for one single number.
      //Complete the method which accepts such an array, and returns that single different number.
      //The input array will always be valid! (odd-length >= 3)
      function stray(numbers){
        for (var i in numbers){
           if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
        }
      }
   
      stray(1,1,2);

      //At the annual family gathering, the family likes to find the oldest living family
      //member’s age and the youngest family member’s age and calculate the difference between them.
      //You will be given an array of all the family members' ages, in any order. 
      //The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0.
      //Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
      function differenceInAges (ages) {

        let max = Math.max(...ages),
            min = Math.min(...ages)
            diff = max - min
            
        return [min, max, diff]
    }

    Challenge:

//Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

//Example:

//Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

//Addendum:

//Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

//http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

"use strict";

function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}


//Let's create some scrolling text!

//Your task is to complete the function which takes a string, and returns an array with all
// possible rotations of the given string, in uppercase.
function scrollingText(text){
  let result = []
  
  for( var i = 0; i < text.length; i++){
    result.push((text.slice(i) + text.slice(0,i)).toUpperCase())
  }
  
  return result
}

//Write a function to convert a name into initials.
//This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot separating them.
function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

//What is the flag?
//The flag is hidden in the string variable FLAG
//The flag is in the format FLAG{CAPITAL-LETTERS-WITH-HYPHEN}
//The flag couldn't be found from the string literal right away... but You can indeed read it somehow!
//A magic number 16 might help... but how should it be used?
let flag = "FLAG{IS-IT-EASY-YET-FUN}";
const FLAG = "dflaskjf; klcqwjer9qieiqucwepirom9028905839045809ds8gf[90g8sd[fh8f-[gh8-09wer0=t]mxcvnmz.xvchku9erpiot789-348tipahjrgfkhzxvxmb,mncxmh6t3q90485ut9rsqklgfjkj#Q$YTEWOPJGPOEDSJC)$%#@^*@$%690uiodrj;lstj3;wpiot8ujdfpgioja90-8-0cx8v#KL%J,,.345.3.l0-0----0000-00---0-----0..-.-.--.....--.-.-.----5345..9.........4.....3.........456...4.........3.....2.........7.....3424.......................564...544......4...5.8...9.....6...3.7.........79345.9.565.....1...1.3...7.....1...1.33452.......................013..89345......4......9......732......8........6......8........9......9........846..78654......................698............8...3............6.....098345.....73............6...6............186...........................79843..9879878....6.......7.......8.......5.......8.......6.......9.......9.....12387.....7............................786982..........8........45623..77833...........9...............109841....................345.....723....5...1...6...2...6...3....5......78234.....45....1...8...7...8...2...3....873....4...5...........................4.....7..........1...5............9.4...93459......1...............1...............1............................4.....3..345634..3...7...3........7.5....3455......1.....3.........2.....867843....1............................5321452............1...............1...............1....743745.....1...............1............................2345754..5.....44........6.....354335....3.....13........4.....42........7542345................4....2...533....52...3.....6....2.3..9.....98...1..7.6.....6....7...88.....5....6....9...964....................------0--0-=0-=-0-00000000-00-0-0-000000,0,,0000jasdkl;jferiotupvn23c014985901c79840p72x812m598723189057m2190857mx98012479812798m1407395813479857m2149857198x0579814320758937981982347384957983g"
console.log(FLAG);

//Given two arrays of integers m and n, test if they contain at least one identical element.
//Return true if they do; false if not.
//Your code must handle any value within the range of a 32-bit integer,
//and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).
function duplicateElements(m, n) {
  console.log(m.some(v => n.includes(v)));
}

duplicateElements([1,2,3], [2,5,6]);

//Ben has a very simple idea to make some profit: he buys something and sells it again.
//Of course, this wouldn't give him any profit at all if he was simply to buy and sell
//it at the same price. Instead, he's going to buy it for the lowest possible price and
//sell it at the highest.
//Task
//Write a function that returns both the minimum and maximum number of the given list/array.
function minMax(arr){
  console.log([Math.min(...arr), Math.max(...arr)]);
}
minMax([1,5,3,8]);


//You have an amount of money a0 > 0 and you deposit it with an interest rate of p percent
//divided by 360 per day on the 1st of January 2016. You want to have an amount a >= a0.
//Task:
//The function date_nb_days (or dateNbDays...) with parameters a0, a, p will return,
//as a string, the date on which you have just reached a.

// Example:
// date_nb_days(100, 101, 0.98) --> "2017-01-01" (366 days)
// date_nb_days(100, 150, 2.00) --> "2035-12-26" (7299 days)
// Notes:
// The return format of the date is "YYYY-MM-DD"
// The deposit is always on the "2016-01-01"
// Don't forget to take the rate for a day to be p divided by 36000 since banks consider that there are 360 days in a year.
// You have: a0 > 0, p% > 0, a >= a0

const ln = Math.log;

function dateNbDays(a0, a, p) {
  let days = Math.ceil((ln(a) - ln(a0))/ln(1 + p/36000));
  var date = new Date(2016, 0, 1 + days);
  return date.toISOString().split('T')[0];
}


