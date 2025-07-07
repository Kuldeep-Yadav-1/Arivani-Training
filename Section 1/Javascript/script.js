// console.log("<-----javascript start---->")
// console.log("Hello javascript")
// document.getElementById("date").innerHTML= Date();
// document.getElementById("change-5").innerHTML = "<h3 style='color: red ;  text-transform: uppercase;'>Hello Worlds this is from js file</h3>";
// // alert("hello" );
// // document.getElementsByClassName("change-5").innerHTML = <h1 style='text-transform: uppercase;'>hello world</h1>

// console.log(5+6);

// // window.print();

// console.log(Date())

// // document.write("<------JS Statement-------->")
// console.log("Started the task of 16 May 2025")
// let x, y , z ;
// x = 4 ;
// y = 5 ;
// z = x + y ;
// console.log("the total of x + y is stored in z  :", z);

// let a, b , c ;
// a = 1 ;
// b = 5 ;
// c = a + b ;
// console.log("the total of a + b is stored in c  :", c);
// document.getElementById("para-1").innerHTML = c ;

// let a1, b2 , c3 ;
// a1 = 1 ;  b2 = 2 ; c3 = a1 + b2 ;
// console.log("the total of a1 + b2 is stored in c  :", c3);
// document.getElementById("para-2").innerHTML = c3 ;

// let name1 ="kuldeep" ;
// let name2 =   "kuldeep" ;
// document.getElementById("name1").innerHTML= name1 ;
// document.getElementById("name2").innerHTML= name2 ;

// document.getElementById("para-5").innerHTML= "this is the number fixed value:" + 10.5 ;
// document.getElementById("para-6").innerHTML= "this is the String fixed value: " + "Sandeep" ;

// let x3;
// x3=10
// document.getElementById("para-7").innerHTML = "this is the varible declared with let :" +x3 ;

// const y3=11;
// document.getElementById("para-8").innerHTML = "this is the varible declared with const which is declare & assign in same line " + y3 ;

// let x1= 11 ;
// document.getElementById("para-10").innerHTML = x1 ;

// let x2 =10 ;
// let y2 =8 ;
// let z1 = x2%y2 ;
// document.getElementById("para-9").innerHTML = "remainder operation value is 10 % 8 is :" + z1 ;

// document.getElementById("para-11").innerHTML = "the value of expration 10*5 is : " + 10*5 ;
// document.getElementById("para-12").innerHTML = "the value of expration string  is : " +"Kuldeep"+" "+"Yadav" ;

// let lastname = "Shukla" ;
// let lastName = "Yadav" ;
// document.getElementById("para-13").innerHTML = lastname;
// document.getElementById("para-14").innerHTML = lastName;

console.log(
  "Variables are Containers for Storing Data JavaScript Variables can be declared in 4 ways: 1.Automatically 2.Using var 3.Using let 4.Using const"
);
x1 = 1;
y1 = 2;
z1 = x1 + y1;
console.log("Automatically :", z1);

var x4 = 3;
var y4 = 4;
var z4 = x4 + y4;
console.log("Using var :", z4);

let x5 = 5;
let y5 = 5;
let z5 = x5 + y5;
console.log("Using let :", z5);

const x6 = 10;
const y6 = 11;
const z6 = x6 + y6;
console.log("Using const:", z6);

var x7 = 1,
  y7 = 2,
  z7 = 3;
console.log("x7,y7,z7 :", x7, y7, z7);

let x8 = 4,
  y8 = 5,
  z8 = 6;
console.log("x8,y8,z8 :", x8, y8, z8);

const x9 = 7,
  y9 = 8,
  z9 = 9;
let z10 = 10;
z10 = 11;
console.log("x9,y9,z9,z10 :", x9, y9, z9, z10);
console.log("sum of x9,y9,z9,z10 :", x9 + y9 + z9 + z10);
console.log("'5'+1 + 2 :", "5" + 1 + 2);
console.log("5+1 + '2' :", 5 + 1 + "2");
console.log("5+'1' + 2 :", 5 + "1" + 2);

console.log("let Block Scope start here");
// let scope

{
  let x = 2;
  console.log("let x :", x);
}
// console.log ("let x can not used in outer scope :", x)

// var scope
{
  var x1 = 3;
  console.log("var x1 :", x1);
}
console.log("var x1 is used in outer scope :", x1);

let y10 = "kuldeep";
// let y10 = 10 ;
// here it showes error b/c we cannot redeclare it again in the case of let .
console.log("y10 :", y10);

var x10 = "kuldeep";
var x10 = 10;
// here it showes not error b/c we can redeclare it again in the case of var .
console.log("x10 :", x10);

var x11 = 10;
console.log("x11 :", x11);
// here x is 10
{
  var x11 = 9;
  console.log("x11 :", x11);
  // here x is 9
}
console.log("x11 :", x11);
// here x is 9

let y12 = 10;
console.log("y12 :", y12);
// here y12 is 10
{
  let y12 = 9;
  console.log("y12 :", y12);
  // here y12 is 9
}
console.log("y12 :", y12);
// here y12 is 9

// we start const varibale here

const x12 = 3.14124;
console.log("x12 : ", x12);
// x12 =3.14
// here it showes error because we cannot ressign again

// const x13 ;
// console.log(x13);
// must be assigned
// it showes error because it is necessory in the case of const we declare and reassign in the same line

// Constant Objects and Arrays
// The keyword const is a little misleading.
// It does not define a constant value. It defines a constant reference to a value.

const cars = ["suzuki", "toyota", "hero", "mahindra"];
console.log("cars :", cars);
cars[0] = "BMW";
console.log("updated only an element of cars :", cars);

// cars = ["ola" ,"volvo" , "audi" ,"honda" ];
// console.log("again updated cars :", cars);
// it showes type error

const car = {
  type: "xuv",
  model: "700",
  color: "black",
};
// we can update or replace the value in the case of Object.
car.color = "silver";
car.owner = "Anand Mahindra";
// add the key owner
console.log("car :", car);

const x13 = 10;
console.log("x13 :", x13);
// here the value x13 is 10.

{
  const x13 = 12;
  console.log("x13 :", x13);
  // here the value x13 is 12.
}
console.log("x13 :", x13);
// here the value x13 is 10.

const x14 = 14;
console.log("x14 :", x14);
// here the value x14 is 14.
{
  const x14 = 15;
  console.log("x14 :", x14);
  // here the value x14 is 15.
}
{
  const x14 = 13;
  console.log("x14 :", x14);
  // here the value x14 is 13.
}

