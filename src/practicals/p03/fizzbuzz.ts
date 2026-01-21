// Write your code below
const n6 = Number(process.argv[2]);

if (isNaN(n6) || n6 <= 0) {
  process.exit(0);
}

for (let i = 1; i <= n6; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
