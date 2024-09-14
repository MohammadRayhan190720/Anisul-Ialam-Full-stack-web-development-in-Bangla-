//pass or fail program
// const marks = parseInt(prompt("Enter your marks hare : "));
// if (marks > 100 || marks < 0){
//   console.log("Invalid marks");
// }
// else if(marks >= 33){
//   console.log("Pass")
// }else{
//   console.log("Fail");
// }

//vowel consonant program
let letter = prompt("Enter a letter : ");
letter = letter.toLocaleLowerCase();
if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
  console.log("vowel");
}else{
  console.log("consonant");
}

//largest number among there number
const num1 = parseInt(prompt("Enter frist number : "));
const num2 = parseInt(prompt("Enter second number : "));
const num3 = parseInt(prompt("Enter third number : "));

if(num1 > num2 && num1 > num3){
  console.log(`largest Number = ${num1}`)
} else if(num2 > num1 && num2 > num3){
  console.log(`largest number = ${num2}`)
} else if( num3 > num1 && num3 > num2){
  console.log(`largest number = ${num3}`)
}else{
  console.log(`number is equal`)
}