carName = "Audi";
var carName;
console.log("carName :", carName);

// carName1 = "Audi" ;
// let carName1 ;
// console.log("carName1 :" ,carName1)
// hoisting does not takes place in the case of let and const

// carName2 = "Audi" ;
// const carName2 ;
// console.log("carName2 :" ,carName2)
// hoisting does not takes place in the case of let and const

console.log("JS operator start here");
console.log("<--------Assignment operator---------->");
let x = 10;
console.log("x : ", x);
x += x;
console.log("x+=x :", x);
x -= x;
x = 10;
console.log("x-=x :", x);
x *= x;
console.log("x*=x :", x);
x /= x;
console.log("x/=x :", x);
x %= x;
console.log("x%=x :", x);
x = 10;
y = 2;
console.log("x :", x, "y :", y);
x **= 2;
console.log("x**=y :", x);

console.log("<------Arithmatic operator--------->");
let x15 = 10;
let y15 = 5;
console.log(`the value of x15 is : ${x15} & y15 is : ${y15}`);
console.log("Addition of x15 + y15", x15 + y15);
console.log("Subtraction of x15 - y15", x15 - y15);
console.log("Multiplication of x15 * y15", x15 * y15);
console.log("division of x15 / y15", x15 / y15);
console.log("Modulus of x15 % y15", x15 % y15);
console.log("Power of x15 ** y15", x15 ** y15);
x15++;
console.log("X15++ ", x15);
y15--;
console.log("y15-- ", y15);

console.log("<-----Comparision operator------>");
let text1 = "A";
let text2 = "B";
console.log("text1 :", text1);
console.log("text2 :", text2);
console.log("text1 == text2 :", text1 == text2);
console.log("text1 < text2 :", text1 < text2);
console.log("text1 <= text2 :", text1 <= text2);
console.log("text1 > text2 :", text1 > text2);
console.log("text1 >= text2 :", text1 >= text2);
console.log("text1 != text2 :", text1 != text2);
text1 = 5;
text2 = "5";
console.log("text1 :", text1);
console.log("text2 :", text2);
console.log("text1 == text2 :", text1 == text2);
console.log("text1 === text2 :", text1 === text2);
console.log("text1 < text2 :", text1 < text2);
console.log("text1 <= text2 :", text1 <= text2);
console.log("text1 > text2 :", text1 > text2);
console.log("text1 >= text2 :", text1 >= text2);
console.log("text1 != text2 :", text1 != text2);

console.log("<----Logical operator------>");
text1 = 5;
text2 = 6;
let text3 = 7;
let text4 = 8;
console.log("text1 :", text1);
console.log("text2 :", text2);
console.log("text3 :", text3);
console.log("text4 :", text4);
console.log("<----Logical && operator------>");
console.log(
  "text1 >= text2 && text3 >= text4 :",
  text1 >= text2 && text3 >= text4
);
console.log(
  "text1 >= text2 && text3 <= text4 :",
  text1 >= text2 && text3 <= text4
);
console.log(
  "text1 <= text2 && text3 >= text4 :",
  text1 <= text2 && text3 >= text4
);
console.log(
  "text1 <= text2 && text3 <= text4 :",
  text1 <= text2 && text3 <= text4
);
console.log("<----Logical || operator------>");
console.log(
  "text1 >= text2 || text3 >= text4 :",
  text1 >= text2 || text3 >= text4
);
console.log(
  "text1 >= text2 || text3 <= text4 :",
  text1 >= text2 || text3 <= text4
);
console.log(
  "text1 <= text2 || text3 >= text4 :",
  text1 <= text2 || text3 >= text4
);
console.log(
  "text1 <= text2 || text3 <= text4 :",
  text1 <= text2 || text3 <= text4
);
console.log("<----Logical ! operator------>");
console.log("text1 >= text2  :", text1 >= text2);
console.log("!(text1 >= text2)   :", !(text1 >= text2));
console.log("text3 <= text4 :", text3 <= text4);
console.log("!(text3 <= text4) :", !(text3 <= text4));

console.log("<--------Logical Assignment operator---------->");
x = true;
y = false;
console.log("x &&= y :", (x &&= y));
// console.log(x && (x = y)) ;
x = true;
y = false;
console.log("x ||= y :", (x ||= y));

x = true;
y = false;
// console.log("x ??= y :",x ??= y);

console.log("<--------Bitwise operator---------->");
x = 1;
y = 2;
console.log(" x & y :", x & y);
console.log(" x | y :", x | y);
console.log(" ~y :", ~y);

console.log("<--------Bitwise Assignment  operator---------->");
x = 1;
y = 2;
console.log(" x &= y :", (x &= y));
x = 1;
y = 2;
console.log(" x |= y :", (x |= y));
// console.log(" ~=y :", ~=y);

console.log("<----typeof operator------>");
console.log("typeof('5') :", typeof "5");
console.log("typeof(5) :", typeof 5);
console.log("typeof(true) :", typeof true);
console.log("typeof(null) :", typeof null);
console.log("typeof(undefined) :", typeof undefined);
console.log("typeof([]) :", typeof []);
console.log("typeof({}) :", typeof {});

console.log("<-------- Terniary operator------>");
text3 = 15;
text4 = 10;
console.log("text3 :", text3);
console.log("text4 :", text4);
let res =
  text3 < text4 ? "text3 is less than text4" : "text3 is greater than text4";
console.log("result is :", res);

console.log("<----String operator as a concatenation------>");
let text5 = "Kuldeep";
let text6 = "Yadav";
console.log(text5 + " " + text6);
text5 += text6;
console.log(text5);

console.log("<----Adding string and no------>");
console.log("'5' + 5 :", "5" + 5);
console.log("'5' + '5' :", "5" + "5");
console.log("5 + 5 :", 5 + 5);
console.log("'hello' + 5 :", "hello" + 5);

console.log("<--------Data type---------->");
console.log("<--------Number---------->");
let num = 10;
let num1 = 10.5;
console.log("num :", num);
console.log("typeof(num) :", typeof num);
console.log("num1 :", num1);
console.log("typeof(num1) :", typeof num1);

console.log("<--------String---------->");
let str = "kuldeep";
console.log("str :", str);
console.log("typeof(str) :", typeof str);

let str1 = "Amaan";
console.log("str1 :", str1);
console.log("typeof(str1) :", typeof str1);

console.log("<--------Boolean---------->");
let bool = true;
let bool1 = false;
console.log("bool :", bool);
console.log("typeof(bool) :", typeof bool);
console.log("bool1 :", bool1);
console.log("typeof(bool1) :", typeof bool1);

