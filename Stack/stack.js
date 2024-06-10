class Stack {
    data = [];
    size = 0;
    push(val) {
        this.data[this.size] = val;
        this.size++;
    }
    pop() {
        if(this.size>0) {
            const val = this.data[this.size-1];
            this.size--;
            this.data.length = this.size;
            return val;
        } else {
            console.error('Stack is empty');
            return null;
        }
    }
    print() {
        for(let i=this.size-1; i>=0; i--) {
            console.log( this.data[i] );
        }
    }
}

const stack = new Stack();
stack.print();
stack.push(3);
stack.push(6);
stack.push(7);
stack.print();
console.log( stack.pop() );
console.log( stack.pop() );
console.log( stack.pop() );
console.log( stack.pop() );
stack.print()