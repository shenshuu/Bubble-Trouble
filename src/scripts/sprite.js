export default class Sprite {
    constructor({position, imageSrc, ctx, scale = 1, framesMax = 1}) {
        this.position = position;
        this.ctx = ctx;
        this.width = 0;
        this.height = 0;
        this.scale = scale;
        this.framesMax = framesMax;
        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 8;
        this.image = new Image();
        this.image.src = imageSrc;
    }

    draw() {
        this.ctx.drawImage(
            this.image,
            0,
            this.framesCurrent * (this.image.height / this.framesMax), 
            this.image.width,
            this.image.height / this.framesMax,
            this.position.x, 
            this.position.y,
            this.image.width * this.scale, 
            (this.image.height / this.framesMax) * this.scale
        );
    }

    update() {
        this.draw();
        this.framesElapsed += 1;

        if (this.framesElapsed % this.framesHold === 0) {
            if (this.framesCurrent < this.framesMax - 1) {
                this.framesCurrent += 1;
            } else {
                this.framesCurrent = 0;
            }
        }
    }
}