console.log("<--------Undefined---------->");
let per;
console.log("per :", per);
console.log("typeof(per) :", typeof per);

console.log("<--------null---------->");
let null1 = null;
console.log("null1 :", null1);
console.log("typeof(null1) :", typeof null1);

console.log("<--------Array---------->");
let arr = [
  1,
  "Amaan",
  "Alam",
  "Software Developer",
  { id: 101, companay_Name: "arivani pvt ltd" },
];
let arr1 = [
  2,
  "kuldeep",
  "yadav",
  "software tranee",
  { id: 102, companay_Name: "arivani pvt ltd" },
];
console.log("arr :", arr);
console.log("typeof(arr) :", typeof arr);
console.log("arr1 :", arr1);
console.log("typeof(arr1) :", typeof arr1);

console.log("<--------Object---------->");
let person1 = {
  id: 1,
  firstName: "shubham",
  lastName: "Bharati",
  position: "React Devloper tranee",
};

let person2 = {
  id: 2,
  firstName: "kuldeep",
  lastName: "Yadav",
  position: "MERN Devloper tranee",
};

console.log("person1 :", person1);
console.log("typeof(person1) :", typeof person1);
console.log("person2 :", person2);
console.log("typeof(person2) :", typeof person2);
console.table("person2 :", person2);
console.log("typeof(person2) :", typeof person2);

console.log("<--------JS sting & Number conversion---------->");
x = 16;
y = 10;
z = "Kuldeep";
console.log("x+ y :", x + y);
console.log("x + y + z :", x + y + z);
console.log("10 + 20 + 'Amman' :", 10 + 20 + "Amman");
console.log("'Amman' + 10 + 20 :", "Amman" + 10 + 20);

console.log("<--------Dynamic Datatype---------->");
let y16 = 10;
console.log("y16 :", y16);
console.log("typeof(y16) :", typeof y16);
y16 = true;
console.log("y16 :", y16);
console.log("typeof(y16) :", typeof y16);
y16 = "syam";
console.log("y16 :", y16);
console.log("typeof(y16) :", typeof y16);

console.log("<--------Array some concept---------->");
let arr2 = ["volvo", "hero", "honda"];
console.log("arr2 :", arr2);
arr2 = [];
console.log("arr2 :", arr2);
arr2[0] = "suzuki";
arr2[1] = "tata";
arr2[2] = "mahindra";
console.log("arr2 :", arr2);

console.log("<--------Array with new Array---------->");
let car1 = new Array("volvo", "hero", "honda", "suzuki", "mahindra");
console.log("car1 :", car1);
console.log("typeof(car1) :", typeof car1);

// let length =car1.length;
console.log("<--------Array length Property---------->");
console.log("car1.length :", car1.length);
console.log("<--------Array sort() method---------->");
console.log("car1.sort() :", car1.sort());
car1 = ["volvo", "hero", "honda", "suzuki", "mahindra"];
console.log("car1 :", car1);
console.log("<--------Array first Element---------->");
console.log("car1[0]:", car1[0]);
console.log("<--------Array Last Element---------->");
console.log("car1.length - 1 :", car1[car1.length - 1]);
console.log("<--------Array Element with the help of function---------->");
car1 = ["volvo", "hero", "honda", "suzuki", "mahindra"];
car1Length = car1.length;
for (let i = 0; i < car1Length; i++) {
  console.log("car1 :", car1[i]);
}

// console.log("<--------Array forEach---------->");
// console.log("car1.forEach :",car1.forEach);

console.log("<--------Array Method---------->");
console.log("<--------Array push Method---------->");
console.log("before push car1 :", car1);
x = car1.push("scorpio");
console.log("x  :", x);
console.log("after push car1 :", car1);

console.log("<--------Array pop Method---------->");
console.log("before pop car1 :", car1);
poped = car1.pop();
console.log("poped  :", poped);
console.log("after pop car1 :", car1);

console.log("<--------Array Unshift Method---------->");
console.log("before unshift car1 :", car1);
unshifted_x = car1.unshift("xuv");
console.log("unshifted_x:", unshifted_x);
console.log("after unshift car1 :", car1);

console.log("<--------Array shift Method---------->");
console.log("before shift car1 :", car1);
shifted_x = car1.shift();
console.log("shifted_x  :", shifted_x);
console.log("after shift car1 :", car1);

console.log("<--------Array delete Method---------->");
console.log("before delete car1 :", car1);
deleted_x = delete car1[0];
console.log("deleted_x  :", deleted_x);
console.log("after deleted car1 :", car1);

console.log("<--------Array concat Method---------->");
car1[0] = "defender";
console.log("before concat car1 :", car1);
let car2 = ["jaguar", "lexus", "Bmw"];
console.log("car2 :", car2);
let concat1 = car1.concat(car2);
console.log("concat1  :", concat1);
console.log("after concat car1 :", car1);

console.log("<--------Array slice Method---------->");
console.log("before slice car1 :", car1);
let sliceCar1 = car1.slice(1, 3);
console.log("sliceCar1  :", sliceCar1);
console.log("after slice car1 :", car1);

console.log("<--------Array splice Method---------->");
console.log("before splice car1 :", car1);
let spliceCar1 = car1.splice(0, 1, "innova", "xuv-700");
console.log("spliceCar1  :", spliceCar1);
console.log("after splice car1 :", car1);

console.log("<--------Array flat Method---------->");
let myArr = [[1, 2], [3, 4], [5, 6, 7], [8]];
console.log("before flat myArr :", myArr);
let flatArr = myArr.flat();
console.log("flatArr :", flatArr);
console.log("after flat myArr :", myArr);

console.log("<--------Array flat map Method---------->");
let myArr1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("before flat Map myArr1 :", myArr1);
let flatMapArr = myArr1.flatMap((x) => [x, x * 10]);
console.log("flatMapArr :", flatMapArr);
console.log("after flat Map myArr1 :", myArr1);

console.log("<--------Array isArray Method---------->");
x = Array.isArray(car1);
y1 = true;
y = Array.isArray(y1);
z1 = 1;
z = Array.isArray(z1);
console.log("Array.isArray(car1) :", x);
console.log("Array.isArray(true) :", y);
console.log("Array.isArray(z1) :", z);
console.log("car1 :", car1);

console.log("<--------instance of---------->");
x = car1 instanceof Array;
console.log("x :", x);
y = y1 instanceof Array;
console.log("y :", y);

