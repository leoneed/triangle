'use strict'

var Shape = require('./Shape.js');

/**
 * Constructor to create new Shape
 *
 * @constructor
 * @param {Array} edges Edges of shape
 * @return {Shape} New shape
 */ 
function Quadrilateral(edges) {
    if (!(this instanceof Quadrilateral)) {
        throw 'Quadrilateral must be called as constructor';
    }

    this.__edges__ = edges;
}

Quadrilateral.prototype = new Shape();

/**
 * Implementation of Shape.setType
 */
Quadrilateral.prototype.setType = function(quantity) {
    this.__type__ = 'Quadrilateral type';
}

module.exports = Quadrilateral;