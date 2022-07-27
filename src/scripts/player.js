import Bubble from "./bubble";
import Missile from "./missile";

export default class Player {
    constructor({position, velocity, ctx}) {
        this.position = position;
        this.velocity = velocity;
        this.missile = null;
        this.height = 100;
        this.width = 50;
        this.lastKey = "";
        this.numLives = 3;
        this.ctx = ctx;
        this.keys = {
            a: {pressed: false},
            d: {pressed: false},
            w: {pressed: false},
            ArrowLeft: {pressed: false},
            ArrowRight: {pressed: false},
            ArrowUp: {pressed: false}
        }

        this.initPlayerInput();
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

