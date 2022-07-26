export default class Missle {
    constructor({position, ctx}) {
        this.position = position;
        this.hit = false;
        this.height = 10;
        this.width = 10;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle = 'yellow';
        this.ctx.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height);
    }

    update() {
        this.draw();
        if (this.position.y <= 0) {
            this.position.y = 575;
            this.height = 0;
        }
        this.height += 15;
        this.position.y -= 15;
    }

    collided(ball) {
        if (ball.position.x - ball.radius <= this.position.x + this.width &&
            this.position.x <= ball.position.x + ball.radius &&
            ball.position.y + ball.radius <= this.position.y + this.height &&
            this.position.y <= ball.position.y + ball.radius) {
            console.log('missle hit');
            this.hit = true;
            return true;
        } else {
            return false;
        }
    }

}