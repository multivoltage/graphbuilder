// I follow structure https://github.com/jsongraph/json-graph-specification
const edgebuilder = {

  // string, [data]
  edge(source,target,distance,label,metadata = {}){
    if(!source || source === '' || !target || label === ''){
      console.log('please provide valid source/target nodes for this edge');
      return;
    }

    let edge = {
      type: 'edge',      
      id: source._graph_props.id + '_' + target._graph_props.id,
      label: label,
      //source_id: source._graph_props.id,
      //target_id: target._graph_props.id,
      distance: distance,
      metadata: metadata
    };

    //console.log('created edge from',source.label,'to',target.label);
    return edge;
  }

};

export default edgebuilder;
