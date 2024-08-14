//pass or fail program
const marks = parseInt(prompt("Enter your marks hare : "));
if (marks > 100 || marks < 0){
  console.log("Invalid marks");
}
else if(marks >= 33){
  console.log("Pass")
}else{
  console.log("Fail");
}

//vowel consonant program
let letter = prompt("Enter a letter : ");
letter = letter.toLocaleLowerCase();
if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
  console.log("vowel");
}else{
  console.log("consonant");
}