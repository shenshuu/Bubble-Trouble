// export default class Player {
//     constructor(canvas, ctx) {
//         this.dim = {width: 100, height: 150};
//         this.position = {x: canvas.width / 2 - this.dim.width / 2, y: canvas.height - this.dim.height};
//         this.velocity = 0
//         this.canvas = canvas;
//         this.ctx = ctx;
//         this.init();
//     }

//     drawPlayer() {
//         this.ctx.fillStyle = 'green';
//         this.ctx.fillRect(this.position.x, this.position.y, this.dim.width, this.dim.height);
//     }

//     update() {
//         this.drawPlayer();
//         this.position.x += this.velocity;
//     }

//     animate() {
//         requestAnimationFrame(animate)
//         this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//         this.update();
//     }

//     init() {

//         let keys = {
//             left: {pressed: false},
//             right: {pressed: false}
//         }

//         window.addEventListener('keydown', (e) => {
//             let key = e.key 
//             switch(key) {
//                 case 'a': 
//                     keys.left.pressed = true;
//                 case 'd': 
//                     keys.right.pressed = true;
//             }
//             if (keys.left.pressed) {

//                 this.velocity = -1;
//                 this.animate();
//                 keys.right.pressed = false;

//             } else if (keys.right.pressed) {

//                 this.velocity = 1;
//                 this.animate();
//                 keys.left.pressed = false;
//             }
//         })
        
//         window.addEventListener('keyup', () => {
//             console.log(keys);
//             keys.left.pressed = false;
//             keys.right.pressed = false;
//         })
//     }
// }

export default class Player {
    constructor({position, velocity, ctx}) {
        this.position = position;
        this.velocity = velocity;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.position.x, this.position.y, 50, 150);
    }

    update() {
        this.draw();
        if (this.position.x + this.velocity.x + 100 >= window.innerWidth) 
            this.velocity.x = 0;
        this.position.x += this.velocity.x;
    }
}

