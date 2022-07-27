import Player from './player';
import Bubble from './bubble';
import Timer from './timer';

import idleRight from '../img/chicken/idleRight.png';
import idleLeft from '../img/chicken/idleLeft.png';
import runRight from '../img/chicken/run_right.png';
import runLeft from '../img/chicken/run_left.png';

export default class Game {
    constructor(canvas, ctx) {
        this.timer = new Timer(ctx)
        this.canvas = canvas;
        this.ctx = ctx;
        this.initGameObjects();
    }

    isGameOver() {
        return this.player.numLives === 0;
    }

    update() {
        this.player.update();
        this.timer.update();
    }

    initGameObjects() {
        this.player = new Player({
            position: {
                x: 100,
                y: 435
            },
            ctx: this.ctx,
            imageSrc: idleRight,
            framesMax: 6,
            scale: 2.4,
            offset: {
                x: 12,
                y: -22
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
            }
        });
    
        let enemy1 = new Bubble({
            position: {
                x: 450,
                y: 200, 
            },
            velocity: {
                x: 3, 
                y: 5,
            },
            radius: 30,
            ctx: this.ctx,
        });
    
        let enemy2 = new Bubble({
            position: {
                x: 1000,
                y: 200, 
            },
            velocity: {
                x: -3, 
                y: 5,
            },
            radius: 30,
            ctx: this.ctx,
        });
    
    
        this.enemies = [enemy1, enemy2];
    }
}