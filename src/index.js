import Player from './scripts/player';
import Bubble from './scripts/bubble';
import Sprite from './scripts/sprite';
import Missle from './scripts/missle';

document.addEventListener("DOMContentLoaded", () => {
    
    const canvas = document.querySelector('.game-canvas');
    const sizes = {width: window.innerWidth, height: window.innerHeight};
    canvas.width = sizes.width;
    canvas.height = sizes.height;
    const groundLevel = 475;
    const ctx = canvas.getContext('2d');


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

    const keys = {
        a: {pressed: false},
        d: {pressed: false},
        w: {pressed: false},
        ArrowLeft: {pressed: false},
        ArrowRight: {pressed: false},
        ArrowUp: {pressed: false}
    }

    let missle = new Missle({
        position: {
            x: 200,
            y: groundLevel
        },
        ctx: ctx
    })

    function animate() {
        window.requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.update();
        missle.update();

        if (player.missle) player.missle.update();

        for (let bubble of bubbles) {
            bubble.update();
            missle.collided(bubble);

            if (player.missle && (player.missle.collided(bubble) ||
                player.missle.y <= 0)) {
                player.missle = null;
            }

            if (player.killedBy(bubble)) {
                player.numLives -= 1;
            }

            if (player.missle && player.missle.collided(bubble)) {
                if (bubble.children.length === 0) {
                    bubble.split();
                    for (let child of bubble.children) {
                        bubbles.push(child);
                    }
                    bubbles = bubbles.filter((bub) => bub !== bubble);
                    console.log(bubble);
                }
            }
        }
   
        player.velocity.x = 0;
        if (keys.a.pressed && player.lastKey === 'a') {
            player.velocity.x = -2;
        } else if (keys.ArrowLeft.pressed && player.lastKey === 'ArrowLeft') {
            player.velocity.x = -2;
        } else if (keys.d.pressed && player.lastKey === 'd') {
            player.velocity.x = 2;
        } else if (keys.ArrowRight.pressed && player.lastKey === 'ArrowRight') {
            player.velocity.x = 2;
        }
    }
    
    animate();
    

    window.addEventListener('keydown', (event) => {
        switch(event.key) {
            case 'd': 
                keys.d.pressed = true;
                player.lastKey = 'd';
                break;
            case 'a':
                keys.a.pressed = true;
                player.lastKey = 'a';
                break;
            case 'w':
                keys.w.pressed = true;
                player.attack({
                    x: player.position.x,
                    y: player.position.y
                });
                break;
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = true;
                player.lastKey = 'ArrowLeft';
                break;
            case 'ArrowRight':
                keys.ArrowRight.pressed = true;
                player.lastKey = 'ArrowRight';
                break;
            case 'ArrowUp':
                keys.ArrowUp.pressed = true;
                player.attack({
                    x: player.position.x,
                    y: player.position.y
                });
                break;
        }
    })

    window.addEventListener('keyup', (event) => {
        switch (event.key) {
            case 'a':
                keys.a.pressed = false;
                break;
            case 'd':
                keys.d.pressed = false;
                break;
            case 'w':
                keys.w.pressed = false;
                break;
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = false;
                break;
            case 'ArrowRight':
                keys.ArrowRight.pressed = false;
                break;
            case 'ArrowUp':
                keys.ArrowUp.pressed = false;
                break;
        }
    })
  
})
