//2. Reverse a String
//Write a function to reverse a given string.

function reversedString(str) {

    var splitString = str.split(""); 
    
    var reversedString = splitString.reverse(); 
    
    var joinedString = reversedString.join("");

    return joinedString;
}

console.log(reversedString("Consume"));

