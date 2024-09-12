//5. Remove Duplicates from a String
//Write a function to remove duplicate characters from a string while preserving the order of the first appearance of each character.

function removeDuplicates(str) {
    return [...new Set(str)].join('');

}

console.log(removeDuplicates('programming'));
console.log(removeDuplicates('hello world'));
console.log(removeDuplicates('aaaaa'));
console.log(removeDuplicates('abcd'));
console.log(removeDuplicates('aabbcc'));


