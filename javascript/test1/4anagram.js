//4. Check if Two Strings are Anagrams
//Write a function to check if two given strings are anagrams of each other. Two strings are anagrams if they contain the same characters in the same frequency but in different orders.

function areAnagrams( str1, str2){

    let string1 = str1.toLowerCase()
    let string2 = str2.toLowerCase()

    if (string1.length !== string2.length){
        return false
    } else {
        string1 = string1.split('').sort().join('')
        string2 = string2.split('').sort().join('')

        if (string1 == string2){
            console.log('true')
        }
        else{
            console.log('false')
        }
}
}

areAnagrams('Listen', 'Silent')
areAnagrams('Hello', 'World')
