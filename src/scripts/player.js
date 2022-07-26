import { setInterval } from "core-js";
import Bubble from "./bubble";
import Missle from "./missle";

export default class Player {
    constructor({position, velocity, ctx}) {
        this.position = position;
        this.velocity = velocity;
        this.isAttacking = false;
        // this.attackBox = {
        //     position: this.position,
        //     width: 10,
        //     height: -window.innerHeight
        // }
        this.attackBox = new Missle({
            position: position,
            ctx: ctx
        })
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
        let that = this;
        this.isAttacking = true;
        setTimeout(() => {
            const interval = setInterval(() => {
                that.attackBox.update();
                if (that.attackBox.position.y <= 0) {
                    clearInterval(interval);
                }
            }, 40);
            that.isAttacking = false;
            // that.growAttackBox();
        }, 50);
    }

    // growAttackBox() {
    //     let that = this;
    //     const interval = setInterval(() => {
    //         // that.attackBox.y -= 15;
    //         that.attackBox.height -= 15;
    //         if (that.attackBox.position.y <= 0) {
    //             that.attackBox.height = 0;
    //             clearInterval(interval);
    //             console.log(that.attackBox);
    //         } 
    //     }, 40);
    // }

    // refactor this method to take y-coordinates into account 
    collided(ball) {
        if (ball.position.x - ball.radius <= this.attackBox.position.x + this.attackBox.width &&
            this.attackBox.position.x <= ball.position.x + ball.radius && this.isAttacking) {
            ball.collided = true;
            return true;
        } else {
            return false;
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

