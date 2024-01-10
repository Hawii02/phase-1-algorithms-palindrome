function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split('').reverse().join('');
  if (word.toLowerCase() === reversedWord.toLowerCase()) {
  return true;
  }else {
  return false;
  } 

  console.log(isPalindrome("tot"));
}

/* 
  Add your pseudocode here
if the string reads same forwards and backwards the input should
  return true
else
  return false if it is not a palindrome
*/

/*
  Add written explanation of your solution here

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
