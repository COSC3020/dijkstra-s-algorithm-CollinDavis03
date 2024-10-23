function dijkstra(graph, sourceNode) {
    //Initialize the distances and nodes/previous
    const distances = {}; 
    const previous = {}; 
    const visited = new Set(); 

    //Set initial to infinity and sourceNode to 0 
    for (let node in graph) {
        distances[node] = Infinity;
        previous[node] = null; 
    }
    distances[sourceNode] = 0; 

    //Create something for nodes to visit
    const nodesVisit = Object.keys(graph);

    while (nodesVisit.length > 0) { 
        //Find unvisited nodes with the shortest distance 
        let closestNode = nodeVisit.reduce((closest, node) => 
            distances[node] < distances[closest] ? node : closest);

        //Remove the closest node
        nodesVisit.splice(nodesVisit.indexOf(closestNode), 1); 

        //Mark Visited 
        visited.add(closestNode); 

        //Update distance to other nodes 
        for(let neighbor in graph[closestNode]) {
            if (!visited.has(neighbor)) {
                const newDistance = distances[closestNode] + graph[closestNode][neighbor];
                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                    previous[neighbor] = closetNode; 
                }
            }
        }
    }
                
    return {distances, previous};
}
