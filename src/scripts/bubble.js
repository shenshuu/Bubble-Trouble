export default class Bubble {
    constructor({position, velocity, radius, ctx}) {
        this.position = position;
        this.velocity = velocity;
        this.radius = radius;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
        this.ctx.arc(
            window.innerWidth / 2, window.innerHeight / 2,
            this.radius, 0, 2*Math.PI, false
        )
        this.ctx.fill();
    }

    update() {
        
    }
}
