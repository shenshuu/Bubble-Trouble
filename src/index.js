import Game from './scripts/game';
import Heart from './scripts/heart';

document.addEventListener("DOMContentLoaded", () => {
    
    const canvas = document.querySelector('.game-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    let game = new Game(canvas, ctx);
    let heart = new Heart(ctx);
    
    function animate() {
        window.requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (game.isGameOver()) {
            // alert('Would you like to play again?');
            // PROMPT USER WITH A SCREEN ASKING THEM IF THEY WOULD LIKE TO PLAY AGAIN 
            console.log('ouch');
        }
        heart.updateHorizontal();
        game.update();
        if (game.player.missile && !game.player.missile.reseted) {
            game.player.missile.update();
        }

         if (game.player.missile && game.player.missile.position.y <= 50) {
            game.player.missile = null;
        }

        for (let enemy of game.enemies) {
            enemy.update();
            if (game.player.killedBy(enemy)) {
                console.log('dead');
            }

            if (game.player.missile && game.player.missile.collided(enemy)) {
                game.player.missile = null;
                if (enemy.children.length === 0) {
                    enemy.split();
                    for (let child of enemy.children) {
                        game.enemies.push(child);
                    }
                    game.enemies = game.enemies.filter((bub) => bub !== enemy);
                }
            }
        }
   
        game.player.velocity = 0;
        game.player.framesMax = 6;
        if (game.player.lastKey === 'd') {
            game.player.image = game.player.sprites.idleRight.image;
        } else {
            game.player.image = game.player.sprites.idleLeft.image;
        }

        if (game.player.keys.a.pressed && game.player.lastKey === 'a' ||
        game.player.keys.ArrowLeft.pressed && game.player.lastKey === 'ArrowLeft') {
            game.player.image = game.player.sprites.runLeft.image;
            game.player.framesMax = 10;
            game.player.velocity = -3.2;
        } else if (game.player.keys.d.pressed && game.player.lastKey === 'd' ||
        game.player.keys.ArrowRight.pressed && game.player.lastKey === 'ArrowRight') {
            game.player.image = game.player.sprites.runRight.image;
            game.player.framesMax = 10;
            game.player.velocity = 3.2;
        } 
    }
    
    animate();

  
})
