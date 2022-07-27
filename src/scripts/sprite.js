export default class Sprite {
    constructor({position, imageSrc, ctx}) {
        this.position = position;
        this.ctx = ctx;
        this.width = 0;
        this.height = 0;
        this.image = new Image();
        this.image.src = imageSrc;
    }

    draw() {
        this.ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y
        );
    }

    update() {
        this.draw();
    }
}