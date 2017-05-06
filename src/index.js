import graphbuilder from './builders/graphbuilder.js'

let milan = { name: 'Milan', country: 'IT' };
let rome = { name: 'Rome', country: 'IT' };
let torin = {name: 'Torin', country: 'IT'};

// other type of object
let stadium = { capacity: 1000, isOpen: true };
let home = { addresse: '1st street', meters: 23 };

let graph = graphbuilder
                .withNode('a',milan.name,milan)
                .withNode('b',rome.name,rome)
                .withNode('c',torin.name,torin)
                .withEdge(milan,rome,4,milan.name+rome.name)
                .withEdge(milan,torin,3,milan.name+torin.name)
                .withEdge(rome,torin,5,rome.name+torin.name)
                .build();


console.log(graph);