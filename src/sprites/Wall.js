import GameSprite from './GameSprite.js';

export default class Wall extends GameSprite {

    constructor(scene, x, y, key) {
        super(scene, x, y, key);
        this.body.allowGravity = false;
        this.body.immovable = true;
    }

    hitPlayer(player) {
        if (player.body.touching.left || player.body.touching.right) {
            // change direction of rotation
            player.setAngularVelocity(player.body.angularVelocity * -1);
        } else
        if (player.body.touching.up || player.body.touching.down) {
            player.setVelocityX(player.body.angularVelocity / 2);
            this.scene.sound.playAudioSprite('sfx', 'bounce');
        }
    }
    
}