z = person1 instanceof Object;
console.log("z :", z);
console.log(
  "<--------instance of used for checking variable is array or object it return boolean value---------->"
);

console.log("<----------Nested Object And Nested Array-------->");
let myobj = {
  id: 101,
  firstName: "Kuldeep",
  lastName: "yadav",
  skills: {
    frontEnd: ["html", "css", "javascript"],
    backEnd: ["node js", "express js", "mongo db"],
  },
};
console.log("myobj :", myobj);

// console.log("<----------Array method start here-------->");
let fruits = ["banana", "apple", "mango", "grapes", "fig"];
console.log("<----------Array length -------->");
x = fruits.length;
console.log("fruits.length :", fruits.length);

fruits[10] = "pineApple";
x = fruits.length;
console.log("fruits.length :", fruits.length);
console.log("fruits :", fruits);
fruLength = fruits.length;
for (let i = 0; i < fruLength; i++) {
  console.log("fruits :", [i], fruits[i]);
  // console.log(`fruit ${i} is ${fruits[i]}`)
}

console.log("<----------Array convert into string -------->");
fruitstr = fruits.toString();
console.log("fruitstr :", fruitstr);
console.log("fruits :", fruits);

console.log("<----------Array at method -------->");
fruitsAt2 = fruits.at(2);
console.log("fruitsAt2 :", fruitsAt2);
console.log("fruits :", fruits);

console.log("<----------Array join method -------->");
fruitsJoin = fruits.join("-");
console.log("fruitsJoin :", fruitsJoin);
console.log("fruits :", fruits);

console.log(
  "<---------------------ArraySEARCH Method------------------------->"
);
console.log("<----------Array indexOf method -------->");
fruits = ["banana", "apple", "mango", "grapes", "fig", "orange"];
console.log("fruits before indexOf :", fruits);
let indexFromStart = fruits.indexOf("fig");
console.log("indexFromStart :", indexFromStart);
console.log("fruits after indexOf :", fruits);

console.log("<----------Array lastindexOf method -------->");
fruits = ["banana", "apple", "mango", "grapes", "fig", "orange"];
console.log("fruits before lastIndexOf :", fruits);
let lastIndexFromStart = fruits.lastIndexOf("orange");
console.log("indexFromlast :", lastIndexFromStart);
console.log("fruits after lastIndexOf :", fruits);

console.log(
  "<----------Array includes method 'it return boolean value' -------->"
);
fruits = ["banana", "apple", "mango", "grapes", "fig", "orange"];
console.log("fruits before includes :", fruits);
let includes1 = fruits.includes("orange");
let includes2 = fruits.includes("pineApple");
console.log("includes1 :", includes1);
console.log("includes2 :", includes2);
console.log("fruits after includes :", fruits);

console.log("<----------Array find method-------->");
let numbers = [4, 5, 9, 10, 15, 20];
let find1 = numbers.find((x) => x > 9);
console.log("find1 :", find1);

console.log("<----------Array findIndex method-------->");
numbers = [4, 5, 9, 10, 15, 20];
let findIndex1 = numbers.findIndex((x) => x > 9);
console.log("findIndex1 :", findIndex1);

console.log("<----------Array findLast method-------->");
numbers = [4, 5, 9, 10, 15, 20];
let findLast1 = numbers.findLast((x) => x > 9);
console.log("findLast1 :", findLast1);

console.log("<----------Array findLastIndex method-------->");
numbers = [4, 5, 9, 10, 15, 20];
let findLastIndex1 = numbers.findLastIndex((x) => x > 9);
console.log("findLastIndex1 :", findLastIndex1);

console.log("<----------Array Sort method-------->");

fruits = ["banana", "apple", "mango", "grapes", "fig", "orange"];

console.log("before sort fruits :", fruits);
let sort1 = fruits.sort();
// numbers = [14 ,5 ,9 ,10 ,15 ,20];
// let sort2 = numbers.sort();
// console.log("sort2 :",sort2);
console.log("sort1 :", sort1);
console.log("after sort fruits :", fruits);

console.log("<----------Array reverse method-------->");
fruits = ["banana", "apple", "mango", "grapes", "fig", "orange"];
console.log("before reverse fruits :", fruits);
let reverse1 = fruits.reverse();
console.log("reverse1 :", reverse1);
console.log("after reverse fruits :", fruits);

console.log("<----------Array tosorted method-------->");
fruits = ["banana", "apple", "mango", "grapes", "fig", "orange"];
console.log("before toSorted fruits :", fruits);
let toSorted1 = fruits.toSorted();
console.log("toSorted1 :", toSorted1);
console.log("after toSorted1 fruits :", toSorted1);

console.log("<----------Array toReversed method-------->");
fruits = ["banana", "apple", "mango", "grapes", "fig", "orange"];
console.log("before toSorted fruits :", fruits);
let toReversed1 = fruits.toReversed();
console.log("toReversed1 :", toReversed1);
console.log("after toSorted1 fruits :", toReversed1);

console.log("<----------Array Sort for Numeric method-------->");
numbers = [14, 5, 9, 10, 15, 20];
console.log("before sort numbers :", numbers);
let sort2 = numbers.sort((a, b) => a - b);
console.log("sort2 :", sort2);
console.log("after sort numbers :", numbers);

// console.log("<----------Array iteration method-------->");
console.log(
  "<-------------------------------String Start here-------------------------->"
);
let str2 = "hello , My World's.";
console.log("str 2 :", str2);
console.log("<----------String with the help of template litral--------->");
str2 = `this is template litral :${numbers}`;
console.log("str 2 :", str2);

console.log("<----------String use of ' \\--------->");
str2 = "hello, My World's.";
console.log("str2 :", str2);
str2 =
  '"Dream is not that which you see while sleeping, it is something that does not let you sleep."';
console.log("str2 :", str2);

str2 = `this 
is template 
litral work similier like 
html pre tag`;
console.log("str2 :", str2);

console.log("<----------String as a Object--------->");
str2 = "new string";
str3 = `new string`;
let text8 = new String("new string");
let text7 = new String("new string");
console.log("str2 :", str2);
console.log("str3 :", str3);
console.log("text7 :", text7);
console.log("text8 :", text8);

console.log("str2 == str3 :", str2 == str3);
console.log("str2 == text7 :", str2 == text7);
console.log("text8 == text7 :", text7 == text8);

console.log("str2 === str3 :", str2 === str3);
console.log("str2 === text7 :", str2 === text7);
console.log("text8 === text7 :", text7 === text8);

