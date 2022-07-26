export default class Missle {
    constructor({position, dimensions, ctx}) {
        this.dimensions = dimensions;
        this.position = position;
        this.height = dimensions.height;
        this.width = dimensions.width;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height);
    }

    update() {
        this.draw();
        if (this.position.y <= 0) {
            this.position.y = window.innerHeight;
            this.height = 0;
        }
        this.height += 15;
        this.position.y -= 15;
    }

}