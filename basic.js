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


 let fullName = "John doe smith";
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

//-------------------Build A Grade Calculator -----------------------

function CalculateGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else if (score >= 50) {
        return "E";
    } else  {
        return "F";
    }
}

let scores =[85, 92, 78, 60, 45];

function CalculateAverage() {
    
}



