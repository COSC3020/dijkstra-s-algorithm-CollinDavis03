# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Answer:

We know that when it comes to finding the closest nodes in this code and finding the closest unvisited node and finding its distance will be $O|V|$ time. It is also executed V times leading to us getting $O|V^2|$ for the time in finding the closest edge. 

Our code also has to update the distances once they have been found by the neighboring node. This time would be $O(E)$. E is the edges in the code. 

The time complexity for the vertices would be $O|V^2|$. Everything combined it would be $O((V^2)+E)$ or $O((|E| + |V|)log|V|)$


## Sources:
I watched this video on Dijstra's algorithm so I could understand the time complexity better than what was given to me in the slides and the video provided to us. https://www.youtube.com/watch?v=YMyO-yZMQ6g. I also watched this video on how to write the code in JAVA to get a better understanding of how to write it because I was a little lost on how to implement infinity into the code and do the loops for updating the distance (https://www.youtube.com/watch?v=q3yKyE19OR0). I also looked at Caden's repo to figure out how to the test code correctly and pass. 

## Plagarism Statement: 
“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
