// // program to check if the number is even or odd
// // take input from the user

const number = prompt("Enter a number: ");

//check if the number is even
if (number % 2 == 0) {
  console.log("The number is even.");
  } else{
  console.log("The number is odd.");
  }

  //number you pick
integer = prompt("Enter a number: ");

const factorialOf = integer => {
  let factorial = 1;
  //getting the number and x by 1 if the > then 1 the plus 1 more bey the umber till it hits the number eg 5 factorialOf = 1*2*3*4*5 
  for (let i = 1; i <= integer; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(factorialOf(integer))


let o = 0;
digit = Number(prompt("enter 8 digit number"));
guess = Number(prompt("your guess"));

for (; o <= 4;) {
  if (digit == guess) {
    console.log("you guessed right", o);
    o += 4;
  } else if (digit != guess) {
    o++;
  }
}

num = prompt("Enter a number: ");

const factorialOfn = num => {
  let factorialn = 0;
  //getting the number and x by 1 if the > then 1 the plus 1 more bey the umber till it hits the number eg 5 factorialOf = 1*2*3*4*5 
  for (let i = 1; i <= num; i++) {
    factorialn += i;
  }
  return factorialn;
}
console.log(factorialOfn(num)/num)