import nodebuilder from './nodebuilder.js';
import edgebuilder from './edgebuilder.js';

// I follow structure https://github.com/jsongraph/json-graph-specification


const graphbuilder = {

  g: {
    type: 'graph',
    metadata: {},
    nodes: [],
    edges: []
  },


  withNode(obj){
    //this.g.nodes.push(node);

    let nodeExisting = false;
    this.g.nodes = this.g.nodes.map((current) =>{
      
      if(obj._graph_props.id === current._graph_props.id)
        nodeExisting = true;
      return current;
    
    });

    if(nodeExisting)
      console.log('cannot add same node with id',node._graph_props.id);
    else 
      this.g.nodes.push(obj);

    return this;
  },

  withEdge(edge){
    return this;
  },

  build(){
    return this.g;
  }
};
export default graphbuilder;
