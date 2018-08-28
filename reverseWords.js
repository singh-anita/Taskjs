/**
 * This function reverses any provided string
 * @param {string} str - this parameter accepts a string value
 * @returns {string} - 
 */
function reverseString(str) {
    var reversedWords = "";
    if (typeof (str) !== 'string' || !str) {
        return 'please enter some words';
    } else {
        for (var i  = str.length - 1; i >= 0; i--) {
            reversedWords += str[i];
        }
        return reversedWords;
    }
}
// console.log(reverseString(4));
 console.log(reverseString("anita singh working in raw eng"));

/*function reverse(s){
    return (s ==='')?'':reverse(s.substr(1) +s.charAt(0)); 
}
console.log(reverse("hello used recursion here"));*/

//false, undefined, null, 0

// i-- and i++ - coersions
// shorthand for i+= / i-=
// reason for arrays in js to start from 0 
