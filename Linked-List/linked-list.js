const printNestedObject = require('../print-nested-objects');


class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    add(val) {
        const obj = {
            value: val,
            next: null
        }
        if(this.size===0) {
            this.head = obj;
            this.tail = obj;
        }
        this.tail.next = obj;
        this.tail = obj;
        this.size++;
    }

    addAt(val, index) {
        let counter=0, current=null; 
        while(counter<this.size) {
            current = counter===0 ? this.head : current.next;
            if(counter===index) {
                // insert it here
                const obj = {
                    value: val, 
                    next: current.next
                };
                current.next = obj;
                this.size++;
                break;
            }
            counter++;
        }
    }

    traverse() {
        let counter = 0, current=this.head;
        while(counter<this.size) {
            console.log(current.value);
            current = current.next;
            counter++;
        }
    }

    remove(index) {
        let counter = 0, current = this.head;
        if(index===0) {
            // head getting deleted. 
            this.head = this.head.next;
            this.size--;
            return;
        }
        while(counter<this.size) {
            if(counter+1===index) {
                if( index===this.size-1 ) {
                    // tail is getting deleted 
                    current.next = null;
                    this.tail = current;
                } else {
                    current.next = current.next.next;
                }
                this.size--;
                break;
            }
            current = current.next;
            counter++;
        }
    }

    search(val) {
        let counter=0, current=this.head;
        while(counter<this.size) {
            if(current.value==val) return counter;
            current = current.next;
            counter++;
        }
        return -1;
    }

}

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(12);
linkedList.add(14);
printNestedObject(linkedList)
linkedList.traverse();
linkedList.remove(1);
printNestedObject(linkedList)
// linkedList.traverse();
linkedList.addAt(99, 1);
linkedList.addAt(0, 0);
linkedList.addAt(1,1);
linkedList.traverse()
console.log( linkedList.search(14) )