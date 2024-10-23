// let name = "sahil";
// let name = "barsha"; it cannot be redclare block-scoped but can be reassign

// var fname = "sahil"
// var fname = "shrestha"

// // console.log(name)
// // console.log(fname)
// // console.log(fname)

// // opertaor
// // let a = 9
// // a++
// // console.log(a++) // first print and then increase
// // console.log(a)
// // console.log(++a) // incerase and then print

// // math object
// let number = Math.PI
// console.log(number)

// // finding the area of circle
// /*
// let r = 7
// let area = Math.PI * Math.pow(7,2)
// console.log(area)
// let rounded = Math.round(area)
// console.log(rounded)

// let maximum = Math.max(1, 4, 5, 7, 10, 11)
// console.log(maximum)

// let minimum = Math.min(1, 4, 5, 7, 10, 11)
// console.log(minimum)

// let num = 7.1
// console.log(Math.floor(num))
// console.log(Math.ceil(num))
// */

// // compare operator
// // == for to check the equal value not check the data type
// let num = 5
// let anotherNum = 5
// console.log(num == anotherNum)

// let a = 5
// let b = "5" // here the value is same but the data type is different
// console.log(a == b)
// // === it check the value as well as the data type
// console.log(a===b)
// // >,>=,<,<= are other comparison operator
// // note to compare the equality mainly use three equal comparison .

// // primitive data types
// // string
// let name = "sahil" // here the string should be qouted on " " or '' or ``
// console.log(typeof name,name)

// // number
// let numb = 03456 //if we put 0 before in any of the number it converts into octal
// console.log(typeof numb,numb) // output: 1838
// numb = 34564
// console.log(typeof numb,numb)

// //*-----------------------------------------
// let names= "sahil"
// console.log(names)

// const u1 = names
// console.log(u1)

// names="barsha"
// console.log(names)
// console.log(u1)  // Output: sahil (u1 is still "sahil", because it holds a copy, not a reference)

// //*---------------------
// //Refernces- data types
// //object
// //array

// //object
// let user = {
//     fname:"sahil", //key:value
//     lname:"shrestha"
// }
// // access the object value
// console.log(user.lname)

// const u2 =user.fname
// user.fname="anu"
// console.log(u2) // Output: sahil (because 'u2' holds a copy of the original value)

// const user1 = user
// console.log(user1)

// //*------- data manipulation

// //number manipulation
// let numbers = "1234"
// console.log(+numbers)//here, +numbers change the string into number```

// //another approach is parse
// let Num1 = "25a6"
// let Num = parseInt(Num1)
// console.log(Num1)

// // if there is a chracter before the number then its output is NaN and the character after the number is neglected

// let Num2 = "2ab5256"
// let Num_2 = parseInt(Num2)
// console.log(Num_2)

// //*-----------------string Manipulation-------------------

// //-------Escape character----------
// let str = " I'm \"Sahil Shrethsa\" Sahil "
// console.log(typeof str)
// console.log(str)

// //------Lower---
// // const val = str.toLowerCase()
// // console.log(val)

// //----Upper----
// const val = str.toUpperCase()
// console.log(val)

// // ----Indexing----
// console.log(str[2])
// // another way
// console.log(str.charAt(2))

// // -----IndexOf-----
// // const ind = str.indexOf('m')
// // const ind = str.indexOf('Sahil') // it will give the output 5 where the sahil word start
// // console.log(ind)

// // -----lastIndexOf---- It will give the last index value present
// // const ind = str.lastIndexOf('i')
// const ind = str.lastIndexOf('Sahil')
// console.log(ind) // it will give the output 21 where the sahil word last start in the sentences

// // --Replace----
// // const rep = str.replace('S','H')
// // console.log(rep)
// // to replace all use replaceAll fun
// const rep = str.replaceAll("Sahil","Anu")
// console.log(rep)

// //---------Slice----
// const slic = str.slice(3,9) //start fro 3 to 9(not include)
// console.log(slic)

// //-----Seacrh---
// // it will give the index value if present and give -1 if not present
// // const searchValue = str.search("Sahil")
// const searchValue = str.search("Sahill")
// console.log(searchValue)

// //--------------includes-------
// // it will give true or false output
// const includeValue = str.includes("Sahil")
// console.log(includeValue)

