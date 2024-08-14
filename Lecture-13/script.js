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