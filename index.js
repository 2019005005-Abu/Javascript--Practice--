//making a click using Javascript
var saveButton=document.querySelector('.saveButton')
function startClock(){
    let date=new Date();
    let hours=date.getHours();
    let  minue=date.getMinutes();
    let seconds=date.getSeconds();

    minue=formatTime(minue);
    seconds=formatTime(seconds);

    let time=hours+":"+minue+":"+seconds;
    message.textContent=time;
    setInterval(startClock,1000);
}

function formatTime(value){
    if(value<10){
        value="0"+value;
    }
    return value;
}

//Best Practice
//use camelCase for naming
//variable declaration on top and initialize
//avoid unnessary variable
//switch ,case,default
//object and array with const
//== vs ===
//accres dom less
var firstName="Abu Al Shahriar";
var secondName="Rifat";
var fullName=firstName+" "+secondName;
console.log(fullName);
const name=[
    "Abu Al Shahriar Rifat",
    "Kifayet Nawajesh Keya",
    "Shahriar Rimon",
]
const ol=document.querySelector('.students-list');
const firstOl=document.querySelector('.first-li');
const secondOl=document.querySelector('.second-li');
const thiredOl=document.querySelector('.third-li');
const fourtol=document.querySelector('.fourth-li');
const fifthol=document.querySelector('.fifth-li');

const firstol_1=ol.children[0];
const secondol_1=ol.children[1];
const thired_1_ol=ol.children[2];
const fourth_ol=ol.children[3];
const fifth_ol=ol.children[4];

console.log("Children[0]=",firstol_1);
console.log("Children[1]",secondol_1);
console.log("Children[2]",thired_1_ol);
console.log("Children[3]",fourth_ol);
console.log("children[4]",fifth_ol);

console.log(ol);
console.log(firstOl);
console.log(secondOl);
console.log(thiredOl);
console.log(fourtol);
console.log(fifthol);


// const SaveBtn=document.querySelector('.saveBtn');
// saveButton.addEventListener('click',()=>{
//     console.log('clicked');
// })
// console.log(SaveBtn);

try{
    alert("Hi EveryOne");
    alert('Bye EveryOne');
    alert(x);
}catch(err){
 console.log('The Error is',err);
 console.log('The erroe is'.err.name);
 console.log('The erroe is',err.message);
}finally{
    alert('Bye EveryOne');
}

//Error handling
var btn=document.querySelector('#checkButton');
btn.addEventListener('click',()=>{
    var number=document.querySelector('#numbertextField').value;
    try{
     if(number<5){
        throw "input is too low";
     }else if(number>10){
        throw "input is too high";
     }
    }catch(err){
       console.log(err.message);
    }
})

//Hoisting
x=29;
console.log(x);
var x;

//default 
function message(text){
    console.log('Welcome');
    console.log(text);
}
message('I am js es6');
//rest parameter

function PrintNumber(a,b ,...c){
    console.log(`The value of ${a} and ${b } and ${c}`);
}
console.log(PrintNumber(10,20,30,40,50,60,70));

//default paratmeter
function myName(text){
    console.log('I am a full stack web application  developer');
    text='Bangladesh';
}
myName()
myName();
var n4=[10,20,30];
var n2=[56,54,78];
var n3=[...n4,...n2];
console.log(n3);
//spread
const add=(x,y,z)=>{
  return x+y+z;
}
let numbers=[1,2,2];
console.log(add(...numbers));

const subtractionIs=(x,y,z)=>{
    return x-y-z;
}
const n1=[90,356,564];
console.log(subtractionIs(...n1));

let p1={
    name:"Abu Al Shahriar Rifat",
    age:"35"
}
let p2={
    university:"University of Sharda"
}
let p3={...p1,...p2};
console.log(p3);

function studentInformation(name,age){
    return{
        name,
        age
    }
}
console.log(studentInformation('Abu Al Shahriar Rifat',25));

var msg={
    body:function(){
        return `I am Abu Al Shahriar Rifat`
    }
}
console.log(msg.body());

var message={
    'body-name'(){
        return `Hi I am Abu Al  Shahriar Rifat`;
    }
}
console.log(message['body-name']());

var msg={
    'My-name'(){
        console.log('I am a full stack web application developer');
    }
}
console.log(msg['My-name']());