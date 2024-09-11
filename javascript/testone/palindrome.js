//1. Check if a String is a Palindrome
//Write a function to determine if a given string is a palindrome. A palindrome is a string that reads the same forward and backward (ignoring spaces, punctuation, and case).

function isPalindrome(str) {

    //removing special characters
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // to string
    const Values = str.split("");

    //reversing
    let reverseValues =Values.reverse();

    //join
    let reverseStr = reverseValues.join('');

    if(str == reverseStr) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

    console.log(isPalindrome('A man, a plan, a canal, Panama'));
    console.log(isPalindrome('was it a car or a cat i saw?'));
    console.log(isPalindrome('Hello World'));


    