// // ----------trim-----------
// // it is to remove the start and end of the space not the middle one
// const trimValue = str.trim()
// console.log(str.length)
// console.log(trimValue.length)

// //-------------split-------------
// // to spilt into the array
// const splitValue = str.split(" ")//split on the basis of space
// console.log(Array.isArray(splitValue))
// console.log(splitValue)

// //join
// // to make into string
// // it takes a separator as an argument (such as a comma, space, or any other character), and it joins all elements of the array with that separator.
// const joinValue = splitValue.join(" ")
// console.log(typeof joinValue)
// console.log(joinValue)
// //----------------concat----------

// // ---------if else-----------statement
// //truthy:- any string,+ve num,-ve num,array,object,..
// //flasy:- empyt string,null,undefined,0,NaN,false
// const values = "sahil"
// if (values)
//     console.log("Hi i am sahil shrestha abcd")

// // ----------------array-----------------------------------

// // note:- it is a common practice to declare the array with const keyword
// // it can hold differrent data types in a single variable
// const cars = [
//     "honda",
//     "volvo",
//     "BMW",
//     "lambo"
// ]
// console.log(cars)

// we can also declare like this
// const cars = []
// cars[0] = "honda"
// cars[1] = "volvo"
// console.log(cars)

// ---acessing an array---
// console.log(cars[0])

//---changing an array---
// cars[1] = "BMW"
// console.log(cars)

// converting an array to string
// const str = cars.toString()
// console.log(str)

// -----length of an array -------
// const cars = ["honda", "volvo", "BMW", "bmw", "lambo"];
// console.log(cars.length)

// ------sorting an array-------
//  console.log(cars.sort())// first priority is given to capital letter

// ----printing the element in unordered list using loop in web
// let len = cars.length
// let text = "<ul>"
// for (i=0 ; i<cars.length;i++)
// {
//     text += "<li>"+cars[i]+"</li>"
// }
// text+="</ul>"
// document.getElementById("demo").innerHTML = text;

// -----------how do recognize  a array-------
// ############## here when we use typeof -> it gives object = because array is a kind of object. So to recongnize we use Array.isArray()

// console.log(Array.isArray(cars)) // give true if cars is array

// ------------------Array Methods ------------------

//----- acessing an element--------

// using []-> indexing
// let val = cars[4]
// console.log(val)

// here negative indexing is not allowed in javasrcipt becuase in object. the obj[-1] refers to the key value -1. So to overcomes this issue at() is introduce

// let value = cars.at(-1)
// console.log(value)

// let new_str = cars.join(" * ")
// console.log(new_str)
// console.log(typeof new_str)

// ---------------adding an element-------------
//push -> it will add the element at the last of the index
// cars.push("TVS")
// console.log(cars)
// // unshift -> it will add the element at the begining
// cars.unshift("yamaha")
// console.log(cars)
// //splice -> it can be used for both remove or add -> splice(index,rmoveelements,item1,item2,....). it is muated
// cars.splice(2,0,"suzuki","vespa")
// console.log(cars)

// ---------------deleting an element--------------
// let val = cars.shift()
// let val = cars.pop()
// let val = cars.splice(2,5)
// console.log(val)
// console.log(cars)

// -----------------concatenating-----------------
// it will not effect the existing array. it returns new array.
// it can be used as parameter to
// new_cars = ["yamaha","suzuki"]

// const update_cars = cars.concat(new_cars,"tvs")
// console.log(update_cars)
// let val = cars.toSpliced(2,5) //when you use the toSpliced() method in JavaScript,
// it returns a new array where the specified elements have been removed,
// but the original array remains unchanged.

// console.log(val)
// console.log(cars)

// -----------------------loop-------------
// for loop -> when the iteration is known
// while loop -> when the itereation is not known
// do while loop -> to execute at once,even if the condition is false

// ---------------------js Specific array loops-----------
// For of -> it is used for array basically and can also be used for sets,map ,string and etc

// const Fruits = ["banana","mango","apple","grapes"]
// for (let item of Fruits)
// {
//     console.log(item.toUpperCase())
// }
// You want to iterate over any iterable, not just arrays.
// You need to control the flow (e.g., using break or continue).
// You prefer a more traditional loop style.

//For each-----------------
//You want to apply a function to every element in an array.
// You don't need to stop or break the loop early.
// syntax:-
// array.Foreach(function(element,index,array)=>
// {
// code blocks
// });
// Fruits.forEach((Fruits,index)=>
// {
//     console.log(`${index}:${Fruits}`);
// });
// Use map() when you need to transform the elements of an array and return a new array.

