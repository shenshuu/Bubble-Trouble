import { setInterval } from "core-js";
import Bubble from "./bubble";
import Missle from "./missle";

export default class Player {
    constructor({position, velocity, ctx}) {
        this.position = position;
        this.velocity = velocity;
        this.isAttacking = false;
        this.missle = null;
        this.height = 100;
        this.width = 50;
        this.lastKey = "";
        this.lives = 3;
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

    attack() {
        this.isAttacking = true;
        if (this.isAttacking) {
            this.missle = new Missle({
                position: this.position,
                ctx: this.ctx
            })
        }
    }

    killedBy(ball) {
        if (ball.position.x - ball.radius <= this.position.x + this.width &&
            this.position.x <= ball.position.x + ball.radius &&
            ball.position.y + ball.radius <= this.position.y + this.height &&
            this.position.y <= ball.position.y + ball.radius) {
            this.lives -= 1;
            return true;
            // make a reset function and call it over here 
        } 
    }
}

