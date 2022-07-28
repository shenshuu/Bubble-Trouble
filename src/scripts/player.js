import Missile from "./missile";
import Sprite from "./sprite";
import Heart from "./heart";

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
        
        this.seconds = 0;
        let that = this;
        setInterval(() => {
            that.seconds += 1;
        }, 1000);

        this.sprites = sprites;
        this.velocity = 50;
        this.missile = null;
        this.height = 50;
        this.width = 35;
        this.lastKey = "";
        this.lives = [
            new Heart({
                position: {
                    x: 150,
                    y: 540
                },
                ctx: ctx}),
            new Heart({
                position: {
                    x: 180,
                    y: 540
                },
                ctx: ctx}),
            new Heart({
                position: {
                    x: 210,
                    y: 540
                },
                ctx: ctx})
        ];
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
        this.drawVerticalSpriteSheet();
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
                    that.lastKey = 'd';
                    break;
                case 'a':
                    that.keys.a.pressed = true;
                    that.lastKey = 'a';
                    break;
                case 'l':
                    that.keys.l.pressed = true;
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
                case 'l':
                    that.keys.l.pressed = false;
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