// Use forEach() when you need to perform some side-effect for each element
// but don't need to create a new array (like logging, updating variables, etc.).

//--------------------------map-----------------
//syntax:- array.map(function(currentvalue,index,array)=>
// {
//return code block
// });
// const new_array = Fruits.map((fruits,index)=>
// {
//     return fruits.toUpperCase()
// });
// console.log(new_array)
// const array = [1, 2, 3, 4];

// `flatMap()` first maps, then flattens the result
// const new_array = array.flatMap(num => [num, num * 2]);

// console.log(new_array); // Output: [1, 2, 2, 4, 3, 6, 4, 8]

//--------------------filter------------

// The filter() method in JavaScript creates a new array with elements that satisfy the condition in the callback function.
// The resulting array may be smaller than or the same size as the original, but never larger.
// If no elements match, it returns an empty array.

// const new_Fruits = Fruits.filter((item,index)=>
// {
//     return item.includes("n")
// });
// ----------------or-----------
// const new_Fruits = Fruits.filter((item,index)=>item.includes("n"));
// console.log(Fruits)
// console.log(new_Fruits)

// ----------------reduce-------
// const number = [10,20,30,40]
// const total = number.reduce((sum,item)=>
//     {
//         return sum+item
//     },80);
// console.log(total)

// ---------------every----------
// every() method checks if all elements in an array pass a test implemented by a provided function.
//  It returns true if the test is true for every element, otherwise false.
// const age = [18,25,26]
// const valid = age.every((item)=>{
//     return item>=18;
// })
// 50 array where the random num between 1 and 100
// console.log(valid)
// const random_num = []
// i= 0
// while(i<50)
// {
//     let random_number = Math.random(1,100)
//     let integer = random_number*100
//     random_num.push(Math.floor((integer)))
//     i++
// }
// console.log(random_num)

// in descending order
// const number = [1,5,7,9,10]
// const descend = number.sort((a,b)=>a-b)
// console.log(descend.reverse())

// // totl of the array
// const total = number.reduce((sum,item)=>{
//     return sum+item
// },0)
// console.log(total)

// odd number in array
// const odd = number.filter((item)=>{
//     return item%2!==0
// });
// console.log(odd)

// // even
// const even = number.filter((item)=>{
//     return item%2===0
// });
// console.log(even)
// //reomve duplicate item
// const uniqueItem = [...new Set(random_num)]
// console.log(uniqueItem)
// create unique array 50 numbers rang between 1 and 100 programmatically
// const nums= [1,1,2,4,4,5]
// const unique=[]
// nums.forEach(element => {
//     if(!unique.includes(element))
//         unique.push(element)
// });
// console.log(unique)
// const uniqueRandomNum = []
// while(uniqueRandomNum.length<50)
// {
//     const randomNumber = Math.floor(Math.random() * 100) + 1;
//     if(!uniqueRandomNum.includes(randomNumber))
//     uniqueRandomNum.push(randomNumber)
//     i++
// }
// console.log(uniqueRandomNum)
// //reomve duplicate item
// const uniqueRan = [...new Set(uniqueRandomNum)]
// console.log(uniqueRan)

// object
// :- order is not matter in object. it can be of any data types
// const person = {
//   name: "Sahil Shrestha",
//   age: 20,
//   isEmployed: "Not",
//   Skills: ["java", "javscript", "python", ["Css", "tailwind"]],
//   address: {
//     city: "itahari",
//     tole: "baraha",
//   },
//   hobbie: () => {
//     return "Hello";
//   },
// };
// console.log(person);

// ------reading data from object-----
// const data = person.name
// const data = person["address"]
// const data = person["address"].city;
// console.log(data);

// ------updating data--------
// person.name = "anu"; // it will first check is there any property exist if then override it, if not then add
// person.Skills[3].push("bootstrap");
// console.log(person)

// -------delete data---------
// person.age = undefined// iit is the best practice and it makes the property key remain
// delete person.isEmployed // but it is the not the best practice. Since it is delete from the object but still remains in the memory
// console.log(person)

