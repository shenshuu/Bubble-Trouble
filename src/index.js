import Player from './scripts/player';
import Bubble from './scripts/bubble';
import Sprite from './scripts/sprite';
import idleChicken from './img/chicken/idle.png';
import runRight from './img/chicken/run_right.png';
import runLeft from './img/chicken/run_left.png';


document.addEventListener("DOMContentLoaded", () => {
    
    const canvas = document.querySelector('.game-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    let player = new Player({
        position: {
            x: 100,
            y: 435
        },
        ctx: ctx,
        imageSrc: idleChicken,
        framesMax: 6,
        scale: 2.4,
        offset: {
            x: 12,
            y: -22
        },
        sprites: {
            idle: {
                imageSrc: idleChicken,
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

    let bubble1 = new Bubble({
        position: {
            x: 450,
            y: 200, 
        },
        velocity: {
            x: 3, 
            y: 5,
        },
        radius: 30,
        ctx: ctx,
    });

    let bubble2 = new Bubble({
        position: {
            x: 1000,
            y: 200, 
        },
        velocity: {
            x: -3, 
            y: 5,
        },
        radius: 30,
        ctx: ctx,
    });


    let bubbles = [bubble1, bubble2];

    console.log(player.sprites);
    
    function animate() {
        window.requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.update();

        if (player.missile && !player.missile.reseted) {
            player.missile.update();
        }

         if (player.missile && player.missile.position.y <= 50) {
            player.missile = null;
        }

        for (let bubble of bubbles) {
            bubble.update();

            if (player.killedBy(bubble)) {
                player.numLives -= 1;
            }

            if (player.missile && player.missile.collided(bubble)) {
                player.missile = null;
                if (bubble.children.length === 0) {
                    bubble.split();
                    for (let child of bubble.children) {
                        bubbles.push(child);
                    }
                    bubbles = bubbles.filter((bub) => bub !== bubble);
                }
            }
        }
   
        player.velocity = 0;
        player.image = player.sprites.idle.image;
        player.framesMax = 6;

        if (player.keys.a.pressed && player.lastKey === 'a' ||
        player.keys.ArrowLeft.pressed && player.lastKey === 'ArrowLeft') {
            player.image = player.sprites.runRight.image;
            player.framesMax = 10;
            player.velocity = -3.2;
        } else if (player.keys.d.pressed && player.lastKey === 'd' ||
        player.keys.ArrowRight.pressed && player.lastKey === 'ArrowRight') {
            player.image = player.sprites.runRight.image;
            player.framesMax = 10;
            player.velocity = 3.2;
        } 
    }
    
    animate();

  
})
