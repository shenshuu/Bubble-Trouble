import Player from './scripts/player';
import Bubble from './scripts/bubble';
import Sprite from './scripts/sprite';

document.addEventListener("DOMContentLoaded", () => {
    
    const canvas = document.querySelector('.game-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    const groundLevel = 475;

    let player = new Player({
        position: {
            x: 100,
            y: groundLevel
        },
        velocity: {
            x: 50, 
            y: -10
        },
        ctx: ctx
    });

    let bubble1 = new Bubble({
        position: {
            x: 50,
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
            x: canvas.width - 50,
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


    function animate() {
        window.requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.update();

        if (player.missile && !player.missile.reseted) {
            player.missile.update();
        }

         if (player.missile && player.missile.position.y <= 100) {
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
   
        player.velocity.x = 0;
        if (player.keys.a.pressed && player.lastKey === 'a') {
            player.velocity.x = -2;
        } else if (player.keys.ArrowLeft.pressed && player.lastKey === 'ArrowLeft') {
            player.velocity.x = -2;
        } else if (player.keys.d.pressed && player.lastKey === 'd') {
            player.velocity.x = 2;
        } else if (player.keys.ArrowRight.pressed && player.lastKey === 'ArrowRight') {
            player.velocity.x = 2;
        }
    }
    
    animate();

  
})
