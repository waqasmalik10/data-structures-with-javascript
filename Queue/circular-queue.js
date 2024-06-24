class CircularQueue {
    constructor(size) {
        this.max = size;
        this.data = new Array(size);
        this.front = -1;
        this.rear = -1;
        this.currentSize = 0;
    }
    
    enqueue(val) {
        if(this.currentSize===this.max) {
            console.log('Queue is already full');
            return;
        }
        if(this.front===-1) {
            this.front=0; 
            this.rear=0;
        } else {
            this.rear++;
        }
        if(this.rear===this.max) this.rear = 0;
        this.data[ this.rear ] = val;
        this.currentSize++;
    }

    dequeue() {
        if(this.currentSize===0) {
            console.log('Queue is empty');
            return;
        }
        const val = this.data[ this.front ];
        this.data[ this.front ] = null;
        this.front++;
        if(this.front===this.max) this.front=0;
        this.currentSize--;
        return val;
    }
}

const queue = new CircularQueue(5);
queue.enqueue(1);
console.log( "After enqueing 1: ",queue );

queue.enqueue(2);
console.log( "After enqueing 2: ",queue );

queue.enqueue(3);
console.log( "After enqueing 3: ",queue );

queue.enqueue(4);
console.log( "After enqueing 4: ",queue );

queue.enqueue(5);
console.log( "After enqueing 5: ",queue );

queue.enqueue(6);
console.log( "After enqueing 6: ",queue );

console.log( 'After Dequeueing: ', queue.dequeue() );
console.log( queue );

console.log( 'After Dequeueing: ', queue.dequeue() );
console.log( queue );

console.log( 'After Dequeueing: ', queue.dequeue() );
console.log( queue );

console.log( 'After Dequeueing: ', queue.dequeue() );
console.log( queue );

console.log( 'After Dequeueing: ', queue.dequeue() );
console.log( queue );

console.log( 'After Dequeueing: ', queue.dequeue() );
console.log( queue );

queue.enqueue(11);
console.log( "After enqueing 11: ",queue );

queue.enqueue(12);
console.log( "After enqueing 12: ",queue );