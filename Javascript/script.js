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

console.log("Variables are Containers for Storing Data JavaScript Variables can be declared in 4 ways: 1.Automatically 2.Using var 3.Using let 4.Using const");
x1= 1;
y1= 2;
z1= x1 + y1 ;
console.log("Automatically :",z1)

var x4= 3;
var y4= 4;
var z4= x4 + y4 ;
console.log("Using var :",z4)

let x5= 5;
let y5= 5;
let z5= x5 + y5 ;
console.log("Using let :",z5)

const x6= 10;
const y6= 11;
const z6= x6 + y6 ;
console.log("Using const:",z6)

var x7= 1 ,y7=2 ,z7=3 ;
console.log("x7,y7,z7 :",x7,y7,z7);

let x8= 4 ,y8=5 ,z8=6 ;
console.log("x8,y8,z8 :",x8,y8,z8);

const x9= 7 ,y9=8 ,z9=9 ;
let z10=10 ;
z10=11
console.log("x9,y9,z9,z10 :",x9,y9,z9,z10);
console.log("sum of x9,y9,z9,z10 :",x9+y9+z9+z10);
console.log("'5'+1 + 2 :",'5'+1 + 2);
console.log("5+1 + '2' :",5+1 + '2');
console.log("5+'1' + 2 :",5+'1' + 2);

console.log("let Block Scope start here");
// let scope

{
    let x = 2 ;
    console.log ("let x :", x)
}
// console.log ("let x can not used in outer scope :", x)

// var scope
{
    var x1 = 3 ;
    console.log ("var x1 :", x1)
}
console.log ("var x1 is used in outer scope :", x1)

let y10 = "kuldeep" ;
// let y10 = 10 ; 
// here it showes error b/c we cannot redeclare it again in the case of let .
console.log("y10 :",y10);

var x10 = "kuldeep" ;
var x10 = 10 ; 
// here it showes not error b/c we can redeclare it again in the case of var .
console.log("x10 :", x10)


var x11 =10 ;
console.log("x11 :", x11)
// here x is 10
{
    var x11 =9 ;
    console.log("x11 :", x11)
    // here x is 9
}
console.log("x11 :", x11)
// here x is 9


let y12 =10 ;
console.log("y12 :", y12)
// here y12 is 10
{
    let y12 =9 ;
    console.log("y12 :", y12)
    // here y12 is 9
}
console.log("y12 :", y12)
// here y12 is 9

// we start const varibale here

const x12 = 3.14124 ;
console.log("x12 : ", x12) ;
// x12 =3.14
// here it showes error because we cannot ressign again

// const x13 ;
// console.log(x13);
// must be assigned
// it showes error because it is necessory in the case of const we declare and reassign in the same line


// Constant Objects and Arrays
// The keyword const is a little misleading.
// It does not define a constant value. It defines a constant reference to a value.

const cars = ["suzuki" ,"toyota" , "hero" ,"mahindra" ];
console.log("cars :", cars);
cars[0] = "BMW"
console.log("updated only an element of cars :", cars);

// cars = ["ola" ,"volvo" , "audi" ,"honda" ];
// console.log("again updated cars :", cars);
// it showes type error

const car ={
    type : "xuv",
    model : "700",
    color : "black"
}
// we can update or replace the value in the case of Object.
car.color ="silver" ;
car.owner = "Anand Mahindra" ;
// add the key owner
console.log("car :", car);


const x13 = 10 ;
console.log("x13 :",x13);
// here the value x13 is 10.

{
    const x13 =12
    console.log("x13 :",x13);
    // here the value x13 is 12.
}
console.log("x13 :",x13);
// here the value x13 is 10.

const x14 = 14;
console.log("x14 :",x14);
// here the value x14 is 14.
{
    const x14 =15 ;
    console.log("x14 :",x14);
    // here the value x14 is 15.
}
{
    const x14 =13 ;
    console.log("x14 :",x14);
    // here the value x14 is 13.
}

carName = "Audi" ;
var carName ;
console.log("carName :" ,carName)

// carName1 = "Audi" ;
// let carName1 ;
// console.log("carName1 :" ,carName1)
// hoisting does not takes place in the case of let and const

// carName2 = "Audi" ;
// const carName2 ;
// console.log("carName2 :" ,carName2)
// hoisting does not takes place in the case of let and const

console.log("JS operator start here")
console.log("<--------Assignment operator---------->")
let x =10 ;
console.log("x : ",x);
x+= x
console.log("x+=x :", x)
x-= x
x =10 ;
console.log("x-=x :", x)
x*= x
console.log("x*=x :", x)
x/= x
console.log("x/=x :", x)
x%= x
console.log("x%=x :", x)
x=10 ; y=2
console.log("x :",x,"y :",y )
x**=2
console.log("x**=y :", x)



