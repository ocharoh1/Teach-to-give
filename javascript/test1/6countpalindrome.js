//6. Count Palindromes in a String
//Write a function to count how many distinct palindromes are in a given string. A palindrome is considered distinct based on its start and end position in the string.
function countPalindromes(str) {
    const palindromes = new Set();

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        expandAroundCenter(str, i, i, palindromes);  
        expandAroundCenter(str, i, i + 1, palindromes);
    }

    return palindromes.size;
}

function expandAroundCenter(str, left, right, palindromes) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        palindromes.add(str.substring(left, right + 1)); // Add the palindrome substring
        left--; // Expand to the left
        right++; // Expand to the right
    }
}

// Test cases

console.log(countPalindromes('racecar')); 
console.log(countPalindromes('aabb'));    
console.log(countPalindromes('a'));       
console.log(countPalindromes('abc'));     