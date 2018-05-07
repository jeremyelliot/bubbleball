import GameSprite from './GameSprite.js';

export default class Mine extends GameSprite {

    constructor(scene, x, y, key) {
        super(scene, x, y, key);
        this.body.allowGravity = false;
        this.body.immovable = true;
    }

    hitPlayer(player) {
        player.kill();
    }

    hitBullet(bullet) {
        var bubble = this.scene.spriteGroups.bubbles.get(true);
        if (bubble) {
            bubble.setDepth(2);
            bubble.setActive(true);
            bubble.setVisible(true);
            bubble.setPosition(
                    this.body.x + this.displayWidth / 2,
                    this.body.y + this.displayHeight / 2
                    );
        }
        bullet.kill();
        this.kill();
    }

    kill() {
        this.scene.sound.playAudioSprite('sfx', 'explode-burst');
        this.setActive(false).destroy();
    }
}