import Player from './scripts/player';
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
        velocity: {
            x: 0,
            y: 0
        },
        ctx: ctx
    });

    const keys = {
        a: {pressed: false},
        d: {pressed: false} 
    }

    let lastKey = "";

    function animate() {
        window.requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.update(canvas);

        player.velocity.x = 0;
        if (keys.a.pressed) {
            player.velocity.x = -1;
        } else if (keys.d.pressed) {
            player.velocity.x = 1;
        }
    }
    
    animate();
    

    window.addEventListener('keydown', (event) => {
        console.log(event.key);
        switch(event.key) {
            case 'd': 
                keys.d.pressed = true;
                lastKey = 'd';
                break;
            case 'a':
                keys.a.pressed = true;
                lastKey = 'a';
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
        }
    })
  
})
