let a = '{([]())}';
let b = '{([](';

let balencedP = str => {
  //create stack
  let stack = [];
  //create pairs object
  let pairs = {'{':'}', '(': ')', '[':']'};
  //edge case
  if(str.length <= 1) {
    return false;
  }
  //iterate
  for(var i =0; i < str.length; i ++) {
  //if pairs[str[i]] exists
  if(pairs[str[i]]) {
    //push value to stack
    stack.push(str[i]);
  } else {
    //or else check if pairs at the last pushed open parens is equal to the current iteration character
    if(pairs[stack.pop()] !== str[i]) {
      //return false if not
      return false;
    }
  }
  }
  //return true if stack is empty
  return stack.length === 0;
}

balencedP(b);