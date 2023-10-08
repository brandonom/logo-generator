class Shapes {
    constructor(text, color, shapecolor) {
        this.text = text
        this.color = color
        this.shapecolor = shapecolor
    }


}

class Triangle extends Shapes {
    constructor(text, color, shapecolor) {
        super(text, color, shapecolor)
    }
    render() {
        return ` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300">
        <polygon points='150, 18 244, 182 56, 182' fill="${this.shapecolor}"/>
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>`
    }
}

class Circle extends Shapes {
    constructor(text, color, shapecolor) {
        super(text, color, shapecolor)
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300">
        <circle cx="150" cy="125" r="80" fill="${this.shapecolor}"/>
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg> `
    }
}

class Square extends Shapes {
    constructor(text, color, shapecolor) {
        super(text, color, shapecolor)
    }
    render() {
        return ` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300">
        <rect x='10' y='10' width='300' height='300' fill="${this.shapecolor}"/>
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg> `
    }
}
module.exports = { Square, Circle, Triangle }