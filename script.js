function firstChar(str) {
  // Trim leading/trailing spaces
  const trimmedStr = str.trim();
  
  // Return the first character of the trimmed string, 
  // or an empty string if trimmedStr is empty.
  return trimmedStr.charAt(0);
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(str));
