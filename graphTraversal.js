class Graph {
	constructor(v, isDirected = false) {
		this.vertices = v;
		this.adjList = new Map();
		this.directed = isDirected;
	}

	addVertex(v) {
		this.adjList.set(v, []);
	}

	addEdge(source, destination,wight=0) {
		if (!this.adjList.has(source)) {
			this.addVertex(source);
		}

		if (!this.adjList.has(destination)) {
			this.addVertex(destination);
		}

		this.adjList.get(source).push([destination,wight]);
		if (!this.directed) {
			this.adjList.get(destination).push([source,wight]);
		}
	}

	removeEdge(s, d) {
		let list = this.adjList.get(s).filter(([v,w]) => v !== d);
		this.adjList.set(s, list);
		if (!this.directed) {
			let list = this.adjList.get(d).filter(([v,w]) => v !== s);
			this.adjList.set(d, list);
		}
	}

	removeVertex(v) {
		const vertices = this.adjList.keys();
		for (const vertice of vertices) {
			v !== vertice && this.removeEdge(vertice, v);
		}
		this.adjList.delete(v);
	}

	printGraph() {
		const keys = this.adjList.keys();

		for (const key of keys) {
			const list = this.adjList.get(key);
			let str = "";
			for (const [val,wight] of list) {
				str = str + val + " ";
			}
			console.log(key + " -> " + str);
		}
	}

	BFS(start) {
		const q = [];
		const visited = {};
		visited[start] = true;
		q.push(start);

		while (q.length > 0) {
			const element = q.shift();
			console.log(element);
			const list = this.adjList.get(element);
			for (const i in list) {
				const neigh = list[i];

				if (!visited[neigh]) {
					visited[neigh] = true;
					q.push(neigh);
				}
			}
		}
	}

	DFSUtil(start, visited) {
		visited[start] = true;

		console.log(start);

		const list = this.adjList.get(start);

		for (const i in list) {
			const neigh = list[i];
			if (!visited[neigh]) {
				this.DFSUtil(neigh, visited);
			}
		}
	}

	DFS(start) {
		const visited = {};
		this.DFSUtil(start, visited);
	}

	checkPath(s, d) {
		const q = [];
		const visited = {};
		visited[s] = true;
		q.push(s);

		while (q.length > 0) {
			const element = q.shift();
			if (element === d) {
				return true;
			}
			const list = this.adjList.get(element);
			for (const i in list) {
				const neigh = list[i];

				if (!visited[neigh]) {
					visited[neigh] = true;
					q.push(neigh);
				}
			}
		}
		return false;
	}
}

const vertices = ["A", "B", "C", "D", "E", "F"];
const graph = new Graph(vertices.length, true);

for (const val of vertices) {
	graph.addVertex(val);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "B");
graph.addEdge("C", "D");
graph.addEdge("D", "E");
graph.addEdge("E", "F");

console.log("----------------------------------------");
graph.printGraph();
console.log("----------------------------------------");
graph.BFS("F");
console.log("----------------------------------------");
graph.DFS("F");
console.log("----------------------------------------");
graph.removeVertex("B");
graph.printGraph();
let s = "F";
let d = "A";
if (graph.checkPath(s, d)) {
	console.log(`There is path from ${s} and ${d}`);
} else {
	console.log(`There is no path from ${s} and ${d}`);
}
