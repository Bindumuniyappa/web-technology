console.log(55+3);//58
console.log(55+3+"2");//582
console.log("3"-1);//2
console.log(4+3+"6"+"hi"+1);//76hi1
console.log(null+"null");//nullnull
console.log(4+55+"6"-2);//59+"6"=596...."596"-2=594
console.log("100"-"2");//98
console.log("hello"-1);//NAN
console.log(2+77+null-1);//78
console.log(4+3*"3");//BoDMAS//13
console.log(undefined,null);//NAN
console.log(4+3/"2");//5.5

// Explicit TC

// Number to string

let a=String(1);
console.log(a,typeof a);//1 string


//String to number
let b=Number("1");
console.log(b,typeof b);//1 number

let b1=Number("hello");
console.log(b1,typeof b1);//Nan number

//Number to boolean

let b2=Boolean(1);
console.log(b2,typeof b2);//true boolean

let b3=Boolean(0);
console.log(b3,typeof b3);//false boolean

//Boolean to number

let b4=Number(true);
console.log(b4,typeof b4);//1 Number

let b5=Number(false);
console.log(b5,typeof b5);//0 Number



