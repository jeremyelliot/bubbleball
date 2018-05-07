import Phaser from '../phaser-arcade-physics.js';
import GameSprite from './GameSprite.js';

export default class Booster extends GameSprite {

    constructor(scene, x, y, key) {
        super(scene, x, y, key);
        this.body.allowGravity = false;
//        this.body.immovable = true;
        this.timeLastBoosted = 0;
    }

    hitPlayer(player) {
        if (this.body.touching.up
                && !(this.body.touching.left || this.body.touching.right)
                && player.body.velocity.y < 0
                && this.scene.time.now > this.timeLastBoosted + 100
                ) {
            this.scene.sound.playAudioSprite('sfx', 'booster');
            player.setVelocityX(player.body.angularVelocity / 2);
            var newVX = player.body.velocity.x * 1.2;
            var newVY = player.body.velocity.y * 1.2;
            var vMax = 730;
            player.setVelocityX(Phaser.Math.Clamp(newVX, -vMax, vMax));
            player.setVelocityY(Phaser.Math.Clamp(newVY, -vMax, vMax));
            this.timeLastBoosted = this.scene.time.now;
        }
    }
}