import Missile from "./missile";
import Sprite from "./sprite";
import Heart from "./heart";

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const up = document.querySelector('.up');

export default class Player extends Sprite {
    constructor({
        position, 
        ctx, imageSrc, 
        scale = 1, framesMax = 1, 
        offset = {x: 0, y: 0},
        sprites,
        canvas
    }) {
        super({
            position,
            imageSrc,
            scale,
            framesMax,
            offset
        })
        
        this.seconds = 0;
        let that = this;
        setInterval(() => {
            that.seconds += 0.1;
        }, 100);

        this.canvas = canvas;
        this.sprites = sprites;
        this.velocity = 10;
        this.missile = null;
        this.height = this.canvas.height / 8;
        this.width = this.canvas.width / 30;
        this.lastKey = "";
        this.lives = [];
        for (let i = 0; i < 1; i++) {
            this.lives.push(
                new Heart({
                    position: {
                    x: i*10,
                    y: 142,
                    },
                    ctx: ctx,
                })
            )
        }
        this.ctx = ctx;

        for (const sprite in this.sprites) {
            this.sprites[sprite].image = new Image();
            this.sprites[sprite].image.src = this.sprites[sprite].imageSrc;
        }
        
        this.keys = {
            a: {pressed: false},
            d: {pressed: false},
            l: {pressed: false},
            ArrowLeft: {pressed: false},
            ArrowRight: {pressed: false},
            ArrowUp: {pressed: false}
        }

        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 6;

        this.initPlayerInput();
    } 


    update() {

        for (let heart of this.lives) {
            heart.updateHorizontal();
        }
        // this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        this.drawVerticalSpriteSheet();
        this.animateFrames();

        if (this.position.x + this.velocity >= this.canvas.width - this.width ||
            this.position.x + this.velocity <= 0) 
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
                canvas: this.canvas,
                ctx: this.ctx
            })
        }
    }

    killedBy(ball) {
        if (ball.position.x - ball.radius <= this.position.x + this.width &&
            this.position.x <= ball.position.x + ball.radius &&
            ball.position.y + ball.radius <= this.position.y + this.height &&
            this.position.y <= ball.position.y + ball.radius && this.seconds >= 1) {
            this.seconds = 0;
            this.lives.pop();
            return true; 
        } else {
            return false;
        }
    }

    gameOver() {
        return this.lives.length === 0;
    }

    initPlayerInput() {
        let that = this;
        window.addEventListener('keydown', (event) => {
            switch(event.key) {
                case 'd': 
                    that.keys.d.pressed = true;
                    right.classList.add('toggled');
                    that.lastKey = 'd';
                    break;
                case 'a':
                    that.keys.a.pressed = true;
                    left.classList.add('toggled');
                    that.lastKey = 'a';
                    break;
                case 'l':
                    that.keys.l.pressed = true;
                    up.classList.add('toggled');
                    that.attack(
                        that.position.x + that.width / 2,
                        that.position.y + that.height
                    );
                    break;
                case 'ArrowLeft':
                    that.keys.ArrowLeft.pressed = true;
                    left.classList.add('toggled');
                    that.lastKey = 'ArrowLeft';
                    break;
                case 'ArrowRight':
                    that.keys.ArrowRight.pressed = true;
                    right.classList.add('toggled');
                    that.lastKey = 'ArrowRight';
                    break;
                case 'ArrowUp':
                    that.keys.ArrowUp.pressed = true;
                    up.classList.add('toggled');
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
                    left.classList.remove('toggled');
                    break;
                case 'd':
                    that.keys.d.pressed = false;
                    right.classList.remove('toggled');
                    break;
                case 'l':
                    that.keys.l.pressed = false;
                    up.classList.remove('toggled');
                    break;
                case 'ArrowLeft':
                    that.keys.ArrowLeft.pressed = false;
                    left.classList.remove('toggled');
                    break;
                case 'ArrowRight':
                    that.keys.ArrowRight.pressed = false;
                    right.classList.remove('toggled');
                    break;
                case 'ArrowUp':
                    that.keys.ArrowUp.pressed = false;
                    up.classList.remove('toggled');
                    break;
            }
        })
    }

}

