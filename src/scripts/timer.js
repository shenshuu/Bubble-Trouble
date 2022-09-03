export default class Timer {
    constructor(ctx, canvas) {
        this.canvas = canvas;
        this.seconds = 45;
        this.height = 2.5;
        this.width = this.canvas.width;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle = '#b2d5df';
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    update() {
        this.draw();
        if (this.width > 0) {
            this.width -= 0.2;
        }
    }

    timeUp() {
        return this.width === 0;
    }
}