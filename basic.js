// let mytery1="Hello"+5;
// let mystery2="10"-5;
// let mystery3=false / 1;


// console.log(mytery1);
// console.log(mystery2);
// console.log(mystery3);


//-------------------------------------------------

// let firstName = "Annshaphana";
// let age = 21;
// let isStudent = true;
// let favoriteColor ="blue";

// let info = "Hi! I'm "+ firstName + ", I'm " + age + " years old." + ", I'm " + isStudent + " My Fovorite Color is" + favoriteColor ;

// console.log(info);


//------------------Build Name Formatter Tool-------------------------------


 //let fullName = "John doe smith";
// let age = 21;

// console.log(fullName.charAt(0).toUpperCase(0)+fullName.toLowerCase(0,3));
// console.log(fullName.slice(0,4));
// console.log(fullName.length);
// console.log(fullName.slice(0,3)+ age);

//------------------Build Calculator Step ty step--------------

// function add(a,b) 
// {
//     return a + b;   
// }

// console.log(add(5,3));

//------------------Fix These Broken Funtions------------------------------


// Bug Hunt #1

// function greeUser(name){
//     return "Hello" + name;
// }

// function calculateArea(length,width) {
//     return length * width 
// }

//=---------------------Build a To-Do List--------------------

// let todoList = ["Learn JavaScript", "Pracice coding"];

// console.log("My Tasks:", todoList);
// todoList.push("Build a project");
// console.log(todoList);
// todoList.pop();
// console.log(todoList);

//--------------Array methods -------------------------

// let movise = ["Inception", "Avatar", "Titanic", "Matrix"];
// let numbers = [1, 2, 3, 4, 5];

// let doubledNumers = numbers.map(num => num* 2);
// console.log(doubledNumers);

// console.log(movise.filter(movie => movie.toLowerCase().includes('a')));

// let totalLength = movise
//     .map(movie => movie.length)
//     .reduce((acc,len) =>acc + len, 0);

// console.log(totalLength);

// //-------------------Build A Grade Calculator -----------------------
// let scores =[85, 92, 78, 60, 45];
// function CalculateGrade(score) {
//     if (score >= 90) {
//         return "A";
//     } else if (score >= 80) {
//         return "B";
//     } else if (score >= 70) {
//         return "C";
//     } else if (score >= 60) {
//         return "D";
//     } else if (score >= 50) {
//         return "E";
//     } else  {
//         return "F";
//     }
// }

// function CalculateAverage(scores) {
//     if (!Array.isArray(scores) || scores.length === 0) {
//         return "Invalid: provide a non-empty array of scores";
//       }
//       let sum = 0;
//       for (let s of scores) {
//         if (typeof s !== "number" || s < 0 || s > 100) {
//           return "Invalid score found in class list";
//         }
//         sum += s;
//       }
//       return sum / scores.length;
// }
//       console.log(CalculateAverage(scores));


// function gradeMeaning(letter) {
//     switch (letter) {
//       case "A":
//         return "Excellent";
//       case "B":
//         return "Good";
//       case "C":
//         return "Average";
//       case "D":
//         return "Below Average";
//       case "F":
//         return "Fail";
//       default:
//         return "Unknown grade";
//     }
// }
//console.log(gradeMeaning(letter,"Average"));

//----------------------- Loop Construction Stie---------------//

//for (let i = 0; i <= 5; i++) {
//     let stars = "";
//     for (let j = 0; j < i; j++) {
//         stars += "⭐";
//     }
//     console.log(stars);
    
// }
// for (let i = 10; i >= 1; i--) {
//    console.log(i);

//}
// for (let i = 0; i <=5; i++) {
//    let line = "";
//    for (let j = 1; j <=i; j++){
//     line += j + " ";
//    }
//    console.log(line); 
// }

// Diamond Star Pattern
// let n = 5;


// for (let i = 1; i <= n; i++) {
//   let spaces = " ".repeat(n - i);
//   let stars = "⭐".repeat(2 * i - 1);
//   console.log(spaces + stars);
// }


// for (let i = n - 1; i >= 1; i--) {
//   let spaces = " ".repeat(n - i);
//   let stars = "⭐".repeat(2 * i - 1);
//   console.log(spaces + stars);
// }
// --------------DOM-----------//
//const element=document.getElementById("hello")
// document.getElementById("Wel")
//  function changetitle() {
//      document.getElementById("demo-text").innerHTML ="Javascript is awesome!";
    
//  }

// function changeTitle() {
//     document.getElementById("page-title").innerHTML = "JavaScript is awesome!";
//   }

//   function changeColor() {
//     let colors = ["red", "green", "blue", "purple", "orange"];
//     let random = Math.floor(Math.random() * colors.length);
//     document.body.style.backgroundColor = colors[random];
//   }

//   function addMessage() {
//     let p = document.createElement("p");
//     p.innerHTML = "✨ You clicked the  button!";
//     document.body.appendChild(p);
//   }


//   let quotes = [
//     "The only way to do great work is to love what you do.",
//     "Life is what happens to you while you're busy making other plans.",
//     "The future belongs to those who believe in the beauty of their dreams."
//   ];

//   function getRandomQuote() {
//     let randomIndex = Math.floor(Math.random() * quotes.length);
//     return quotes[randomIndex];
//   }

//   function showQuote() {
//     let quote = getRandomQuote();
//     document.getElementById("quote").innerHTML = quote;
//   }


// generateName("Ann")

// function generateName(name) {
//   console.log(name);
  
// }

// generate("Ann",21)

// function generate(name,age) {
//   console.log(name + age);
  
// }
//numbers=[1,2,3,4,5]

// for (let i = 0; i < numbers.length; i++) {
//   const element = [i];
  
// }
// console.lo/ ------------for ---------------//
// g(numbers);

// // ---------------foreach ------------//

// numbers.forEach(number => {
//   console.log(number);
  
// });

// ------------ while loop ---------//
// numbers=[10,20,30,40,50];
// let i=0;
// // while (i<numbers.length) {
// //   console.log(numbers[i]);
// //   i++
// // }

// do {
//   console.log(i);
//   console.log(numbers[i]);
//   i++
// } while (i<numbers.length);

// --------- DOM -----------//
document.getElementById("page-title").innerHTML="Hello";
document.getElementById("demo-text").innerHTML="Click Me"

console.log(changeColor);
let colors  =["pink", "blue", "green", "yellow", "orange"];
let index = 0;
function changeColor() {
  document.body.style.backgroundColor = colors[index];
  index++;

  if (index >= colors.length){
    index = 0;
  }
  
}
function getRandomQuote() {
      let randomIndex = Math.floor(Math.random() * quotes.length);
       return quotes[randomIndex];
}