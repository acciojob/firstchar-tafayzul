function firstChar(text) {
  return text.trim().charAt(0);
}

// 1. Get input from the user via prompt
const input = prompt("Enter a string:");

// 2. Pass that input to your function
// (Make sure the variable name here matches what you defined)
const result = firstChar(input);

// 3. Alert the result so Cypress can see it
alert(result);