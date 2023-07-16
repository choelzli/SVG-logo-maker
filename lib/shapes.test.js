const { Triangle } = require('./shapes');
const { Square } = require('./shapes');
const { Circle } = require('./shapes');

describe('Triangle', () => {
    test('should return triangle shape', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        const expectShape = `<polygon points="150,10 10,190 290,190" fill="blue" />`;
        expect(shape.render()).toEqual(expectShape);
    });
});

describe('Square', () => {
    test('should return square shape', () => {
        const shape = new Square();
        shape.setColor('blue');
        const expectShape = `<rect x="75" y="30" width="150" height="150" fill="blue" />`;
        expect(shape.render()).toEqual(expectShape);
    });
});

describe('Circle', () => {
    test('should return circle shape', () => {
        const shape = new Circle();
        shape.setColor('blue');
        const expectShape = `<circle cx="150" cy="100" r="80" fill="blue" />`;
        expect(shape.render()).toEqual(expectShape);
    });
});