console.log("typeof(str2) :", typeof str2);
console.log("typeof(str3) :", typeof str3);
console.log("typeof(text7) :", typeof text7);
console.log("typeof(text8) :", typeof text8);

console.log("<----------String Method--------->");
console.log("<----------String length--------->");
str3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let strLength = str3.length;
console.log("str 3 :", str3);
//length-26
console.log("strLength :", strLength);

console.log("<----------String charAt--------->");
str3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let strCharAt1 = str3.charAt(25);
//Z
let strCharAt2 = str3.charAt(0);
//A
console.log("str 3 :", str3);
console.log("strCharAt1 :", strCharAt1);
console.log("strCharAt2 :", strCharAt2);
console.log("<----------String charCodeAt--------->");
str3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let strCharCodeAt0 = str3.charCodeAt(0);
//65
let strCharCodeAt1 = str3.charCodeAt(1);
//66
let strCharCodeAt25 = str3.charCodeAt(25);
//90
console.log("str 3 :", str3);
console.log("strCharCodeAt0 :", strCharCodeAt0);
console.log("strCharCodeAt1 :", strCharCodeAt1);
console.log("strCharCodeAt25 :", strCharCodeAt25);

console.log("<----------String At method--------->");
str3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let strAt0 = str3.at(0);
//A
let strAt1 = str3.at(1);
//B
console.log("strAt0 :", strAt0);
console.log("strAt1 :", strAt1);

str3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let text9 = str3[2];
console.log("text9 :", text9);

console.log("<----------String text method--------->");
str3 = "Hello world";
let text10 = str3[5];
console.log("text10 :", text10);

console.log("<----------String text method--------->");
str3 = "Hello world .";
str3[0] = "h";
console.log("str3 :", str3);
// Hello world not hello world does not work properly

console.log(
  "<----------String Extracting method slice ,substring , substr  method--------->"
);
console.log("<----------String slice  method--------->");
str3 = "Hello world. this is my first code.";
console.log("before slice str3 :", str3);
let strSlice = str3.slice(13, 17);
console.log("strSlice :", strSlice);
console.log("before slice str3 :", str3);

console.log("<----------String substring  method--------->");
str3 = "Hello world. this is my first code.";
console.log("before substring str3 :", str3);
let strSubString = str3.substring(13, 17);
console.log("strSubString :", strSubString);
console.log("before substring str3 :", str3);

console.log("<----------String substr  method--------->");
str3 = "Hello world. this is my first code.";
console.log("before substr str3 :", str3);
let strSubStr = str3.substr(13, 4);
console.log("strSubStr :", strSubStr);
console.log("before substr str3 :", str3);

console.log("<----------String toUpperCase method--------->");
str3 = "Hello world. this is my first code.";
console.log("before toUpperCase str3 :", str3);
let strToUpperCase = str3.toUpperCase();
console.log("strToUpperCase :", strToUpperCase);
console.log("before toUpperCase str3 :", str3);

console.log("<----------String toLowerCase method--------->");
str3 = "Hello world. this is my first code.";
console.log("before toLowerCase str3 :", str3);
let strtoLowerCase = str3.toLowerCase();
console.log("strtoLowerCase :", strtoLowerCase);
console.log("before toLowerCase str3 :", str3);

console.log("<----------String concat method--------->");
str3 = "Hello world. this is my first code.";
let str4 = " I'm feel too good writing my first Code.";
console.log("before concat str3 :", str3);
let strConcat = str3.concat(str4);
console.log("strConcat :", strConcat);
console.log("after concat str3 :", str3);

console.log("<----------String concat with second method--------->");
str3 = "Hello world. this is my first code.";
str4 = " I'm feel too good writing my first Code.";
console.log("before concat str3 :", str3);
console.log("before concat str4 :", str4);
console.log("before concat str3 :", str3 + " " + str4);

console.log("<----------String trim method--------->");
str3 = " Hello world. this is my first code. ";
str4 = " I'm feel too good writing my first Code.";
console.log("before trim str3 :", str3);
let strTrim = str3.trim();
console.log("strTrim :", strTrim);
console.log("after trim str3 :", str3);

console.log("<----------String repeat method--------->");
str3 = " Hello world. this is my first code. ";
console.log("before repeat str3 :", str3);
let strRepeat = str3.repeat(2);
console.log("strRepeat :", strRepeat);
console.log("after repeat str3 :", str3);

console.log("<----------String replace method--------->");
str3 = "Hello world. this is my first code. this world is beautiful";
console.log("before replace str3 :", str3);
let strReplace = str3.replace("world", "world-1");
console.log("strReplace :", strReplace);
console.log("after replace str3 :", str3);

console.log("<----------String replace method--------->");
str3 = "Hello world. this is my first code. this world is beautiful";
console.log("before replace str3 :", str3);
let strReplaceAll = str3.replaceAll("world", "world-1");
console.log("strReplaceAll :", strReplaceAll);
console.log("after replace str3 :", str3);

console.log("<----------String split method--------->");
str3 = "Hello world. this is my first code. this world is beautiful";
console.log("before split str3 :", str3);
let strSplit = str3.split(" ");
let strSplit1 = str3.split(".");
console.log("strSplit :", strSplit);
console.log("strSplit1 :", strSplit1);
console.log("after split str3 :", str3);

console.log("<----------String Search method--------->");
console.log("<----------String indexOf method--------->");
str3 = "Hello world. this is my first code. this world is beautiful";
console.log("before indexOf str3 :", str3);
let strIndexOf = str3.indexOf("world");
console.log("strIndexOf :", strIndexOf);
strIndexOf = str3.indexOf("world", 9);
console.log("strIndexOf :", strIndexOf);

console.log("<----------String lastIndexOf method--------->");
str3 = "Hello world. this is my first code. this world is beautiful";
console.log("before lastIndexOf str3 :", str3);
let strLastIndexOf = str3.lastIndexOf("world");
console.log("strLastIndexOf :", strLastIndexOf);
let strLastIndexOf1 = str3.lastIndexOf("worlds");
console.log("strLastIndexOf1 :", strLastIndexOf1);

console.log("<----------String search method--------->");
console.log(
  "<----------String search method we can use regular expression but in indexOf we can search the position but not pattern checking--------->"
);
str3 = "Hello woRld. this is my first code. this world is beautiful";
console.log("before search str3 :", str3);
let strSearch = str3.search("world");
console.log("strSearch :", strSearch);
console.log("after search str3 :", str3);

console.log("<----------String match method--------->");
str3 = "Hello worRld. this is my first code. this world is beautiful";
console.log("before search str3 :", str3);
let strMatch = str3.match("world");
console.log("strMatch :", strMatch);
console.log("after search str3 :", str3);

