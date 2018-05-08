import Phaser from '../phaser-arcade-physics.min.js';

export default class GameSprite extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, key) {
        super(scene, x, y, key);
        scene.add.existing(this);
        scene.physics.add.existing(this);
    }
}