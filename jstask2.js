// Function to sort letters in alphabetical order
function sortString(str) {
    return str.split('').sort().join('');
}

// Example usage
let inputString = "webmaster";
let sortedString = sortString(inputString);
console.log("Sorted String:", sortedString);
