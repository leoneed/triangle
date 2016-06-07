'use strict'

var expect = require('chai').expect;
var funcTriangle = require('../src/func_triangle.js');

describe('Functional implementation of triangle type determination', function () {

    it('The correct number of arguments', function () {
        expect(funcTriangle.bind()).throw('Function expect 3 arguments, 0 passed');
        expect(funcTriangle.bind(null, 1)).throw('Function expect 3 arguments, 1 passed');
        expect(funcTriangle.bind(null, 1, 2)).throw('Function expect 3 arguments, 2 passed');
        expect(funcTriangle.bind(null, 1, 2, 3, 4)).throw('Function expect 3 arguments, 4 passed');
    });

    it('The correct data types', function () {
        expect(funcTriangle.bind(null, 1, 2, '3')).throw(TypeError, 'All arguments must be numbers');
        expect(funcTriangle.bind(null, 1, null, 3)).throw(TypeError, 'All arguments must be numbers');
        expect(funcTriangle.bind(null, true, 2, 3)).throw(TypeError, 'All arguments must be numbers');
    });

    it('The correct data', function () {
        expect(funcTriangle.bind(null, 1, 0, 3)).throw('Edge can\'t be <= 0');
        expect(funcTriangle.bind(null, -1, 2, 3)).throw('Edge can\'t be <= 0');
        expect(funcTriangle.bind(null, 1, 2, Infinity)).throw('Edge can\'t be Infinity');
        expect(funcTriangle.bind(null, 1, 2, NaN)).throw('Edge can\'t be NaN');
    });

    it('Check if triangle is possible', function () {
        expect(funcTriangle.bind(null, 1, 2, 3)).throw('Size of edges is incorrect');
        expect(funcTriangle.bind(null, 1, 2, 4)).throw('Size of edges is incorrect');
    });

    it('Check triangle types', function () {
        expect(funcTriangle(2, 2, 2)).equal('equilateral');
        expect(funcTriangle(3, 3, 4)).equal('isosceles');
        expect(funcTriangle(2, 3, 4)).equal('scalene');
    });
    
});