import Sprite from './sprite';
import heart from '../img/heart.png';

export default class Heart extends Sprite {
    constructor({position, ctx}) {
        super({ctx: ctx, position: position, imageSrc: heart, framesMax: 4, scale: 0.12})
        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 8;
    }
}