console.log(
  "<----------String match method with the help of regular expression--------->"
);
str3 =
  "Hello woRld. this is my first code. this world is beautiful. & world is  also best for me.";
console.log("before search str3 :", str3);
let strMatch1 = str3.match(/world/gi);
console.log("strMatch1 :", strMatch1);
let strMatch2 = str3.matchAll("world");
console.log("strMatch2 :", strMatch2);
console.log("after search str3 :", str3);

console.log("<----------String includes expression--------->");
str3 =
  "Hello woRld. this is my first code. this world is beautiful. & world is  also best for me.";
console.log("before includes str3 :", str3);
let strIncludes = str3.includes("world");
let strIncludes1 = str3.includes("world1");
console.log("strIncludes :", strIncludes);
console.log("strIncludes1 :", strIncludes1);
console.log("after includes str3 :", str3);

console.log("<---------Remaining method of Array--------->");
console.log("<---------Numeric Sorting method of Array--------->");
console.log("<---------Assending Sorting method of Array--------->");
numbers = [100, 20, 30, 60, 50, 40, 80, 1];
console.log("before sorting Numbers :", numbers);
let SortedNumbers = numbers.sort((a, b) => a - b);
console.log("SortedNumbers :", SortedNumbers);
console.log("after sorting Numbers :", numbers);

console.log("<---------Decending Sorting method of Array--------->");
numbers = [100, 20, 30, 60, 50, 40, 80, 1];
console.log("before sorting Numbers :", numbers);
let SortedNumbers1 = numbers.sort((a, b) => b - a);
console.log("SortedNumbers1 :", SortedNumbers1);
console.log("after sorting Numbers :", numbers);

console.log("<---------Reverse method of Array--------->");
numbers = [100, 20, 30, 60, 50, 40, 80, 1];
console.log("before reverse Numbers :", numbers);
let ReversedNumbers = numbers.reverse();
console.log("ReversedNumbers :", ReversedNumbers);
console.log("after reverse Numbers :", numbers);

console.log("<---------Reverse method of Array--------->");
numbers = [100, 20, 30, 60, 50, 40, 80, 1];
console.log("before reverse Numbers :", numbers);
let ToReversedNumbers = numbers.toReversed();
console.log("ToReversedNumbers :", ToReversedNumbers);
console.log("after reverse Numbers :", numbers);

console.log("<---------Reverse method of Array--------->");
numbers = [100, 20, 30, 60, 50, 40, 80, 1];
console.log("before reverse Numbers :", numbers);

console.log("<---------Array iteration method--------->");
console.log("<---------Array forEach method--------->");
numbers = [100, 20, 30, 60, 50, 40, 80, 1];
console.log("before reverse Numbers :", numbers);
let arrForEach = numbers.forEach((value, index, arr) => {
  // console.log("arr :",arr);
  // console.log("index :",index);
  console.log(`value of index ${index} is :`, value);
});

console.log("<---------Array forEach with call back function method--------->");
numbers = [100, 20, 30, 60, 50, 40, 80, 1];
console.log("before foreach Numbers :", numbers);
let arrForEach1 = numbers.forEach(myForEach);

function myForEach(value, index, arr) {
  // console.log("arr :",arr);
  // console.log("index :",index);
  console.log(`value of index ${index} is :`, value);
}

console.log("<---------Array map with call back function method--------->");
numbers = [100, 20, 30, 60, 50, 40, 80, 1];
console.log("before map Numbers :", numbers);
let arrmap = numbers.map(myMap);
function myMap(value, index, arr) {
  // console.log("arr :",arr);
  // console.log("index :",index);
  // console.log(`value of index ${index} is :`,value);
  return value * 2;
}
console.log("after map Numbers :", numbers);
console.log("arrmap :", arrmap);

console.log("<---------Array Flatmap with call back function method--------->");
numbers = [100, 20, 30, 60, 50, 40, 80, 1];
console.log("before reverse Numbers :", numbers);
let arrFlatMap = numbers.flatMap((x) => [x, 2 * x]);
// function myFlatMap(value,index,arr){
//     return value * 2 ;
// }

console.log("after flat map Numbers :", numbers);
console.log("arrFlatMap :", arrFlatMap);

console.log("<---------Array Filter with call back function method--------->");
numbers = [100, 20, 30, 60, 50, 40, 80, 1];
console.log("before filter Numbers :", numbers);
let arrFilter = numbers.filter(myFilter);
function myFilter(value, index, arr) {
  // console.log("arr :",arr);
  // console.log("index :",index);
  // console.log(`value of index ${index} is :`,value);
  return value >= 30;
}
console.log("after filter Numbers :", numbers);
console.log("arrFilter :", arrFilter);

console.log("<---------Array reduce method--------->");
numbers = [10, 20, 30, 40, 50, 60];
console.log("before reduce Numbers :", numbers);
let total = 0;
let arrReduce = numbers.reduce(myReduce);
function myReduce(total, value) {
  // total += value ;
  // console.log("total :",total ) ;
  return total + value;
}
console.log("arrReduce :", arrReduce);
console.log("after reduce Numbers :", numbers);

console.log("<---------Array reduce method--------->");
numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);
console.log(sum);
function myFunction(total, value, index, array) {
  // console.log(total + value);
  return total + value;
}
console.log("numbers :", numbers);
console.log("sum :", sum);

console.log("<---------Array every method--------->");
console.log(
  "Array every method used for if every element stiesfy every element condition then result is true else false"
);
numbers = [100, 20, 30, 60, 50, 40, 80, 10];
console.log("before every Numbers :", numbers);
let arrEvery = numbers.every((x) => x > 9);
console.log("arrEvery :", arrEvery);

console.log("<---------Array some method--------->");
console.log(
  "Array some method used for if some element stiesfy condition then result is true."
);
numbers = [100, 20, 30, 60, 50, 40, 80, 10];
console.log("before some Numbers :", numbers);
let arrSome = numbers.some((x) => x > 80);
console.log("arrSome :", arrSome);
console.log("after some Numbers :", numbers);

console.log("<---------Array from method--------->");
str = "ABCDEFGHIJKLMNOPQRSTUV";
console.log("before from str :", str);
let arrFrom = Array.from(str);
console.log(" arrFrom :", arrFrom);
console.log("after from str :", str);

