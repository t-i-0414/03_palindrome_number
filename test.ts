import isPalindrome from "./index";
const chalk = require("chalk");

if (isPalindrome(-121) === false) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}

if (isPalindrome(121) === true) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}

if (isPalindrome(10) === false) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}

if (isPalindrome(-101) === false) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}

if (isPalindrome(11) === true) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}

if (isPalindrome(4446444) === true) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}
