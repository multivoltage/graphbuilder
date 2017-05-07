import graphbuilder from './builders/graphbuilder.js'
import graphutils from './graphutils.js'

let a = { name: 'a', city: 'rome' };
let b = { name: 'b', country: 'germany' };
let c = { name: 'c', isFavorite: true };
let d = { name: 'd', surname: 'simple_surname'};
let e = { name: 'e', testUsed: 'JEST'};


const graph = graphbuilder
                .withNode(a.name,a.name,a)
                .withNode(b.name,b.name,b)
                .withNode(c.name,c.name,c)
                .withNode(d.name,d.name,d)                            
                .withNode(e.name,e.name,e)
                .withEdge(a,c,6,a.name+c.name)
                .withEdge(a,b,6,a.name+b.name)  
                .withEdge(a,d,3,a.name+d.name)
                .withEdge(c,d,5,c.name+d.name)
                .withEdge(c,e,1,c.name+e.name)   
                .withEdge(d,e,4,d.name+e.name)
                .withEdge(d,b,2,d.name+b.name)
                .withEdge(e,b,4,e.name+b.name)
                .build();


console.log(graphutils.getMinPath(a,e,graph));