import Phaser from '../phaser-arcade-physics.min.js';
import * as Sprites from '../sprites/Sprites.js';
import GameLevel from './GameLevel.js';

export default class Level02 extends GameLevel {

    constructor(key) {
        super(key);
        this.minePositions = [
            [400, 150],
            [500, 200],
            [600, 250],
            [700, 300],
            [800, 350],
            [900, 400],
            [1000, 450],
            [1000, 150],
            [400, 250],
            [500, 300],
            [600, 350],
            [700, 400],
            [800, 450],
            [900, 500],
            [1000, 550]
        ];
        this.wallPositions = [
            [0, 100],
            [0, 300],
            [0, 500],
            [1586, 100],
            [1586, 300],
            [1586, 500]
        ];
        this.boosterPositions = [
            [1400, 600]
        ];
        this.platformPositions = [
            [900, 450],
            [800, 400],
            [700, 350],
            [600, 300],
            [500, 250],
            [400, 200]
        ];
        this.nextLevel = 'IntroScene';
    }

    createPlayer() {
        var player = new Sprites.Player(this, 100, 400, 'bubbleball');
        return player;
    }

    createWalls() {
        var walls = this.physics.add.group({
            classType: Sprites.Wall,
            defaultKey: 'wall'
        });
        for (let position of this.wallPositions) {
            walls.create(position[0], position[1], 'wall').body.immovable = true;
        }
        return walls;
    }

    createPlatforms() {
        var platforms = this.physics.add.group({
            classType: Sprites.Wall,
            defaultKey: 'platform',
            frameQuantity: 8
        });
        for (let position of this.platformPositions) {
            platforms.create(position[0], position[1], 'platform')
                    .body.immovable = true;
        }
        return platforms;
    }

    createBoosters() {
        var boosters = this.physics.add.group({
            classType: Sprites.Booster,
            defaultKey: 'booster'
        });
        for (let position of this.boosterPositions)
            boosters.create(position[0], position[1], 'booster')
                    .body.immovable = true;
        return boosters;
    }

    createMines() {
        var mines = this.physics.add.group({
            classType: Sprites.Mine,
            defaultKey: 'mine'
        });
        for (let i = 0; i < this.minePositions.length; i++) {
            mines.create(
                    this.minePositions[i][0],
                    this.minePositions[i][1],
                    'mine')
                    .setCircle(32)
                    .body.immovable = true;
        }
        return mines;
    }

    createBubbles() {
        var bubbles = this.physics.add.group({
            classType: Sprites.Bubble,
            defaultKey: 'bubble',
            maxSize: 80
        });
        return bubbles;
    }

    createDroplets() {
        var droplets = this.physics.add.group({
            classType: Sprites.Droplet,
            defaultKey: 'droplet',
            maxSize: 80
        });
        return droplets;
    }

    createBullets() {
        var bullets = this.physics.add.group({
            classType: Sprites.Bullet,
            defaultKey: 'bullet',
            maxSize: 30
        });
        bullets.setDepth(this.player.z + 1);
        return bullets;
    }

    createExitPoints() {
        var exitPosition = {x: 1600, y: 100};
        var exitPoints = this.physics.add.staticGroup();
        this.add.image(exitPosition.x, exitPosition.y, 'pipe-overlay')
                .setDepth(110);
        exitPoints.create(exitPosition.x, exitPosition.y, 'pipe');
        return exitPoints;
    }

    createColliders(player, groups) {
        var scene = this;
        // calls hitWorldBounds() on any bodies that are listening for 'worldbounds'
        this.physics.world.on("worldbounds", function (body) {
            if (body.gameObject.hitWorldBounds)
                body.gameObject.hitWorldBounds(body);
        });
        this.physics.add.collider(player, groups.walls, function (player, wall) {
            wall.hitPlayer(player);
        });
        this.physics.add.collider(player, groups.platforms, function (player, platform) {
            platform.hitPlayer(player);
        });
        this.physics.add.collider(player, groups.boosters, function (player, booster) {
            booster.hitPlayer(player);
        });
        this.physics.add.collider(player, groups.mines, function (player, mine) {
            mine.hitPlayer(player);
        }, null, this);
        this.physics.add.collider(groups.bullets, groups.mines, function (bullet, mine) {
            mine.hitBullet(bullet);
        });
        this.physics.add.overlap(player, groups.bubbles, function (player, bubble) {
            bubble.hitPlayer(player);
        });
        this.physics.add.overlap(player, groups.droplets, this.collectDroplet,
                null, this);
        this.physics.add.collider(groups.bullets, groups.walls, function (bullet, wall) {
            bullet.hitWall();
        });
        this.physics.add.overlap(groups.exitPoints, player, function (player, exitPoint) {
            exitPoint.disableBody();
            player.setCollideWorldBounds(false);
            player.onWorldBounds = false;
            scene.tweens.add({
                targets: player,
                x: 1650,
                y: 100,
                duration: 400,
                onComplete: scene.levelCompleted()
            });
        });
    }

    create() {
        this.physics.world.setBounds(0, 0, 1600, 600);
        this.add.tileSprite(400, 300, 1600, 600, 'background')
                .setScrollFactor(0.2);
        this.sound.addAudioSprite('sfx');

        // create sprite grounds
        this.player = this.createPlayer();
        this.spriteGroups = {
            walls: this.createWalls(),
            platforms: this.createPlatforms(),
            bullets: this.createBullets(),
            boosters: this.createBoosters(),
            droplets: this.createDroplets(),
            mines: this.createMines(),
            bubbles: this.createBubbles(),
            exitPoints: this.createExitPoints()
        };
        this.createColliders(this.player, this.spriteGroups);

        //start mine animation
        this.anims.staggerPlay('mine.rotate', this.spriteGroups.mines.getChildren(), 0.13);

        // set up camera
        this.cameras.main.setBounds(0, 0, 1600, 600);
        this.cameras.main.startFollow(this.player);

        // get input keys
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.fireButton = this.input.keyboard.addKey(
                Phaser.Input.Keyboard.KeyCodes.SPACE
                );
    }

    update(time) {
        if (this.player.isAlive()) {
            var angularVelocityChange = 15;
            if (this.timeLastFired === 0) {
                this.timeLastFired = time - 10;
            }
            if (this.cursorKeys.left.isDown) {
                this.player.setAngularVelocity(this.player.body.angularVelocity - angularVelocityChange);
            }
            if (this.cursorKeys.right.isDown) {
                this.player.setAngularVelocity(this.player.body.angularVelocity + angularVelocityChange);
            }
            if (this.fireButton.isDown && time > this.timeLastFired) {
                this.player.fireBullet();
                this.timeLastFired = time + 50;
            }
        }
    }

}