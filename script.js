// const users=["ali","khan","ahmad","muhammad","alyan","sudais"];
// const [,first,second,therd,...others]=users
// console.log(first," ",second," ",therd," ",others);
// let student={
//     name:"munsif",
//     age:23,
//     address:"maneri payan",
//     contact:23456
// }
// const{name,age}=student;
// console.log(name," ",age);
// const number=[10];
// const[firstnum,secondnum]=number;
// console.log(firstnum,secondnum);
// function getnumbers(){
// return [100,300];
// }
// const [x,y]=getnumbers();
// console.log(x," ",y);
// const n=[1,2,[3,4,5],6]
// const[one,two,[three,four,five],six]=n;
// console.log(one," ",two," ",three," ",four," ",five," ",six);
// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText +" to my page"
// let divs= document.querySelectorAll(".box")
// console.log(divs[2])
// console.dir(divs)
// let idx=1;
// for(div of divs){
//     div.innerText=`new value of div ${idx}`;
//     idx++;
// }
// // divs[2].innerHTML="new value of div one";
// // divs[1].innerHTML="new value of div one";
// // divs[0].innerHTML="new value of div one";

// let div=document.querySelector("div")











// // Array Destructuring
// const fruits=["apple","mango","bnana","litchi","graps"];
// const[first,second,third]=fruits;
// console.log(first,second,third);



// // Object Destructuring
// const student={
//     name:"ali",
//     age:21,
//     contact:23324545
// }
// const {name,age,contact}=student;
// console.log(name,"  " ,age,"   ",contact);





// // Array Function Destructuring
// const logfruits=([first,second,third])=>{
//     console.log(first,second,third);
// }
// logfruits(["mango","apple","oringe"]);


// // Function Destructuring
// const person=({name,age,address})=>{
//     console.log(`Name:${name}  Age:${age}  Address${address}`)
// }
// person({name:"ali",  age:32 ,address:":swabi"});



// // Default Parameters in ES6
// function greet(name="khan"){
//     console.log(`Hello! ${name}`)

// }
// greet("ali")




// // Roll-a-Die Function with Default Parameter:
// function rollDie(slide=6){
   
// return Math.ceil(Math.random()*slide);
// }
// console.log(rollDie());
// console.log(Math.random());




// // Combining Two Arrays Using Spread Operator
// const arr1=[1,2,3,]
// const arr2=[6,7,8]
// const combin=[...arr1,...arr2];
// console.log(combin)




// // Combining Two Objects Using Spread Operator
// const obj1={n:22,m:43};
// const obj2={a:45,f:33};
// const combin1={...obj1,...obj2};
// console.log(combin1)




// // Spread Operator with Strings
// const name1="habib";
// const letters=[...name];
// console.log(letters)



// const arr1=[1,2,3,4,5,]
// const arr2=[6,7,8,9]
// const combined=[...arr1,...arr2];
// console.log(combined);
// function add(){
//     let sum=0;
//     for(let i=0; i<arguments.length;i++){
//         sum += arguments[i]
      
//     }
//     return sum;
// }console.log(add(...combined));
// function add(...rest){
//     let sum=0;
//     for(let i=0; i<rest.length;i++){
//         sum += rest[i]
//     }
//     return sum;
// }
// console.log(add(...combined))
// const arr1=[1,2,3,4];
// const arr2=[5,6,7,8];
// const combined=[...arr1,...arr2];
// console.log(combined);
// function add(...rest){
//     sum=0;
//     for(let i=0;i<rest.length;i++){
// sum+=rest[i];
//     }
//     return sum;
// }
// console.log(add(...combined));
//  const arr1=["khsn","ali","muhammad","ahmad"];
//  const [first,second,third]=arr1;
//  console.log(first," ",second," ",third);
//  const student={
//     name:"ali",
//     age:32,
//     address:"swabi"
//  }
//  const{name,age,address}=student;
//  console.log(name," ",age," ",address);
// const fruits=([first,second,third])=>{
//     console.log(first,second,third);
// }
// fruits(["apple","mango","graps"]);
// const person=({name , age})=>{
// console.log(`Name:${name}   Age${age}`);
// }
// person({name:"sudais" , age:":22"})
// function greet(name= "khan"){
//     console.log(`hello!,${name}`)
// }
// greet("ali");
// function rollDie(slide=6){
// return Math.ceil(Math.random()*6);
// }
// console.log(rollDie());
// const arr1=[1,2,3,4];
// const arr2=[5,6,7,8];
// const combined=[...arr1,...arr2];
// console.log(combined);
// const obj1={name:"munsif",age:24}
// const obj2={address:"swabi",contact:2322454};
// const combin1={...obj1,...obj2};
// console.log(combin1)
// let name="munsif khan";
// const letters=[...name];
// console.log(letters)
// function sum(a,b,c,d){
//     return a+b+c+d;
// }
// const number= [1,2,3,4,5];
// console.log(sum(...number));

// const number=[1,2,3,4]
// function sum(){
//     let sum=0;
//     for(let i=0;i<arguments.length;i++){
//     sum+=arguments[i];
// }
// return sum;
// }
// console.log(sum(...number))
// setTimeout(() => {
//     location.reload()
// },2000);
// const button= document.querySelector("button");
// button.addEventListener("click",()=>alert("button clicked!"));


// document.body.children[1].children[1].children[1].innerHTML='<i>hello world</i>';

// const text=document.body.children[1].children[1].children[1]

// const text1=document.getElementsByTagName("h2")[0]
// text1.innerHTML='<i>hello world</i>';

// const img=document.getElementById("image")

// img.src="sat-logo.jpg"


// const classhello=document.getElementsByClassName("hello")[0]
// console.log(classhello);

// classhello.innerText="olamba"
// const callshi =document.getElementsByClassName("box")[0];
// console.log(callshi)
// callshi.innerHTML="olamba"
const classhello=document.getElementsByTagName("span")[0];
// console.log(classhello);
classhello.innerText="wellcom pakistan"