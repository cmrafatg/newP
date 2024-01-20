// //#1 change this function into a ternary and assign it to variable called experiencePoints
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }
// function winBattle(bool){
//     return bool
// }
// var experiencePoints= winBattle(true)? 10:1;

// //Using this function, answer the questions below:
// function moveCommand(direction) {
//     var whatHappens;
//     switch (direction) {
//         case "forward":
//             break;
//             whatHappens = "you encounter a monster";
//         case "back":
//             whatHappens = "you arrived home";
//             break;
//             break;
//         case "right":
//             return whatHappens = "you found a river";
//             break;
//         case "left":
//             break;
//             whatHappens = "you run into a troll";
//             break;
//         default:
//             whatHappens = "please enter a valid direction";
//     }
//     return whatHappens;
// }

// //#2 return value when moveCommand("forward");
// //breaks before doing anything undefined
// //#3 return value when moveCommand("back");
// //you arrived home
// //#4 return value when moveCommand("right");
// // you found a river
// //#5 return value when moveCommand("left");
// //undefined
// //BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

// // function checkAge(age){
// //     var result;
// //     switch(age){
// //         case (age<18):
// //             return result="too young";
// //             break;
// //         case (age===18):
// //              return result="barely"
// //         case (age>18):
// //             return result="good to go"
// //         default:
// //             return result="Enter a number ffs"
// //     return result;
// //     }
// // }

// // change everything below to the newer Javascript!

// // let + const
// var a = 'test';
// var b = true;
// var c = 789;
// a = 'test2';

// let a = 'test';
// const b = true;
// let c = 789;
// a = 'test2';

// // console.log(a)

// // // Destructuring
// // const person = {
// //     firstName : "John",
// //     lastName  : "Doe",
// //     age       : 50,
// //     eyeColor  : "blue"
// // };

// // let {firstName,lastNamge,age}=person
// // const{eyeColor}=person


// // // Object properties
// // let a = 'test';
// // let b = true;
// // let c = 789;

// // const okObj = {
// //   a,b,c
// // };


// // // Template strings
// // var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
// // const msg=`Hello ${person.firstName+person.lastName}, you are ${person.age} years old and have ${person.eyeColor} eyes`

// // // default arguments
// // // default age to 10;
// // function isValidAge(age=10) {
// //     return age
// // }

// // const check=(x=10) => x
// // // Symbol
// // // Create a symbol: "This is my first Symbol"
// // const cha=Symbol("my first symbol")

// // // Arrow functions
// // function whereAmI(username, location) {
// //     if (username && location) {
// //         return "I am not lost";
// //     } else {
// //         return "I am totally lost!";
// //     }
// // }

// // // const Where=(username,location)=> (username && location)? "I am not lost":"I am totally lost";

// // // const first = () =>{
// // //     const greet = 'Hi';
// // //     const second = () => {
// // //         alert(greet);
// // //     }
// // //     return second;
// // // }
// // // const newFunct=first();
// // // newFunct();

// // //Solve these problems:

// // //#1 Create a one line function that adds two parameters

// // const fc =(a,b) => a+b

// // //Closure: What does the last line return?
// // const addTo = x => y => x + y
// // var addToTen = addTo(10)
// // addToTen(3)
// // 13


// // //Currying: What does the last line return?
// // const sum = (a, b) => a + b
// // const curriedSum = (a) => (b) => a + b
// // curriedSum(30)(1)
// // 31

// // //Currying: What does the last line return?

// // const curriedSum = (5) => (b) => a + b
// // const add5 = curriedSum(5)
// // add5(12)
// // 17
// // //Composing: What does the last line return?
// // const compose = (f, g) => (a) => f(g(a));
// // const add1 = (num) => num + 1;
// // const add5 = (num) => num + 5;
// // compose(add1, add5)(10)
// // 16
// // //What are the two elements of a pure function?
// // //return somthing doesn't interfeere too much with the outside

// // const array=[1,2,34,54]
// // const double=[]
// // array.forEach((num)=>{
// //     double.push(num*2);
// // })
// // console.log(double);

// // Complete the below questions using this array:
// const array = [
//     {
//       username: "john",
//       team: "red",
//       score: 5,
//       items: ["ball", "book", "pen"]
//     },
//     {
//       username: "becky",
//       team: "blue",
//       score: 10,
//       items: ["tape", "backpack", "pen"]
//     },
//     {
//       username: "susy",
//       team: "red",
//       score: 55,
//       items: ["ball", "eraser", "pen"]
//     },
//     {
//       username: "tyson",
//       team: "green",
//       score: 1,
//       items: ["book", "pen"]
//     },
  
