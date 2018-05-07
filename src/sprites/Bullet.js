import GameSprite from './GameSprite.js';

export default class Bullet extends GameSprite {

    constructor(scene, x, y, key) {
        super(scene, x, y, key);
        this.setScale(1.5);
        this.setDepth(2);
        this.body.allowGravity = false;
        this.fireVelocity = 600;
    }

    hitWall() {
        this.kill();
    }

    kill() {
        this.setVisible(false);
        this.scene.spriteGroups.bullets.kill(this);
    }
};
