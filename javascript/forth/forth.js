const OPERATION_MAP = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => {
    if (b === 0) throw Error("Division by zero");
    return Math.floor(a / b);
  },
};
const OPERATORS = new Set(Object.keys(OPERATION_MAP));
const getVars = (stack, count = 1) => {
  if (stack.length < count) throw Error("Stack empty");
  return stack.splice(count * -1);
};
const COMMAND_MAP = {
  dup: (stack) => {
    const [a] = getVars(stack);
    stack.push(a);
    stack.push(a);
  },
  drop: (stack) => getVars(stack),
  swap: (stack) => {
    const [a, b] = getVars(stack, 2);
    stack.push(b, a);
  },
  over: (stack) => {
    const [a, b] = getVars(stack, 2);
    stack.push(a, b, a);
  },
};
const STACK_COMMANDS = new Set(Object.keys(COMMAND_MAP));

export class Forth {
  constructor() {
    this._stack = [];
    this._dictionary = {};
  }

  _defineCommand(terms) {
    const command = terms[1];

    if (command.match(/^-?\d+$/)) throw Error("Invalid definition");

    const action = this._expandActions(terms.slice(2, -1)).join(" ");

    this._dictionary[command] = action;
  }

  _expandActions(terms) {
    return terms.flatMap((term) => this._dictionary[term]?.split(" ") ?? term);
  }

  _performArithmetic(operator) {
    const b = this._stack.pop();
    const a = this._stack.pop();

    if (a === undefined || b === undefined) throw Error("Stack empty");

    const result = OPERATION_MAP[operator](a, b);
    this._stack.push(result);
  }

  _manipulateStack(command) {
    COMMAND_MAP[command](this._stack);
  }

  _executeActions(actions) {
    actions.forEach((action) => {
      if (OPERATORS.has(action)) {
        this._performArithmetic(action);
      } else if (STACK_COMMANDS.has(action)) {
        this._manipulateStack(action);
      } else if (action.match(/^-?\d+$/)) {
        this._stack.push(Number(action));
      } else {
        throw Error("Unknown command");
      }
    });
  }

  evaluate(rawInput) {
    const inputTerms = rawInput.toLowerCase().split(" ");

    if (inputTerms[0] === ":") {
      this._defineCommand(inputTerms);
      return;
    }

    this._executeActions(this._expandActions(inputTerms));
  }

  get stack() {
    return this._stack;
  }
}