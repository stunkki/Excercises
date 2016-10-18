
/* Return boolean value depending if the input word is palindrome*/
function palindrome(str, i) {

   /* remove special characters, spaces and make lowercase*/
  var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

  /* reverse removeChar for comparison*/
  var checkPalindrome = removeChar.split('').reverse().join('');

  /* Check to see if str is a Palindrome*/
   return (removeChar === checkPalindrome);

}
palindrome("saippuakivikauppias");




/* How to find the longest word in the string */
function findLongestWord(str) {
  arr = [];
  var separator = " ";
  arr = str.split(separator);

  str = arr.reduce(function (a, b) { return a.length > b.length ? a : b; });
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


/* Capitalize first character of each word */
function titleCase(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

titleCase("I'm a little tea pot");
