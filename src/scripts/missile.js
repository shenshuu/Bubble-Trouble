import Sprite from "./sprite";
import fire from "../img/fire.png";

export default class Missile extends Sprite {
    constructor({position, ctx}) {
        super({position, imageSrc: fire, ctx, framesMax: 4})
        this.velocity = 9;
        this.hit = false;
        this.reseted = false;
        this.height = 5;
        this.width = 5;
        this.ctx = ctx;
    }

    draw() {
        // this.ctx.fillStyle = 'yellow';
        // this.ctx.fillRect(
        //     this.position.x,
        //     this.position.y,
        //     this.width,
        //     this.height);
        this.updateHorizontal();
    }


    update() {
        this.draw();
        if (this.position.y <= 50 || this.hit) {
            this.reseted = true;
        }
        this.height += this.velocity;
        this.position.y -= this.velocity;
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

}