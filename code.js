//I wrote all of this code independently after watching the video I listed. The only thing from the video is my comments on what I need to do. 
function dijkstra(graph, sourceNode) {
    // Test Empty graph
    if (Object.keys(graph).length == 0) {
        return []; 
    }
    
    //Initialize the distances and nodes/previous
    const distances = {}; 
    const previous = {}; 
    const visited = new Set(); 

    //Set initial to infinity and sourceNode to 0
    //I borrowed this from Caden but shortened it from him because it would not work for my code and his code was different than mine.
    for (let node in graph) {
        distances[node] = Infinity;
        previous[node] = null; 
    }
    distances[sourceNode] = 0; 

    //Create something for nodes to visit
    const nodesVisit = Object.keys(graph);

    while (nodesVisit.length > 0) { 
        //Find unvisited nodes with the shortest distance 
        let closestNode = nodesVisit.reduce((closest, node) => 
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
                    previous[neighbor] = closestNode; 
                }
            }
        }
    }
                
    return {distances, previous};
}
