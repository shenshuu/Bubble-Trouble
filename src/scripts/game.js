import Player from './player';
import Bubble from './bubble';
import Timer from './timer';

import idleRight from '../img/chicken/idleRight.png';
import idleLeft from '../img/chicken/idleLeft.png';
import runRight from '../img/chicken/run_right.png';
import runLeft from '../img/chicken/run_left.png';
import frogIdleLeft from '../img/frog_idle_left.png';
import frogIdleRight from '../img/frog_idle.png';

export default class Game {
    constructor(canvas, ctx) {
        this.timer = new Timer(ctx, canvas);
        this.canvas = canvas;
        this.ctx = ctx;
        this.initGameObjects();
    }

    isGameOver() {
        return this.player.gameOver() || this.timer.timeUp();
    }

    update() {
        this.player.update();
        this.timer.update();
    }

    initGameObjects() {
        this.player = new Player({
            position: {
                x: 100,
                y: this.canvas.height - 30,
            },
            ctx: this.ctx,
            imageSrc: idleRight,
            framesMax: 6,
            scale: 0.8,
            offset: {
                x: 8,
                y: 4,
            },
            sprites: {
                idleRight: {
                    imageSrc: idleRight,
                    framesMax: 6
                },
                idleLeft: {
                    imageSrc: idleLeft,
                    framesMax: 6
                },
                runRight: {
                    imageSrc: runRight,
                    framesMax: 10
                },
                runLeft: {
                    imageSrc: runLeft,
                    framesMax: 10
                }
            },
            canvas: this.canvas,
        });
    
        let enemy1 = new Bubble({
            position: {
                x: 200,
                y: 30, 
            },
            velocity: {
                x: 1.5, 
                y: 1.4,
            },
            radius: 10,
            ctx: this.ctx,
            sprites: {
                frogLeft: {
                    imageSrc: frogIdleLeft,
                    framesMax: 4
                },
                frogRight: {
                    imageSrc: frogIdleRight,
                    framesMax: 4
                }
            },
            canvas: this.canvas,
        });
    
        let enemy2 = new Bubble({
            position: {
                x: 100,
                y: 30, 
            },
            velocity: {
                x: -1.5, 
                y: 1.4,
            },
            radius: 10,
            ctx: this.ctx,
            sprites: {
                frogLeft: {
                    imageSrc: frogIdleLeft,
                    framesMax: 4
                },
                frogRight: {
                    imageSrc: frogIdleRight,
                    framesMax: 4
                }
            },
            canvas: this.canvas,
        });

        this.enemies = [enemy1, enemy2];
    }
}