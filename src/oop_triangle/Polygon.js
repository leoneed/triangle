'use strict'

var Shape = require('./Shape.js');

/**
 * Constructor to create new Shape
 *
 * @constructor
 * @param {Array} edges Edges of shape
 * @return {Shape} New shape
 */ 
function Polygon(edges) {
    if (!(this instanceof Polygon)) {
        throw 'Polygon must be called as constructor';
    }

    this.__edges__ = edges;
}

Polygon.prototype = new Shape();

/**
 * Implementation of Shape.setType
 */
Polygon.prototype.setType = function(quantity) {
    this.__type__ = 'Polygon type';
}

module.exports = Polygon;