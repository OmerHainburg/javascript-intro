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

    

   

