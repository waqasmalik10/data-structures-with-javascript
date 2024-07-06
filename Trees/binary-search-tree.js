const printNestedObject = require('../print-nested-objects');

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root===null;
    }

    addNode(val) {
        const node = new Node(val);
        if(this.isEmpty()) {
            this.root = node;
        } else {
            this.__insertChildNode(this.root, node)
        }
    }

    search(val) {
        if(this.root===null) {
            return false;
        } else {
            return this.__searchChildNode(this.root, val)
        }
    }

    traverse_DFS() {
        if(this.root === null) return;
        this.__DFS_preOrder(this.root);
        this.__DFS_InOrder(this.root);
        this.__DFS_PostOrder(this.root);
    }

    traverse_BFS() {
        if(this.root === null) return;
        const queue = [];
        queue.push(this.root);
        while(queue.length>0) {
            const node = queue.shift();
            console.log(node.value);
            if(node.left !== null ) queue.push(node.left);
            if(node.right !== null) queue.push(node.right);
        }
    }

    delete(val) {
        if(this.isEmpty()) return null;
        this.root = this.__delete(this.root, val);
    }

    min() {
        if(this.isEmpty()) return null; // tree is empty
        return this.__findMin( this.root );
    }

    max() {
        if(this.isEmpty()) return null; // tree is empty.
        return this.__findMax( this.root );
    }

    __insertChildNode(current_root, node) {
        if(node.value < current_root.value) {
            if(current_root.left === null) {
                // left node is empty so we can add it on left. 
                current_root.left = node;
            } else {
                // go to the left child of current node and continue
                this.__insertChildNode(current_root.left, node);
            }
        } else {
            if(current_root.right === null) {
                // go down to the left child node and continue until we found the perfect position to insert new node.
                current_root.right = node;
            } else {
                // go down to the right child node and continue until we found the perfect position to insert new node.
                this.__insertChildNode(current_root.right, node)
            }
        }
    }

    __searchChildNode(current_root, val) {
        if(current_root === null) {
            // if at the end of the tree and nothing found, return false.
            return false; 
        }
        if(current_root.value === val) {
            // value fouund. 
            return true;
        } else if(val < current_root.value) {
            return this.__searchChildNode(current_root.left, val);
        }
        else {
            return this.__searchChildNode(current_root.right, val);
        }
    }

    __DFS_preOrder(current_root) {
        if(current_root===null) return;
        console.log(current_root.value);
        this.__DFS_preOrder(current_root.left);
        this.__DFS_preOrder(current_root.right);
    }

    __DFS_InOrder(current_root) {
        if(current_root === null) return;
        this.__DFS_InOrder(current_root.left);
        console.log(current_root.value);
        this.__DFS_InOrder(current_root.right);
    }
    
    __DFS_PostOrder(current_root) {
        if(current_root === null) return;
        this.__DFS_PostOrder(current_root.left);
        this.__DFS_PostOrder(current_root.right);
        console.log(current_root.value);
    }

    __findMin(current_root) {
        if(current_root.left === null) return current_root.value;
        return this.__findMin(current_root.left);
    }

    __findMax(current_root) {
        if(current_root.right === null) return current_root.value;
        return this.__findMax(current_root.right);
    }

    __delete(current_root, val) {
        if(current_root===null) return null;
        if(val < current_root.value) {
            // delete on left side.
            current_root.left = this.__delete(current_root.left, val);
        } else if(val > current_root.value) {
            // delete on right side. 
            current_root.right = this.__delete(current_root.right, val);
        } else {
            // we are at the element that needs to be deleted.
            if(current_root.left===null && current_root.right===null) {
                return null;
            } else if(current_root.left===null) {
                return current_root.right;
            } else if(current_root.right === null) {
                return current_root.left;
            } else {
                // we are deleting a note which has both left and right nodes.
                current_root.value = this.__findMin(current_root.right);
                // as we set the minimum values from right side to current root, we need to delete that value from right side node now. 
                current_root.right = this.__delete(current_root.right, current_root.value);
            }
        }
        return current_root;
    }

}


const bst = new BST();
bst.addNode(20);
bst.addNode(30);
bst.addNode(35);
bst.addNode(25);
bst.addNode(11);
bst.addNode(12);
bst.addNode(9);
printNestedObject(bst)
console.log( bst.search(10) )
console.log( bst.search(5) )

bst.traverse_DFS();
console.log("Traversing BFS: ")
bst.traverse_BFS();

console.log(`Min value in tree is ${bst.min()}`);
console.log(`Max vlaue in tree is ${bst.max()}`);

const valToDelete = 30;
bst.delete(valToDelete);
console.log(`Traversing with BFS after deleting ${valToDelete}`);
bst.traverse_BFS()