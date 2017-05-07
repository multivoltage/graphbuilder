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


test('A has C,B,D as neightbours', () => {
  const expected = [b,c,d];
  expect(graphutils.getNeighbours(a,graph)).toEqual(expect.arrayContaining(expected));
});

test('A has C,D as neightbours', () => {
  const expected = [c,d];
  expect(graphutils.getNeighbours(a,graph)).toEqual(expect.arrayContaining(expected));
});

test('B not has C as neightbours', () => {
  const expected = [c];
  expect(graphutils.getNeighbours(b,graph)).not.toEqual(expect.arrayContaining(expected));
});

// these tow will fail
test('E has C,D,B neightbours', () => {
  const expected = [c,d,b];
  expect(graphutils.getNeighbours(e,graph)).toEqual(expect.arrayContaining(expected));
});

test('D has A,C,E neightbours', () => {
  const expected = [a,c,e];
  expect(graphutils.getNeighbours(d,graph)).toEqual(expect.arrayContaining(expected));
});

