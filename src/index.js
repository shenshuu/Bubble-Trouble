import Player from './scripts/player';
import Bubble from './scripts/bubble';
document.addEventListener("DOMContentLoaded", () => {
    
    const canvas = document.querySelector('.game-canvas');
    const sizes = {width: window.innerWidth, height: window.innerHeight};
    canvas.width = sizes.width;
    canvas.height = sizes.height;
    const ctx = canvas.getContext('2d');
    

    let player = new Player({
        position: {
            x: canvas.width / 2 - 75,
            y: canvas.height - 150
        },
        velocity: {x: 0, y: 0},
        ctx: ctx
    });

    let bubble = new Bubble({
        position: {
            x: 200,
            y: 200, 
        },
        velocity: {
            x: 0, 
            y: 0,
        },
        radius: 30,
        ctx: ctx,
    });

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
        bubble.draw();

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
        console.log(event.key);
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
                player.lastKey = 'w';
                break;
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = true;
                player.lastKey = 'ArrowLeft';
                break;
            case 'ArrowRight':
                keys.ArrowRight.pressed = true;
                player.lastKey = 'ArrowRight';
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
        }
    })
  
})
