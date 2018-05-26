/*
 * Base class for game levels
 */
import Phaser from '../phaser-arcade-physics.min.js';
import Scoreboard from '../Scoreboard.js';
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
        this.audioSprite;
        this.scoreboard;
        this.cursorkeys;
        this.fireButton;
        this.timeLastFired = 0;
        this.minePositions;
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
        var score = this.scoreboard.getScore();
        var scene = this.scene;
        var player = this.player;
        var nextLevel = this.nextLevel;
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
                            scene.launch(nextLevel, {
                                score: score
                            });
                        }
                    }
                }
            ]
        });
    }

    create() {
        this.scoreboard = new Scoreboard(this, 20, 20);
        this.scoreboard.addPoints(0);
    }

    createColliders(player, groups) {
        var scene = this;
        // calls hitWorldBounds() on any bodies that are listening for 'worldbounds'
        this.physics.world.on("worldbounds", function (body) {
            if (body.gameObject.hitWorldBounds)
                body.gameObject.hitWorldBounds(body);
        });
        // there are always walls and bullets
        this.physics.add.collider(player, groups.walls, function (player, wall) {
            wall.hitPlayer(player);
        });
        this.physics.add.collider(groups.bullets, groups.walls, function (bullet, wall) {
            bullet.hitWall();
        });
        // these things may or may not be present
        if (groups.platforms) {
            this.physics.add.collider(player, groups.platforms, function (player, platform) {
                platform.hitPlayer(player);
            });
        }
        if (groups.boosters) {
            this.physics.add.collider(player, groups.boosters, function (player, booster) {
                booster.hitPlayer(player);
            });
        }
        if (groups.mines) {
            this.physics.add.collider(player, groups.mines, function (player, mine) {
                mine.hitPlayer(player);
            }, null, this);
            this.physics.add.collider(groups.bullets, groups.mines, function (bullet, mine) {
                mine.hitBullet(bullet);
            });
        }
        if (groups.bubbles) {

            this.physics.add.overlap(player, groups.bubbles, function (player, bubble) {
                bubble.hitPlayer(player);
            });
        }
        if (groups.droplets) {

            this.physics.add.overlap(player, groups.droplets, this.collectDroplet,
                    null, this);
        }
        this.physics.add.overlap(groups.exitPoints, player, function (player, exitPoint) {
            exitPoint.disableBody();
            player.setCollideWorldBounds(false);
            player.onWorldBounds = false;
            scene.tweens.add({
                targets: player,
                x: exitPoint.x,
                y: exitPoint.y,
                duration: 400,
                onComplete: scene.levelCompleted()
            });
        });
    }
}
