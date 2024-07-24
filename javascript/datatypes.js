let obj={
    id:1
}

let obj1={
    id:244
}

console.log(obj);
console.log(obj1);

obj=obj1;

obj.id=10;

console.log(obj);
console.log(obj1);


//Number datatype

let myNum=10.2;
let yourNum=1/2;
console.log(myNum ,typeof myNum);
console.log(yourNum,typeof yourNum);

//String data type

let str="hello";
console.log(str,typeof str);

let str1='hello';
console.log(str1,typeof str1);

let str2=`hello`;
console.log(str2,typeof str2);


// push

let a=[1,2];
let b=[3,4];

a=b;
b.push(5)

console.log(a);//3,4,5
console.log(b);//3,4,5


let empId=1;
let empName="bindu";
let empSal=2000000;
console.log(`${empId} ${empName}  ${empSal}`);

//backtick is also called as template literal
//and also $ ,{} is also called as interpolataion


//How to reverse a string

str="bindu";
str=str.split("").reverse("").join("");
console.log(str);


//split converts string to an array
//reverse will resverse the characters present in array
//join converts array to string
