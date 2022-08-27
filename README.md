# Froggy-Bash
## [Check out the game here](https://shenshuu.github.io/Froggy-Bash/)

## **Background**
Bubble Trouble is a 2D shooter that was first introduced in the formerly popular flash games website, Miniclip.com. 
The rules of Bubble Trouble are quite simple. There are multiple levels in the game, each with a timer and a fixed number
of bubbles. During gameplay, the bubbles in each level bounce around the room and split into two smaller bubbles if 
the player manages to attack them. The bubbles eventually disapear when they get small enough. The player beats a level if 
they manage to pop all the bubbles before the timer in the level runs out without getting hit. 


Froggy Bash is a game I created that is heavily inspired by Bubble Trouble. The premise of the game is quite similiar to 
Bubble Trouble but with my own personal twist. Instead of having fixed bubbles at certain points for levels, the game 
will randomly spawn frogs of random sizes every 7 seconds with a 60% probability. The player wins the game by wiping 
out all the frogs on the map before the timer runs out without losing all of their lives. 


## **Functionality & MVPs**
With Froggy Bash, users will be able to:

*Move left and right with character*
*Play/pause game music*
*Shoot projectiles*
*Interact with frogs by shooting them*

In addition, this project will include:

*An About modal describing the background and rules of the game*
*A production README*

## **Wireframes**
<img width="1025" alt="Screen Shot 2022-07-28 at 2 44 08 PM" src="https://user-images.githubusercontent.com/101607500/181614529-c344f6c4-ad7d-45d1-8d3d-0e8dccb51387.png">

**Wireframe**

Nav links include links to this project's Github repo, my LinkedIn, and the About modal.
Game controls will include Left, Right, and Attack buttons.

## **Technologies, Libraries, APIs**
This project will be implemented with the following technologies:

The Canvas API to render the player, enemies, and map 
Webpack and Babel to bundle and transpile the source JavaScript code
npm to manage project dependencies
Implementation Timeline

NB:

Monday: Dedicate this day toward implementing the underlying logic of Froggy Bash. Ensure that game objects are rendering and collisions are being detected. 

Tuesday: If I didn't get to it already, add sprites for game objects. Make sure user projectiles detect collision with frogs. Then, focus on multiplying frogs upon projectile collision.

Wednesday: Finish implementing user controls, game logic and focus on styling, as well as implementing the different color schemes and nav links. If time, start on bonuses.

Thursday Morning: Deploy to GitHub pages. If time, rewrite this proposal as a production README.

## **Bonus features**
Animation for player projectile 
