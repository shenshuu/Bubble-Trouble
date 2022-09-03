import Sprite from './sprite';
import heart from '../img/heart.png';

export default class Heart extends Sprite {
    constructor({position, ctx}) {
        // let position = {x: 150, y: 540};
        super({ctx: ctx, position: position, imageSrc: heart, framesMax: 4, scale: 0.12})
        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 8;
    }
}