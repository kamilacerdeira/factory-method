interface Shape {
    draw: string;
}

class Rectangle implements Shape {
    draw: 'Retângulo'
}

class Square implements Shape {
    draw: 'Quadrado'
}

class Circle implements Shape {
    draw: 'Círculo'
}

export class ShapeMaker {
    static rectangle: Shape;
    static square: Shape;
    static circle: Shape;

    static drawRectangle() {
        console.log(this.rectangle.draw);
    }

    static drawSquare() {
        console.log(this.square.draw);
    }

    static drawCircle() {
        console.log(this.circle.draw);
    }

    static creator(shape: string) {
        if(shape === 'retangulo') {
            return this.drawRectangle();
        }

        if(shape === 'quadrado') {
            return this.drawSquare();
        }

        if(shape === 'circulo') {
            return this.drawCircle();
        }
        return 'Não foi possível desenhar nenhuma forma'
    }
}