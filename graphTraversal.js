// Class to represent a Graph
class Graph {
    // Constructor to initialize the Graph
    constructor(v, isDirected = false) {
        this.vertices = v; // Number of vertices in the graph
        this.adjList = new Map(); // Adjacency list to store the graph
        this.directed = isDirected; // Boolean to indicate whether the graph is directed
    }

    // Method to add a vertex to the graph
    addVertex(v) {
        this.adjList.set(v, []); // Initialize an empty array for the vertex
    }

    // Method to add an edge to the graph
    addEdge(source, destination, weight = 0) {
        // If the source vertex doesn't exist, add it
        if (!this.adjList.has(source)) {
            this.addVertex(source);
        }

        // If the destination vertex doesn't exist, add it
        if (!this.adjList.has(destination)) {
            this.addVertex(destination);
        }

        // Add the edge to the adjacency list of the source vertex
        this.adjList.get(source).push([destination, weight]);

        // If the graph is undirected, add an edge from the destination vertex to the source vertex as well
        if (!this.directed) {
            this.adjList.get(destination).push([source, weight]);
        }
    }

    // Method to remove an edge from the graph
    removeEdge(s, d) {
        // Filter out the edge from the adjacency list of the source vertex
        let list = this.adjList.get(s).filter(([v, w]) => v !== d);
        this.adjList.set(s, list);

        // If the graph is undirected, remove the edge from the destination vertex as well
        if (!this.directed) {
            let list = this.adjList.get(d).filter(([v, w]) => v !== s);
            this.adjList.set(d, list);
        }
    }

    // Method to remove a vertex from the graph
    removeVertex(v) {
        // Remove all edges to the vertex
        const vertices = this.adjList.keys();
        for (const vertex of vertices) {
            v !== vertex && this.removeEdge(vertex, v);
        }

        // Remove the vertex from the adjacency list
        this.adjList.delete(v);
    }

    // Method to print the graph
    printGraph() {
        // Iterate over all vertices in the graph
        const keys = this.adjList.keys();

        for (const key of keys) {
            // Get the adjacency list for the vertex
            const list = this.adjList.get(key);
            let str = "";
            // Build a string representation of the adjacency list
            for (const [val, weight] of list) {
                str = str + val + " ";
            }
            // Print the vertex and its adjacency list
            console.log(key + " -> " + str);
        }
    }

	/**
	 * This function performs a Breadth-First Search (BFS) on the graph. 
	 * BFS is a graph traversal algorithm that visits all the vertices of a graph in breadth-first order i.e.,
	 *  it visits all the vertices at the same level before going to the next level.
	 */
	// Function to perform Breadth-First Search (BFS) on the graph
	BFS(start) {
		// Initialize a queue with the starting vertex
		const q = [start];

		// Keep track of visited vertices
		const visited = {};
		visited[start] = true;

		// While there are vertices in the queue
		while (q.length > 0) {
			// Remove the first vertex from the queue
			const element = q.shift();

			// Log the visited vertex
			console.log(element);

			// Get all adjacent vertices of the dequeued vertex
			const list = this.adjList.get(element);

			// Mark all adjacent vertices as visited and enqueue them
			for (const i in list) {
				const neigh = list[i][0]; // Get the vertex from the adjacency list

				// If the adjacent vertex hasn't been visited yet
				if (!visited[neigh]) {
					visited[neigh] = true; // Mark it as visited
					q.push(neigh); // Add it to the queue
				}
			}
		}
	}
	
	// Utility function to perform Depth-First Search (DFS) on the graph
	DFSUtil(start, visited) {
		// Mark the current node as visited
		visited[start] = true;

		// Log the visited node
		console.log(start);

		// Get all adjacent vertices of the current node
		const list = this.adjList.get(start);

		// Recur for all the vertices adjacent to this vertex
		for (const i in list) {
			const neigh = list[i][0]; // Get the vertex from the adjacency list

			// If the adjacent vertex hasn't been visited yet
			if (!visited[neigh]) {
				this.DFSUtil(neigh, visited); // Recursively call DFSUtil for the adjacent vertex
			}
		}
	}

	/**
	 * This function is a wrapper for the DFSUtil(start, visited) function. 
	 * It initializes the visited object and starts the Depth-First Search (DFS) from the given start vertex. 
	 * DFS is a graph traversal algorithm that visits all the vertices of a graph in depth-first order i.e., 
	 * it visits a vertex and recursively explores all its adjacent vertices before backtracking
	 */
	// Function to perform Depth-First Search (DFS) on the graph
	DFS(start) {
		// Initialize an object to keep track of visited vertices
		const visited = {};

		// Call the DFS utility function starting from the given vertex
		this.DFSUtil(start, visited);
	}

	/**
	 * This function checks if there is a path between two vertices s and d in the graph. 
	 * It uses a Breadth-First Search (BFS) approach to traverse the graph. 
	 * If it encounters the destination vertex d during the traversal, it returns true. 
	 * If it finishes the traversal without encountering d, it returns false.
	 */
	// Function to check if there is a path between two vertices
	checkPath(s, d) {
		// Initialize a queue with the starting vertex
		const q = [s];

		// Keep track of visited vertices
		const visited = {};
		visited[s] = true;

		// While there are vertices in the queue
		while (q.length > 0) {
			// Remove the first vertex from the queue
			const element = q.shift();

			// If the dequeued vertex is the destination, return true
			if (element === d) {
				return true;
			}

			// Get all adjacent vertices of the dequeued vertex
			const list = this.adjList.get(element);

			// Mark all adjacent vertices as visited and enqueue them
			for (const i in list) {
				const neigh = list[i][0]; // Get the vertex from the adjacency list

				// If the adjacent vertex hasn't been visited yet
				if (!visited[neigh]) {
					visited[neigh] = true; // Mark it as visited
					q.push(neigh); // Add it to the queue
				}
			}
		}

		// If no path is found, return false
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
