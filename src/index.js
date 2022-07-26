import Player from './scripts/player';
import Bubble from './scripts/bubble';
import Sprite from './scripts/sprite';

document.addEventListener("DOMContentLoaded", () => {
    
    const canvas = document.querySelector('.game-canvas');
    const sizes = {width: window.innerWidth, height: window.innerHeight};
    canvas.width = sizes.width;
    canvas.height = sizes.height;
    const ctx = canvas.getContext('2d');
    
    const background = new Sprite({
        position: {x: 0, y: 0},
        imageSrc: '../img/bulkhead-wall-files/bulkhead-wallsx1.png',
        canvas: canvas
    })
    console.log(background);

    let player = new Player({
        position: {
            x: canvas.width / 2 - 75,
            y: canvas.height - 150
        },
        velocity: {
            x: 2, 
            y: -2
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

    function animate() {
        window.requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.update();

        for (let bubble of bubbles) {
            bubble.update();
            // player.die(bubble);
            if (player.collided(bubble)) {
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
                player.attack();
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
                player.attack();
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
