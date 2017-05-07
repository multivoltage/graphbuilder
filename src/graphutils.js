import graphbuilder from './builders/graphbuilder.js';

const graphutils = {

    areNeighbours(src,dst,graph){
        if(!src || !dst){
            console.log('cannot check for neightbours with undefined nodes');
            return false;
        }
        if(!graph){
            console.log('cannot check for neightbours with undefined graph');
            return false;   
        }

        for(let edge of graph.map.keys()){
            if(this.edgeContainsNode(edge,src,graph) && this.edgeContainsNode(edge,dst,graph))
                return true;
        }
        
        return false;
    },

    edgeContainsNode(edge,node,graph){
        for(let [current_edge,pair] of graph.map){
            if(edge.id === current_edge.id){
                // found edge
                if(node._graph_props.id === pair.src._graph_props.id || node._graph_props.id === pair.dst._graph_props.id)
                    return true;
                else 
                    return false;
            }
        }
        return false;
    },

    getNeighbours(node,graph){
        if(!node || !graph){
            console.log('cannot retrive neighbours of undefines obj/graph');
            return [];
        }
        
        let neighbours = new Set();
        for(let [edge,pair] of graph.map){
            // check for src is in pair and take dst 
            if(pair.src._graph_props.id === node._graph_props.id){
                // add to neightbours only if is necessary
                if(!neighbours.has(pair.dst))
                    neighbours.add(pair.dst);
            } else if(pair.dst._graph_props.id === node._graph_props.id){
                if(!neighbours.has(pair.src))
                    neighbours.add(pair.src);
            }
        }
        
        return Array.from(neighbours);
    },

    areInThisEdge(src,dst,edge){
        return (edge.source_id === src._graph_props.id && edge.target_id === dst._graph_props.id) ||
               (edge.target_id === dst._graph_props.id && edge.source_id === src._graph_props.id);
    },

    getDistance(src,dst,graph){
        for(let [edge,pair] of graph.map){
            // if this edge contains both src and dst
            if(this.areInThisEdge(src,dst,edge)){
                return edge.distance;
            }
        }
        return null;
    },

    getNodes(graph){
        return graph.nodes;
    },

    getEdges(graph){
        return graph.map.keys();
    },

    // to fix
    getMinPath(src,dst,graph){
        
        let nodes = this.getNodes(graph);
        let edges = this.getEdges(graph);
        let settledNodes = new Set();
        let unSettledNodes = new Set();
        let predecessors = new Map();
        let distances = new Map();

        let findMinimalDistances = (node) => {
            let adjacentsNodes = this.getNeighbours(node,graph);
            for(let target of adjacentsNodes){
                let sum = getShortestDistance(node) + this.getDistance(node,target,graph);
                if(getShortestDistance(target) > sum){
                    distances.add(target,distance);
                    predecessors.add(target,node);
                    unSettledNodes.add(target);
                }
            }
        }

        let getShortestDistance = (destination) => {
            let d = distances.get(destination);
            if(!d){
                return 999999;
            } else {
                return d;
            }
        }

        let getMinimum = (vertexes) => {
            let minumun = null;
            for(let vertex of vertexes){
                if(!minumun)
                    minumun = vertex;
                else 
                    if(getShortestDistance(vertex) < getShortestDistance(minimum))
                        minumun = vertex;
            }
            return minumun;
        }   

        let execute = (source) => {
            distances.set(source,0);
            unSettledNodes.add(source);
            while(unSettledNodes.size > 0){
                let node = getMinimum(unSettledNodes);
                settledNodes.add(node);
                unSettledNodes.delete(node);
                findMinimalDistances(node);
            }
        }

        execute(src); 
        
        let getPath = (target) => {
            let path = [];
            let step = target;
            
            if(!predecessors.get(step))
                return;
            
            path.add(step);
            while(predecessors.get(step) != null){
                step = predecessors.get(step);
                path.add(step);
            }
            // Collections.reverse(path);
            return path;
        }

        getPath(dst);
    }
  
};
export default graphutils;

/**
 * 
 */