'use strict'

var expect = require('chai').expect;

var ShapeFactory = require('../src/oop_triangle/ShapeFactory.js');
var Shape = require('../src/oop_triangle/Shape.js');
var Triangle = require('../src/oop_triangle/Triangle.js');
var Quadrilateral = require('../src/oop_triangle/Quadrilateral.js');
var Polygon = require('../src/oop_triangle/Polygon.js');

describe('OOP implementation of triangle type determination', function () {

	it('Check init edges', function () {
        expect(ShapeFactory.bind(null)).throw(TypeError, 'Array expected');
        expect(ShapeFactory.bind(null, null)).throw(TypeError, 'Array expected');
        expect(ShapeFactory.bind(null, arguments)).throw(TypeError, 'Array expected');
        expect(ShapeFactory.bind(null, [])).throw('Can\'t create shape without edges');
    });

    it('The correct data types', function () {
        expect(ShapeFactory.bind(null, [1, 2, '3'])).throw(TypeError, 'All arguments must be numbers');
        expect(ShapeFactory.bind(null, [1, null, 3])).throw(TypeError, 'All arguments must be numbers');
        expect(ShapeFactory.bind(null, [true, 2, 3])).throw(TypeError, 'All arguments must be numbers');
    });

    it('The correct data', function () {
        expect(ShapeFactory.bind(null, [1, 0, 3])).throw('Edge can\'t be <= 0');
        expect(ShapeFactory.bind(null, [-1, 2, 3])).throw('Edge can\'t be <= 0');
        expect(ShapeFactory.bind(null, [1, 2, Infinity])).throw('Edge can\'t be Infinity');
        expect(ShapeFactory.bind(null, [1, 2, NaN])).throw('Edge can\'t be NaN');
    });

    it('Check if shape is possible', function () {
        expect(ShapeFactory.bind(null, [1, 2, 3])).throw('This is not a closed shape');
        expect(ShapeFactory.bind(null, [1, 2, 10, 4])).throw('This is not a closed shape');
    });

    it('Check if Factory return corrent Shape Object', function () {
        expect(ShapeFactory([2, 2, 3])).instanceof(Triangle).instanceof(Shape);
        expect(ShapeFactory([2, 2, 3, 4])).instanceof(Quadrilateral).instanceof(Shape);
        expect(ShapeFactory([2, 2, 3, 4, 6, 7, 11])).instanceof(Polygon).instanceof(Shape);
    });

    it('Check Shape object', function () {
        expect(Shape.bind(null)).throw('Shape must be called as constructor');

        var shape = new Shape();
        expect(shape.setType.bind(shape, [1, 3, 4])).throw('setType should be implemented in inheritor');
    });

    it('Check Triangle object', function () {
        expect(Triangle.bind(null)).throw('Triangle must be called as constructor');

        var triangle = new Triangle();
        expect(triangle.setType(1)).equal('scalene');
        expect(triangle.setType(2)).equal('isosceles');
        expect(triangle.setType(3)).equal('equilateral');
        expect(triangle.setType.bind(triangle, 5)).throw('Incorrect quantity');
    });

    it('Check Factory method getShapeType', function () {
        function MyShape(edges) { this.__edges__ = edges; };

        expect(ShapeFactory.getShapeType.bind(null, new MyShape)).throw('Shape expected');
        
        MyShape.prototype = new Shape;
        var expectedQuantity = 2;

        MyShape.prototype.setType = function(quantity) {
            expect(quantity).equal(expectedQuantity);
        }
        ShapeFactory.getShapeType(new MyShape([1, 2, 2]));

        expectedQuantity = 4;
        ShapeFactory.getShapeType(new MyShape([2, 2, 2, 2]));

        expectedQuantity = 1;
        ShapeFactory.getShapeType(new MyShape([1, 2, 4, 5]));
    });

    it('Check triangle types', function () {
        expect(ShapeFactory.getShapeType(ShapeFactory([2, 2, 2]))).equal('equilateral');
        expect(ShapeFactory.getShapeType(ShapeFactory([3, 3, 4]))).equal('isosceles');
        expect(ShapeFactory.getShapeType(ShapeFactory([2, 3, 4]))).equal('scalene');
    });
	
});