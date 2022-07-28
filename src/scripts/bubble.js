import Sprite from './sprite';
import slime from '../img/frog_idle.png';

export default class Bubble extends Sprite {
    constructor({position, velocity, radius, ctx}) {
        super({
            position, 
            imageSrc: slime, 
            ctx, scale: radius / 6, 
            framesMax: 4,
            offset: {
                x: radius * 3.3,
                y: radius * 6
            }
        })
        this.velocity = velocity;
        this.gravity = 0.5;
        this.radius = radius;
        this.children = [];

        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 6;
    }

    draw() {
        // USE CIRCLES FOR DEBUGGING;
        // this.ctx.fillStyle = 'yellow';
        // this.ctx.strokeStyle = 'black';
        // this.ctx.lineWidth = 5;
        // this.ctx.beginPath();
        // this.ctx.arc(
        //     this.position.x, 
        //     this.position.y,
        //     this.radius, 0, 2*Math.PI
        // )
        this.ctx.stroke();
        this.ctx.fill();
        this.updateHorizontal();
    }

    update() {
        if (this.position.x + this.radius >= window.innerWidth - 142 ||
            this.position.x - this.radius <= 140) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.position.y + this.radius >= window.innerHeight - 190) {
            this.velocity.y = -this.velocity.y;
        } else {
            this.velocity.y += this.gravity;
        }
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
    }

    split() {
        if (this.radius >= 20) {
            let b1 = new Bubble({
                position: {
                    x: this.position.x - 25,
                    y: this.position.y
                },
                velocity: {
                    x: this.velocity.x - 0.25,
                    y: this.velocity.y - 0.25
                },
                radius: this.radius / 2,
                ctx: this.ctx
            })
            let b2 = new Bubble({
                position: {
                    x: this.position.x + 25,
                    y: this.position.y
                },
                velocity: {
                    x: -(this.velocity.x + 0.25),
                    y: this.velocity.y - 0.25
                },
                radius: this.radius / 2,
                ctx: this.ctx
            })
            this.children.push(...[b1, b2]);
        }
    }
}
