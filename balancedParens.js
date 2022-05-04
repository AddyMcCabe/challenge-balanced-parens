// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

function has_balaced_parens(str) {
    return !str.split('').reduce((previous, char) => {
        if(previous < 0) {
            return previous;
        }
        if(char === '(') {
            previous++;
        }
        if(char === ')') {
            previous--;
        }
       return previous;

    },0)
  
}

console.log(has_balaced_parens(sample3))