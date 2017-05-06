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


  withEdge(source,target,distance,label,metadata = {}){
    if(!source._graph_props || !target._graph_props || source._graph_props.type !== 'node' ||
        target._graph_props.type !== 'node'){
      console.log('Warning, you want to connect two node object');
      return this;
    }
    if(!distance){
      console.log('Warning, you want to connect two node woth undefined distance');
    }

    let edgeExisting = false;
    this.g.edges = this.g.edges.map((current) =>{

      if(current.id === (source._graph_props.id + '_' + target._graph_props.id))
        edgeExisting = true;
      return current;

    });

    if(edgeExisting)
      console.log('cannot add same edge with id',edge.id);
    else 
      this.g.edges.push(edgebuilder.edge(source,target,distance,label,metadata));

    return this;
  },

  withNode(id,label,obj){

    let nodeExisting = false;
    this.g.nodes = this.g.nodes.map((current) =>{
      
      if(id === current._graph_props.id)
        nodeExisting = true;
      return current;
    
    });

    if(nodeExisting)
      console.log('cannot add same node with id',node._graph_props.id);
    else {
      obj = nodebuilder.node(id,label,obj);
      if(obj._graph_props.type !== 'node'){
        console.log('Warning, you want to insert node witch is not a node type');
        return this;
      } else {
        this.g.nodes.push(obj);
      }
    }

    return this;
  },

  build(){
    return this.g;
  }
};
export default graphbuilder;
