export default class Missile {
    constructor({position, ctx}) {
        this.position = position;
        this.velocity = 7;
        this.hit = false;
        this.height = 10;
        this.width = 10;
        this.ctx = ctx;
    }

    draw() {
        // debugger;
        this.ctx.fillStyle = 'yellow';
        this.ctx.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height);
        // debugger;
    }

    update() {
        // debugger;
        this.draw();
        if (this.position.y <= 0 || this.hit) {
            this.reset();
        }
        // debugger;
        this.height += this.velocity;
        this.position.y -= this.velocity;
        // debugger;
    }

    collided(ball) {
        if (ball.position.x - ball.radius <= this.position.x + this.width &&
            this.position.x <= ball.position.x + ball.radius &&
            ball.position.y + ball.radius <= this.position.y + this.height &&
            this.position.y <= ball.position.y + ball.radius) {
            this.hit = true;
            return true;
        } else {
            return false;
        }
    }

    reset() {
        this.position.y = 575;
        this.height = 10;
        this.hit = false;
    }

}