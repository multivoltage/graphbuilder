import nodebuilder from './builders/nodebuilder.js';
import edgebuilder from './builders/edgebuilder.js';
import graphbuilder from './builders/graphbuilder.js'

let milan = { name: 'Milan', country: 'IT' };
let rome = { name: 'Rome', country: 'IT' };
let torin = {name: 'Torin', country: 'IT'};

// other type of object
let stadium = { capacity: 1000, isOpen: true };
let home = { addresse: '1st street', meters: 23 };

let graph = graphbuilder
                .withNode(nodebuilder.node('a',milan.name,milan))
                .withNode(nodebuilder.node('b',rome.name,rome))
                .withNode(nodebuilder.node('c',torin.name,torin))
                .build();

