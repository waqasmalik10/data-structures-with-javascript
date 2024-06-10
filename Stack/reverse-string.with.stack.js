class Stack {
    data = [];
    size = 0;
    push(val) {
        this.data[this.size] = val;
        this.size++;
    }
    pop() {
        if(this.size>0) {
            this.size--;
            const tmp = this.data[this.size];
            this.data.length = this.size;
            return tmp;
        } else {
            console.error('Stack is empty.');
        }
    }
    print() {
        for(let i=this.size-1; i>=0; i--) {
            console.log(this.data[i]);
        }
    }
    popAll() {
        let str = '', toLoop = this.size;
        for(let i=0; i<toLoop; i++) {
            let a = this.pop();
            str += a;
        }
        return str;
    }
}

const str = '.esrever ot gnirts ym si sihT';
const stack = new Stack();
str.split('').forEach(a=>stack.push(a));
stack.print();
console.log( stack.popAll() );
