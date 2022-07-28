function balancedBrackets(string) {
  const stack = [];
  const brackets = "[]{}()";
  for (let bracket of string) {
    let index = brackets.indexOf(bracket);
    if(index % 2 === 0) {
      stack.push(index + 1);
    }
    else if (brackets.includes(bracket)) {
      if (stack.pop() != index) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
