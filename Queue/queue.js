class Queue {
    data = [];
    enqueue(v) {
        this.data[this.data.length] = v;
    }
    dequeue() {
        if(this.data.length===0) {
            console.log('queue is already empty.')
        } else {
            const v = this.data[0];
            for(let i=0; i<this.data.length-1; i++) {
                this.data[i] = this.data[i+1];
            }
            this.data.length = this.data.length-1;
            return v;
        }
    }

    front() {
        if(this.isEmpty()) {
            console.log('queue is empty');
            return null;
        }
        return this.data[0];
    }

    rear() {
        if(this.isEmpty()) {
            console.log('Queue is empty');
            return null;
        } else {
            return this.data[this.data.length-1];
        }
    }

    isEmpty() {
        return this.data.length===0;
    }

    print() {
        console.log(this.data);
    }
}

const queue = new Queue();
queue.enqueue(4);
queue.print();
queue.enqueue(8);
queue.print();
queue.enqueue(12);
queue.print();
queue.enqueue(17);
queue.print();

console.log( queue.dequeue() );
queue.print()
console.log( queue.dequeue() );
queue.print();
console.log( queue.front() )
console.log( queue.rear() )
console.log( queue.dequeue() );
queue.print();
console.log( queue.dequeue() );
queue.print()
console.log( queue.dequeue() );
queue.print()