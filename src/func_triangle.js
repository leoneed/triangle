'use strict'

/**
 * Get type of triangle
 *
 * @param {number} edge_a
 * @param {number} edge_b
 * @param {number} edge_c
 *
 * @return {string} possible values: equilateral, isosceles or scalene
 */
module.exports = function getTriangleType(edge_a, edge_b, edge_c) {
    var equals = 0,
        triangleTypes = { 0: 'scalene', 1: 'isosceles', 3: 'equilateral' };

    if (arguments.length !== 3) {
        throw 'Function expect 3 arguments, ' + arguments.length + ' passed';
    }

    Array.prototype.map.call(arguments, function(edge) {

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
    });

    // check if sum of two edges bigger then third or triangle is not exists
    if ((edge_a + edge_b > edge_c) &&
        (edge_a + edge_c > edge_b) &&
        (edge_c + edge_b > edge_a)) {

        // calc how many equalities between edges we have
        equals = (edge_a === edge_b) + (edge_a === edge_c) + (edge_c === edge_b);

    }
    else {
        throw 'Size of edges is incorrect';
    }

    //return triangle type based on the number of edges of equality
    return triangleTypes[equals];
}