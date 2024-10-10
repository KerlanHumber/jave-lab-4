function greet(name = "World") {
return "Hello, " + name + "!";
}

console.log(greet());
console.log(greet("Kerlan"));

function addNumbers(num1, num2){
    return num1 + num2;
}
let sum = addNumbers(5, 10);
console.log("The sum is", sum);

let globalVariable = 10;

function changeValue(){
    let globalVariable = 20;
    console.log("Inside the function:", globalVariable);
}

console.log("Before calling the function:", globalVariable);
changeValue();
console.log("After calling the function:", globalVariable);

function outerFunction(){
    let count = 0;

    function innerFunction(){
        count++;
        console.log("Count:", count);
    }
        return innerFunction;
}

let myFunction = outerFunction();
myFunction(); //Output: Count 1
myFunction(); //Output: Count 2
myFunction(); //Output: Count 3

function outerFunction() {
    let message = "Hello";
  
    function innerFunction(name) {
      return message + ", " + name + "!";
    }
  
    return innerFunction;
  }
  
  let greetingFunction = outerFunction();
  console.log(greetingFunction("Kerlan")); // Output: Hello, Kerlan!