import graphutils from '../src/graphutils.js';
import graphbuilder from '../src/builders/graphbuilder.js';

// simulate this wihout considering directions -> https://www.usna.edu/Users/cs/roche/courses/s12si335/u06/ex2color.png

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


test('A and B are neighbours', () => {
  expect(graphutils.areNeighbours(a,b,graph)).toBe(true);
});

test('A and C are neighbours', () => {
  expect(graphutils.areNeighbours(a,c,graph)).toBe(true);
});

test('A and D are neighbours', () => {
  expect(graphutils.areNeighbours(a,d,graph)).toBe(true);
});

test('C and E are neighbours', () => {
  expect(graphutils.areNeighbours(c,e,graph)).toBe(true);
});

test('A and E are NOT neighbours', () => {
  expect(graphutils.areNeighbours(a,e,graph)).not.toBe(true);
});