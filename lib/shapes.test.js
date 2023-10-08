const { Triangle } = require('./shapes');
const { Circle } = require('./shapes');
const { Square } = require('./shapes');

describe(' Triangle ', () => {
    test('render method should return a valid SVG string', () =>{
        const triangle = new Triangle('abc', 'red', 'blue');
        const svgString = triangle.render();

        expect(svgString).toContain('<svg');
        expect(svgString).toContain('polygon');
        expect(svgString).toContain('text');
        expect(svgString).toContain('fill="red"');
        expect(svgString).toContain('fill="blue"');
        expect(svgString).toContain('abc');
    });

});



describe(' Circle ', () => {
    test('render method should return a valid SVG string', () =>{
        const circle = new Circle('abc', 'red', 'blue');
        const svgString = circle.render();

        expect(svgString).toContain('<svg');
        expect(svgString).toContain('circle');
        expect(svgString).toContain('text');
        expect(svgString).toContain('fill="red"');
        expect(svgString).toContain('fill="blue"');
        expect(svgString).toContain('abc');
    });

});


describe(' Square ', () => {
    test('render method should return a valid SVG string', () =>{
        const square = new Square('abc', 'red', "blue");
        const svgString = square.render();

        expect(svgString).toContain('<svg');
        expect(svgString).toContain('rect');
        expect(svgString).toContain('text');
        expect(svgString).toContain('fill="red"');
        expect(svgString).toContain('fill="blue"');
        expect(svgString).toContain('abc');
    });
console.log
});