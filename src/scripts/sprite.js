export default class Sprite {
    constructor({position, imageSrc, canvas}) {
        this.position = position;
        this.canvas = canvas;
        this.width = 0;
        this.height = 0;
        this.image = new Image();
        this.image.src = imageSrc;
    }

    draw() {
        this.canvas.drawImage(
            this.image, 
            this.position.x, 
            this.position.y
        );
    }
}