import nodebuilder from './nodebuilder.js';
import edgebuilder from './edgebuilder.js';

const graphbuilder = {

  g: {
    type: 'graph',
    metadata: {},
    map: new Map(),
    nodes: new Set()
  },

  getEdgeId(src,dst){
    return src._graph_props.id + '_' + dst._graph_props.id;
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

    let edgeExisting =  false;
    if(this.g.map.get(this.getEdgeId(source,target)) || this.g.map.get(this.getEdgeId(target,source))){
      edgeExisting = true;
      console.log('Warning, edge from',source.label,'and',target.label,'already exist');
    }
    if(!edgeExisting){
      this.g.map.set(edgebuilder.edge(source,target,distance,label,metadata),
      {
        src: source,
        dst: target        
      });
    }

    return this;
  },

  withNode(id,label,obj){

    let nodeExisting = false;
    for(let pair of this.g.map.values()){
      if(pair.src._graph_props.id === id || pair.dst._graph_props.id){
        console.log('node with id',id,'is already existing');
        nodeExisting = true;
        return this;
      }
    }

    if(!nodeExisting)
      this.g.nodes.add(nodebuilder.node(id,label,obj));

    return this;
  },

  build(){
    return this.g;
  }
};
export default graphbuilder;
