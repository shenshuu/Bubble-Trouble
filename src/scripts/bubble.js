import Sprite from './sprite';
import frogRight from '../img/frog_idle.png';
import frogLeft from '../img/frog_idle_left.png';

export default class Bubble extends Sprite {
    constructor({position, velocity, sprites, radius, ctx}) {
        let faceRightOffset = {
            x: radius * 3.3, 
            y: radius * 6
        }
        let faceLeftOffset = {
            x: radius * 5,
            y: radius * 6
        }
        let offset;
        let imgSrc;
        if (velocity.x <= 0) {
            imgSrc = frogLeft;
            offset = faceLeftOffset;
        } else {
            imgSrc = frogRight;
            offset = faceRightOffset;
        }
        super({
            position, 
            imageSrc: imgSrc,
            ctx, scale: radius / 6, 
            framesMax: 4,
            offset
        })
        this.sprites = sprites;
        this.velocity = velocity;
        this.gravity = 0.5;
        this.radius = radius;
        this.children = [];

        for (const sprite in this.sprites) {
            this.sprites[sprite].image = new Image();
            this.sprites[sprite].image.src = this.sprites[sprite].imageSrc;
        }

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
        // this.ctx.stroke();
        // this.ctx.fill();
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
                radius: this.radius / 1.5,
                ctx: this.ctx,
                sprites: this.sprites
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
                radius: this.radius / 1.5,
                ctx: this.ctx,
                sprites: this.sprites 
            })
            this.children.push(...[b1, b2]);
        }
    }
}
