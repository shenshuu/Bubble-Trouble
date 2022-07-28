import Sprite from './sprite';
import heart from '../img/heart.png';

export default class Heart extends Sprite {
    constructor(ctx) {
        let position = {x: 150, y: 540};
        super({ctx, position, imageSrc: heart, framesMax: 4, scale: 0.5})
        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 8;
    }
}