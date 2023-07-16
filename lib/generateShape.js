const { Triangle, Square, Circle } = require('./shapes');

function generateShape({ text, textColor, shape, shapeColor }) {
    let shapeType;
    switch(shape) {
        case 'Triangle':
            shapeType = new Triangle();
            break;
        case 'Square':
            shapeType = new Square();
            break;
        case 'Circle':
            shapeType = new Circle();
            break;
    }

    shapeType.setColor(shapeColor);

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeType.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`
}

module.exports = generateShape;