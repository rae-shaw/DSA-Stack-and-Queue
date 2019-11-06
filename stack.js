class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }

     pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

    const peek = function(stack) {
    	const node = this.top
    	this.top = node.next;
    	return node.data;
    	this.top = node.data;
    }

    const isEmpty = function(stack){
    	if( this.top === null){
    		return 'Nothing to see here!'
    	}else{
    		return 'Something to see here!'
    	}
    }

    const display = function(stack){
    	if (!stack.top) {
        return 'Nothing to see here!'
    }
    let current = stack.top;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
    return;
	}


const starTrek = new Stack

starTrek.push(Kirk)
starTrek.push(Spock)
starTrek.push(McCoy)
starTrek.push(Scotty)
starTrek.pop(McCoy)
starTrek.display(starTrek)

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
   const stack = new Stack();
  let reverse = '';
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }
  for (let i = 0; i < s.length; i++) {
    reverse += stack.pop();
  }
  if (reverse === s) return true;
  return false;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));


function checkParens(expression) {
  const stack = new Stack();
  const open = ['(', '{', '[', "'", '"'];
  const close = [')', '}', ']', "'", '"'];
  let expected = '';
  let location = 0;
  for (let i = 0; i < expression.length; i++) {
    if (open.includes(expression[i])) {
      stack.push(expression[i]);
      expected = close[open.indexOf(expression[i])];
      location = i;
    } else if (close.includes(expression[i]) && expression[i] === expected) {
      stack.pop();
    } else if (close.includes(expression[i])) {
      console.log(`Closing parens without an opening at character ${i}`);
      return false;
    }
  }
  if (stack.top === null) return true;
  else {
    console.log(`Opening parens without a closing at character ${location}`);
    return false;
  }
}