console.log("<------Arithmatic operator--------->")
let x15 = 10 ;
let y15 = 5 ;
console.log(`the value of x15 is : ${x15} & y15 is : ${y15}`)
console.log("Addition of x15 + y15" , x15 + y15);
console.log("Subtraction of x15 - y15" , x15 - y15);
console.log("Multiplication of x15 * y15" , x15 * y15);
console.log("division of x15 / y15" , x15 / y15);
console.log("Modulus of x15 % y15" , x15 % y15);
console.log("Power of x15 ** y15" , x15 ** y15);
x15++ ;
console.log("X15++ " ,x15);
y15-- ;
console.log("y15-- " ,y15);

console.log("<-----Comparision operator------>");
let text1 = "A" ;
let text2 = "B" ;
console.log("text1 :", text1);
console.log("text2 :", text2);
console.log("text1 == text2 :", text1 == text2);
console.log("text1 < text2 :", text1 < text2);
console.log("text1 <= text2 :", text1 <= text2);
console.log("text1 > text2 :", text1 > text2);
console.log("text1 >= text2 :", text1 >= text2);
console.log("text1 != text2 :", text1 != text2);
text1 = 5 ;
text2 = "5" ;
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
text1 = 5 ;
text2 = 6 ;
let text3 = 7 ;
let text4 = 8 ;
console.log("text1 :", text1);
console.log("text2 :", text2);
console.log("text3 :", text3);
console.log("text4 :", text4);
console.log("<----Logical && operator------>");
console.log("text1 >= text2 && text3 >= text4 :",text1 >= text2 && text3 >= text4);
console.log("text1 >= text2 && text3 <= text4 :",text1 >= text2 && text3 <= text4);
console.log("text1 <= text2 && text3 >= text4 :",text1 <= text2 && text3 >= text4);
console.log("text1 <= text2 && text3 <= text4 :",text1 <= text2 && text3 <= text4);
console.log("<----Logical || operator------>");
console.log("text1 >= text2 || text3 >= text4 :",text1 >= text2 || text3 >= text4);
console.log("text1 >= text2 || text3 <= text4 :",text1 >= text2 || text3 <= text4);
console.log("text1 <= text2 || text3 >= text4 :",text1 <= text2 || text3 >= text4);
console.log("text1 <= text2 || text3 <= text4 :",text1 <= text2 || text3 <= text4);
console.log("<----Logical ! operator------>");
console.log("text1 >= text2  :",text1 >= text2);
console.log("!(text1 >= text2)   :",!(text1 >= text2));
console.log("text3 <= text4 :",text3 <= text4);
console.log("!(text3 <= text4) :",!(text3 <= text4));


console.log("<--------Logical Assignment operator---------->")
x = true ;
y = false ;
console.log("x &&= y :",x &&= y);
// console.log(x && (x = y)) ;
x = true ;
y = false ;
console.log("x ||= y :",x ||= y);

x = true ;
y = false ;
// console.log("x ??= y :",x ??= y);

console.log("<--------Bitwise operator---------->")
x = 1 ;
y = 2 ;
console.log(" x & y :", x & y);
console.log(" x | y :", x | y);
console.log(" ~y :", ~y);

console.log("<--------Bitwise Assignment  operator---------->")
x = 1 ;
y = 2 ;
console.log(" x &= y :", x &= y);
x = 1 ;
y = 2 ;
console.log(" x |= y :", x |= y);
// console.log(" ~=y :", ~=y);

console.log("<----typeof operator------>");
console.log("typeof('5') :",typeof('5') ) ;
console.log("typeof(5) :",typeof(5) ) ;
console.log("typeof(true) :",typeof(true) ) ;
console.log("typeof(null) :",typeof(null) ) ;
console.log("typeof(undefined) :",typeof(undefined) ) ;
console.log("typeof([]) :",typeof([]) ) ;
console.log("typeof({}) :",typeof({}) ) ;




console.log("<-------- Terniary operator------>");
text3 = 15 ;
text4 = 10 ;
console.log("text3 :", text3);
console.log("text4 :", text4);
let res = text3 < text4 ? "text3 is less than text4" : "text3 is greater than text4" ;
console.log("result is :",res);

console.log("<----String operator as a concatenation------>");
let text5 = "Kuldeep" ;
let text6 = "Yadav" ;
console.log(text5 +" "+ text6);
text5 += text6 ;
console.log(text5);

console.log("<----Adding string and no------>");
console.log("'5' + 5 :",'5' + 5) ;
console.log("'5' + '5' :",'5' + '5') ;
console.log("5 + 5 :",5 + 5) ;
console.log("'hello' + 5 :","hello" + 5) ;

console.log("<--------Data type---------->");
console.log("<--------Number---------->");
let num = 10 ;
let num1 = 10.5 ;
console.log("num :", num);
console.log("typeof(num) :", typeof(num));
console.log("num1 :", num1);
console.log("typeof(num1) :", typeof(num1));

console.log("<--------String---------->");
let str = "kuldeep" ;
console.log("str :", str);
console.log("typeof(str) :", typeof(str));

let str1 = 'Amaan' ;
console.log("str1 :", str1);
console.log("typeof(str1) :", typeof(str1));


console.log("<--------Boolean---------->");
let bool = true ;
let bool1 = false ;
console.log("bool :", bool);
console.log("typeof(bool) :", typeof(bool));
console.log("bool1 :", bool1);
console.log("typeof(bool1) :", typeof(bool1));

