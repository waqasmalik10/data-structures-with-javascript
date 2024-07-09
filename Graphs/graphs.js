class Graph {
    constructor() {
        this.data = {};
    }

    addVertex(vertex) {
        if(!this.data[vertex]) this.data[vertex] = [];
    }

    removeVertex(vertex) {
        delete this.data[vertex];
        Object.keys(this.data).forEach((val, index)=> {
            const v = this.data[val];
            if(v.indexOf(vertex) !== -1) {
                v.splice(v.indexOf(vertex), 1);
            }
        })
    }

    connectVertex(from, to) {
        this.addVertex(from);
        this.addVertex(to);
        if(this.data[from].indexOf(to)===-1) {
            this.data[from].push(to);
        }
    }

    removeEdge(from, to) {
        if(this.data[from].indexOf(to) !== -1) {
            this.data[from].splice( this.data[from].indexOf(to), 1 );
        }
        if(this.data[to].indexOf(from) !== -1) {
            this.data[to].splice( this.data[to].indexOf(from), 1 );
        }
    }
}

// const adjacencyMatrix = [
//     [0, 1, 1, 0],
//     [1, 0, 1, 1],
//     [1, 1, 0, 0],
//     [0, 1, 0, 0]
// ];

// const adjacencyList = {
//     'a': ['b', 'c'],
//     'b': ['a', 'c', 'd'],
//     'c': ['a', 'b'],
//     'd': ['b']
// }


const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.connectVertex('A', 'B');
graph.connectVertex('A', 'C');
graph.connectVertex('B', 'A');
graph.connectVertex('B', 'C');
graph.connectVertex('B', 'D');
graph.connectVertex('C', 'A');
graph.connectVertex('C', 'B');
graph.connectVertex('D', 'B');

console.log(graph);
graph.removeVertex('C');
console.log(graph);
graph.removeEdge('B', 'D');
console.log(graph);

// console.log(adjacencyMatrix);
// console.log(adjacencyList);