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

        let areNeighbours = false;

        graph.edges.forEach((edge) => { 
            if(this.edgeContainsNode(src,edge) && this.edgeContainsNode(dst,edge))
                areNeighbours = true;
        });
        
        return areNeighbours;
    },

    edgeContainsNode(obj,edge){
        let contains = obj._graph_props.id === edge.source_id || obj._graph_props.id === edge.target_id;
        //console.log(contains);
        return contains;
    }
  
};
export default graphutils;
