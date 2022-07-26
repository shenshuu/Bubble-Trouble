import Bubble from "./bubble";

export default class Player {
    constructor({position, velocity, ctx}) {
        this.position = position;
        this.velocity = velocity;
        this.isAttacking = false;
        this.attackBox = {
            position: this.position,
            width: 10,
            height: -window.innerHeight,
        }
        this.height = 100;
        this.width = 50;
        this.lastKey = "";
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(
            this.position.x, 
            this.position.y, 
            this.width, this.height);
        this.ctx.fillStyle = 'blue';
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

    attack() {
        this.isAttacking = true;
        setTimeout(() => {
            this.isAttacking = false;
        }, 50);
    }

    collided(ball) {
        if (ball.position.x - ball.radius <= this.attackBox.position.x + this.attackBox.width &&
            this.attackBox.position.x <= ball.position.x + ball.radius && this.isAttacking) {
            ball.collided = true;
            return true;
        }
    }

    die(ball) {
        // if (ball.position.x - ball.radius <= this.position.x + this.width &&
        //     this.position.x <= ball.position.x + ball.radius) {
        //     console.log('ouch');
        // } 
        if (ball.position.y + ball.radius <= this.position.y + this.height) {
            console.log('ouch');
        }

    }
}

