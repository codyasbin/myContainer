// console.log("Welcome to javascript");
// console.error("This is an error message");
// console.warn("This is a warning message");
// console.info("This is some information");


// var name="sandesh";
// let age=22;
// const address="chitwan"

// console.log("********initial values********");
// console.log(name);
// console.log(age);
// console.log(address);

// var name="sandeep";
// name="utsab"

// // let age=23;
// age=25

// address="kathmandu"

// console.log("********after changing values********");
// console.log(name);
// console.log(age);
// console.log(address);

// console.log(a);
// var a=10;



// sayHi();

// function sayHi() {
//   console.log("Hi!");
// };


// let name="sandesh";
// let number=4353534;
// let isTrue=true;
// let empty=null;
// let notDefined=undefined;
// let bigInt=BigInt(123456789012345678901234567890);
// let symbol=Symbol("id");

// console.log(typeof name);
// console.log(typeof number);  
// console.log(typeof isTrue);
// console.log(typeof empty);
// console.log(typeof notDefined);
// console.log(typeof bigInt);
// console.log(typeof symbol);       


// const person = {
//   name: "sandesh",
//   age: 22,
//   address: "chitwan"
// };

// const fruits = ["apple", "banana", "orange"];

// console.log(typeof person);
// console.log(typeof fruits);


// String 

// let firstName="sandesh";
// let lastName="thapa";

// console.log(`this human first name is ${firstName} and last name is ${lastName}`);

// let TotalCount= firstName.length

// console.log("The length of the first name is "+TotalCount);

// console.log(firstName.charAt(3))

// console.log(firstName.concat(" ",lastName))
// console.log(firstName+" "+lastName)

// let num=10
// let num2="sjidfbkjsdnvs"

// console.log(num*num2)


// let parsedNum=parseInt(num2)
// let parsedNUm2=Number(num2)

// console.log(typeof parsedNum)
// console.log(typeof parsedNUm2)


// let parsedString=String(num)
// console.log(typeof parsedString)

// let str="javascript\n.   "

// console.log(str.includes("sandesh"))

// console.log(str.startsWith("Hello"))

// console.log(str.endsWith("language."))

// console.log(str.indexOf("a"))

// console.log(str.lastIndexOf("a"))

// console.log(str.slice(7,14))

// str[0]="W"

// console.log(str)

// console.log(str.toUpperCase())

// console.log(str.toLowerCase())

// console.log(str.replace("JavaScript","JS"))

// console.log(str.replaceAll("JavaScript","JS"))

// console.log(str.trim())


// console.log(str.padStart(20,"0"))

// console.log(str.trim().repeat(10)
// )

// let str="red%green%blue"

// console.log(str.split("%"))
// console.log(str.split("%",2))
// console.log(str.split(""))


// operators

// let a=10
// let b=5

// // Arithmetic operators
// console.log(a+b) // Addition
// console.log(a-b) // Subtraction
// console.log(a*b) // Multiplication
// console.log(a/b) // Division
// console.log(a%b) // Modulus
// console.log(a**b) // Exponentiation

// // Assignment operators
// let c=a // Assignment
// c+=b // c=c+b
// console.log(c)
// c-=b // c=c-b
// console.log(c)
// c*=b // c=c*b               
// console.log(c)  
// c/=b // c=c/b
// console.log(c)
// c%=b // c=c%b
// console.log(c)
// c**=b // c=c**b
// console.log(c)


// // Comparison operators

// let a=10;
// let b="10";

// // console.log(a=b); 
// console.log(a==b);
// console.log(a===b);

// console.log(a!=b);
// console.log(a!==b);

// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);


// // // Logical operators
// let x=true;
// let y=false;

// console.log(x && y);
// console.log(x || y);
// console.log(!x);

// // Increment and Decrement operators

// let count=10;

// let newCount=count++ //post-increment
// console.log("newCount:",newCount)
// console.log("count:",count)

// let newCount2=++count //pre-increment
// console.log("newCount2:",newCount2)
// console.log("count:",count)


// let x = 5;
// console.log(typeof x); 

// let result = (x > 3) ? "Yes" : "No"; 
// console.log(result);

// console.log(false+true);


// Variable Scopes 

// var globalVar="I am a global variable";

// function checkScope( ) {
//   var localVar="I am a local variable";
//   console.log(globalVar); 
//   console.log(localVar);  
// }

// checkScope();
// // console.log(localVar);
// console.log(globalVar);


// {
//   let x = 10;
//   const y = 20;
// }

// console.log(x);


// for (let i = 1; i <=10 ; i++) {
//   console.log("Count:", i);
// }


// for (let i = 1; i <= 10; i++) {
//   if (i === 5) continue;
//   console.log(i);
// }


// let colors = ["red", "green", "blue", "yellow", "purple"];

// let i=colors[0]
// let color=i

// for (let color of colors) {
//   color=="green"?console.log("DO not stop here"):console.log("Stop here");
// }

let user = { name: "Ram", age: 20 };

for (let key in user) {
  console.log(key, user[key]);
}





