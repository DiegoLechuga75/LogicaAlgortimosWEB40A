class Stack{
    constructor(){
        this.stack = [];
    }

    push(data){
        this.stack = [...this.stack, data];
    }

    pop(){
        let topElement = this.stack[this.stack.length - 1];
        let newStack = [];
        for (let i = 0; i < this.stack.length - 1; i++) {
            newStack = [...newStack, this.stack[i]];
        }
        this.stack = newStack;
        return topElement;
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    isEmpty(){
        return this.stack.length === 0;
    }
}


const myStack = new Stack();

myStack.push(4);
myStack.push(6);
myStack.push(8);
myStack.push(12);

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.isEmpty());


console.log(myStack);

const emptyStack = new Stack();

console.log(emptyStack.isEmpty());
