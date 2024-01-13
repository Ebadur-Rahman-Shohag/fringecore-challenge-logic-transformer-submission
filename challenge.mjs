const weirdExpressions = [
  "a othoba b",
  "b ebong c othoba d",
  "ebong ebong othoba othoba ebong",
  "((ebong) othoba ebong) ebong othoba",
  "(ebong othoba (ebong ebong ((othoba) othoba (ebong))))",
  "ebong",
];

for (const expression of weirdExpressions) {

let splitArray = expression.split(" ");
let ebong = "&&";
let othoba = "||";

  // Loop through the array and replace odd-indexed elements with variable values
  for (let i = 0; i < splitArray.length; i++) {
    if (i % 2 === 1) {
      // Check if the index is odd
      if (splitArray[i] === "ebong") {
        splitArray[i] = ebong;
      } else if (splitArray[i] === "othoba") {
        splitArray[i] = othoba;
      }
    }
  }

  // Join the modified array back into a string
  // return splitArray.join(" ");
  console.log( splitArray.join(" "));
}
