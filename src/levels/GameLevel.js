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
        this.nextLevel = 'Level01';
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
        var scene = this.scene;
        var player = this.player;
        var nextLevel = this.nextLevel;
        console.log('levelCompleted');
        var image = this.add.sprite(0, 300, 'level-completed')
                .setScrollFactor(0);
        var timeline = this.tweens.timeline({
            tweens: [
                {
                    targets: image,
                    x: 400,
                    ease: 'Sine.easeOut',
                    duration: 600,
                    repeat: 0,
                    onComplete: function () {
                        player.kill(false).destroy();
                    }
                },
                {
                    targets: image,
                    y: 300,
                    ease: 'Linear',
                    duration: 1000,
                    repeat: 0

                },
                {
                    targets: image,
                    y: 800,
                    ease: 'Sine.easeIn',
                    duration: 1000,
                    repeat: 0,
                    onComplete: function () {
                        if (nextLevel) {
                            scene.stop();
                            scene.launch(nextLevel);
                        }
                    }
                }
            ]
        });
    }

}
