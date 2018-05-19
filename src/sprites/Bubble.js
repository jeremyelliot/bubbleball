//import Phaser from '../phaser-arcade-physics.min.js';
import GameSprite from './GameSprite.js';

export default class Bubble extends GameSprite {

    constructor(scene, x, y, key) {
        super(scene, x, y, key);
        this.body.allowGravity = false;
        this.points = 15;
    }

    hitPlayer(player) {
        this.setVisible(false);
        this.setActive(false);
        var droplet = this.scene.spriteGroups.droplets.getFirstDead(true);
        droplet.setDepth(2)
                .setActive(true)
                .setVisible(true)
                .setPosition(
                        this.body.x + this.displayWidth / 2,
                        this.body.y + this.displayHeight / 2
                        )
                .setCollideWorldBounds(true);
        this.scene.scoreboard.addPoints(this.points);
        this.kill();
    }

    kill() {
        this.scene.sound.playAudioSprite('sfx', 'pop');
        this.scene.spriteGroups.bubbles.remove(this, true);
        this.destroy();
    }

};