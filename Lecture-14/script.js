// weekday - sunday(1),monday(2),thusday(3),wenesdat(4,thusday(5)
//weekend - friday(6),satarday(7)

const numberOfDay = parseInt(prompt("Entar a number of days : "));

// if ( numberOfDay === 0 ) {
//   console.log("weekday");
// }else if ( numberOfDay === 1 ) {
//   console.log("weekday");
// }
// else if ( numberOfDay === 2 ) {
//   console.log("weekday");
// }
// else if ( numberOfDay === 3 ) {
//   console.log("weekday");
// }
// else if ( numberOfDay === 4 ) {
//   console.log("weekday");
// }
// else if ( numberOfDay === 5 ) {
//   console.log("weekday");
// }
// else if ( numberOfDay === 6 ) {
//   console.log("weekend");
// }
// else if ( numberOfDay === 7 ) {
//   console.log("weekend");
// }else{
//   console.log("Please input a number of days 1 _ 7")
// }

//these type of case we always use Switch

switch( numberOfDay){
  case 1 :
  case 2 :
  case 3 :
  case 4 :
  case 5 :
    console.log("weekday");
    break;

  case 6:
  case 7:
    console.log("weekend");
    break;

  default :
  console.log("Please input a valid number of Days")
}

//program-2

let letter = prompt ("Enter a letter for checking Vowels: ");
let smallLetter = letter.toLowerCase();

switch (smallLetter){
  case 'a' :
  case 'e' :
  case 'i' :
  case 'o' :
  case 'u' :
 
    console.log("vowel");
    break;
  
  default :
  console.log("Consonant");
}

//for loop
//1-100 sum of Even Number
let sum = 0;
for (let i = 2; i <=100 ; i= i + 2){
  sum = sum + i ;

}
console.log(`sum: ${sum}`);

//while loop
//print 1-10
let i = 0;
while( i <= 10){
  console.log(i);
  i++;
}

//how work while loop
let k = 30 ;
while(true){
  if ( k > 40){
    break;
  }
  console.log(k);
  k++;
}

//do-while
//print 1-10

let x = 1;
do{
  console.log(x);
  x++;

}while(x <= 10);


//object 

const person = {
  name : "Rayhan",
  age : 24,
  height : " 5fet 7 inch",
  occupation : "Student",
}

for (const key in person) {
  // console.log(key);
  console.log(person[key]);
 
}