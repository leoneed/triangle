'use strict'

var Shape = require('./Shape.js');
var Triangle = require('./Triangle.js');
var Quadrilateral = require('./Quadrilateral.js');
var Polygon = require('./Polygon.js');

/**
 * Shape Factory
 *
 * @param {Array} edges Edges of shape
 * @return {Shape} New shape
 */ 
function ShapeFactory(edges) {
    return ShapeFactory.createShape(edges);
}

/**
 * Create new Shape
 *
 * @param {Array} edges Edges of shape
 * @return {Shape} New shape
 */
ShapeFactory.createShape = function(edges) {
    var shape;

    ShapeFactory.checkEdges(edges);

    switch (edges.length) {
        case ShapeFactory.shapeTypes.TRIANGLE: 
            shape = new Triangle(edges);
            break;

        case ShapeFactory.shapeTypes.QUADRILATERAL: 
            shape = new Quadrilateral(edges);
            break;

        default:
            shape = new Polygon(edges);
            break;
    }

    return shape;
}

/**
 * Check data
 *
 * @param {Array} edges
 */
ShapeFactory.checkEdges = function(edges) {
    var edgesLength,
        maxEdge = 0,
        sumEdges = 0;

    if (!Array.isArray(edges))  {
        throw new TypeError('Array expected');
    }

    edgesLength = edges.length;

    if (edgesLength === 0) {
        throw 'Can\'t create shape without edges';
    }
    else if (edgesLength < 3) {
        throw 'This is not a closed shape';
    }

    edges.map(function(edge) {
        if (typeof edge !== 'number') {
            throw new TypeError('All arguments must be numbers');
        }

        if (isNaN(edge)) {
            throw 'Edge can\'t be NaN';
        }

        if (!isFinite(edge)) {
            throw 'Edge can\'t be Infinity';
        }

        if (edge <= 0) {
            throw 'Edge can\'t be <= 0';
        }

        if (maxEdge < edge) {
            maxEdge = edge;
        }

        sumEdges += edge;
    });

    if ((sumEdges - maxEdge) <= maxEdge) {
        throw 'This is not a closed shape';
    }
}

/**
 * Get type of shape. Different Shapes have different types
 *
 * @param {Shape} shape 
 * @return {string} Shape type
 */
ShapeFactory.getShapeType = function(shape) {
    var shapeType;

    if (!(shape instanceof Shape)) {
        throw new TypeError('Shape expected');
    }

    shapeType = shape.getType();

    //compute shape type if type is not set yet
    if (!shapeType) {
        shapeType = shape.setType(ShapeFactory.getEqualEdgesCount(shape));
    }

    return shapeType;
}

/**
 * Calculate how many equal edges have shape
 *
 * @param {Shape} shape
 * @return {number}
 */
ShapeFactory.getEqualEdgesCount = function(shape) {

    if (!(shape instanceof Shape)) {
        throw new TypeError('Shape expected');
    }

    var edges = shape.getEdges();
    var edgesCountObj = { 0: 0 };
    var maxCountIndex = 0;

    //find maximum of equal edges
    edges.map(function(edge) {
        if (!edgesCountObj[edge]) {
            edgesCountObj[edge] = 0;
        }
        edgesCountObj[edge]++;

        if (edgesCountObj[edge] > edgesCountObj[maxCountIndex]) {
            maxCountIndex = edge;
        }
    });

    return edgesCountObj[maxCountIndex];
}

/*
 * Implemented shape types
 * values - number of shape edges
 */
ShapeFactory.shapeTypes = {
    TRIANGLE: 3,
    QUADRILATERAL: 4,
    POLYGON: Infinity
}

module.exports = ShapeFactory;