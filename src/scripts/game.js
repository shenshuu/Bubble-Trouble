export default class Game {
    constructor(player, enemies, canvas, ctx) {
        this.player = player;
        this.enemies = enemies;
        this.canvas = canvas;
        this.ctx = ctx;
    }

    isGameOver() {
        return this.player.numLives === 0;
    }

    
}