// ----------Es6------------
//destructuring
// const {
//   name,
//   age,
//   address: { city },
// Skills} = person; //const {name, age} = person; extracts the name and age properties from the person object and assigns them to variables name and age respectively.
//accessing nested array
// const skill = Skills[3][1]
// console.log(name, age, city,skill);

//-----default destrcuturing-----
// const {room ="N\A"} = person
// console.log(room)

//rest :- (...rest) allows you to extract remaining properties of an object after destructuring specific ones.
// const {name,age,Skills,...rest} = person
// console.log(rest)

// // spread:- merging two object into another object
// const education = {
//   school: "sacred heart",
//   college: "vishwa adarsha"
// }
// const peope = {...person,...education}
// console.log(peope)

// Copy object reference
// const p1 = person
// p1.name = "barsha" // Changing p1 also changes person because both reference the same object.
// console.log(person)
// console.log(p1)

// ------Shallow copy------
// A shallow copy only copies the first level of properties.
// Changes to the first level of p2 will not affect the person object,
// but changes to nested objects (like address) will affect the person object too.
// const p2 = { ...person }
// p2.address.city = "dharan" // Modifying a nested object will still affect the original person object.
// console.log(person)
// console.log(p2)

// --------Deep copy----------
// A deep copy duplicates the entire object, including all nested objects.
// Using JSON methods: The object is first converted into a string (JSON.stringify)
// and then parsed back into an object (JSON.parse).
// const p3 = JSON.parse(JSON.stringify(person));

// p3.address.city = "dharan"; // Modifying the nested object will NOT affect the original person object.
// console.log(person);
// console.log(p3);

// --------------------loop through object-------------
// for (let key in person) {
//   // console.log(key) // it will give the property key only
//   console.log(person[key]); // it will give the value
// }

// -------------converting object into array----------
// const personArg = Object.entries(person)// converts into array
// const personArg = Object.key(person)// converts key only into array
// const personArg = Object.values(person); // converts value only into array

// console.log(personArg);

// --------- Date manipulation ---------
// const today = Date(); // Returns the current date and time as a string (not a Date object)
// const today = new Date(); // create the date object with current date and time
// console.log(today);

// console.log(Date.now()); //
// Return Type: Date.now() returns an integer representing the number of milliseconds since January 1, 1970 (UTC).
// Performance: More efficient than new Date().getTime()
//  because it directly retrieves the timestamp without creating a Date object.
// Supported in All Modern Browsers: Works in all modern browsers and Node.js,
//  so it's reliable for use in both client-side and server-side applications.
// Use Cases:
// Measuring time intervals or durations.
// Generating unique IDs based on the current timestamp.
// Capturing timestamps for events (like button clicks).
// Handling timeouts or delays in operations.
// Tracking user sessions or activity logs.

// Create a new Date object for October 21, 2080
// const today = new Date("2080-10-21");

// Get the day of the month (1-31) from the Date object
// const data = today.getDate(); // Outputs: 21 (the day of the month)

// Get the timestamp in milliseconds since January 1, 1970 (Unix epoch)
// const data = today.getTime(); // Outputs: 2543568000000 (the timestamp)

// Get the year (e.g., 2080) from the Date object
// const data = today.getFullYear(); // Outputs: 2080

// Get the date in a locale-sensitive format (e.g., "10/21/2080" in en-US locale)
// const data = today.toLocaleDateString(); // Outputs: "10/21/2080" or similar depending on locale

// Get the date in ISO format (e.g., "2080-10-21T00:00:00.000Z")
// const data = today.toISOString(); // Outputs: "2080-10-21T00:00:00.000Z"

// Get the date and time in a locale-sensitive format (e.g., "10/21/2080, 12:00 AM")
// const data = today.toLocaleString(); // Outputs: "10/21/2080, 12:00 AM" or similar depending on locale

// Get the time portion of the Date object in a locale-sensitive format (e.g., "12:00:00 AM")
// This will show the time in 12-hour format with AM/PM if applicable
// const data = today.toLocaleTimeString(); // Outputs: "12:00:00 AM" or similar depending on locale

// adding day:- set

// Add 11 days to the current date
// today.setDate(today.getDate() + 11); // Get the current day and add 11

// console.log(today); // Outputs the updated date

