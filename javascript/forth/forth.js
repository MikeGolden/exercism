export class Forth {
  constructor() {
    this.stack = [];
    this.defineWords = {};
  }

  evaluate(input) {
    const tokens = input.split(' ');
    for (let token of tokens) {
      if (this.isNumber(token)) {
        this.stack.push(parseInt(token));
      } else if (this.isWord(token)) {
        const word = token.toUpperCase();
        if (this.defineWords[word]) {
          const definition = this.defineWords[word];
          const arguments = tokens.slice(1);
          this.evalDef(definition, arguments);
        } else if (word === ':') {
          if (tokens.length !== 4) {
            throw new Error('Invalid definition syntax');
          }
          const (name, definition, comment) = tokens.slice(1);
          this.defineWords[name.toUpperCase()] = definition;
          console.log(`Defined word: ${name}`);
        } else {
          throw new Error(`Unknown word: ${word}`);
        }
      } else {
        throw new Error(`Invalid token: ${token}`);
      }
    }
  }

  get stack() {
    return this.stack;
  }

  isNumber(token) {
    return /^\d+$/.test(token);
  }

  isWord(token) {
    return /^[a-zA-Z0-9_\-\+\*\/.\?]+$/.test(token);
  }

  evalDef(definition, arguments) {
    const parseDef = this.parseExpression(definition);
    const fn = (...args) => {
      for (let arg of args) {
        this.stack.push(arg);
      }
      const result = parseDef.reduce((acc, token) => {
        switch (token) {
          case '+':
            return acc + this.stack.pop();
          case '-':
            return acc - this.stack.pop();
          case '*':
            return acc * this.stack.pop();
          case '/':
            if (this.stack.pop() === 0) {
              throw new Error('Division by zero');
            }
            return acc / this.stack.pop();
          case 'DUP':
            return acc + acc;
          case 'DROP':
            return acc;
          case 'SWAP':
            const temp = this.stack.pop();
            this.stack.push(acc);
            return temp;
          case 'OVER':
            return this.stack[this.stack.length - 2] + acc;
          default:
            throw new Error(`Invalid token: ${token}`);
        }
      }, 0);
      this.stack.pop();
      this.stack.push(result);
    };
    for (let arg of arguments) {
      fn(parseInt(arg));
    }
  }

  parseExpression(expression) {
    return expression.split(' ');
  }
}
