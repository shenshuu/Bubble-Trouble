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
