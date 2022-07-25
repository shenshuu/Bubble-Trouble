export default class Player {
    constructor({position, velocity, ctx}) {
        this.position = position;
        this.velocity = velocity;
        this.attackBox = {
            position: this.position,
            width: 200,
            height: window.innerHeight
        }
        this.lastKey = "";
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.position.x, this.position.y, 50, 150);
        
        this.ctx.fillRect(
            this.attackBox.position.x, 
            this.attackBox.position.y,
            this.attackBox.width,
            this.attackBox.height
            )
    }

    update() {
        this.draw();
        if (this.position.x + this.velocity.x + 100 >= window.innerWidth) 
            this.velocity.x = 0;
        this.position.x += this.velocity.x;
    }
}