console.log("<--------Undefined---------->");
let per ;
console.log("per :", per);
console.log("typeof(per) :", typeof(per));

console.log("<--------null---------->");
let null1 = null ;
console.log("null1 :", null1);
console.log("typeof(null1) :", typeof(null1));


console.log("<--------Array---------->");
let arr = [1 ,"Amaan" ,"Alam" ,'Software Developer' ,{id: 101 ,companay_Name: 'arivani pvt ltd'} ];
let arr1 = [2 ,"kuldeep" ,"yadav" ,'software tranee' ,{id: 102 ,companay_Name: 'arivani pvt ltd'} ];
console.log("arr :", arr);
console.log("typeof(arr) :", typeof(arr));
console.log("arr1 :", arr1);
console.log("typeof(arr1) :", typeof(arr1));

console.log("<--------Object---------->");
let person1= {
    id : 1,
    firstName: "shubham",
    lastName: "Bharati",
    position: 'React Devloper tranee'
}

let person2= {
    id : 2,
    firstName: "kuldeep",
    lastName: "Yadav",
    position: 'MERN Devloper tranee'
}

console.log("person1 :",person1 );
console.log("typeof(person1) :", typeof(person1));
console.log("person2 :",person2 );
console.log("typeof(person2) :", typeof(person2));
console.table("person2 :",person2 );
console.log("typeof(person2) :", typeof(person2));


console.log("<--------JS sting & Number conversion---------->");
x= 16 ;
y=  10 ;
z = 'Kuldeep' ;
console.log("x+ y :",x + y);
console.log("x + y + z :",x + y + z);
console.log("10 + 20 + 'Amman' :",10 + 20 + 'Amman');
console.log("'Amman' + 10 + 20 :",'Amman' + 10 + 20);

console.log("<--------Dynamic Datatype---------->");
let y16= 10 ;
console.log("y16 :" ,y16);
console.log("typeof(y16) :", typeof(y16));
y16 = true ;
console.log("y16 :" ,y16);
console.log("typeof(y16) :", typeof(y16));
y16 = "syam" ;
console.log("y16 :" ,y16);
console.log("typeof(y16) :", typeof(y16));

console.log("<--------Array some concept---------->");
let arr2 = ["volvo","hero" ,"honda"];
console.log("arr2 :" , arr2);
arr2=[];
console.log("arr2 :" , arr2);
arr2[0] = "suzuki" ;
arr2[1] = "tata" ;
arr2[2] = "mahindra" ;
console.log("arr2 :" , arr2);

console.log("<--------Array with new Array---------->");
let car1 = new Array("volvo","hero" ,"honda","suzuki","mahindra");
console.log("car1 :" , car1);
console.log("typeof(car1) :", typeof(car1));

// let length =car1.length;
console.log("<--------Array length Property---------->");
console.log("car1.length :",car1.length);
console.log("<--------Array sort() method---------->");
console.log("car1.sort() :",car1.sort());
car1 = ["volvo","hero" ,"honda","suzuki","mahindra"];
console.log("car1 :" , car1);
console.log("<--------Array first Element---------->");
console.log("car1[0]:",car1[0])
console.log("<--------Array Last Element---------->");
console.log("car1.length - 1 :",car1[car1.length - 1])
console.log("<--------Array Element with the help of function---------->");
car1 = ["volvo","hero" ,"honda","suzuki","mahindra"];
car1Length = car1.length;
for(let i = 0 ; i < car1Length ; i++ ){
    console.log("car1 :",car1[i]);
}


// console.log("<--------Array forEach---------->");
// console.log("car1.forEach :",car1.forEach);

console.log("<--------Array Method---------->");
console.log("<--------Array push Method---------->");
x = car1.push('scorpio','xuv');
console.log("x  :" , x);
console.log("car1 :" , car1);

console.log("<--------Array pop Method---------->");
poped= car1.pop();
console.log("poped  :" , poped);
console.log("car1 :" , car1);

console.log("<--------Array isArray Method---------->");
x = Array.isArray(car1);
y1 = true ;
y = Array.isArray(y1);
z1 = 1 ;
z = Array.isArray(z1);
console.log("Array.isArray(car1) :" , x);
console.log("Array.isArray(true) :" , y);
console.log("Array.isArray(z1) :" , z);
console.log("car1 :" , car1);

console.log("<--------instance of---------->");
x = car1 instanceof Array ;
console.log("x :", x);
y = y1 instanceof Array ;
console.log("y :", y);

console.log("<----------Nested Object And Nested Array-------->");
let myobj ={
    id: 101 ,
    firstName: "Kuldeep" ,
    lastName: "yadav" ,
    skills: {
        frontEnd :["html" ,"css", "javascript" ],
        backEnd :["node js" , "express js" ,"mongo db"]
    }
}
console.log("myobj :", myobj);

console.log("<----------Array method start here-------->");
let fruits = ["banana","apple","mango","grapes","fig"];
console.log("<----------Array length -------->");
x = fruits.length ;
console.log("fruits.length :",fruits.length);












