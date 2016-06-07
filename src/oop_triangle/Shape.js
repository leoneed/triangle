'use strict'

/**
 * Abstract Constructor to create new Shape
 *
 * @constructor
 */ 
function Shape() {
    if (!(this instanceof Shape)) {
        throw 'Shape must be called as constructor';
    }
}

/**
 * @private shape type
 */
Shape.prototype.__type__ = null;

/**
 * @private shape edges
 */
Shape.prototype.__edges__ = [];

/**
 * Get Shape edges array
 *
 * @return {Array}
 */
Shape.prototype.getEdges = function() {
    return this.__edges__;
}


/**
 * Get type of Shape
 *
 * @return {string} current shape type
 * @return {null} null if shape type is not set
 */
Shape.prototype.getType = function() {
    return this.__type__;
}

/**
 * Abstract method to set type of shape
 *
 * @param {number} quantity Quantity of equal edges
 * @return {string} Shape type
 */
Shape.prototype.setType = function() {
    throw 'setType should be implemented in inheritor';
}

module.exports = Shape;