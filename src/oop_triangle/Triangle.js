'use strict'

var Shape = require('./Shape.js');

/**
 * Constructor to create new Shape
 *
 * @constructor
 * @param {Array} edges Edges of shape
 * @return {Shape} New shape
 */ 
function Triangle(edges) {
    if (!(this instanceof Triangle)) {
        throw 'Triangle must be called as constructor';
    }

    this.__edges__ = edges;
}

Triangle.prototype = new Shape();

/**
 * @private shape types
 */
Triangle.prototype.__types__ = {
    1: 'scalene',
    2: 'isosceles',
    3: 'equilateral'
};

/**
 * Implementation of Shape.setType
 */
Triangle.prototype.setType = function(quantity) {
    if (this.__types__[quantity]) {
       this.__type__ = this.__types__[quantity];
    }
    else {
        throw 'Incorrect quantity';
    }

    return this.__type__;
}

module.exports = Triangle;