console.log("<---------Array keys method--------->");
numbers = [100, 20, 30, 60, 50, 40, 80, 10];
console.log("before keys Numbers :", numbers);
let arrKeys = numbers.keys();
console.log("arrKeys :", arrKeys);
let text = " ";
for (let x of arrKeys) {
  text += x;
  // return text ;
  console.log(`text index no is ${text}`);
}
console.log("after keys Numbers :", numbers);

console.log("<---------Array keys method--------->");
numbers = [100, 20, 30, 60, 50, 40, 80, 10];
console.log("before entries Numbers :", numbers);
let arrEntries = numbers.entries();
console.log("arrKeys :", arrKeys);
text = " ";
for (let y of arrEntries) {
  text += y;
  // return text ;
  console.log(`text index no is : ${text}`);
}
console.log("after entries Numbers :", numbers);

console.log("<---------Array with method--------->");
numbers = [100, 20, 30, 60, 50, 40, 80, 10];
console.log("before with method Numbers :", numbers);
let arrWith = numbers.with(0, "marks :");
console.log("arrWith :", arrWith);
console.log("after with method Numbers :", numbers);

console.log("<---------Array spread method--------->");
number1 = [100, 10];
number2 = [20, 40, 80, 10];
number3 = [60, 50, 10];
number4 = [100, 20];

console.log("before spread method Number1 :", number1);
console.log("before spread method Number2 :", number2);
console.log("before spread method Number3 :", number3);
console.log("before spread method Number4 :", number4);
let arrSpread = [...number1, ...number2, ...number3, ...number4];
console.log("arrSpread :", arrSpread);
console.log("after with method Numbers :", numbers);

console.log("<---------object interoduction--------->");
console.log("<---------object with Object litrals--------->");
let person3 = {
  firstName: "Kuldeep",
  lastName: "Yadav",
  age: 27,
  eyeColor: "black",
  fullName: function () {
    console.log("fullName is : ", person4.firstName + " " + person4.lastName);
    return this.firstName + " " + this.lastName;
  },
};
console.log("person3 :", person3);
console.log("person3.firstName :", person3.firstName);
console.log("person3.fullName :", person3.fullName);
console.log("person3.fullName() :", person3.firstName + person3.lastName);

console.log("<---------object with using new keyword--------->");
let person4 = new Object();
console.log("before adding property person4 :", person4);
person4.firstName = "Amman";
person4.lastName = "Alam";
person4.age = 23;
person4.eyeColor = "blue";
person4.fullName = function () {
  console.log("fullName is : ", person4.firstName + " " + person4.lastName);
  return this.firstName + " " + this.lastName;
};
console.log("after adding property person4 :", person4);

console.log("person3.firstName :", person3.firstName);
console.log("person3.[lastName] :", person3["lastName"]);
// console.log("person3.fullName() :" ,person3.fullName()) ;
console.log("person4.fullName() :", person4.fullName());

console.log(
  "<---------we can add ,remove ,delete ,replace the object property--------->"
);
console.log("<---------add object property--------->");
person3.nationality = "indian";
console.log("add nationity property in person 3 :", person3);

console.log("<---------delete object property--------->");
delete person3.age;
console.log("after deleting property in person 3 :", person3);

console.log("<---------Object method--------->");
let name3 = person3.fullName();
console.log("name3 :", name3);
let name3InUpperCase = person3.fullName().toUpperCase();
console.log("name3InUpperCase :", name3InUpperCase);

let p1 = (document.getElementById("p-1").innerHTML =
  person3 + " " + person3.fullName());

console.log("<---------Object keys,value--------->");
person3 = {
  firstName: "Kuldeep",
  lastName: "Yadav",
  age: 27,
  eyeColor: "black",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log("person3 :", person3);
for (let keys in person3) {
  console.log("keys :", keys);
  console.log("value = person3[keys] :", person3[keys]);
}

console.log("<---------Object values--------->");
person3 = {
  firstName: "Kuldeep",
  lastName: "Yadav",
  age: 27,
  eyeColor: "black",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log("person3 :", person3);
let valArr = Object.values(person3);
console.log("valArr :", valArr);

console.log("<---------Object entries--------->");
let entriesArr = Object.entries(person3);
console.log("entriesArr :", entriesArr);

console.log("<---------JSON Stringify--------->");
let jsonStr = JSON.stringify(person3);
console.log("jsonStr :", jsonStr);

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.fullName = function () {
    return "my full name is " + this.firstName + " " + this.lastName;
  };
}

Person.prototype.nationality = "indian";
console.log("Person :", Person);
// console.log("Person() :",Person());

let myFather = new Person("SP", "yadav", 50, "black");
console.log("myFather :", myFather);

let myMother = new Person("Pk", "yadav", 46, "black");
console.log("myMother :", myMother);

let mySelf = new Person("Kuldeep", "yadav", 26, "black");
console.log("mySelf :", mySelf);
console.log("mySelf nationality :", mySelf.nationality);
console.log("mySelf fullName() :", mySelf.fullName());

console.log("<---------Number Properties--------->");
let x16 = Number.EPSILON;
console.log("x16 :", x16);

console.log("<---------Fuction--------->");
function add(a, b, c) {
  // console.log("add :",a + b + c) ;
  return a + b + c;
}
let x17 = add(5, 6, 7);
// console.log("x17 :",x17);
add(1, 2, 3);

function mul(a, b, c) {
  console.log("mult :", a * b * c);
  return a * b * c;
}
mul(5, 6, 7);
mul(1, 2, 3);

console.log("<---------Array of Object--------->");
let data = [
  {
    firstName: "Kuldeep",
    lastName: "Yadav",
    id: 101,
    profile: "trainee",
  },
  {
    firstName: "Amman",
    lastName: "Alam",
    id: 102,
    profile: "React developer",
  },
  {
    firstName: "Shubham",
    lastName: "Yadav",
    id: 103,
    profile: "Node Js trainee",
  },
];
console.log("data :", data);
console.log("data[0] :", data[0]);

console.log("<---------loops strat here--------->");
fruits = ["banana", "mango", "fig", "apple", "pine-apple"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`fruit ${i} is ${fruits[i]}`);
}

let strName = "Kuldeep";
let x18 = strName.length;
console.log("x18 ;", x18);
for (let i = 0; i < x18; i++) {
  console.log("character is :", strName.charAt(i));
}

console.log("<---------table with the help of loop--------->");
console.log("table of :", 5);
for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}

console.log("<---------for in loop in Object--------->");
person3 = {
  firstName: "Kuldeep",
  lastName: "Yadav",
  age: 27,
  position: "MERN Developer",
};
for (let keys in person3) {
  console.log("keys :", keys);
  console.log("person3[keys] :", person3[keys]);
  // console.log(`${keys} is ${person3[keys]}`);
}

