//8. Case Insensitive Palindrome
//Modify the palindrome function to be case insensitive, meaning it should ignore upper and lower case differences when checking for a palindrome.


function isCaseInsensitivePalindrome(str) {
    // special characters
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

    console.log(isCaseInsensitivePalindrome('Aba'));
    console.log(isCaseInsensitivePalindrome('Racecar'));
    console.log(isCaseInsensitivePalindrome('Palindrome'));
    console.log(isCaseInsensitivePalindrome('Madam'));
    console.log(isCaseInsensitivePalindrome('Hello'));
    


    