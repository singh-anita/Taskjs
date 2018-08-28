// Create a function that masks a string of characters with # except for the last four (4) characters.
function maskString(value) {
  var maskedNewString = "";
  if (typeof (value) !== 'string' || value === '' || value === null || value === undefined) {
    return 'please enter some string to make them maskstring';
} else {
  for (var i = 0; i < value.length; i++) {
    // console.log(value.substring(value.length - 4));
    var lastFourDigit  = value.substring(value.length - 4);
    maskedNewString    = lastFourDigit.padStart(value.length, "#");
    //   maskedNewString += value.substring(value.Length - 4);
  }
  return maskedNewString;
}
}

//Validations

console.log(maskString(""));
console.log(maskString("123456789"));
console.log(maskString("YHDFFHFGHFGH"));
console.log(maskString("AAAFGHHDTYUTFFHFGHFKYGHLLLOUIUY454"));