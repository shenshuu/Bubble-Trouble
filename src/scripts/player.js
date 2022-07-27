import Missile from "./missile";
import Sprite from "./sprite";

export default class Player extends Sprite {
    constructor({
        position, 
        ctx, imageSrc, 
        scale = 1, framesMax = 1, 
        offset = {x: 0, y: 0},
        sprites
    }) {
        super({
            position,
            imageSrc,
            scale,
            framesMax,
            offset
        })
        
        this.sprites = sprites
        this.velocity = 50;
        this.missile = null;
        this.height = 100;
        this.width = 50;
        this.lastKey = "";
        this.numLives = 3;
        this.ctx = ctx;

        for (const sprite in this.sprites) {
            this.sprites[sprite].image = new Image();
            this.sprites[sprite].image.src = this.sprites[sprite].imageSrc;
        }
        
        this.keys = {
            a: {pressed: false},
            d: {pressed: false},
            w: {pressed: false},
            ArrowLeft: {pressed: false},
            ArrowRight: {pressed: false},
            ArrowUp: {pressed: false}
        }

        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 8;

        this.initPlayerInput();
    } 


    update() {
        this.draw();
        this.animateFrames();

        if (this.position.x + this.velocity >= window.innerWidth - 195 ||
            this.position.x + this.velocity <= 145) 
            this.velocity = 0;
        this.position.x += this.velocity;
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
            console.log('player hit');
            return true; 
        } else {
            return false;
        }
    }

    initPlayerInput() {
        let that = this;
        window.addEventListener('keydown', (event) => {
            switch(event.key) {
                case 'd': 
                    that.keys.d.pressed = true;
                    that.lastKey = 'd';
                    break;
                case 'a':
                    that.keys.a.pressed = true;
                    that.lastKey = 'a';
                    break;
                case 'w':
                    that.keys.w.pressed = true;
                    that.attack(
                        that.position.x + that.width / 2,
                        that.position.y + that.height
                    );
                    break;
                case 'ArrowLeft':
                    that.keys.ArrowLeft.pressed = true;
                    that.lastKey = 'ArrowLeft';
                    break;
                case 'ArrowRight':
                    that.keys.ArrowRight.pressed = true;
                    that.lastKey = 'ArrowRight';
                    break;
                case 'ArrowUp':
                    that.keys.ArrowUp.pressed = true;
                    that.attack(
                        that.position.x,
                        that.position.y
                    );
                    break;
            }
        })
    
        window.addEventListener('keyup', (event) => {
            switch (event.key) {
                case 'a':
                    that.keys.a.pressed = false;
                    break;
                case 'd':
                    that.keys.d.pressed = false;
                    break;
                case 'w':
                    that.keys.w.pressed = false;
                    break;
                case 'ArrowLeft':
                    that.keys.ArrowLeft.pressed = false;
                    break;
                case 'ArrowRight':
                    that.keys.ArrowRight.pressed = false;
                    break;
                case 'ArrowUp':
                    that.keys.ArrowUp.pressed = false;
                    break;
            }
        })
    }

}

