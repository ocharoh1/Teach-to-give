//5. Remove Duplicates from a String
//Write a function to remove duplicate characters from a string while preserving the order of the first appearance of each character.

function removeDuplicate(str) {
    let charArray = str.split('');
    let uniqueChars = [...new Set(charArray)];
    return uniqueChars.join('');
}
let str = 'geeksforgeeks';
console.log(removeDuplicate(str));