// -------------challenge--date--manipulation----------
// Date challange : Create a function that takes a food and the expire data and retuns one of the followings:
// 1. if expired: AB is expred 4 days ago
// 2. if not expired: you have 10 days to use this product.
// const FoodExpired = (a, b) => {
//     const inputDate = new Date(b)
//     const currentDate = new Date()
//     const timeDiff = inputDate -currentDate
//     const timeDiffDays = Math.ceil(timeDiff/(1000*60*60*24))
//   if (inputDate>currentDate)
//     return ` you have  ${timeDiffDays} days to use this product`
//     else
//     return `${a} is expired ${Math.abs(timeDiffDays)} days ago`

// };
// console.log(FoodExpired("waiwai","2000-12-20"))

// ----------another approach------
// const check = ({name,ExpDate})=>{
//   const currentDate = Date.now()
//   const companyDate = new Date(ExpDate).getTime()
//   const timeDiff = currentDate-companyDate
//   const daysDiff = Math.ceil(timeDiff/(1000*60*60*24))
//   if (companyDate>currentDate)
//   {
//     return `you have ${daysDiff} days to use this product`
//   }
//   else
//   return `${name} is expired ${Math.abs(daysDiff)} days ago`

// }
// const foods = [
//   {
//     name:"waiwai",
//     ExpDate: "2000-12-20"
//   }
// ]
// const result = foods.map((food)=>{
//  return check(food)

// })
// const output = result.toString()
// console.log(output)

//--------------Function-------------
// function sayHi(name,address="NA")
// {
//   const val = `Hi there I'm ${name}. I live in ${address}`
//   console.log(val)
// }

// ------Es6 Functionn-----
// const sayHi = (name, address = "NA") => {
//   const val = `Hi there I'm ${name}. I live in ${address}`;
//     console.log(val)
// };
// sayHi("Sahil Shrestha", "Itahari");
// sayHi("Anu Poudel");

// ---------------
// const personBio = [
//   {
//     name: "Sahil Shrestha",    // Name of the first person
//     Hobby: "Coding",           // Hobby of the first person
//     address: "Itahari",        // Address of the first person
//     Course: "CSIT",            // Course of the first person
//   },
//   {
//     name: "Anu Poudel",        // Name of the second person
//     Hobby: "Gaming",           // Hobby of the second person
//     // No address or Course for the second person
//   },
// ];

// // Function to add address and course details if available
// const add = ({ address, Course }) => {
//   return ` I live in ${address} and I am studying ${Course}.`;  // Constructs a string using address and course
// };

// // Function to display person details
// const person = ({ name, Hobby, ...rest }) => {
//   let str = `Hi I'm ${name} and I love ${Hobby}.`;  // Initial greeting with name and hobby
//   if (rest.address) {                               // Checks if the person has an address
//     str += add(rest);                               // Adds address and course details if available
//   }
//   return str;
// };

// // Accessing the array and logging each person's info
// personBio.forEach((item) => {
//   const data = person(item);   // Calls the person function for each item in personBio
//   console.log(data);           // Outputs the result
// });

// ------------set time--------------
// -----1. SetTimeout----
// console.log("Before setTimeout");
// const val = setTimeout(() => {
//   console.log("After setTimeout"); // This will execute after a 1-second delay
// }, 1000); // 1000 milliseconds = 1 second
// clearTimeout(val); // Cancels the timeout stored in val

//-------2. SetInterval
// let counter = 10;
// const val = setInterval(() => {
//   console.log("special event in", --counter); // Decrement counter first, then print
//   if (counter === 0) {
//     clearInterval(val); // Stops the interval
//     console.log("happy birthday");
//   }
// }, 1000);


///// what is the order of output guess

const yoyo = ( ) => console.log("0. " + (5 + 6)); 

console.log("1. log"); // Synchronous, executes immediately

setTimeout(( ) => {
    console.log("2. inside first set timeout");
}, 5000); // Asynchronous, delayed by 5 seconds

console.log("3. after first setTimeout"); // Synchronous, executes immediately

const sayHey = ( ) => {
    console.log("4. inside sayHey");
    yoyo( ); // Synchronous call to yoyo function
};

setTimeout(( ) => {
    console.log("5. inside second set timeout");
}, 0); // Asynchronous, delayed by 0ms, but runs after all synchronous code completes

sayHey( ); // Synchronous, executes immediately

// Output order:
// 1. log
// 3. after first setTimeout
// 4. inside sayHey
// 0. 11
// 5. inside second set timeout
// 2. inside first set timeout (after 5 seconds)
