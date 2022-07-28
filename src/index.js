import Bubble from './scripts/bubble';
import Game from './scripts/game';
// import Missile from './scripts/missile';

document.addEventListener("DOMContentLoaded", () => {
    
    const canvas = document.querySelector('.game-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    const gameMusic = document.querySelector('.game-music');

    const start = document.querySelector('.start-btn button');
    const startScreen = document.getElementsByClassName('modal');
    let game = new Game(canvas, ctx);
    
    start.addEventListener('click', () => {
        setInterval(() => {
            if (Math.random() < 0.6) {
                let bubble = new Bubble({
                    position: {
                        x: Math.random() * (1100 - 200) + 200,
                        y: 200, 
                    },
                    velocity: {
                        x: (Math.random() < 0.5) ? -3 : 3, 
                        y: Math.random() * (5 - 3) + 3,
                    },
                    radius: Math.random() * (40 - 15) + 15,
                    ctx: ctx,
                    sprites: game.enemies[0].sprites,
                });
                game.enemies.push(bubble);
            }
        }, 7500)
        
        startScreen[0].style.zIndex = -10000;
        gameMusic.play();
        animate();
    });

    // let missile = new Missile({
    //     position: {
    //         x: 300,
    //         y: 300
    //     },
    //     ctx: ctx
    // });
    

    function animate() {
        window.requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (game.isGameOver()) {
            gameMusic.pause();
            alert('Would you like to play again?');
            game = new Game(canvas, ctx);
            gameMusic.play();
        }

        if (game.enemies.length === 0) {
            gameMusic.pause();
            alert('You Won!');
            let game = new Game(canvas, ctx);
            gameMusic.play();
        }
        
        // missile.update();


        game.update();
        if (game.player.missile && !game.player.missile.reseted) {
            game.player.missile.update();
        }

         if (game.player.missile && game.player.missile.position.y <= 50) {
            game.player.missile = null;
        }

        for (let enemy of game.enemies) {

            if (enemy.velocity.x <= 0) {
                enemy.image = enemy.sprites.frogLeft.image; 
                enemy.offset = {
                    x: enemy.radius * 5,
                    y: enemy.radius * 6
                };
            } else {
                enemy.image = enemy.sprites.frogRight.image;
                enemy.offset = {
                    x: enemy.radius * 3.3, 
                    y: enemy.radius * 6
                };
            }

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

  
})