//   ];
  
//   //Create an array using forEach that has all the usernames with a "!" to each of the usernames
//   const newAr = [];

//   array.forEach(el => newAr.push(el.username+"!"));
  
//   console.log(newAr);
//   //Create an array using map that has all the usernames with a "? to each of the usernames
//   const neww = array.map(el=> el.username+"?")
//   console.log(neww)
//   //Filter the array to only include users who are on team: red
//   const team=array.filter(el => el.team ==="red")
//   console.log(team)
//   //Find out the total score of all users using reduce
//   const score=array.reduce((acc,el) => {
//     return acc+el.score
//   },0)
//   console.log(score)


//   // (1), what is the value of i? 0,1,2,3,4,5 the value of the index
//   // (2), Make this map function pure:
//   const arrayNum = [1, 2, 4, 5, 8, 9];
//   const newArray = arrayNum.map((num) => {
//       return num * 2;
//   })
  
//   //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
//   const best = array.map(element => {
//     for(let att in element){
//         element.att=element.att+"!"
     
//     }
//     return element

// });
// console.log(best)


// const newm = array.map(el =>{
//     for (let att in el){
//         if(att==="items:"){
//             console.log(att)
//         }
//     }
//     return el
// })

// class Person{
//     constructor(name,age,gender){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//     }
// }
// class Car{
//     constructor(make,model,year,owner){
//         this.make=make;
//         this.model=model;
//         this.year=year;
//         this.owner = owner
//     }

//     showCar: (this.make,this.model) => this.make,this.model;
// }
// const p1= new Person("Boby",12,"mascul")
// console.log(p1.name)

//Evaluate these:
//#1
// console.log([2] === [2] )
// // {} === {} 

// // //#2 what is the value of property a for each object.
// const object1 = { a: 5 }; 4
// const object2 = object1; 4
// const object3 = object2; 4
// const object4 = { a: 5}; 5
// object1.a = 4;


// //#3 create two classes: an Animal class and a Mamal class. 
// // create a cow that accepts a name, type and color and has
// // a sound method that moo's her name, type and color. 

// class Animal{
//     constructor(name,type,color){
//         this.name=name;
//         this.type=type;
//         this.color=color;
//     }

//     makeSound(){
//         console.log(`${this.name} is my name!`)
//     }

// }

// cow=new Animal("Bowy","cow","blue");
// cow.makeSound()

// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

// var merge = function(nums1, m, nums2, n) {
//     let arr=[]
//     while (nums2.length >0){
//         if(nums1[0]>nums2[0]){
//             arr.push(nums2[0])
//             nums2.shift()
//         }
//         else if(nums1[0]<nums2[0]){
//             arr.push(nums1[0])
//             nums1.shift()
//         }
//         else {
//             arr.push(nums1[0])
//             arr.push(nums2[0])
//             nums1.shift()
//             nums2.shift()
//         }
//     }
//     return arr
// };
// console.log(merge(nums1, m, nums2, n))

// nums = [2,2,1,1,1,2,2]
// var majorityElement = function(nums) {
//     nums.sort()
//     max_count=0
//     count=1
//     for (i=0,i<nums.length,i++){
//         if (nums[i]===nums[i+1]){
//             count=count+1}
//         if (count>max_count){max_count=count}
//         else{count=1}
//     }
//     };

// console.log(majorityElement(nums))

// nums = [2, 2, 1, 1, 1, 2, 2,3,4,1,1];

// var majorityElement = function(nums) {
//     nums.sort((a, b) => a - b); // Use a numerical sort

