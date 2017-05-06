// I follow structure https://github.com/jsongraph/json-graph-specification

const nodebuilder = {

  // extend obj with _graph_props object
  node(id,label,obj){
    if(!id || id === ''){
      console.log('please provide valid id for this node');
      return;
    }
    if(label === ''){
      label = id;
      return;
    }

    let _graph_props = {
      type: 'node',
      id: id,
      label: label
    };

    obj._graph_props = _graph_props;
    return obj;
  },



};

export default nodebuilder;
