import GameSprite from './GameSprite.js';

export default class Droplet extends GameSprite {

    constructor(scene, x, y, key) {
        super(scene, x, y, key);
//        scene.add.existing(this);
//        scene.physics.add.existing(this);
        this.body.allowGravity = true;
        this.setDepth(2);
        this.setActive(false);
        this.setVisible(false);
        this.body.collideWorldBounds = true;
        this.body.onWorldBounds = true;
    }

    hitWorldBounds(body) {
        this.scene.spriteGroups.droplets.remove(this, true);
        this.destroy();
    }
};