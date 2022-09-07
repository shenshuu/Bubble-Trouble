# Froggy-Bash
## [Check out the game here](https://shenshuu.github.io/Froggy-Bash/)

## **Background**
Bubble Trouble is a 2D shooter that was first introduced in the formerly popular flash games website, Miniclip.com. 
The rules of Bubble Trouble are quite simple. There are multiple levels in the game, each with a timer and a fixed number
of bubbles. During gameplay, the bubbles in each level bounce around the room and split into two smaller bubbles if 
the player manages to attack them. The bubbles then eventually disapear when they get small enough.

Froggy Bash is a game I created that is inspired by Bubble Trouble. In order to win, the player must wipe out all the frogs on the map before the timer ends without getting hit. Upon winning the game, the player will have a choice to make the game "spicy" by randomly spawning frogs of random sizes every 7 seconds with a 60% probability. 

![Alt Text](https://github.com/shenshuu/Froggy-Bash/blob/main/src/gifs/2022-09-06%2016.03.29.gif)

## **Functionality & MVPs**
With Froggy Bash, users will be able to:

* Move left and right with character
* Collide with other game entities
* Play and pause game music
* Shoot projectiles
* Interact with frogs by shooting them

## **Code Snippets**
To handle the enemy multiplication algorithm, I devised a splitting algorithm where two new enemies get pushed into an array that stores all the enemies still alive in the current game state. The size of the new enemies are then determined by multiplying the destroyed enemy's size by a constanct factor c where ```c = 1 / 1.5```.
```js
split() {
        if (this.radius >= 5) {
            let e1 = new Enemy({
                position: {
                    x: this.position.x - 25,
                    y: this.position.y
                },
                velocity: {
                    x: this.velocity.x - 0.25,
                    y: this.velocity.y - 0.25
                },
                radius: this.radius / 1.5,
                ctx: this.ctx,
                sprites: this.sprites,
                canvas: this.canvas,
            })
            let e2 = new Enemy({
                position: {
                    x: this.position.x + 25,
                    y: this.position.y
                },
                velocity: {
                    x: -(this.velocity.x + 0.25),
                    y: this.velocity.y - 0.25
                },
                radius: this.radius / 1.5,
                ctx: this.ctx,
                sprites: this.sprites,
                canvas: this.canvas,
            })
            this.children.push(...[e1, e2]);
}

```

To check for projectile collision, I calculated and checked if the hit boxes for both the projectile and enemy were within a specific threshold. This simple function allowed for the core game functionality to be possible.
```js 
collided(ball) {
        if (ball.position.x - ball.radius <= this.position.x + this.width &&
            this.position.x <= ball.position.x + ball.radius &&
            ball.position.y + ball.radius <= this.position.y + this.height &&
            this.position.y <= ball.position.y + ball.radius) {
            this.hit = true;
            return true;
        } else {
            return false;
        }
}
```

One of the biggest challenges of this project was coming up with a way to allow the user to have exactly one projectile in the game state at a time. Through the use of null checks, I was able to incorporate the Singleton pattern for projectiles using null checks, effectively disabling the player from spamming the attack button. 
```js 
if (game.player.missile && !game.player.missile.reseted) {
            game.player.missile.update();
        }

         if (game.player.missile && game.player.missile.position.y <= 2.5) {
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

            if (game.player.missile && game.player.missile.collided(enemy)) {
                game.player.missile = null;
                if (enemy.children.length === 0) {
                    enemy.split();
                    for (let child of enemy.children) {
                        game.enemies.push(child);
                    }
                    game.enemies = game.enemies.filter((e) => e !== enemy);
                }
            }
        }
```
