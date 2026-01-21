const myScore = Number(process.argv[2]);
if ( myScore > 100 ){
  console.log("Invalid input");
}
else if ( myScore >= 80 ) {
  console.log("A");
} 
else if ( myScore >= 70 ){
  console.log("B");
}
else if ( myScore >= 60 ){
  console.log("C");
}
else if ( myScore >= 50 ){
  console.log("D");
}
else if ( myScore <= 50 && myScore >= 0) {
  console.log("F");
}
else {
  console.log("Invalid input");
}