console.log("<---------for in loop in Array--------->");
fruits = ["banana", "mango", "fig", "apple", "pine-apple"];
for (let keys in fruits) {
  console.log("index :", keys);
  console.log("fruits[index] :", fruits[keys]);
  console.log(`index ${keys} is ${fruits[keys]}`);
}

console.log("<---------for of loop in string--------->");
strName = "Kuldeep";
for (let x of strName) {
  console.log(x);
}

console.log("<---------for in loop in string--------->");
for (let x in strName) {
  console.log(strName.charAt(x));
  // console.log(x);
}

console.log("<---------for of loop in Array--------->");
fruits = ["banana", "mango", "fig", "apple", "pine-apple"];
for (let x of fruits) {
  console.log(x);
}

console.log("<---------for in loop in Array--------->");
for (let x in fruits) {
  // console.log("index no :", x);
  console.log(fruits[x]);
}

console.log("<---------while loop--------->");
let i = 0;
while (i < 10) {
  i++;
  console.log("the no is ", i);
}

console.log("<---------do while loop--------->");
i = 0;
do {
  console.log("the no is ", i);
  i++;
} while (i < 10);

console.log("<---------to string--------->");
fruits = ["banana", "mango", "fig", "apple", "pine-apple"];
console.log("fruits :", fruits);
console.log("fruits type of :", typeof fruits.toString());

person3 = {
  firstName: "Kuldeep",
  lastName: "Yadav",
  age: 27,
  position: "MERN Developer",
};
console.log("person3 :", person3);
console.log("fruits to string :", person3.toString());
console.log("fruits type of :", typeof person3.toString());

const usersData = [
  {
    id: 1,
    name: "Amaan",
    email: "amaan@arivani.net",
    profile: "Developer",
  },
  {
    id: 2,
    name: "Kuldeep",
    email: "kuldeep.trainee@arivani.net",
    profile: "Trainee",
  },
  {
    id: 3,
    name: "Prashant",
    email: "prashant.trainee@arivani.net",
    profile: "Trainee",
  },
  {
    id: 4,
    name: "Shubham",
    email: "shubham.trainee@arivani.net",
    profile: "Trainee",
  },
];

const userData = usersData.map((item, index) => {
  return item;
});

const userData1 = usersData.forEach((item) => console.log(item, "item"));


const filteredData = usersData.filter((item) => item.profile != "Trainee")
console.log(filteredData, "filteredData");


console.log("<---------Map array------------>")
numbers =[100,2,4,6,70,60,30,40,80,22,24,11];
console.log("before numbers :",numbers) ;
let numbersMappedDataMul = numbers.map(x => 2*x);
console.log("numbersMappedDataMul :",numbersMappedDataMul) ;
console.log("after maped numbers :",numbers) ;
let numbersMappedDataAdd = numbers.map(x => 100 + x);
console.log("numbersMappedDataAdd :",numbersMappedDataAdd) ;

let collegeData1 =[
    {
        id : 1 ,
        firstName : "Kuldeep",
        lastName : "Yadav",
        Gender : "Male" ,
        course : "B.tech" ,
        Branch : "Computer science & Eng",
        collegeName : "FGIET ,Raebareli"
    },
    {
        id : 2 ,
        firstName : "Shubham",
        lastName : "Valmiki",
        Gender : "Male" ,
        course : "Diploma" ,
        Branch : "Computer science & Eng",
        collegeName : "IET ,Lucknow"
    },

    {
        id : 3 ,
        firstName : "Prashant",
        lastName : "Shukla",
        Gender : "Male" ,
        course : "B.Com" ,
        Branch : "Computer science",
        collegeName : "PPt ,Varanashi"
    },

    {
        id : 4 ,
        firstName : "Amman",
        lastName : "Alam",
        Gender : "Male" ,
        course : "B.tech" ,
        Branch : "Computer science & Eng",
        collegeName : "BBD ,Lucknow"
    },

    {
        id : 5 ,
        firstName : "Abc",
        lastName : "Xyz",
        Gender : "Female" ,
        course : "M.Com" ,
        Branch : "Computer science",
        collegeName : "Axis ,Kanpur"
    },
]

console.log("collegeData1 :",  collegeData1);
let mapCollegeData1 = collegeData1.map((item ,index) =>{
    return{
        id : item.id ,
        firstName : item.firstName ,
        Gender : item.Gender
    }
});

console.log("mapCollegeData1 :" ,mapCollegeData1);

let filterCollegeGenderData = collegeData1.filter((item ,index) => item.Gender == "Male" );
let filterCollegeBranchData = collegeData1.filter((item ,index) => item.Branch != "B.tech" );

console.log("filterCollegeGenderData :" ,filterCollegeGenderData);
console.log("filterCollegeBranchData :" ,filterCollegeBranchData);

let forEachData = collegeData1.forEach((item ,index ) => {
        return {
        id : item.id ,
        firstName : item.firstName ,
        Gender : item.Gender
    }
}
);
console.log("forEachData :" ,forEachData);

console.log("<---------For Each array------------>")
numbers =[100,2,4,6,70,60,30,40,80,22,24,11];
console.log("before numbers :",numbers) ;
let numberForEach = numbers.forEach((item)=> console.log(item))

console.log("<---------map array------------>")
let mappedNumber = numbers.map(item => item)
console.log("mappedNumber :" ,mappedNumber);

console.log("<---------Filter array------------>")
let filteredNumber = numbers.filter(item => item > 30);
console.log("filteredNumber :" ,filteredNumber);

let shubham = " shubh am "
console.log(shubham.trim())

let data20 = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  },
  {
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 319
    }
  },
  {
    "id": 12,
    "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 400
    }
  },
  {
    "id": 13,
    "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "price": 599,
    "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 250
    }
  },
  {
    "id": 14,
    "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.2,
      "count": 140
    }
  },
  {
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "rating": {
      "rate": 2.6,
      "count": 235
    }
  },
  {
    "id": 16,
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 29.95,
    "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 340
    }
  },
  {
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "rating": {
      "rate": 3.8,
      "count": 679
    }
  },
  {
    "id": 18,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 130
    }
  },
  {
    "id": 19,
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 7.95,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 20,
    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    "price": 12.99,
    "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "rating": {
      "rate": 3.6,
      "count": 145
    }
  }
]

// console.log(JSON.parse(data20))

const os = require('os');
console.log(os.platform());