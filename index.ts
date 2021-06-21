// https://leetcode.com/problems/palindrome-number/

const isPalindrome = (x: number): boolean => {
  if (Math.sign(x) === -1) {
    return false;
  }

  const arr = `${x}`.split("");
  const times = Math.floor(arr.length / 2);

  let isPalindrome = true;

  for (let i = 0; i < times; i += 1) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
};

export default isPalindrome;
