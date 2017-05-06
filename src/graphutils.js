import graphbuilder from './builders/graphbuilder.js';

const graphutils = {

    /**
     * return an array of nodes ids
     */
    calcMinPath(src,dst){
        if(!src || !dst){
            console.log('cannot calculate min path from undefined src/dst nodes');
            return [];
        }

        let steps = [];

        return steps;
    },

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
            if(pair.src._graph_props.id === node._graph_props.id && !neighbours.has(pair.src))
                neighbours.add(pair.src);
            
            if(pair.src._graph_props.id === node._graph_props.id && !neighbours.has(pair.dst))
                neighbours.add(pair.dst);            
        }
        
        return Array.from(neighbours);
    }
  
};
export default graphutils;

/**
 * 
 */