//     let max_count = 0;
//     let count = 1;
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i + 1]) {
//             count = count + 1;
//         } else {
//             if (count > max_count) {
//                 max_count = count;
//                 number=nums[i];
//             }
//             count = 1;
//         }
//     }

//     // Check the last group of elements
//     if (count > max_count) {
//         max_count = count;
        

//     return max_count;
// };

// console.log(majorityElement(nums));

// nums = [2, 2, 1, 1, 1, 2,1,1,1, 2];

// var majorityElement = function(nums) {
//     nums.sort((a, b) => a - b); // Use a numerical sort

//     let max_count = 0;
//     let count = 1;
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i + 1]) {
//             count = count + 1;
//         } else {
//             if (count > max_count) {
//                 max_count = count;
//                 el=nums[i];
//             }
//             count = 1;  // Reset count for the new element
//         }
//     }

//     return (`Found the element${el},${max_count} times`);
// };

// console.log(majorityElement(nums));

// var majorityElement = function(nums) {
//     let el;
//     let count = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//         if (count === 0) {
//             el = nums[i];
//         }
//         count += (nums[i] === el) ? 1 : -1;
//     }

//     return el;
// };


// arr=[1,2,3,4,5,6];

// const move=function(array,steps){
//     for (j=0;j<steps;j++){
//         let last=array[array.length-1]
//         for (i=array.length-2;0;i--){
//             array[i]==array[i-1]
//         }
//         array[0]=last;
//     return array;
//     }}
    

// console.log(move(arr,2));

// Solve the below problems:


// #1) Check if this array includes the name "John".
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// dragons.includes("John")


// // #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// // name or names in an array.
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// const checking= dragons.filter(name => name.includes("John"))


// // #3) Create a function that calulates the power of 100 of a number entered as a parameter
// const num=(x)=>x**100
// num(6)

// // #4) Useing your function from #3, put in the paramter 10000. What is the result?
// // Research for yourself why you get this result

// Solve the below problems:

// // #1) Line up the Turtle and the Rabbit at the start line:
// // const startLine = '     ||<- Start line';
// // let turtle = '🐢';
// // let rabbit = '🐇';

// // turtle=turtle.padStart(5)
// // rabbit=rabbit.padStart(5)

// // // it should look like this:
// // '     ||<- Start line'
// // '       🐢'
// // '       🐇'

// // // when you do:
// // console.log(startLine);
// // console.log(turtle);
// // console.log(rabbit);


// // // #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// // // Read about what the second parameter does in padEnd and padStart
// // turtle = turtle.trim().padEnd(9, '=');


// // // #3) Get the below object to go from:
// // let obj = {
// //   my: 'name',
// //   is: 'Rudolf',
// //   the: 'raindeer'
// // }

// // Object.entries(obj).map(elem =>elem.join(" ")).join(" ")

// // // to this:
// // 'my name is Rudolf the raindeer'

// // Solve the below questions:

// // #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
// const array = [[1],[2],[3],[[[4]]],[[[5]]]]
// console.log(array.flat(2))


// // #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// const arr2 = array.flat()

// //#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'

// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// const arr2 = greeting.flatMap(elem => elem.join(" ")).join(" ")
// arr2.replace("!","")

// //#4 Turn the trapped 3 number into: [3]
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]



  

// //#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
// const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
// const clean=userEmail3.trim()


// //#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// const users = { user1: 18273, user2: 92833, user3: 90315 }
// const arrus = Object.entries(users)
// arrus.map(el){
//     return el[0]+el[1]*2;
// }




// //#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// const users = { user1: 18273, user2: 92833, user3: 90315 };
// const arrus = Object.entries(users);

// const result = arrus.map(el => {
//     return [el[0] , (el[1] * 2)];
// });

// console.log(result);


// //#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
// const ar=Object.fromEntries(result)
// ar

// const basket = ['apples', 'oranges', 'grapes'];
// const detailedBasket = {
//   apples: 5,
//   oranges: 10,
//   grapes: 1000
// }

// //1
// for (let i = 0; i < basket.length; i++) {
//   console.log(basket[i]);
// }

// //2
// basket.forEach(item => {
//   console.log(item);
// })

// for (item in detailedBasket) {
//   console.log(item);
// }

// for (item of basket) {
//   console.log(item);
// }

// // Question #1:
// // create a function called biggestNumberInArray() that takes
// // an array as a parameter and returns the biggest number.
// // biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// // Use at least 3 different types of javascript loops to write this:
// const array = [-1,0,3,100, 99, 2, 99] // should return 100
// const array2 = ['a', 3, 4, 2] // should return 4
// const array3 = [] // should return 0

// function biggestNumberInArray(arr) {
//     max=0
//     for (number of arr){
//         if (max<number){
//             max=number;
//         }
//         }
//         return max
// }
// console.log(biggestNumberInArray(array))
// function biggestNumberInArray2(arr) {
//     max=0
//     arr.forEach(el){
        
