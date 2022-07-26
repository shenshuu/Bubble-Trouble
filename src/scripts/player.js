import Bubble from "./bubble";
import Missile from "./missile";

export default class Player {
    constructor({position, velocity, ctx}) {
        this.position = position;
        this.velocity = velocity;
        this.missile = null;
        this.height = 100;
        this.width = 50;
        this.lastKey = "";
        this.numLives = 3;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(
            this.position.x, 
            this.position.y, 
            this.width, this.height);
    }

    update() {
        this.draw();
        if (this.position.x + this.velocity.x + 100 >= window.innerWidth) 
            this.velocity.x = 0;
        this.position.x += this.velocity.x;
    }

    attack(x_, y_) {
        if (!this.missile) {
            this.missile = new Missile({
                position: {
                    x: x_,
                    y: y_ 
                },
                ctx: this.ctx
            })
        }
    }

    killedBy(ball) {
        if (ball.position.x - ball.radius <= this.position.x + this.width &&
            this.position.x <= ball.position.x + ball.radius &&
            ball.position.y + ball.radius <= this.position.y + this.height &&
            this.position.y <= ball.position.y + ball.radius) {
            return true; 
        } else {
            return false;
        }
    }
}

