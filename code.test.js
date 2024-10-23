function testDijkstra() {
    const graph = {
        A: { B: 7, C: 9, D: 14 },
        B: { A: 7, C: 10, E: 15 },
        C: { A: 9, B: 10, D: 2, E: 11 },
        D: { A: 14, C: 2, E: 9 },
        E: { B: 15, C: 11, D: 9 }
    };
    const sourceNode = 'A';
    const result = dijkstra(graph, sourceNode);

    const expectedDistances = {
        A: 0,
        B: 7,
        C: 9,
        D: 11,
        E: 20
    };

    for (let node in expectedDistances) {
        if (result.distances[node] !== expectedDistances[node]) {
            console.error(`Test failed for node ${node}. Expected ${expectedDistances[node]}, got ${result.distances[node]}`);
            return false;
        }
    }
    console.log("All tests passed!");
    return true;
}

testDijkstra();