//         if (el>max){max=el;}
//     }
//     return max;
// }

// function biggestNumberInArray3(arr) {
//     let max=0
//     for (i=0;i<arr.length;i++){
//         if (arr[i]>max){
//             max=arr[i];
//         }
//     }
//     return max;
// }


// // Question #2:
// // Write a function checkBasket() that lets you know if the item is in the basket or not
// amazonBasket = {
//   glasses: 1,
//   books: 2,
//   floss: 100
// }

// function checkBasket(basket, lookingFor) {
//     for (item in basket){
//         if (lookingFor === item){
//             return true;
//         }
//     }
// }

// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)-953453432432

// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1n
3n + 4n + 1n

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }


// Exercise 4: What do these each output?
console.log(false ?? 'hellooo')
console.log(null ?? 'hellooo')
console.log(null || 'hellooo')
console.log((false || null) ?? 'hellooo')
console.log(null ?? (false || 'hellooo'))

const ztmMonsters = [
  {id: 1, monster: 'Mr. Mouse', level: 1},
  {id: 2, monster: 'Mac', level: 30},
  {id: 3, monster: 'Denodude', level: 17},
  {id: 4, monster: 'Pye', level: 5},
  ];


  
  // Old Way
  const advancedMonsters = ztmMonsters.filter(item => item.level > 15)
  console.log(advancedMonsters)
  console.log(advancedMonster[advancedMonsters.length - 1])
  
  
  // Using findLast()
  const lastMonster = ztmMonsters.findLast(item => item.level > 15);
  console.log(lastMonster);
  // Using findLastIndex()
  const lastMonsterIndex = ztmMonsters.findLastIndex(item => item.level > 15);
  console.log(lastMonsterIndex);
  
  
  const ztmMonstersList = ['Mr. Mouse', 'Mac', 'Denodude', 'Pye'];
  
  //Using reverse()
  const reverseMonsters = ztmMonstersList.reverse();
  console.log(ztmMonstersList) 
  console.log(reverseMonsters) 
  
  //using toReversed()
  const reversedMonstersTo = ztmMonstersList.toReversed();
  console.log(ztmMonstersList) 
  console.log(reversedMonstersTo)
  
  //Using toSorted()
  const sortedMonstersTo = ztmMonstersList.toSorted();
  console.log(ztmMonstersList) 
  console.log(sortedMonstersTo)
  
  //Using toSpliced()
  const spliceMonstersTo = ztmMonstersList.toSpliced(2, 1);
  console.log(ztmMonstersList) 
  console.log(spliceMonstersTo)
  
  //Old Way
  ztmMonstersList[1] = 'Gost';
  console.log(ztmMonstersList)
  
  // Using with()
  const withMonsters = ztmMonstersList.with(1, 'Gost');
  console.log(ztmMonstersList) 
  console.log(withMonsters)

  const flattend=[[0,1],[2,3],[4,5]].reduce((a,b)=>a.concat())

  arr=[1,2,3,4,0,0,0]
  arr2=[6,7,8]

  arr.splice(arr.length,0,...arr2)
  console.log(arr)

Question 1: Clean the room function: given an input of 
[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
 make a function that organizes these into individual 
 array that is ordered. 
 For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
 Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const arrrr=[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
const org=function(arrray){
  
  arrray.sort()
  let ar=[]
  for(i=1;i<arrray.length;i++){
    if (arrray[i-1]===arrray[i] ){
      ar.push(arrray[i-1],arrray[i]);
      console.log(arrray)
      console.log(ar)
    }
    else if (ar.length >0 && arrray[i]!==arrray[i+1]){
      array.splice(i-ar.length,ar.length,[...ar])
      ar=[]
    }

  }
  return arrray;
}
console.log(ord(arrrr))



Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]



Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

ls
pwd
cd 
cd ..
clear
cd / **—> root director**
cd ~
cd <folder/folder/folder> ** <> means to add your own folder names that exist on your computer.
mkdir <folder>
open <folder> **for windows use: start <folder>
touch index.html  **for windows use: echo "" > index.html
open index.html **for windows use: start index.html
open -a “Sublime Text”  **for windows see the note about this at the bottom of this lecture!!
open . **for windows use: start .
mv index.html about.html
*Try using the Up and Down arrow.
 
rm <file>
rm -r <folder>
say hello **(only on Mac)**