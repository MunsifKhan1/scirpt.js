const users=["ali","khan","ahmad","muhammad","alyan","sudais"];
const [,first,second,therd,...others]=users
console.log(first," ",second," ",therd," ",others);
let student={
    name:"munsif",
    age:23,
    address:"maneri payan",
    contact:23456
}
const{name,age}=student;
console.log(name," ",age);
const number=[10];
const[firstnum,secondnum=23]=number;
console.log(firstnum,secondnum);
function getnumbers(){
return [100,300];
}
const [x,y]=getnumbers();
console.log(x," ",y);
const n=[1,2,[3,4,5],6]
const[one,two,[three,four,five],six]=n;
console.log(one," ",two," ",three," ",four," ",five," ",six);