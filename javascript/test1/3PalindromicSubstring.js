//3. Find the Longest Palindromic Substring
//Write a function to find the longest palindromic substring in a given string
// Define a function named is_Palindrome that checks if a given string is a palindrome
function longestPalindromeSubstring(str1) {
  
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
}

function longestPalindromeSubstring(str1) {
    var max_length = 0,
        maxp = '';

   
    for (var i = 0; i < str1.length; i++) {
        
        var subs = str1.substr(i, str1.length);

        for (var j = subs.length; j >= 0; j--) {
           
            var sub_subs_str = subs.substr(0, j);

            if (sub_subs_str.length <= 1)
                continue;

           
            if (is_Palindrome(sub_subs_str)) {
             
                if (sub_subs_str.length > max_length) {
            
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }

   
    return maxp;
}


console.log(longestPalindromeSubstring("babad"));

console.log(longestPalindromeSubstring("cbbd"));