/*
 * Base class for game levels
 */
import Phaser from '../phaser-arcade-physics.min.js';
import * as Sprites from '../sprites/Sprites.js';

export default class GameLevel extends Phaser.Scene {

    constructor(key) {
        super({
            key: key,
            physics: {
                system: 'arcade',
                gravity: {y: 500}
            }
        });
        this.player;
        this.walls;
        this.boosters;
        this.droplets;
        this.bullets;
        this.mines;
        this.audioSprite;
        this.score;
        this.cursorkeys;
        this.fireButton;
        this.timeLastFired = 0;
        this.timeLastBoosted = 0;
        this.minePositions;
        this.exitPoints;
        this.spriteGroups;
    }

    gameOver(player) {
        var image = this.add.sprite(800, 300, 'game-over')
                .setScrollFactor(0);
        // create fade-in for 'game-over'
        this.tweens.add({
            targets: image,
            x: 400,
            ease: 'Linear',
            duration: 600,
            repeat: 0
        });
    }

    levelCompleted() {
        var player = this.player;
        console.log('levelCompleted');
        var image = this.add.sprite(0, 300, 'level-completed')
                .setScrollFactor(0);
        this.tweens.add({
            targets: image,
            x: 400,
            ease: 'Linear',
            duration: 600,
            repeat: 0,
            onComplete: function () {
                player.kill(false).destroy();
            }
        });
    }

    preload() {
        this.load.image('background', 'assets/background-nebula.jpg');
        this.load.image('bubbleball', 'assets/football-bw.png');
        this.load.image('wall', 'assets/wall.png');
        this.load.image('booster', 'assets/booster1.png');
        this.load.image('droplet', 'assets/droplet.png');
        this.load.image('bubble', 'assets/bubble.png');
        this.load.image('bullet', 'assets/bullet5.png');
        this.load.image('game-over', 'assets/game-over.png');
        this.load.image('pipe', 'assets/pipe.png');
        this.load.image('pipe-overlay', 'assets/pipe-overlay.png');
        this.load.image('level-completed', 'assets/level-completed.png');

        this.load.spritesheet('mine', 'assets/mine.png', {frameWidth: 64, frameHeight: 64, endFrame: 15});
        this.load.spritesheet('explosion', 'assets/explosion.png', {frameWidth: 64, frameHeight: 64, endFrame: 24});

        this.load.audioSprite('sfx', 'assets/sfx_1.3.ogg', 'assets/sfx.json');

    }
}