'use strict'

var ShapeFactory = require('./oop_triangle/ShapeFactory.js');

module.exports = function getTriangleTypeProxy(edges) {

    if (!Array.isArray(edges)) {
        throw 'Array is expected, ' + (typeof edges) + ' get';
    }

    if (edges.length !== 3) {
        throw 'getTriangleTypeProxy expect 3 arguments, ' + edges.length + ' passed';
    }

    var Triangle = ShapeFactory(edges);

    return ShapeFactory.getShapeType(Triangle);
}
