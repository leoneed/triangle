# Triangle

`npm i` to install node modules

`npm test` to run tests

`./triangle EDGE_A EDGE_B EDGE_C` to check triangle by functional code

`./triangle --oop EDGE_A EDGE_B EDGE_C` to check triangle by OOP code

####Example:

```
./triangle --oop 1 2 2
isosceles
./triangle 2 2 2
equilateral
```

`src/func_triangle.js` - functional implementation

`src/oop_triangle.js` - proxy for OOP implementation

`src/oop_triangle/Polygon.js` `src/oop_triangle/Quadrilateral.js` - dummy shapes to show scalability
